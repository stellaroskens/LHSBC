import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { describe, it } from "node:test"
import { parseSiteContent, validateSiteContent } from "../src/lib/content/siteContent.ts"

const published = JSON.parse(
  readFileSync(new URL("../src/content/published/siteContent.json", import.meta.url), "utf8"),
) as unknown

describe("published site content", () => {
  it("validates the checked-in published content", () => {
    assert.deepEqual(validateSiteContent(published), [])
    const content = parseSiteContent(published)
    assert.equal(content.teamGearShop.name, "BSN SPORTS")
    assert.equal("sterlingVolunteerInvitationUrl" in content, false)
  })

  it("rejects missing venue references", () => {
    const broken = structuredClone(published) as {
      practiceTournaments: { venueId: string; id: string; name: string; month: number; day: number; year: number | null; startTime: string | null; endTime: string | null; arrivalNote: string | null }[]
    }
    broken.practiceTournaments = [{
      id: "sample-event",
      name: "Sample event",
      month: 11,
      day: 15,
      year: 2026,
      startTime: null,
      endTime: null,
      venueId: "missing-venue",
      arrivalNote: null,
    }]
    const issues = validateSiteContent(broken)
    assert.ok(issues.some((issue) => issue.path.includes("venueId") && issue.message.includes("missing-venue")))
  })

  it("rejects tournaments with only one of start/end time", () => {
    const broken = structuredClone(published) as {
      practiceTournaments: { id: string; name: string; month: number; day: number; year: number | null; startTime: string | null; endTime: string | null; venueId: string; arrivalNote: string | null }[]
    }
    broken.practiceTournaments = [{
      id: "sample-event",
      name: "Sample event",
      month: 11,
      day: 15,
      year: 2026,
      startTime: "09:00",
      endTime: null,
      venueId: "starlite-lanes",
      arrivalNote: null,
    }]
    const issues = validateSiteContent(broken)
    assert.ok(issues.some((issue) => issue.path.includes("endTime")))
  })
})
