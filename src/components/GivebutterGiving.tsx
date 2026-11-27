import { siteConnectionsConfig } from "../content/siteConnections"
import { GIVEBUTTER_CAMPAIGN, liveGivebutterUrl } from "../lib/payments/givebutter"
import { ExternalLinkIcon } from "./header/icons"

export function GivebutterGiving() {
  const liveUrl = liveGivebutterUrl(siteConnectionsConfig)

  return (
    <section className="sw-givebutter" aria-labelledby="givebutter-heading">
      <p className={`sw-chip${liveUrl ? "" : " sw-chip--red"}`}>{liveUrl ? "Givebutter" : "Givebutter · Not active yet"}</p>
      <h2 id="givebutter-heading">Online giving through Givebutter</h2>
      {liveUrl ? (
        <>
          <p>
            Give to the club's campaign, <strong>{GIVEBUTTER_CAMPAIGN.name}</strong>, on Givebutter. Givebutter
            processes the gift and sends the receipt. Card and bank details are entered on Givebutter, not on this
            website.
          </p>
          <a className="sw-btn sw-btn--plain" href={liveUrl} target="_blank" rel="noopener noreferrer">
            Give on Givebutter
            <ExternalLinkIcon />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </>
      ) : (
        <>
          <p>
            The club's Givebutter campaign, <strong>{GIVEBUTTER_CAMPAIGN.name}</strong>, will open here after it is
            verified and approved. Gifts can't be made through Givebutter from this website yet.
          </p>
          <button className="sw-btn sw-btn--plain" type="button" disabled>
            Givebutter giving is not active yet
          </button>
        </>
      )}
    </section>
  )
}
