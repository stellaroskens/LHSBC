import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { describe, it } from "node:test"
import { athleteSafety, familySupport, USBC_LINKS, USBC_RVP_CONTACT } from "../src/content/athleteSafety.ts"
import { COACH_CREDENTIALS, coachCredentialState } from "../src/lib/safety/coachCredentials.ts"

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8")
const NOW = new Date("2026-11-27T12:00:00Z")
const approved = { reviewedOn: "2026-11-20", expiresOn: "2027-08-31", publicationConsent: true as const }

describe("athlete safety page", () => {
  it("keeps the six approved steps, six resources, and six MAAPP episodes", () => {
    assert.equal(athleteSafety.steps.items.length, 6)
    assert.equal(athleteSafety.resources.links.length, 6)
    assert.equal(athleteSafety.videos.episodes.length, 6)
    assert.equal(athleteSafety.steps.items[4].notice, "Submitting an application does not mean you have been approved.")
    assert.equal(familySupport.cards.length, 4)
  })

  it("links only to official USBC, SafeSport, Congress, and YouTube addresses over HTTPS", () => {
    const allowed = /^https:\/\/(bowl\.com|apps1\.bowl\.com|images\.bowl\.com|uscenterforsafesport\.org|www\.congress\.gov|youtu\.be)\//
    const links = [
      ...Object.values(USBC_LINKS),
      ...athleteSafety.resources.links.map((link) => link.href),
      ...athleteSafety.videos.episodes.map((link) => link.href),
      ...athleteSafety.steps.items.flatMap((step) => (step.link ? [step.link.href] : [])),
    ]
    for (const href of links) assert.match(href, allowed, href)
    assert.equal(USBC_RVP_CONTACT.phoneHref, "tel:+18005142695,8955")
    assert.equal(USBC_RVP_CONTACT.email, "RVP@bowl.com")
  })

  it("keeps existing anchors and the reporting section on /volunteer", () => {
    const page = read("../src/pages/Volunteer.tsx")
    assert.match(page, /id="volunteer-background-checks"/)
    assert.match(page, /id="volunteer-transport-heading"/)
    assert.match(page, /id="report-a-concern"/)
    assert.match(page, /Start Your Background Check/)
    assert.match(page, /Verify a Registered Volunteer/)
  })

  it("does not claim the transportation directory is available", () => {
    assert.equal(athleteSafety.directory.status, "Not yet available")
    assert.ok(athleteSafety.directory.paragraphs.some((p) => p.includes("Until this feature becomes available")))
  })

  it("removes Sterling Volunteers from active public content", () => {
    for (const path of [
      "../src/content/published/siteContent.json",
      "../src/pages/Volunteer.tsx",
      "../src/pages/OurClub.tsx",
      "../src/content/searchIndex.ts",
      "../src/content/site.ts",
    ]) {
      assert.equal(/sterling/i.test(read(path)), false, path)
    }
  })

  it("places Families Supporting Families after How to Join on Our Club", () => {
    const page = read("../src/pages/OurClub.tsx")
    const join = page.indexOf('aria-labelledby="how-to-join"')
    const families = page.indexOf('id="families-supporting-families"')
    const coachesSection = page.indexOf('id="coaches"')
    assert.ok(join > 0 && families > join && coachesSection > families)
    assert.match(page, /to="\/volunteer"/)
    assert.match(page, /to="\/contact"/)
  })
})

describe("coach credentials", () => {
  it("publishes no credentials for the current placeholder coaches", () => {
    for (const record of Object.values(COACH_CREDENTIALS)) assert.equal(record, null)
    assert.deepEqual(coachCredentialState(approved, "Coach information to be confirmed", NOW), { status: "unverified" })
  })

  it("treats missing review data or consent as pending", () => {
    assert.deepEqual(coachCredentialState(null, "Pat Example", NOW), { status: "unverified" })
    assert.deepEqual(
      coachCredentialState({ ...approved, publicationConsent: false as unknown as true }, "Pat Example", NOW),
      { status: "unverified" },
    )
    assert.deepEqual(coachCredentialState({ ...approved, reviewedOn: "2026-13-01" }, "Pat Example", NOW), { status: "unverified" })
    assert.deepEqual(coachCredentialState({ ...approved, reviewedOn: "2026-12-01" }, "Pat Example", NOW), { status: "unverified" })
  })

  it("shows verified only while the credential is current", () => {
    const verified = coachCredentialState(approved, "Pat Example", NOW)
    assert.equal(verified.status, "verified")
    assert.deepEqual(coachCredentialState({ ...approved, expiresOn: "2026-11-26" }, "Pat Example", NOW), {
      status: "expired",
      expiresOn: "2026-11-26",
    })
  })

  it("only accepts local credential images", () => {
    const remote = coachCredentialState({ ...approved, imageSrc: "https://example.com/card.png" }, "Pat Example", NOW)
    assert.equal(remote.status === "verified" && remote.imageSrc, null)
    const local = coachCredentialState({ ...approved, imageSrc: "/images/coaches/credential.png" }, "Pat Example", NOW)
    assert.equal(local.status === "verified" && local.imageSrc, "/images/coaches/credential.png")
  })
})

describe("security boundaries for this phase", () => {
  it("adds no family role, database, or private directory route", () => {
    assert.equal(/guardian|family/i.test(read("../src/lib/auth/roles.ts")), false)
    const app = read("../src/App.tsx")
    assert.equal(app.includes('allow={["family"'), false)
    assert.equal(/transportation-directory|volunteer-directory/.test(app), false)
    const pkg = JSON.parse(read("../package.json")) as { dependencies: Record<string, string> }
    assert.deepEqual(Object.keys(pkg.dependencies).sort(), [
      "@netlify/functions",
      "@netlify/identity",
      "react",
      "react-dom",
      "react-router-dom",
    ])
  })
})
