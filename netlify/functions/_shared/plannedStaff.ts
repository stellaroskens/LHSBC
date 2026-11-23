/** Keep in sync with src/lib/auth/staffRoster.ts — usernames/roles only, never invent emails. */
export type PlannedStaffMember = {
  username: string
  displayName: string
  role: "coach" | "team_administrator"
  title: string
}

export const PLANNED_STAFF: readonly PlannedStaffMember[] = [
  {
    username: "cmeredith",
    displayName: "Coach information to be confirmed",
    role: "coach",
    title: "Coach",
  },
  {
    username: "cbreshears",
    displayName: "Coach information to be confirmed",
    role: "coach",
    title: "Coach",
  },
  {
    username: "mfisher",
    displayName: "Club administrator to be confirmed",
    role: "team_administrator",
    title: "Team Administrator",
  },
] as const

export function findPlannedStaffByUsername(username: string): PlannedStaffMember | undefined {
  const normalized = username.trim().toLowerCase()
  return PLANNED_STAFF.find((member) => member.username === normalized)
}
