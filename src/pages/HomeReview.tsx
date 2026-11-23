import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { PageMeta } from "../components/PageMeta"
import { PublicMenu } from "../components/PublicMenu"
import { fundraisers } from "../content/fundraisers"
import { matchesActiveFundraiser } from "../lib/events/fundraiserTiming"
import { homeHeroImage } from "../content/publicImages"
import { library, nav, pageBodies, pages } from "../content/site"

type Hit = {
  label: string
  to?: string
  menu?: "about" | "team" | "resources"
  top: string
  left: string
  width: string
  height: string
}

const hits: Hit[] = [
  { label: "Home", to: "/", top: "1.66%", left: "14.6%", width: "10.8%", height: "5.3%" },
  { label: "About", menu: "about", top: "1.66%", left: "25.4%", width: "11.5%", height: "5.3%" },
  { label: "Team", menu: "team", top: "1.66%", left: "37.1%", width: "9.5%", height: "5.3%" },
  { label: "Tournaments", to: "/tournaments", top: "1.66%", left: "46.5%", width: "14.5%", height: "5.3%" },
  { label: "Resources", menu: "resources", top: "1.66%", left: "61.2%", width: "13%", height: "5.3%" },
  { label: "Sponsors", to: "/sponsors", top: "1.66%", left: "74.2%", width: "11.5%", height: "5.3%" },
  { label: "Contact", to: "/contact", top: "1.66%", left: "86.5%", width: "11%", height: "5.3%" },
  { label: "Team News", to: "/meet-the-bowlers", top: "54.6%", left: "18%", width: "13%", height: "3.6%" },
  { label: "Tournaments", to: "/tournaments", top: "54.6%", left: "32%", width: "13%", height: "3.6%" },
  { label: "Resources", to: "/resources", top: "54.6%", left: "45.5%", width: "12%", height: "3.6%" },
  { label: "Sponsors", to: "/sponsors", top: "54.6%", left: "58%", width: "12%", height: "3.6%" },
  { label: "Get Involved", to: "/volunteer", top: "54.6%", left: "70.5%", width: "14%", height: "3.6%" },
  { label: "Recruitment Info", to: pageBodies.home.club.primaryTo, top: "91.2%", left: "17.1%", width: "18.6%", height: "5%" },
  { label: "Sponsor Information", to: "/sponsors", top: "91.2%", left: "41.4%", width: "23.6%", height: "5%" },
  { label: "Fundraising Ideas", to: "/fundraisers", top: "91.2%", left: "72.1%", width: "23.2%", height: "5%" },
]

const menus = {
  about: [
    { label: "Our Club", to: pageBodies.home.club.primaryTo },
    { label: "Practices", to: "/practices" },
    { label: "FAQ", to: "/faq" },
    { label: "Bowl-A-Thon", to: pageBodies.home.hero.buttonTo },
  ],
  team: [
    { label: "Meet the Bowlers", to: "/meet-the-bowlers" },
    { label: "Team Gear", to: "/team-gear" },
  ],
  resources: [{ label: "Bowling Resources", to: "/resources" }],
} as const

export function HomeReview() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<keyof typeof menus | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const closeMenu = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])
  const heroImage = homeHeroImage()
  void heroImage
  const activeFundraisers = fundraisers.filter((event) => matchesActiveFundraiser(event.id, library.fundraisers.activeEvent))

  useEffect(() => {
    if (!menu) return
    function onPointer(event: PointerEvent) {
      if (!stageRef.current?.contains(event.target as Node)) setMenu(null)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenu(null)
    }
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [menu])

  return (
    <div className="homepage-original" ref={stageRef}>
      <PageMeta title={pages.home.title} description={pages.home.description} />
      <h1 className="visually-hidden">{pageBodies.home.hero.heading}</h1>
      <img
        src="/assets/homepage-original-design.jpg"
        alt="Lebanon High School Bowling Club homepage"
        width={1024}
        height={842}
        className="homepage-original-design"
      />
      {hits.map((hit) =>
        hit.menu ? (
          <div key={hit.label} className="homepage-hit" style={{ top: hit.top, left: hit.left, width: hit.width, height: hit.height }}>
            <button
              type="button"
              className="homepage-hit__control"
              aria-expanded={menu === hit.menu}
              aria-label={hit.label}
              onClick={() => setMenu((current) => (current === hit.menu ? null : hit.menu!))}
            />
            {menu === hit.menu ? (
              <ul className="homepage-menu">
                {menus[hit.menu].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={() => setMenu(null)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : (
          <Link
            key={`${hit.label}-${hit.top}`}
            className="homepage-hit homepage-hit__control"
            style={{ top: hit.top, left: hit.left, width: hit.width, height: hit.height }}
            to={hit.to!}
            aria-label={hit.label}
          />
        ),
      )}
      {activeFundraisers.length > 0 ? <p className="visually-hidden">{activeFundraisers.length} active fundraiser</p> : null}
      <button
        ref={buttonRef}
        type="button"
        className="visually-hidden"
        aria-expanded={open}
        aria-controls="lhsbc-home-menu"
        onClick={() => (open ? closeMenu() : setOpen(true))}
      >
        All pages
      </button>
      <PublicMenu id="lhsbc-home-menu" open={open} items={nav.filter((item) => !item.hidden)} onClose={closeMenu} />
    </div>
  )
}
