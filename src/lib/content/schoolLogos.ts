/** Legacy Albany club mark path kept on disk for review; not used in public UI. */
export const AHSB_LOGO = "/images/schools/ahsb-main-logo.png"

/** Neutral artwork while school marks are under review. */
export const PLACEHOLDER_MARK = "/images/bowler-silhouette.svg"

export const SCHOOL_IDS = ["lebanon"] as const
export type SchoolId = (typeof SCHOOL_IDS)[number]
export type LogoStyle = "full" | "mark"

export const SCHOOLS: Record<
  SchoolId,
  { label: string; full: string; mark: string; fullAlt: string; markAlt: string }
> = {
  lebanon: {
    label: "Lebanon",
    full: "/images/schools/lebanon-logo.png",
    mark: "/images/schools/lebanon-mark.png",
    fullAlt: "Lebanon bowling logo",
    markAlt: "Lebanon mark",
  },
}

/** Albany school mark paths preserved on disk for migration review; not offered in public filters. */
export const LEGACY_SCHOOL_MARKS = {
  "south-albany": {
    label: "South Albany",
    full: "/images/schools/south-albany-logo.png",
    mark: "/images/schools/south-albany-mark.png",
  },
  "west-albany": {
    label: "West Albany",
    full: "/images/schools/west-albany-logo.png",
    mark: "/images/schools/west-albany-mark.png",
  },
} as const

export function schoolLogo(school: SchoolId, style: LogoStyle): { src: string; alt: string } {
  const entry = SCHOOLS[school]
  return style === "mark" ? { src: entry.mark, alt: entry.markAlt } : { src: entry.full, alt: entry.fullAlt }
}
