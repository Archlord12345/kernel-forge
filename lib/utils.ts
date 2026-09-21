export type ClassValue = string | false | null | undefined

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ')
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}
