import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { siteConnections } from "../content/siteConnections"

type PageMetaProps = {
  title: string
  description: string
  index?: boolean
}

function setContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content)
}

function setNamedMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement("meta")
    meta.setAttribute("name", name)
    document.head.appendChild(meta)
  }
  meta.setAttribute("content", content)
}

const PRIVATE_PREFIXES = ["/admin", "/coach", "/team-administrator", "/staff", "/sign-in", "/family", "/api"]

function isPublicPath(pathname: string) {
  return !PRIVATE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

function canonicalHref(pathname: string): string | null {
  const website = siteConnections.sharing.publicWebsiteUrl
  if (!website || !isPublicPath(pathname)) return null
  const origin = new URL(website).origin
  return pathname === "/" ? `${origin}/` : `${origin}${pathname}`
}

function setCanonicalAndOgUrl(href: string | null) {
  document.querySelector('link[rel="canonical"]')?.remove()
  document.querySelector('meta[property="og:url"]')?.remove()
  if (!href) return
  const link = document.createElement("link")
  link.rel = "canonical"
  link.href = href
  document.head.appendChild(link)
  const meta = document.createElement("meta")
  meta.setAttribute("property", "og:url")
  meta.setAttribute("content", href)
  document.head.appendChild(meta)
}

/**
 * Updates the tab title, description, and public canonical / Open Graph URL after navigation.
 * The canonical host is the published website URL. Private routes do not receive one.
 */
export function PageMeta({ title, description, index = true }: PageMetaProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:title"]', title)
    setContent('meta[property="og:description"]', description)
    setNamedMeta("robots", index ? "index, follow" : "noindex, nofollow")
    setCanonicalAndOgUrl(index ? canonicalHref(pathname) : null)
  }, [title, description, index, pathname])

  return null
}
