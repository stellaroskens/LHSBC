import { Link } from "react-router-dom"
import { PageMeta } from "../components/PageMeta"
import { club } from "../content/site"

const links = [
  { to: "/our-club", label: "Our Club", detail: "Club overview, coaches, and how the program works." },
  { to: "/practices", label: "Practices", detail: "Practice information and schedule notes." },
  { to: "/tournaments", label: "Tournaments", detail: "Tournament schedule and event details." },
  { to: "/resources", label: "Resources", detail: "Equipment, etiquette, and learning links." },
  { to: "/faq", label: "FAQ", detail: "Common questions for families and athletes." },
  { to: "/contact", label: "Contact", detail: "Reach club leadership. Club contact to be confirmed." },
  { to: "/volunteer", label: "Volunteer", detail: "Adult volunteer opportunities and screening guidance." },
  { to: "/sponsors", label: "Sponsors", detail: "Sponsor details to be confirmed. No checkout on this page." },
] as const

/** Public information hub for the homepage FIND OUT MORE control. */
export function Information() {
  return (
    <div className="sw-page">
      <PageMeta
        title={`Information | ${club.name}`}
        description={`Club information for ${club.name}: practices, tournaments, resources, and contact paths.`}
      />
      <header className="ah">
        <p className="ah__eyebrow">{club.name}</p>
        <h1>Information</h1>
        <p>Find club pages for joining, schedules, resources, and support. Checkout and live payments stay off until approved.</p>
      </header>
      <ul className="info-hub">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>
              <span className="info-hub__label">{item.label}</span>
              <span className="info-hub__detail">{item.detail}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="info-hub__join">
        Ready to join? Start on <Link to="/our-club">Our Club</Link>. A dedicated How to Join page will replace that link when it is ready.
      </p>
    </div>
  )
}
