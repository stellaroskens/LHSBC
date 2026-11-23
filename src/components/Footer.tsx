import { NavLink } from "react-router-dom"
import { BrandWordmark } from "./BrandWordmark"
import { SocialConnections } from "./SocialConnections"
import { club, nav } from "../content/site"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <BrandWordmark />
          <p className="footer-name">{club.name}</p>
          <p>{club.place}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {nav.filter((item) => !item.hidden).map((item) => (
              <li key={item.to}>
                {item.openInNewTab ? (
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <NavLink to={item.to} end={item.end}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          {club.email ? (
            <p>
              <a href={`mailto:${club.email}`}>{club.email}</a>
            </p>
          ) : (
            <p>Club contact to be confirmed</p>
          )}
          <p>
            <NavLink to="/donate">Donation page. Checkout is not live.</NavLink>
          </p>
          {club.social.length > 0 ? (
            <ul className="footer-links">
              {club.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Social links to be confirmed</p>
          )}
          {club.schools.length > 0 ? (
            <p className="footer-schools">
              {club.schools.map((school) => (
                <span key={school.name}>{school.name}</span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
      <div className="wrap">
        <SocialConnections />
      </div>
    </footer>
  )
}
