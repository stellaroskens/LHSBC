import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { AthleticHero } from "../components/AthleticHero"
import { ExternalLinkIcon } from "../components/header/icons"
import { PageMeta } from "../components/PageMeta"
import { athleteSafety as copy, USBC_LINKS, USBC_RVP_CONTACT } from "../content/athleteSafety"
import { club, pageBodies, pages } from "../content/site"

function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalLinkIcon />
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}

function SafetyShield() {
  return (
    <div className="sw-shield" aria-hidden="true">
      <svg viewBox="0 0 200 230" focusable="false">
        <path className="sw-shield__outer" d="M100 6 186 38v62c0 58-37 101-86 124C51 201 14 158 14 100V38z" />
        <path className="sw-shield__inner" d="M100 22 172 49v51c0 49-30 86-72 106-42-20-72-57-72-106V49z" />
        <path className="sw-shield__band" d="M28 92h144v34H28z" />
        <g className="sw-shield__pin">
          <path d="M100 52c-9 0-13 8-12 16 1 7 5 11 4 18-2 10-10 18-10 32 0 18 8 30 18 30s18-12 18-30c0-14-8-22-10-32-1-7 3-11 4-18 1-8-3-16-12-16z" />
          <path className="sw-shield__stripe" d="M90 80h20v6H90zM89 92h22v6H89z" />
        </g>
        <g className="sw-shield__stars">
          <path d="m48 64 3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" />
          <path d="m152 64 3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" />
        </g>
      </svg>
      <p className="sw-shield__label">Athlete Safety</p>
    </div>
  )
}

