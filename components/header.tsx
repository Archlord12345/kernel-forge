'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitBranch, ExternalLink } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Projets', href: '/projects' },
  { name: 'Équipe', href: '/team' },
  { name: 'Communauté', href: '/community' },
  { name: 'À propos', href: '/about' },
]

export function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd4] bg-[#fffaf0]/90 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border-2 border-[#ff7626] bg-[#17120f] shadow-[3px_3px_0_#ff7626] transition-transform group-hover:-translate-y-0.5">
            <img src="/kernel-forge-mascot.jpeg" alt="Kernel Forge" className="h-full w-full object-cover object-top" />
          </span>
          <span className="hidden leading-none sm:block"><strong className="block text-sm font-black uppercase tracking-[0.12em] text-[#17120f]">Kernel</strong><strong className="block text-sm font-black uppercase tracking-[0.12em] text-[#e95716]">Forge</strong></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={`text-sm font-extrabold transition-colors ${pathname === item.href ? 'text-[#e95716]' : 'text-[#65584f] hover:text-[#17120f]'}`}>{item.name}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <a href="https://uniflow.kernelforge.codes/" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-xl border border-[#eadfd4] px-3 py-2 text-xs font-extrabold text-[#65584f] transition hover:border-[#56b88b] hover:text-[#17120f] xl:inline-flex">UniFlow <ExternalLink className="h-3.5 w-3.5" /></a>
          <a href="https://github.com/KERNEL-FORGE-G" target="_blank" rel="noreferrer" aria-label="GitHub Kernel Forge" className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#eadfd4] text-[#65584f] transition hover:border-[#17120f] hover:bg-[#17120f] hover:text-white"><GitBranch className="h-4 w-4" /></a>
          <ThemeToggle />
          <Link href="/contact" className="hidden rounded-xl bg-[#17120f] px-4 py-2.5 text-xs font-black text-white shadow-[0_3px_0_#e95716] transition hover:-translate-y-0.5 sm:inline-flex">Nous contacter</Link>
        </div>
      </nav>
    </header>
  )
}
