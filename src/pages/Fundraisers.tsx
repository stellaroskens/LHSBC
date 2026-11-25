import { Link } from "react-router-dom"
import { AthleticHero } from "../components/AthleticHero"
import { PageMeta } from "../components/PageMeta"
import { fundraiserContact, fundraisers } from "../content/fundraisers"
import { placedImage } from "../content/publicImages"
import { club, library, pages } from "../content/site"
import { fundraiserStatusLabel, fundraiserSupportNote, fundraiserTiming } from "../lib/events/fundraiserTiming"

const burgerville = fundraisers.find((item) => item.id === "burgerville")
const publicFundraiserEmail = fundraiserContact.email.endsWith(".invalid") ? null : fundraiserContact.email

/** Decorative month/day tab built from the event's own `when` text. */
function DateTab({ when }: { when: string }) {
  const [month = "", day = ""] = (when.split(", ")[1] ?? "").split(" ")
  return (
    <span className="sw-fundraiser__date" aria-hidden="true">
      <span>{month.slice(0, 3)}</span>
      <strong>{day}</strong>
    </span>
  )
}

export function Fundraisers() {
  if (!burgerville) {
    return (
      <div className="sw-page sw-fundraisers">
        <PageMeta title={pages.fundraisers.title} description={pages.fundraisers.description} />
        <AthleticHero scene="fundraisers" eyebrow="Support the team" title="Fundraisers" subtitle={club.name}>
          <p>Fundraiser details to be confirmed. No current fundraiser is published on this site.</p>
          <p>
            <Link to="/sponsors">Become a Sponsor</Link>
            {" · "}
            <Link to={library.fundraisers.donateTo}>{library.fundraisers.donateButton}</Link>
            {" · "}
            <Link to="/our-club">Our Club</Link>
            {" · "}
            <Link to="/contact">Contact</Link>
          </p>
        </AthleticHero>
      </div>
    )
  }
  const activeTiming = fundraiserTiming(burgerville.when, burgerville.time, new Date())
  return (
    <div className="sw-page sw-fundraisers">
      <PageMeta title={pages.fundraisers.title} description={pages.fundraisers.description} />

      <AthleticHero
        scene="fundraisers"
        eyebrow="Support the team"
        title="Fundraisers"
        subtitle={club.name}
        actions={
          <a className="sw-btn" href={`#${burgerville.id}`}>
            {burgerville.business}
          </a>
        }
        art={
          <div className="sw-flyer-fan" aria-hidden="true">
            <img
              src={placedImage(`fundraiser:${burgerville.id}`, burgerville.image).src}
              width={burgerville.imageWidth}
              height={burgerville.imageHeight}
              alt=""
            />
          </div>
        }
      >
        <p>{library.fundraisers.hero}</p>
      </AthleticHero>

      <section
        className="section sw-fundraiser sw-fundraiser--flip"
        id={burgerville.id}
        aria-labelledby="burgerville-heading"
      >
        <div className="wrap fundraiser-layout">
          <div className="sw-panel sw-fundraiser__details">
            <div className="sw-fundraiser__ticket">
              <DateTab when={burgerville.when} />
              <div>
                <h2 id="burgerville-heading">{burgerville.business}</h2>
                <p className={`sw-status${activeTiming === "past" ? " sw-status--past" : ""}`}>{fundraiserStatusLabel(activeTiming)}</p>
                <p className="fundraiser-when">{burgerville.when}</p>
                <p className="fundraiser-time">{burgerville.time}</p>
              </div>
            </div>
            <p className="sw-fundraiser__terms">{library.fundraisers.burgerville.yearNote}</p>
            <div className="sw-fundraiser__facts">
              <div className="sw-fundraiser__fact">
                <h3>Location</h3>
                <p>
                  {library.fundraisers.burgerville.placeName}
                  <br />
                  {library.fundraisers.burgerville.street}
                </p>
              </div>
              <div className="sw-fundraiser__fact sw-fundraiser__fact--steps">
                <h3>How to participate</h3>
                <p>
                  {library.fundraisers.burgerville.steps.includes(library.fundraisers.burgerville.code) ? (
                    <>
                      {library.fundraisers.burgerville.steps.split(library.fundraisers.burgerville.code)[0]}
                      <span className="sw-code">{library.fundraisers.burgerville.code}</span>
                      {library.fundraisers.burgerville.steps.split(library.fundraisers.burgerville.code)[1]}
                    </>
                  ) : (
                    library.fundraisers.burgerville.steps
                  )}
                </p>
              </div>
            </div>
            <p className="sw-fundraiser__cta">
              <a className="sw-btn" href={burgerville.flyer}>
                {library.fundraisers.flyerButton}
              </a>
            </p>
            <div className="sw-fundraiser__donate">
              <p>{library.fundraisers.donateBanner}</p>
              <Link className="sw-btn" to={library.fundraisers.donateTo}>
                {library.fundraisers.donateButton}
              </Link>
            </div>
            <div className="sw-fundraiser__volunteers">
              <h3>{library.fundraisers.volunteersHeading}</h3>
              <p>{library.fundraisers.burgerville.volunteerIntro}</p>
              <ul className="plain-list">
                {library.fundraisers.burgerville.volunteerItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{library.fundraisers.burgerville.volunteerPosters}</p>
              <p>
                {library.fundraisers.burgerville.volunteerAsk.replace("the fundraiser contact", fundraiserContact.name)}
              </p>
              {publicFundraiserEmail ? (
                <p>
                  <a
                    className="sw-btn sw-btn--outline sw-btn--plain"
                    href={`mailto:${publicFundraiserEmail}`}
                  >
                    Email {publicFundraiserEmail}
                  </a>
                </p>
              ) : (
                <p>Club contact to be confirmed.</p>
              )}
            </div>
          </div>
          <figure className="fundraiser-flyer sw-fundraiser__poster">
            <img
              src={placedImage(`fundraiser:${burgerville.id}`, burgerville.image).src}
              width={burgerville.imageWidth}
              height={burgerville.imageHeight}
              alt={library.fundraisers.burgerville.flyerAlt}
              loading="lazy"
            />
            <figcaption>
              {library.fundraisers.burgerville.caption}{" "}
              <a href={burgerville.flyer}>Open the full flyer</a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
          <div className="wrap sw-panel">
            <h2>{activeTiming === "upcoming" ? library.donations.burgervillePrompt : fundraiserStatusLabel(activeTiming)}</h2>
            <p>{fundraiserSupportNote(activeTiming)}</p>
            <p>
              <Link className="sw-btn" to="/donate">{library.donations.donateButton}</Link>
            </p>
          </div>
        </section>

      <section className="section" aria-labelledby="share-heading">
        <div className="wrap">
          <div className="sw-cta-band sw-fundraisers__share">
            <div>
              <h2 id="share-heading">{library.fundraisers.shareHeading}</h2>
              <p>{library.fundraisers.shareBody}</p>
              <p>
                {library.fundraisers.shareQuestions}
                {publicFundraiserEmail ? (
                  <>
                    {" "}
                    <a href={`mailto:${publicFundraiserEmail}`}>{publicFundraiserEmail}</a>.
                  </>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
