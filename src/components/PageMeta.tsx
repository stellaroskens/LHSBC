import { useEffect } from "react"

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

function clearCanonicalAndOgUrl() {
  document.querySelector('link[rel="canonical"]')?.remove()
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.remove()
}

/**
 * Updates the tab title and description/Open Graph title tags after navigation.
 * Production domain is unset for this migration baseline, so canonical and og:url are omitted.
 */
export function PageMeta({ title, description, index = true }: PageMetaProps) {
  useEffect(() => {
    document.title = title
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:title"]', title)
    setContent('meta[property="og:description"]', description)
    setNamedMeta("robots", index ? "index, follow" : "noindex, nofollow")
    clearCanonicalAndOgUrl()
  }, [title, description, index])

  return null
}
