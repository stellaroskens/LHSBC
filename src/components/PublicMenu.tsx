import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { groupPublicNav, type PublicNavItem } from "../lib/nav/publicMenu"

/** Recruitment, sponsorship, and donation shortcuts shown above the categories. */
const QUICK_LINKS = [
  { to: "/our-club#how-to-join", label: "Join the club" },
  { to: "/sponsors", label: "Sponsor" },
  { to: "/donate", label: "Donate" },
] as const

const SUPPORT_EXTRA: PublicNavItem = { to: "/donate", label: "Donate" }
const MODE_KEY = "lhsbc-menu-mode"
const COMPACT_QUERY = "(min-width: 761px)"
const FLYOUT_CLOSE_DELAY = 180

type MenuMode = "full" | "compact"
type MenuGroup = { id: string; title: string; links: PublicNavItem[] }

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 8" aria-hidden="true" focusable="false">
      <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CollapseIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path d="M7.5 2 3.5 6l4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GroupIcon({ id }: { id: string }) {
  const paths: Record<string, ReactNode> = {
    involved: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />,
    overview: (
      <>
        <path d="M4 10.5 12 4l8 6.5" />
        <path d="M6 9v10h12V9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
    team: (
      <>
        <rect x="4" y="5.5" width="16" height="14" rx="2" />
        <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
      </>
    ),
    support: <path d="M12 19.5s-7-4.3-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.1c0 5.1-7 9.4-7 9.4z" />,
    resources: (
      <>
        <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4H19v14H6.5A1.5 1.5 0 0 0 5 19.5z" />
        <path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 8h6" />
      </>
    ),
  }
  return (
    <svg className="nav-menu__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[id] ?? <circle cx="12" cy="12" r="7" />}
      </g>
    </svg>
  )
}

function MenuLink({ item, onClose }: { item: PublicNavItem; onClose: () => void }) {
  if (item.openInNewTab) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" onClick={onClose}>
        {item.label}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    )
  }
  return (
    <NavLink to={item.to} end={item.end} onClick={onClose}>
      {item.label}
    </NavLink>
  )
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const list = window.matchMedia(query)
    const update = () => setMatches(list.matches)
    list.addEventListener("change", update)
    return () => list.removeEventListener("change", update)
  }, [query])
  return matches
}

function storedMode(): MenuMode {
  try {
    return window.sessionStorage.getItem(MODE_KEY) === "compact" ? "compact" : "full"
  } catch {
    return "full"
  }
}

type MenuProps = {
  id: string
  open: boolean
  items: readonly PublicNavItem[]
  onClose: () => void
}

/** Panel under the Menu button. Not modal: no backdrop, no scroll lock, the page stays put. */
export function PublicMenu({ open, ...props }: MenuProps) {
  return open ? <MenuPanel {...props} /> : null
}

function MenuPanel({ id, items, onClose }: Omit<MenuProps, "open">) {
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const compactAllowed = useMediaQuery(COMPACT_QUERY)
  const [preferredMode, setPreferredMode] = useState<MenuMode>(storedMode)
  const mode: MenuMode = compactAllowed ? preferredMode : "full"
  const [flyout, setFlyout] = useState<string | null>(null)

  const groups: MenuGroup[] = groupPublicNav(items).map((group) =>
    group.id === "support" && !group.links.some((link) => link.to === SUPPORT_EXTRA.to)
      ? { ...group, links: [...group.links, SUPPORT_EXTRA] }
      : group,
  )
  const currentGroup = groups.find((group) => group.links.some((link) => link.to === pathname))?.id
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set())

  const changeMode = useCallback((next: MenuMode) => {
    setPreferredMode(next)
    setFlyout(null)
    try {
      window.sessionStorage.setItem(MODE_KEY, next)
    } catch {
      /* Private browsing can refuse storage; the choice then lasts until the menu closes. */
    }
  }, [])

  useEffect(() => {
    panelRef.current?.querySelector<HTMLElement>("a, .nav-rail__icon")?.focus()
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || event.defaultPrevented) return
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
    <div ref={panelRef} id={id} className={`nav-dropdown nav-dropdown--${mode}`}>
      {compactAllowed ? (
        <button
          type="button"
          className="nav-dropdown__mode"
          aria-label={mode === "full" ? "Collapse menu to icons" : "Expand full menu"}
          aria-pressed={mode === "compact"}
          onClick={() => changeMode(mode === "full" ? "compact" : "full")}
        >
          <CollapseIcon />
        </button>
      ) : null}
      {mode === "full" ? (
        <FullMenu id={id} groups={groups} currentGroup={currentGroup} collapsed={collapsed} setCollapsed={setCollapsed} onClose={onClose} />
      ) : (
        <CompactMenu id={id} groups={groups} currentGroup={currentGroup} flyout={flyout} setFlyout={setFlyout} onClose={onClose} />
      )}
    </div>
  )
}