export function Volunteer() {
  return (
    <div className="sw-page sw-volunteer sw-safety">
      <PageMeta title={pages.volunteer.title} description={pages.volunteer.description} />
      <AthleticHero
        scene="club"
        eyebrow={pageBodies.volunteer.eyebrow}
        title={pageBodies.volunteer.title}
        subtitle={club.name}
        art={<SafetyShield />}
        actions={
          <>
            <ExternalLink className="sw-btn" href={USBC_LINKS.accountLogin}>
              Start Your Background Check
            </ExternalLink>
            <ExternalLink className="sw-btn sw-btn--ghost" href={USBC_LINKS.findAVolunteer}>
              Verify a Registered Volunteer
            </ExternalLink>
            <a className="sw-safety__hero-report" href="#report-a-concern">
              Report a safety concern
            </a>
          </>
        }
      >
        {pageBodies.volunteer.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </AthleticHero>

      <section className="section" aria-labelledby="safety-who-heading">
        <div className="wrap sw-safety__split">
          <article className="sw-panel sw-safety__policy">
            <p className="sw-chip sw-chip--red">LHSBC club policy</p>
            <h2 id="safety-who-heading">{copy.whoNeeds.heading}</h2>
            <p>{copy.whoNeeds.intro}</p>
            <ul className="sw-safety__roles">
              {copy.whoNeeds.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p>{copy.whoNeeds.exemption}</p>
            <p className="sw-safety__emphasis">{copy.whoNeeds.closing}</p>
          </article>
          <article className="sw-panel sw-safety__program">
            <p className="sw-chip">USBC program</p>
            <h2>{copy.program.heading}</h2>
            {copy.program.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <ExternalLink className="sw-btn sw-btn--outline sw-btn--plain" href={copy.program.link.href}>
                {copy.program.link.label}
              </ExternalLink>
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="volunteer-background-checks" aria-labelledby="volunteer-background-heading">
        <div className="wrap">
          <div className="sw-board sw-steps">
            <p className="sw-board__title">
              <span aria-hidden="true">★</span> Registered Volunteer Program <span aria-hidden="true">★</span>
            </p>
            <h2 id="volunteer-background-heading" className="sw-steps__heading">
              {copy.steps.heading}
            </h2>
            <ol className="sw-steps__list">
              {copy.steps.items.map((step, index) => (
                <li className="sw-steps__step" key={step.title}>
                  <span className="sw-steps__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="sw-steps__body">
                    <p className="sw-steps__kicker">Step {index + 1}</p>
                    <h3>{step.title}</h3>
                    {step.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {step.bullets ? (
                      <ul className="plain-list">
                        {step.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {step.notice ? (
                      <p className="sw-steps__notice" role="note">
                        {step.notice}
                      </p>
                    ) : null}
                    {step.link ? (
                      <p className="sw-steps__action">
                        <ExternalLink className="sw-btn sw-btn--plain" href={step.link.href}>
                          {step.link.label}
                        </ExternalLink>
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="volunteer-transport-heading">
        <div className="wrap sw-safety__split">
          <article className="sw-panel sw-safety__parents">
            <p className="sw-chip sw-chip--red">Families</p>
            <h2 id="volunteer-transport-heading">{copy.parents.heading}</h2>
            {copy.parents.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="sw-safety__maapp" role="note">
              <h3>MAAPP transportation safeguards</h3>
              <p>{copy.parents.maapp}</p>
              <p>{copy.parents.example}</p>
            </div>
            <p className="sw-safety__emphasis">{copy.parents.closing}</p>
            <p>
              <ExternalLink className="sw-btn sw-btn--plain" href={copy.parents.link.href}>
                {copy.parents.link.label}
              </ExternalLink>
            </p>
          </article>
          <div className="sw-safety__stack">
            <article className="sw-panel sw-safety__directory" aria-labelledby="safety-directory-heading">
              <p className="sw-safety__status">{copy.directory.status}</p>
              <h2 id="safety-directory-heading">{copy.directory.heading}</h2>
              {copy.directory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <Link className="sw-btn sw-btn--outline sw-btn--plain" to="/contact">
                  Club contact page
                </Link>
              </p>
            </article>
            <article className="sw-panel sw-safety__coaches" aria-labelledby="safety-coaches-heading">
              <h2 id="safety-coaches-heading">{copy.coaches.heading}</h2>
              {copy.coaches.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="sw-safety__actions">
                <ExternalLink className="sw-btn sw-btn--plain" href={copy.coaches.link.href}>
                  {copy.coaches.link.label}
                </ExternalLink>
                <Link className="sw-btn sw-btn--outline sw-btn--plain" to="/our-club#coaches">
                  Coach profiles
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="safety-resources-heading">
        <div className="wrap sw-safety__split sw-safety__library">
          <article className="sw-panel sw-safety__resources">
            <h2 id="safety-resources-heading">{copy.resources.heading}</h2>
            <p>{copy.resources.intro}</p>
            <ul className="sw-safety__links">
              {copy.resources.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </article>
          <article className="sw-panel sw-safety__contact" aria-labelledby="safety-questions-heading">
            <h2 id="safety-questions-heading">{copy.questions.heading}</h2>
            <p>{copy.questions.intro}</p>
            <p className="sw-safety__contact-line">
              <strong>Phone:</strong> <a href={USBC_RVP_CONTACT.phoneHref}>{USBC_RVP_CONTACT.phoneLabel}</a>
            </p>
            <p>
              <a className="sw-btn sw-btn--plain" href={`mailto:${USBC_RVP_CONTACT.email}`}>
                Email RVP — {USBC_RVP_CONTACT.email}
              </a>
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="safety-videos-heading">
        <div className="wrap">
          <div className="sw-safety__videos">
            <h2 id="safety-videos-heading">{copy.videos.heading}</h2>
            <h3>{copy.videos.subheading}</h3>
            <p>{copy.videos.intro}</p>
            <ol className="sw-safety__episodes">
              {copy.videos.episodes.map((episode, index) => (
                <li key={episode.href}>
                  <ExternalLink className="sw-safety__episode" href={episode.href}>
                    <span className="sw-safety__episode-number">Episode {index + 1}</span>
                    <span className="sw-safety__episode-title">{episode.label}</span>
                  </ExternalLink>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="volunteer-ways-heading">
        <div className="wrap">
          <article className="sw-panel sw-volunteer__card">
            <h2 id="volunteer-ways-heading">{pageBodies.volunteer.waysHeading}</h2>
            <p>{pageBodies.volunteer.waysIntro}</p>
            <ul className="plain-list">
              {pageBodies.volunteer.opportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sw-volunteer__actions">
              <Link className="sw-btn" to={pageBodies.volunteer.waysButtonTo}>
                {pageBodies.volunteer.waysButtonLabel}
              </Link>
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="report-a-concern" aria-labelledby="safety-report-heading">
        <div className="wrap">
          <div className="sw-safety__report">
            <h2 id="safety-report-heading">{copy.reporting.heading}</h2>
            {copy.reporting.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="sw-safety__actions">
              {copy.reporting.links.map((link, index) => (
                <ExternalLink
                  key={link.href}
                  className={index === 0 ? "sw-btn" : "sw-btn sw-btn--ghost"}
                  href={link.href}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </p>
            <p className="sw-safety__emergency" role="note">
              {copy.reporting.emergency}
            </p>
            <p>{copy.reporting.mandatory}</p>
            <p className="sw-safety__closing">{copy.reporting.closing}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
