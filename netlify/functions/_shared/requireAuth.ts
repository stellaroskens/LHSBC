import type { Context } from "@netlify/functions"
import { getUser, type User } from "@netlify/identity"
import {
  isSuperAdmin,
  normalizeEmail,
  parseEmailAllowlist,
  primaryStaffRole,
  rolesFromUser,
  type StaffRole,
} from "./roles.ts"

declare const Netlify: {
  env: {
    get(name: string): string | undefined
  }
}

export function isAdminAuthEnabledServer(): boolean {
  return Netlify.env.get("ADMIN_AUTH_ENABLED") === "true"
}

export function getAdminEmailAllowlist(): string[] {
  return parseEmailAllowlist(Netlify.env.get("ADMIN_EMAIL_ALLOWLIST"))
}

function json(status: number, body: Record<string, unknown>): Response {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  })
}

export function deniedResponse(status: 401 | 403, message: string, code: "unauthorized" | "forbidden"): Response {
  return json(status, {
    error: status === 401 ? "unauthorized" : "forbidden",
    message,
    code,
    commitSha: null,
  })
}

export type AuthFailure = { ok: false; response: Response }
export type AuthSuccess = {
  ok: true
  user: User
  roles: string[]
  email: string
  primaryRole: StaffRole
}
export type AuthResult = AuthSuccess | AuthFailure

function allowlistAllows(email: string): boolean {
  const allowlist = getAdminEmailAllowlist()
  // Fail closed when auth is enabled: allowlist must be configured.
  if (allowlist.length === 0) return false
  return allowlist.includes(normalizeEmail(email))
}

export async function requireEnabledStaffAuth(_context?: Context): Promise<AuthResult | AuthFailure> {
  if (!isAdminAuthEnabledServer()) {
    return {
      ok: false,
      response: json(503, {
        error: "unavailable",
        message: "Administrator authentication is not enabled.",
        code: "admin_auth_disabled",
      }),
    }
  }

  const user = await getUser() // Identity reads the current function request. Do not pass a user id.
  if (!user) {
    return {
      ok: false,
      response: json(401, { error: "unauthorized", message: "Sign in required." }),
    }
  }

  const roles = rolesFromUser(user)
  const primaryRole = primaryStaffRole(roles)
  if (!primaryRole) {
    return {
      ok: false,
      response: json(403, { error: "forbidden", message: "Staff role required." }),
    }
  }

  const email = user.email ?? ""
  if (!allowlistAllows(email) && primaryRole === "super_admin") {
    // Super admins must be on the allowlist. Other staff are invite-managed.
    return {
      ok: false,
      response: json(403, { error: "forbidden", message: "Account is not allowlisted for administrator access." }),
    }
  }

  return { ok: true, user, roles, email, primaryRole }
}

export async function requireSuperAdmin(context?: Context): Promise<AuthResult> {
  const result = await requireEnabledStaffAuth(context)
  if (!result.ok) return result
  if (!isSuperAdmin(result.roles)) {
    return {
      ok: false,
      response: json(403, { error: "forbidden", message: "super_admin role required." }),
    }
  }
  return result
}

export async function requireRole(required: StaffRole | StaffRole[]): Promise<AuthResult> {
  const needed = Array.isArray(required) ? required : [required]
  const result = await requireEnabledStaffAuth()
  if (!result.ok) return result
  if (isSuperAdmin(result.roles)) return result
  if (!needed.some((role) => result.roles.includes(role))) {
    return {
      ok: false,
      response: json(403, { error: "forbidden", message: `Required role: ${needed.join(" or ")}.` }),
    }
  }
  return result
}