function FullMenu({
  id,
  groups,
  currentGroup,
  collapsed,
  setCollapsed,
  onClose,
}: {
  id: string
  groups: MenuGroup[]
  currentGroup: string | undefined
  collapsed: Set<string>
  setCollapsed: (update: (current: Set<string>) => Set<string>) => void
  onClose: () => void
}) {
  return (
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
        const isOpen = !collapsed.has(group.id)
        const listId = `${id}-${group.id}`
        return (
          <section key={group.id} className={`nav-dropdown__group${group.id === currentGroup ? " is-current" : ""}`}>
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={listId}
                onClick={() =>
                  setCollapsed((current) => {
                    const next = new Set(current)
                    if (next.has(group.id)) next.delete(group.id)
                    else next.add(group.id)
                    return next
                  })
                }
              >
                <GroupIcon id={group.id} />
                <span>{group.title}</span>
                <ChevronIcon />
              </button>
            </h2>
            <ul id={listId} className="nav-tree" hidden={!isOpen}>
              {group.links.map((item) => (
                <li key={item.to}>
                  <MenuLink item={item} onClose={onClose} />
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </nav>
  )
}

function CompactMenu({
  id,
  groups,
  currentGroup,
  flyout,
  setFlyout,
  onClose,
}: {
  id: string
  groups: MenuGroup[]
  currentGroup: string | undefined
  flyout: string | null
  setFlyout: (value: string | null) => void
  onClose: () => void
}) {
  const closeTimer = useRef<number | undefined>(undefined)
  const pointerKind = useRef("")
  const railGroups: MenuGroup[] = [
    { id: "involved", title: "Get involved", links: QUICK_LINKS.map((item) => ({ to: item.to, label: item.label })) },
    ...groups,
  ]

  const cancelClose = () => window.clearTimeout(closeTimer.current)
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setFlyout(null), FLYOUT_CLOSE_DELAY)
  }
  useEffect(() => cancelClose, [])

  function focusFirstLink(groupId: string) {
    requestAnimationFrame(() => document.getElementById(`${id}-fly-${groupId}`)?.querySelector<HTMLElement>("a")?.focus())
  }

  function onItemKeyDown(event: ReactKeyboardEvent<HTMLLIElement>, groupId: string) {
    if (event.key === "Escape" && flyout === groupId) {
      event.preventDefault()
      event.nativeEvent.preventDefault()
      setFlyout(null)
      document.getElementById(`${id}-btn-${groupId}`)?.focus()
    } else if (event.key === "ArrowDown" && (event.target as HTMLElement).classList.contains("nav-rail__icon")) {
      event.preventDefault()
      setFlyout(groupId)
      focusFirstLink(groupId)
    }
  }

  return (
    <nav aria-label="Primary" className="nav-rail">
      <ul>
        {railGroups.map((group) => {
          const isOpen = flyout === group.id
          const flyId = `${id}-fly-${group.id}`
          return (
            <li
              key={group.id}
              className={`nav-rail__item${group.id === currentGroup ? " is-current" : ""}`}
              onPointerEnter={(event) => {
                if (event.pointerType !== "mouse") return
                cancelClose()
                setFlyout(group.id)
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") scheduleClose()
              }}
              onFocus={() => {
                cancelClose()
                if (flyout !== null && flyout !== group.id) setFlyout(group.id)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null) && flyout === group.id) setFlyout(null)
              }}
              onKeyDown={(event) => onItemKeyDown(event, group.id)}
            >
              <button
                id={`${id}-btn-${group.id}`}
                type="button"
                className="nav-rail__icon"
                aria-label={group.title}
                aria-expanded={isOpen}
                aria-controls={flyId}
                onPointerDown={(event) => {
                  pointerKind.current = event.pointerType
                }}
                onClick={(event) => {
                  const hoverClick = event.detail > 0 && pointerKind.current === "mouse"
                  pointerKind.current = ""
                  const opening = hoverClick || !isOpen
                  setFlyout(opening ? group.id : null)
                  if (opening && event.detail === 0) focusFirstLink(group.id)
                }}
              >
                <GroupIcon id={group.id} />
              </button>
              <span className="nav-rail__tip" aria-hidden="true">
                {group.title}
              </span>
              <div id={flyId} className="nav-flyout" hidden={!isOpen}>
                <ul className="nav-tree" aria-label={group.title}>
                  {group.links.map((item) => (
                    <li key={item.to}>
                      <MenuLink item={item} onClose={onClose} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
