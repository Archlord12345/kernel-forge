export const pathnames = {
  '/': '/',
  '/projects': '/projects',
  '/team': '/team',
  '/community': '/community',
  '/about': '/about',
  '/contact': '/contact',
  '/admin': '/admin',
  '/admin/projects': '/admin/projects',
  '/admin/messages': '/admin/messages',
  '/admin/team': '/admin/team',
  '/admin/settings': '/admin/settings',
} as const

export type Pathnames = typeof pathnames
