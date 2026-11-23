import { Link } from "react-router-dom"
import { club } from "../content/site"

type BrandWordmarkProps = {
  compact?: boolean
  asLink?: boolean
  className?: string
}

/** Temporary text mark until approved LHSBC artwork is supplied. */
export function BrandWordmark({ compact = false, asLink = false, className = "" }: BrandWordmarkProps) {
  const body = (
    <span className={`brand-wordmark${compact ? " brand-wordmark--compact" : ""}${className ? ` ${className}` : ""}`}>
      <span className="brand-wordmark__short" aria-hidden={compact ? undefined : true}>
        {club.shortName}
      </span>
      {compact ? null : <span className="brand-wordmark__full">{club.name}</span>}
      {compact ? <span className="visually-hidden">{club.name}</span> : null}
    </span>
  )
  if (asLink) {
    return (
      <Link className="brand-wordmark-link" to="/" aria-label={club.name}>
        {body}
      </Link>
    )
  }
  return body
}
