import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { describe, it } from "node:test"
import {
  anyPaymentsLive,
  parseSiteConnections,
  validateSiteConnections,
} from "../src/lib/content/siteConnectionsModel.ts"
import { decideDonationCheckout, destinationCouldGoLive } from "../src/lib/payments/donations.ts"
import {
  GIVEBUTTER_CAMPAIGN,
  isApprovedGivebutterCampaign,
  liveGivebutterUrl,
} from "../src/lib/payments/givebutter.ts"

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8")
const published = JSON.parse(read("../src/content/published/siteConnections.json")) as unknown
const connections = parseSiteConnections(published)

function withGivebutter(patch: { status?: "disabled" | "prepared" | "verified"; liveEnabled?: boolean; publicDestination?: string | null }) {
  const config = structuredClone(connections)
  const entry = config.payments.find((item) => item.id === "givebutter")
  assert.ok(entry)
  Object.assign(entry, patch)
  return config
}

describe("Givebutter campaign", () => {
  it("records the owner-supplied campaign identifiers", () => {
    assert.equal(GIVEBUTTER_CAMPAIGN.url, "https://givebutter.com/support-lebanon-high-school-bowlers-myav8u")
    assert.equal(GIVEBUTTER_CAMPAIGN.campaignId, 803228)
    assert.equal(GIVEBUTTER_CAMPAIGN.accountId, 451198)
  })

  it("ships prepared but inactive in Payment Connections", () => {
    const entry = connections.payments.find((item) => item.id === "givebutter")
    assert.ok(entry)
    assert.equal(entry.status, "prepared")
    assert.equal(entry.liveEnabled, false)
    assert.equal(entry.publicDestination, GIVEBUTTER_CAMPAIGN.url)
    assert.equal(liveGivebutterUrl(connections), null)
    assert.equal(anyPaymentsLive(connections), false)
  })

  it("accepts only the approved campaign address", () => {
    assert.equal(isApprovedGivebutterCampaign(GIVEBUTTER_CAMPAIGN.url), true)
    assert.equal(isApprovedGivebutterCampaign(`${GIVEBUTTER_CAMPAIGN.url}/`), true)
    assert.equal(isApprovedGivebutterCampaign("https://www.givebutter.com/support-lebanon-high-school-bowlers-myav8u"), true)
    assert.equal(isApprovedGivebutterCampaign("http://givebutter.com/support-lebanon-high-school-bowlers-myav8u"), false)
    assert.equal(isApprovedGivebutterCampaign("https://givebutter.com/some-other-campaign"), false)
    assert.equal(isApprovedGivebutterCampaign("https://givebutter.com.example.com/support-lebanon-high-school-bowlers-myav8u"), false)
    assert.equal(isApprovedGivebutterCampaign(`${GIVEBUTTER_CAMPAIGN.url}?ref=elsewhere`), false)
    assert.equal(isApprovedGivebutterCampaign(null), false)
    assert.equal(destinationCouldGoLive("givebutter", GIVEBUTTER_CAMPAIGN.url), true)
    assert.equal(destinationCouldGoLive("givebutter", "https://givebutter.com/another"), false)
  })

  it("goes live only when verified, switched on live, and pointed at the approved campaign", () => {
    assert.equal(liveGivebutterUrl(withGivebutter({ status: "verified", liveEnabled: false })), null)
    assert.equal(liveGivebutterUrl(withGivebutter({ status: "prepared", liveEnabled: true })), null)
    assert.equal(
      liveGivebutterUrl(withGivebutter({ status: "verified", liveEnabled: true, publicDestination: "https://givebutter.com/another" })),
      null,
    )
    assert.equal(liveGivebutterUrl(withGivebutter({ status: "verified", liveEnabled: true })), GIVEBUTTER_CAMPAIGN.url)
  })

  it("rejects a live switch before verification", () => {
    const issues = validateSiteConnections(withGivebutter({ liveEnabled: true }))
    assert.ok(issues.some((issue) => issue.path.endsWith(".liveEnabled")))
  })

  it("does not open the on-site checkout", () => {
    for (const method of ["card", "paypal", "venmo", "cash_app"]) {
      const decision = decideDonationCheckout({
        amountCents: 2500,
        method,
        paymentsLive: false,
        recordsConfigured: false,
        stripeConfigured: false,
        connections,
      })
      assert.equal(decision.ok, false)
    }
  })

  it("keeps the public Donate page free of the campaign link and tax claims while inactive", () => {
    const component = read("../src/components/GivebutterGiving.tsx")
    assert.match(component, /liveGivebutterUrl\(siteConnectionsConfig\)/)
    assert.match(component, /href=\{liveUrl\}/)
    assert.doesNotMatch(component, /href=\{GIVEBUTTER_CAMPAIGN\.url\}/)
    assert.doesNotMatch(component, /tax[- ]deductible|tax[- ]exempt|501\(c\)/i)
    assert.match(read("../src/pages/Donate.tsx"), /<GivebutterGiving \/>/)
  })

  it("adds no Givebutter dependency or embed script", () => {
    const pkg = JSON.parse(read("../package.json")) as { dependencies?: Record<string, string>; devDependencies?: Record<string, string> }
    const names = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })
    assert.ok(!names.some((name) => /givebutter/i.test(name)))
    assert.doesNotMatch(read("../index.html"), /givebutter/i)
  })
})
