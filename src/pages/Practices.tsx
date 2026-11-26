import { Link } from "react-router-dom"
import { AthleticHero } from "../components/AthleticHero"
import { EmptyState } from "../components/EmptyState"
import { FaqAnswerBody } from "../components/FaqEmbed"
import { PinMark } from "../components/Marks"
import { PageMeta } from "../components/PageMeta"
import { SeasonClosedNotice } from "../components/SeasonClosedNotice"
import { faqCategories } from "../content/faq"
import { club, library, pages, practiceLocation } from "../content/site"

const practiceFaqIds = ["faq-practices", "faq-equipment", "faq-basics"] as const

const practiceFaqCategories = practiceFaqIds.flatMap((id) => {
  const category = faqCategories.find((entry) => entry.id === id)
  return category ? [category] : []
})

export function Practices() {
  const venueConfirmed = Boolean(practiceLocation.website && practiceLocation.directions && practiceLocation.phoneHref)

  return (
    <div className="sw-page sw-practices">
      <PageMeta title={pages.practices.title} description={pages.practices.description} />
      <AthleticHero
        scene="practices"
        eyebrow="On the lanes"
        title="Practices"
        subtitle={club.name}
        actions={
          <>
            <a className="sw-btn" href="#practice-location">
              {practiceLocation.name}
            </a>
            <a className="sw-btn sw-btn--ghost" href="#practice-faq-heading">
              PRACTICE FAQs
            </a>
          </>
        }
      >
        <p>{library.practices.hero}</p>
      </AthleticHero>

      <section className="section" aria-label="Practice board">
        <div className="wrap">
          <div className="sw-board">
            <p className="sw-board__title">
              <span aria-hidden="true">★</span> Practice board <span aria-hidden="true">★</span>
            </p>
            <div className="sw-board__panels">
              <article className="card sw-practices__location" id="practice-location">
                <div className="sw-practices__location-copy">
                  <h2>
                    <PinMark /> Location
                  </h2>
                  <p className="place-name">{practiceLocation.name}</p>
                  <p className="sw-practices__address">
                    {practiceLocation.street}
                    <br />
                    {practiceLocation.locality}
                  </p>
                  <p>{practiceLocation.detail}</p>
                  {venueConfirmed ? (
                    <>
                      <p>
                        <a className="sw-practices__phone" href={practiceLocation.phoneHref}>
                          {practiceLocation.phone}
                        </a>
                      </p>
                      <p className="practice-location__actions">
                        <a
                          className="sw-btn sw-btn--plain"
                          href={practiceLocation.directions ?? undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get directions
                          <span className="visually-hidden"> (opens in a new tab)</span>
                        </a>
                        <a
                          className="sw-btn sw-btn--outline sw-btn--plain"
                          href={practiceLocation.website ?? undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit website
                          <span className="visually-hidden"> (opens in a new tab)</span>
                        </a>
                        <a className="sw-btn sw-btn--outline sw-btn--plain" href={practiceLocation.phoneHref}>
                          Call {practiceLocation.name}
                        </a>
                      </p>
                    </>
                  ) : (
                    <p>Practice venue to be confirmed. Phone, directions, and website links will appear after approval.</p>
                  )}
                </div>
              </article>

              <article className="card sw-practices__schedule">
                <h2>Schedule</h2>
                <EmptyState title={library.practices.scheduleTitle}>{library.practices.scheduleBody}</EmptyState>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap sw-practices__grid">
          <article className="card">
            <h2>What to bring</h2>
            <ul className="plain-list">
              {library.practices.bringItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{library.practices.bringNote}</p>
          </article>

          <article className="card" aria-labelledby="season-registration-closed-heading">
            <SeasonClosedNotice />
            <p>{library.practices.rosterNote}</p>
          </article>
        </div>
      </section>

      <section className="section practice-faq" aria-labelledby="practice-faq-heading">
        <div className="wrap">
          <div className="sw-panel sw-faq-panel">
            <h2 id="practice-faq-heading">{library.practices.faqHeading}</h2>
            <p className="practice-faq__intro">{library.practices.faqIntro}</p>

            {practiceFaqCategories.map((category) => (
              <div className="practice-faq__category" key={category.id}>
                <h3>{category.title}</h3>
                {category.intro ? <p className="practice-faq__category-intro">{category.intro}</p> : null}
                <div className="practice-faq__items">
                  {category.items
                    .filter((item) => !item.hidden)
                    .map((item) => (
                      <details className="practice-faq__item" key={item.question}>
                        <summary className="practice-faq__question">
                          <span className="practice-faq__question-text">{item.question}</span>
                        </summary>
                        <div className="practice-faq__answer">
                          <FaqAnswerBody item={item} />
                        </div>
                      </details>
                    ))}
                </div>
              </div>
            ))}

            <p className="practice-faq__links">
              <Link to="/faq">
                View all FAQs <span aria-hidden="true">→</span>
              </Link>
              <Link to="/faq#faq-ask">
                Ask a question <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
