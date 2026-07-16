import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns true if `userPermissions` contains at least one of the `required` permissions.
 * Pass multiple required permissions to express OR logic (any one is enough).
 *
 * @example
 * hasPermission(user.permissions, PERMISSIONS.MANAGE_POIS, PERMISSIONS.MANAGE_ALL_POIS)
 */
export function hasPermission(
  userPermissions: string[] | undefined | null,
  ...required: string[]
): boolean {
  if (!userPermissions || required.length === 0) return false
  return required.some((p) => userPermissions.includes(p))
}

/**
 * Converts snake_case or camelCase field names into Title Case display text.
 *
 * Examples:
 *   "full_name"       → "Full Name"
 *   "createdAt"       → "Created At"
 *   "user_role_id"    → "User Role Id"
 *   "viewAuditLog"    → "View Audit Log"
 */
export function formatFieldName(value: string): string {
  return value
    // Insert a space before each uppercase letter in camelCase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Replace underscores/hyphens with spaces
    .replace(/[_-]+/g, ' ')
    // Capitalise the first letter of each word
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}
