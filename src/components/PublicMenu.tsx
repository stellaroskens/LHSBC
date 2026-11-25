import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { groupPublicNav, type PublicNavItem } from "../lib/nav/publicMenu"

/** Recruitment, sponsorship, and donation shortcuts shown above the categories. */
const QUICK_LINKS = [
  { to: "/our-club#how-to-join", label: "Join the club" },
  { to: "/sponsors", label: "Sponsor" },
  { to: "/donate", label: "Donate" },
] as const

const SUPPORT_EXTRA: PublicNavItem = { to: "/donate", label: "Donate" }

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 8" aria-hidden="true" focusable="false">
      <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type MenuProps = {
  id: string
  open: boolean
  items: readonly PublicNavItem[]
  onClose: () => void
}

/** Dropdown under the Menu button. Not modal: no backdrop, no scroll lock, the page stays put. */
export function PublicMenu({ open, ...props }: MenuProps) {
  return open ? <MenuPanel {...props} /> : null
}

function MenuPanel({ id, items, onClose }: Omit<MenuProps, "open">) {
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const groups = groupPublicNav(items).map((group) =>
    group.id === "support" && !group.links.some((link) => link.to === SUPPORT_EXTRA.to)
      ? { ...group, links: [...group.links, SUPPORT_EXTRA] }
      : group,
  )
  const [expanded, setExpanded] = useState<string | undefined>(
    () => groups.find((group) => group.links.some((link) => link.to === pathname))?.id ?? groups[0]?.id,
  )

  useEffect(() => {
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return
      event.preventDefault()
      onClose()
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Element | null
      if (!target || panelRef.current?.contains(target)) return
      if (target.closest(`[aria-controls="${id}"]`)) return
      onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [onClose, id])

  return (
    <div ref={panelRef} id={id} className="nav-dropdown">
      <nav aria-label="Primary">
        <ul className="nav-dropdown__quick" aria-label="Get involved">
          {QUICK_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} onClick={onClose}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {groups.map((group) => {
          const isOpen = expanded === group.id
          const listId = `${id}-${group.id}`
          return (
            <section key={group.id} className="nav-dropdown__group">
              <h2>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={listId}
                  onClick={() => setExpanded(isOpen ? undefined : group.id)}
                >
                  <span>{group.title}</span>
                  <ChevronIcon />
                </button>
              </h2>
              <ul id={listId} hidden={!isOpen}>
                {group.links.map((item) => (
                  <li key={item.to}>
                    {item.openInNewTab ? (
                      <a href={item.to} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                        {item.label}
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <NavLink to={item.to} end={item.end} onClick={onClose}>
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </nav>
    </div>
  )
}
