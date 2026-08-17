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
    <header className="border-b-2 border-[#e5e5e5] bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/kernel-forge-logo.png" 
              alt="Kernel Forge Logo" 
              className="h-11 w-11 rounded-xl border-2 border-[var(--color-lingot-lime)] object-contain p-1 transition-transform group-hover:scale-110"
            />
            <span className="font-black text-lg hidden sm:inline text-primary tracking-wide">Kernel Forge</span>
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
