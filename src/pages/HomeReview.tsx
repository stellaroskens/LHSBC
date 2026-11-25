import { Link } from "react-router-dom"
import { PageMeta } from "../components/PageMeta"
import { fundraisers } from "../content/fundraisers"
import { matchesActiveFundraiser } from "../lib/events/fundraiserTiming"
import { homeHeroImage } from "../content/publicImages"
import { library, pageBodies, pages, practiceTournaments, seasonRegistrationClosed, venues } from "../content/site"
import { eventIsUpcoming } from "../lib/content/bowlerStats"

const LANE_PLATE = "/brand/lhsbc/lhsbc-hero-lanes.webp"
const MAIN_LOGO = "/brand/lhsbc/lhsbc-main-logo-web.png"
const EVENT_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function CalendarMark() {
  return (
    <svg className="home-events__calendar" viewBox="0 0 88 88" aria-hidden="true">
      <rect x="8" y="16" width="72" height="64" rx="10" fill="#081f46" />
      <rect x="8" y="16" width="72" height="20" rx="10" fill="#e30616" />
      <rect x="8" y="28" width="72" height="8" fill="#e30616" />
      <rect x="22" y="8" width="8" height="16" rx="4" fill="#ffc400" />
      <rect x="58" y="8" width="8" height="16" rx="4" fill="#ffc400" />
      <g fill="#fffdf8">
        <rect x="20" y="46" width="12" height="10" rx="2" />
        <rect x="38" y="46" width="12" height="10" rx="2" />
        <rect x="56" y="46" width="12" height="10" rx="2" />
        <rect x="20" y="62" width="12" height="10" rx="2" />
        <rect x="38" y="62" width="12" height="10" rx="2" />
        <rect x="56" y="62" width="12" height="10" rx="2" />
      </g>
    </svg>
  )
}

