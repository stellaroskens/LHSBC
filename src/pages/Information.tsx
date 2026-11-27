import { Link } from "react-router-dom"
import { AthleticHero, SectionHeading } from "../components/AthleticHero"
import { PageMeta } from "../components/PageMeta"
import { club } from "../content/site"

const links = [
  { to: "/our-club", label: "Our Club", detail: "Club overview, coaches, and how the program works." },
  { to: "/practices", label: "Practices", detail: "Practice information and schedule notes." },
  { to: "/tournaments", label: "Tournaments", detail: "Tournament schedule and event details." },
  { to: "/resources", label: "Resources", detail: "Equipment, etiquette, and learning links." },
  { to: "/faq", label: "FAQ", detail: "Common questions for families and athletes." },
  { to: "/contact", label: "Contact", detail: "Reach club leadership. Club contact to be confirmed." },
  { to: "/volunteer", label: "Volunteer", detail: "Athlete safety, background checks, and volunteer opportunities." },
  { to: "/sponsors", label: "Sponsors", detail: "Sponsor details to be confirmed. No checkout on this page." },
] as const

/** Public information hub for the homepage FIND OUT MORE control. */
export function Information() {
  return (
    <div className="sw-page sw-info">
      <PageMeta
        title={`Information | ${club.name}`}
        description={`Club information for ${club.name}: practices, tournaments, resources, and contact paths.`}
      />
      <AthleticHero
        scene="club"
        eyebrow="Find out more"
        title="Information"
        subtitle={club.name}
        actions={
          <>
            <Link className="sw-btn" to="/our-club#how-to-join">
              How to join
            </Link>
            <Link className="sw-btn sw-btn--ghost" to="/donate">
              Donate
            </Link>
          </>
        }
      >
        <p>Find club pages for joining, schedules, resources, and support. Checkout and live payments stay off until approved.</p>
      </AthleticHero>

      <section className="section" aria-labelledby="info-directory-heading">
        <div className="wrap">
          <div className="card sw-info__board">
            <SectionHeading id="info-directory-heading" title="Club directory" />
            <ul className="sw-info__list">
              {links.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    <span className="sw-info__label">{item.label}</span>
                    <span className="sw-info__detail">{item.detail}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="sw-info__join">
              Ready to join? Start with <Link to="/our-club#how-to-join">How to join</Link> on the Our Club page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
