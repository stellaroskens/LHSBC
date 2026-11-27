import { Link } from "react-router-dom"
import { AthleticHero, SectionHeading } from "../components/AthleticHero"
import { BrandWordmark } from "../components/BrandWordmark"
import { PageMeta } from "../components/PageMeta"
import { ExternalLinkIcon } from "../components/header/icons"
import { familySupport, USBC_LINKS } from "../content/athleteSafety"
import { bakerFrames, club, coaches, library, pageBodies, pages, seasonRegistrationClosed } from "../content/site"
import { COACH_CREDENTIALS, coachCredentialState, isPlaceholderCoachName } from "../lib/safety/coachCredentials"

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
}

function CoachCredential({ coachId, name }: { coachId: string; name: string }) {
  const state = coachCredentialState(COACH_CREDENTIALS[coachId], name)
  const placeholder = isPlaceholderCoachName(name)
  return (
    <div className="sw-coach__credential">
      {state.status === "verified" ? (
        <>
          <p className="sw-coach__verified">USBC Registered Volunteer — credential reviewed</p>
          <p>
            Reviewed by club leadership on {formatDate(state.reviewedOn)}. Current through {formatDate(state.expiresOn)}.
          </p>
          {state.imageSrc ? <img src={state.imageSrc} alt={`USBC Registered Volunteer credential for ${name}`} /> : null}
        </>
      ) : (
        <p className="sw-coach__credential-status">
          {state.status === "expired" ? "Credential renewal pending review." : "Credential not yet published."}
        </p>
      )}
      <p>
        {placeholder
          ? "Once the coach's name is published, you can search for it on USBC."
          : `Search USBC by the name ${name}, state Oregon.`}{" "}
        <a href={USBC_LINKS.findAVolunteer} target="_blank" rel="noopener noreferrer">
          USBC Find a Registered Volunteer
          <ExternalLinkIcon />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  )
}