function JoinCheck() {
  return (
    <svg className="club-join__mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#e30616" />
      <path d="M8 16.5 13.2 22 24 10" fill="none" stroke="#fffdf8" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HighlightStar() {
  return (
    <svg className="club-join__mark" viewBox="0 0 32 32" aria-hidden="true">
      <polygon fill="#e30616" points="16,3 19.6,12.2 29,12.6 21.6,18.6 24.2,28 16,22.8 7.8,28 10.4,18.6 3,12.6 12.4,12.2" />
    </svg>
  )
}

function BannerStar() {
  return (
    <svg className="support-banner__star" viewBox="0 0 64 64" aria-hidden="true">
      <polygon
        fill="#ffc400"
        points="32,2 37.2,22.4 58.4,11.6 43.6,29.2 62,32 43.6,34.8 58.4,52.4 37.2,41.6 32,62 26.8,41.6 5.6,52.4 20.4,34.8 2,32 20.4,29.2 5.6,11.6 26.8,22.4"
      />
    </svg>
  )
}

function BannerMotif() {
  return (
    <svg className="support-banner__motif" viewBox="0 0 240 150" aria-hidden="true">
      <path d="M-8 34c48 14 86 12 132-6" fill="none" stroke="#d5e4ff" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <path d="M4 58c42 12 78 10 118-8" fill="none" stroke="#9db7e8" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <path d="M18 82c36 8 64 6 96-10" fill="none" stroke="#d5e4ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <g transform="translate(78 8)">
        <path d="M28 4c8 0 13 6 12 14-.5 4-3 6-4 10 8 6 14 16 12 32-1 13-6 22-13 24H21c-7-2-12-11-13-24-2-16 4-26 12-32-1-4-3.5-6-4-10C15 10 20 4 28 4z" fill="#fffdf8" />
        <rect x="14" y="34" width="28" height="7" fill="#e30616" />
        <rect x="14" y="42" width="28" height="2.5" fill="#ffc400" />
      </g>
      <g transform="translate(118 18) scale(0.86)">
        <path d="M28 4c8 0 13 6 12 14-.5 4-3 6-4 10 8 6 14 16 12 32-1 13-6 22-13 24H21c-7-2-12-11-13-24-2-16 4-26 12-32-1-4-3.5-6-4-10C15 10 20 4 28 4z" fill="#fffdf8" />
        <rect x="14" y="34" width="28" height="7" fill="#e30616" />
        <rect x="14" y="42" width="28" height="2.5" fill="#ffc400" />
      </g>
      <g transform="translate(148 46)">
        <circle cx="46" cy="46" r="44" fill="#c40814" />
        <circle cx="46" cy="46" r="44" fill="none" stroke="#ffc400" strokeWidth="3" />
        <ellipse cx="30" cy="28" rx="12" ry="8" fill="#fff" opacity="0.28" />
        <circle cx="32" cy="36" r="7" fill="#1a120e" />
        <circle cx="52" cy="32" r="7" fill="#1a120e" />
        <circle cx="42" cy="52" r="8" fill="#1a120e" />
      </g>
    </svg>
  )
}

const QUICK_LINKS = [
  { to: "/practices", label: "Schedule", icon: "/brand/lhsbc/icons/icon-calendar.svg" },
  { to: "/tournaments", label: "Tournaments", icon: "/brand/lhsbc/icons/deco-trophy.svg" },
  { to: "/meet-the-bowlers", label: "Team", icon: "/brand/lhsbc/icons/icon-community.svg" },
  { to: "/resources", label: "Resources", icon: "/brand/lhsbc/icons/icon-bowling-ball.svg" },
  { to: "/sponsors", label: "Sponsors & Fundraising", icon: "" },
] as const

function HandshakeMark() {
  return (
    <svg className="quick-links__mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="4" y="24" width="18" height="14" rx="3" fill="#fffdf8" stroke="#081f46" strokeWidth="3" />
      <rect x="42" y="24" width="18" height="14" rx="3" fill="#fffdf8" stroke="#081f46" strokeWidth="3" />
      <path d="M22 30c5 1 8 6 10 8 2-2 5-7 10-8" fill="none" stroke="#081f46" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 40c3 5 9 5 12 0" fill="none" stroke="#e30616" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function QuickLinks() {
  return (
    <nav className="quick-links" aria-label="Quick links">
      <ul>
        {QUICK_LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>
              {item.icon ? <img src={item.icon} alt="" width={128} height={128} /> : <HandshakeMark />}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function HomeSponsors() {
  return (
    <section className="home-sponsors" aria-labelledby="home-sponsors-heading">
      <div className="home-sponsors__inner">
        <h2 id="home-sponsors-heading">
          <span aria-hidden="true">★</span>
          Support Our Bowling Club
          <span aria-hidden="true">★</span>
        </h2>
        <div className="home-sponsors__panel">
          <div className="home-sponsors__intro">
            <img src="/brand/lhsbc/icons/deco-trophy.svg" alt="" width={128} height={128} />
            <p>Why sponsor our club?</p>
          </div>
          <ul>
            <li>Students build confidence, focus, and teamwork.</li>
            <li>Lebanon High School students are welcome at every skill level.</li>
            <li>Bowlers can represent Lebanon when tournament dates are posted.</li>
            <li>Sponsorship and donations stay separate. Checkout is not live.</li>
          </ul>
        </div>
        <p className="home-sponsors__actions">
          <Link to="/sponsors">Become a Sponsor</Link>
          <Link to="/fundraisers">Fundraising Opportunities</Link>
          <Link to={library.fundraisers.donateTo}>{library.fundraisers.donateButton}</Link>
        </p>
      </div>
    </section>
  )
}

function HomeEvents() {
  const today = new Date()
  const upcoming = practiceTournaments.filter((event) => eventIsUpcoming(event, today)).slice(0, 3)

  return (
    <section className="home-events" aria-labelledby="upcoming-events">
      <div className="home-events__panel">
        <h2 className="home-events__ribbon" id="upcoming-events">Upcoming Events</h2>
        <div className="home-events__row">
          <CalendarMark />
          {upcoming.length === 0 ? (
            <p className="home-events__empty">
              Upcoming practice and tournament dates will be posted here. Check back for updates!
            </p>
          ) : (
            <ul className="home-events__list">
              {upcoming.map((event) => {
                const venue = venues.find((item) => item.id === event.venueId)
                const when = `${EVENT_MONTHS[event.month - 1]} ${event.day}${event.year ? `, ${event.year}` : ""}`
                return (
                  <li key={event.id}>
                    <HighlightStar />
                    <Link to={`/tournaments#${event.id}`}>
                      {event.name} — {when}
                      {venue ? ` · ${venue.name}` : ""}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
          <Link className="home-events__schedule" to="/practices">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <polygon
                fill="#ffc400"
                stroke="#081f46"
                strokeWidth="3"
                points="50,4 61,22 82,14 74,35 96,42 76,52 90,72 66,68 62,90 50,72 38,90 34,68 10,72 24,52 4,42 26,35 18,14 39,22"
              />
            </svg>
            <span>View Full Schedule</span>
          </Link>
        </div>
        <p className="home-events__more">
          <Link to="/tournaments">Tournament details</Link>
        </p>
      </div>
    </section>
  )
}

export function HomeReview() {
  const catalogHero = homeHeroImage()
  void catalogHero
  const activeFundraisers = fundraisers.filter((event) => matchesActiveFundraiser(event.id, library.fundraisers.activeEvent))

  return (
    <article className="club-hero">
      <PageMeta title={pages.home.title} description={pages.home.description} />
      <div className="club-hero__stage">
        <img className="club-hero__lanes" src={LANE_PLATE} alt="" />
        <div className="club-hero__shade" />
        <div className="club-hero__grid">
          <img className="club-hero__logo" src={MAIN_LOGO} alt="Lebanon High School Bowling Club" width={1672} height={941} />
          <div className="club-hero__copy">
            <h1 className="club-hero__title">
              <span>High School</span>
              <span>Bowling</span>
              <span>at Lebanon</span>
            </h1>
            <section className="club-hero__tracker" aria-labelledby="fundraising-tracker">
              <h2 id="fundraising-tracker">Fundraising tracker</h2>
              <p className="club-hero__status">{library.fundraisers.hero}</p>
              <div className="club-hero__meter" aria-hidden="true">
                <span />
              </div>
              <p className="club-hero__checkout">Checkout is not live.</p>
              <Link className="club-hero__donate" to={library.fundraisers.donateTo}>
                Donate Now <span aria-hidden="true">›</span>
              </Link>
            </section>
          </div>
        </div>
      </div>
      <p className="visually-hidden">{pageBodies.home.hero.heading}</p>
      {activeFundraisers.length > 0 ? <p className="visually-hidden">{activeFundraisers.length} active fundraiser</p> : null}
      <section className="support-banner" aria-labelledby="support-our-team">
        <div className="support-banner__inner">
          <h2 className="support-banner__title" id="support-our-team">
            <span>Support</span>
            <span>Our Team!</span>
          </h2>
          <span className="support-banner__rule" aria-hidden="true" />
          <Link className="support-banner__offer" to="/sponsors">
            <BannerStar />
            <span>
              <strong>Become a Sponsor</strong>
              <span>Fuel our future with a sponsorship and make a lasting impact.</span>
            </span>
          </Link>
          <span className="support-banner__rule" aria-hidden="true" />
          <Link className="support-banner__offer" to="/fundraisers">
            <BannerStar />
            <span>
              <strong>Fundraising Opportunities</strong>
              <span>Help us with team equipment and tournament costs.</span>
            </span>
          </Link>
        </div>
        <BannerMotif />
      </section>
      <section className="club-join" aria-labelledby="why-join">
        <div className="club-join__grid">
          <article className="club-join__card">
            <div className="club-join__ribbon-wrap">
              <h2 className="club-join__ribbon" id="why-join">Why Join?</h2>
              <span className="club-join__rays" aria-hidden="true" />
            </div>
            <ul className="club-join__list">
              <li>
                <Link to="/our-club">
                  <JoinCheck />
                  Build Skills
                </Link>
              </li>
              <li>
                <Link to="/tournaments">
                  <JoinCheck />
                  Compete at Tournaments
                </Link>
              </li>
              <li>
                <Link to="/our-club">
                  <JoinCheck />
                  Make Friends
                </Link>
              </li>
              <li>
                <Link to="/meet-the-bowlers">
                  <JoinCheck />
                  Be Part of a Team
                </Link>
              </li>
            </ul>
          </article>
          <article className="club-join__card">
            <div className="club-join__ribbon-wrap">
              <h2 className="club-join__ribbon" id="club-highlights">Club Highlights</h2>
              <span className="club-join__rays" aria-hidden="true" />
            </div>
            <ul className="club-join__list">
              <li>
                <Link to="/our-club">
                  <HighlightStar />
                  Open to all Lebanon High School students
                </Link>
              </li>
              <li>
                <Link to="/our-club">
                  <HighlightStar />
                  All skill levels welcome
                </Link>
              </li>
              <li>
                <Link to="/meet-the-bowlers">
                  <HighlightStar />
                  Competitive and fun team environment
                </Link>
              </li>
              <li>
                <Link to="/practices">
                  <HighlightStar />
                  Learn, improve and represent Lebanon
                </Link>
              </li>
            </ul>
          </article>
        </div>
        <p className="club-join__note">
          <Link to="/our-club">{seasonRegistrationClosed.heading}</Link> Practice days and tournament dates are not posted yet.
        </p>
      </section>
      <HomeEvents />
      <QuickLinks />
      <HomeSponsors />
    </article>
  )
}
