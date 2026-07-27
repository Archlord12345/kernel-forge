'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '/team' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-lg transition-shadow">
              K
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground">Kernel Forge</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/admin"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg transition-shadow"
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
