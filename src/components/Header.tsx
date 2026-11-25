import { useCallback, useRef, useState } from "react"
import { nav } from "../content/site"
import { AccountButton } from "./header/AccountButton"
import { BurgerIcon } from "./header/icons"
import { PublicMenu } from "./PublicMenu"
import { SiteSearch } from "./header/SiteSearch"

export function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeMenu = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="topbar__menu">
          <button
            ref={buttonRef}
            type="button"
            className="topbar__pill topbar__toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => (open ? closeMenu() : setOpen(true))}
          >
            <BurgerIcon />
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <PublicMenu id="site-menu" open={open} items={nav.filter((item) => !item.hidden)} onClose={closeMenu} />
        </div>
        <span className="topbar__rule" aria-hidden="true" />
        <div className="topbar__cluster">
          <SiteSearch />
          <span className="topbar__rule" aria-hidden="true" />
          <AccountButton />
        </div>
      </div>
    </header>
  )
}
