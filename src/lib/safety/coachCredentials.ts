/**
 * Public USBC Registered Volunteer credentials for coach profiles.
 *
 * A record may be added only after an authorized administrator has reviewed the coach's
 * actual USBC Athlete Safety status, the coach has consented to publication, and any
 * credential image has been redacted. Never record screening reports, SSNs, or birth dates.
 */

export type CoachCredentialRecord = {
  /** Date (YYYY-MM-DD) an authorized administrator confirmed the credential on USBC. */
  reviewedOn: string
  /** Date (YYYY-MM-DD) the current background screen or SafeSport training expires, whichever is first. */
  expiresOn: string
  /** The coach agreed to public display of the credential. */
  publicationConsent: true
  /** Optional redacted credential image under /public, approved for display. */
  imageSrc?: string | null
}

export type CoachCredentialState =
  | { status: "verified"; reviewedOn: string; expiresOn: string; imageSrc: string | null }
  | { status: "expired"; expiresOn: string }
  | { status: "unverified" }

export const COACH_CREDENTIALS: Record<string, CoachCredentialRecord | null> = {
  "cliff-meredith": null,
  "chris-breshears": null,
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

function isoDate(value: unknown): string | null {
  if (typeof value !== "string" || !ISO_DATE.test(value)) return null
  const parsed = new Date(`${value}T00:00:00Z`)
  return Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value ? null : value
}

function todayIso(now: Date): string {
  return now.toISOString().slice(0, 10)
}

export function isPlaceholderCoachName(name: string): boolean {
  return !name.trim() || /to be confirmed/i.test(name)
}

export function coachCredentialState(
  record: CoachCredentialRecord | null | undefined,
  coachName: string,
  now: Date = new Date(),
): CoachCredentialState {
  if (!record || isPlaceholderCoachName(coachName)) return { status: "unverified" }
  const reviewedOn = isoDate(record.reviewedOn)
  const expiresOn = isoDate(record.expiresOn)
  if (!reviewedOn || !expiresOn || record.publicationConsent !== true) return { status: "unverified" }
  const today = todayIso(now)
  if (reviewedOn > today || reviewedOn > expiresOn) return { status: "unverified" }
  if (expiresOn < today) return { status: "expired", expiresOn }
  const imageSrc =
    typeof record.imageSrc === "string" && record.imageSrc.startsWith("/") && !record.imageSrc.startsWith("//")
      ? record.imageSrc
      : null
  return { status: "verified", reviewedOn, expiresOn, imageSrc }
}