export function OurClub() {
  return (
    <div className="sw-page sw-club">
      <PageMeta title={pages.club.title} description={pages.club.description} />
      <AthleticHero
        scene="club"
        title={pageBodies.club.heroTitle}
        subtitle={club.name}
        actions={
          <>
            <a className="sw-btn" href="#coaches">
              {pageBodies.club.coachesButtonLabel}
            </a>
            <Link className="sw-btn sw-btn--ghost" to={seasonRegistrationClosed.volunteerCtaTo}>
              {seasonRegistrationClosed.volunteerCtaLabel}
            </Link>
          </>
        }
        art={
          <div className="sw-logo-badge">
            <BrandWordmark />
          </div>
        }
      >
        {pageBodies.club.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link to="/meet-the-bowlers">Meet the bowlers</Link>
          {" · "}
          <Link to="/sponsors">Become a Sponsor</Link>
          {" · "}
          <Link to={library.fundraisers.donateTo}>{library.fundraisers.donateButton}</Link>
          {" · "}
          <Link to="/contact">Contact</Link>
        </p>
      </AthleticHero>

      <section className="section" aria-labelledby="how-to-join">
        <div className="wrap">
          <div className="sw-join">
            <svg className="sw-join__burst" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
              <path d="M20 0l3 15 13-8-8 13 12 0-12 3 8 13-13-8-3 12-3-12-13 8 8-13L0 20l12-3L4 4l13 8z" />
            </svg>
            <div className="sw-join__copy">
              <p className="sw-chip sw-chip--red">Recruitment</p>
              <h2 id="how-to-join">How to join</h2>
              <div className="sw-join__status">
                <p>
                  <strong>{seasonRegistrationClosed.heading}</strong>
                </p>
                <p>{seasonRegistrationClosed.description}</p>
              </div>
              <p>
                This site does not have a public registration form. Students can read the club information,
                practices, and team pages here. A working club mailbox has not been connected, so the contact
                form does not send a message.
              </p>
            </div>
            <nav className="sw-join__explore" aria-label="Get to know the club">
              <p className="sw-join__explore-title">Get to know the club</p>
              <ul>
                <li>
                  <Link to="/practices">Practices</Link>
                </li>
                <li>
                  <Link to="/meet-the-bowlers">Meet the bowlers</Link>
                </li>
                <li>
                  <Link to="/tournaments">Tournaments</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="section sw-families" id="families-supporting-families" aria-labelledby="families-heading">
        <div className="wrap">
          <div className="sw-families__intro">
            <p className="sw-chip sw-chip--red">{familySupport.heading}</p>
            <h2 id="families-heading">{familySupport.subheading}</h2>
            {familySupport.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="sw-families__grid">
            {familySupport.cards.map((card) => (
              <article className={`sw-families__card sw-families__card--${card.id}`} key={card.id}>
                <h3>{card.title}</h3>
                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {card.id === "ride" ? (
                  <p className="sw-families__link">
                    <Link to="/volunteer#volunteer-transport-heading">Transportation safety requirements</Link>
                  </p>
                ) : null}
                {card.id === "help" ? (
                  <p className="sw-families__link">
                    <Link to="/contact">Club contact page</Link>
                  </p>
                ) : null}
                {card.id === "safety" ? (
                  <p className="sw-families__link">
                    <Link to="/volunteer">Athlete Safety and Background Checks</Link>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <p className="sw-families__closing">{familySupport.closing}</p>
          <p className="sw-families__actions">
            <Link className="sw-btn" to="/volunteer">
              Athlete Safety &amp; Background Checks
            </Link>
            <Link className="sw-btn sw-btn--outline" to="/contact">
              Club contact page
            </Link>
          </p>
        </div>
      </section>

      <section className="section sw-club__coaches" id="coaches" aria-labelledby="coaches-heading">
        <div className="wrap">
          <SectionHeading id="coaches-heading" title={pageBodies.club.coachesHeading}>
            <p>{pageBodies.club.coachesNote}</p>
          </SectionHeading>
          <div className="sw-club__coach-grid">
            {coaches.map((coach) => (
              <article className="sw-coach" key={coach.id}>
                <div className="sw-coach__head">
                  <div className="sw-coach__photo sw-coach__photo--placeholder" aria-hidden="true">
                    <BrandWordmark compact />
                  </div>
                  <div className="sw-coach__id">
                    <p className="sw-chip sw-chip--red">{coach.role}</p>
                    <h3>{coach.name}</h3>
                  </div>
                </div>
                <p className="sw-coach__bio">{coach.summary}</p>
                <CoachCredential coachId={coach.id} name={coach.name} />
              </article>
            ))}
          </div>
          <article className="sw-coach sw-coach--admin">
            <span className="sw-icon-disc sw-icon-disc--navy" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" />
              </svg>
            </span>
            <div className="sw-coach__id">
              <p className="sw-chip">{pageBodies.club.administratorTitle}</p>
              <h3>{pageBodies.club.administratorName}</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-label="About the club">
        <div className="wrap sw-club__info-grid">
          <article className="card club-info sw-club__info" aria-labelledby="team-sport-heading">
            <h2 id="team-sport-heading">{pageBodies.club.teamSport.heading}</h2>
            {pageBodies.club.teamSport.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="plain-list">
              {pageBodies.club.teamSport.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ol className="sw-baker" aria-label="Standard five-bowler Baker lineup">
              {bakerFrames.map((row) => (
                <li key={row.bowler}>
                  <span className="sw-baker__bowler">{row.bowler}</span>
                  <span className="sw-baker__frames">{row.frames}</span>
                </li>
              ))}
            </ol>
            <p>{pageBodies.club.teamSport.lineupNote}</p>
            <p className="club-action">
              <Link className="sw-btn" to={pageBodies.club.teamSport.buttonTo}>
                {pageBodies.club.teamSport.buttonLabel}
              </Link>
            </p>
          </article>

          <article className="card club-info sw-club__info" aria-labelledby="volunteer-heading">
            <h2 id="volunteer-heading">{pageBodies.club.volunteers.heading}</h2>
            <p>
              <strong>{seasonRegistrationClosed.heading}</strong>
            </p>
            <p>{seasonRegistrationClosed.description}</p>
            <p>{seasonRegistrationClosed.volunteerSecondary}</p>
            {pageBodies.club.volunteers.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="plain-list">
              {pageBodies.club.volunteers.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="club-action">
              <Link className="sw-btn" to={seasonRegistrationClosed.volunteerCtaTo}>
                {seasonRegistrationClosed.volunteerCtaLabel}
              </Link>
            </p>
          </article>

          <article className="card club-info sw-club__info sw-club__info--wide" aria-labelledby="college-heading">
            <div className="sw-club__college">
              <div>
                <h2 id="college-heading">{pageBodies.club.college.heading}</h2>
                <p>{pageBodies.club.college.intro}</p>
                <ul className="plain-list">
                  {pageBodies.club.college.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sw-club__links">
                <p>{pageBodies.club.college.disclaimer}</p>
                <ul>
                  {pageBodies.club.college.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="club-action">
                  <Link className="sw-btn sw-btn--outline" to={pageBodies.club.college.buttonTo}>
                    {pageBodies.club.college.buttonLabel}
                  </Link>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="club-help-heading">
        <div className="wrap">
          <div className="sw-cta-band">
            <div>
              <h2 id="club-help-heading">{pageBodies.club.help.heading}</h2>
              <p>{pageBodies.club.help.description}</p>
            </div>
            <Link className="sw-btn" to={pageBodies.club.help.buttonTo}>
              {pageBodies.club.help.buttonLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
