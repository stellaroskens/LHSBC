import {
  approvedPublicHttps,
  type SiteConnectionsConfig,
} from "../content/siteConnectionsModel.ts"

/**
 * The owner-supplied Givebutter campaign. These are public identifiers, not credentials.
 * A different campaign needs a code review, not only a Payment Connections edit.
 */
export const GIVEBUTTER_CAMPAIGN = {
  name: "Support Lebanon High School Bowlers",
  url: "https://givebutter.com/support-lebanon-high-school-bowlers-myav8u",
  campaignId: 803228,
  accountId: 451198,
} as const

const APPROVED_HOSTS = new Set(["givebutter.com", "www.givebutter.com"])

export function isApprovedGivebutterCampaign(destination: string | null): boolean {
  const url = approvedPublicHttps(destination)
  if (!url) return false
  const parsed = new URL(url)
  const approved = new URL(GIVEBUTTER_CAMPAIGN.url)
  return (
    APPROVED_HOSTS.has(parsed.hostname.toLowerCase()) &&
    parsed.pathname.replace(/\/+$/, "") === approved.pathname &&
    parsed.search === "" &&
    parsed.hash === ""
  )
}

/** The campaign link, only after a super_admin verifies it and turns it on live. */
export function liveGivebutterUrl(config: SiteConnectionsConfig): string | null {
  const entry = config.payments.find((item) => item.id === "givebutter")
  if (!entry || entry.status !== "verified" || entry.liveEnabled !== true) return null
  return isApprovedGivebutterCampaign(entry.publicDestination) ? GIVEBUTTER_CAMPAIGN.url : null
}
