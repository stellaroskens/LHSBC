import { Link } from "react-router-dom"
import { AthleticHero } from "../components/AthleticHero"
import { GivebutterGiving } from "../components/GivebutterGiving"
import { PageMeta } from "../components/PageMeta"
import { QuickDonate } from "../components/QuickDonate"
import { club, library, pages } from "../content/site"

export function Donate() {
  const result = new URLSearchParams(window.location.search).get("result")
  return (
    <div className="sw-page">
      <PageMeta title={pages.donate.title} description={pages.donate.description} />
      <AthleticHero scene="sponsors" eyebrow="LHSBC" title={library.donations.headline} subtitle={club.name}>
        <p>{library.donations.intro}</p>
      </AthleticHero>
      <section className="section sw-donate">
        <div className="wrap sw-donate__grid">
          <div className="sw-panel quick-donate-panel sw-donate__gift">
            {result === "canceled" ? <p role="status">Checkout was canceled. No payment was recorded.</p> : null}
            {result === "returned" ? (
              <p role="status">Returning from a provider does not confirm a payment. This site has no verified receipt for this visit.</p>
            ) : null}
            <GivebutterGiving />
            <h2>{library.donations.contributionHeading}</h2>
            <p>{library.donations.why}</p>
            <QuickDonate />
          </div>
          <aside className="sw-donate__trust" aria-label="Giving with confidence">
            <p className="sw-donate__trust-title">
              <span aria-hidden="true">★</span> Giving with confidence <span aria-hidden="true">★</span>
            </p>
            <div className="sw-donate__trust-item">
              <h3>Payment security</h3>
              <p>{library.donations.secureNote}</p>
            </div>
            <div className="sw-donate__trust-item">
              <h3>Tax status</h3>
              <p>{library.donations.taxNote}</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="wrap sw-donate__more">
          <div className="sw-panel sw-donate__business">
            <h2>{library.donations.businessHeading}</h2>
            <p>{library.donations.businessBody}</p>
            <p>
              <Link className="sw-btn" to={library.donations.inquiryTo}>{library.donations.inquiryLabel}</Link>
            </p>
            <nav className="sw-donate__links" aria-label="More ways to support">
              <Link to="/fundraisers">Fundraising Opportunities</Link>
              <Link to="/sponsors">Sponsors</Link>
              <Link to="/our-club">Our Club</Link>
            </nav>
          </div>
          <div className="sw-panel sw-donate__faq">
            <h2>{library.donations.questionsHeading}</h2>
            {library.donations.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
            <p>
              {library.donations.contactNote}{" "}
              {club.email ? <a href={`mailto:${club.email}`}>{club.email}</a> : "Club contact to be confirmed"}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
