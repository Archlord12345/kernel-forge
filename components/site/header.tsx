'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, Send, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { NAV } from '@/lib/data/site'
import { cn } from '@/lib/utils'

const NAV_ICONS: Record<string, { icon: SpotIconName; tone: 'forge' | 'creeper' | 'paper' | 'ember' | 'paper-2' }> = {
  '/projects': { icon: 'repo', tone: 'ember' },
  '/services': { icon: 'maintenance', tone: 'paper-2' },
  '/team': { icon: 'collab', tone: 'creeper' },
  '/community': { icon: 'chat', tone: 'forge' },
  '/about': { icon: 'innovation', tone: 'paper' },
}

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`)

export function Header() {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={cn('sticky top-0 z-50 border-b-2 border-ink bg-paper/92 backdrop-blur-xl transition-shadow duration-300', scrolled && 'shadow-[0_6px_0_0_var(--color-ink)]')}>
      <div className="forge-line h-[3px] w-full" aria-hidden="true" />
      <nav className="wrap flex h-[4.25rem] items-center justify-between gap-4" aria-label="Navigation principale">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Kernel Forge, accueil">
          <span className="sticker-sm sticker-forge relative grid h-11 w-11 place-items-center overflow-hidden bg-paper transition-transform duration-300 group-hover:-rotate-6">
            <Image src="/kernel-forge-mascot.webp" alt="" width={44} height={44} priority className="h-full w-full object-cover object-top" />
          </span>
          <span className="font-display text-[1.15rem] font-extrabold leading-none tracking-tight">
            Kernel <span className="text-forge">Forge</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn('relative inline-flex h-10 items-center rounded-xl px-3.5 font-display text-[15px] font-bold tracking-tight transition-colors', active ? 'text-ink' : 'text-smoke hover:bg-ink/5 hover:text-ink')}
                >
                  {item.name}
                  {active && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-forge" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
          </div>
          <div className="hidden sm:block">
            <Button href="/contact" variant="ink" size="sm" className="shine">
              <Send className="h-4 w-4 text-ember" /> Nous contacter
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="press sticker-sm grid h-10 w-10 place-items-center bg-paper text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            key="menu"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-t-2 border-ink bg-paper lg:hidden"
          >
            <div className="wrap flex max-h-[calc(100dvh-4.5rem)] flex-col gap-2 overflow-y-auto py-4">
              {[{ name: 'Accueil', href: '/' }, ...NAV].map((item, index) => {
                const meta = NAV_ICONS[item.href]
                const active = item.href === '/' ? pathname === '/' : isActive(pathname, item.href)
                return (
                  <motion.div key={item.href} initial={reduced ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * index, duration: 0.3 }}>
                    <Link href={item.href} aria-current={active ? 'page' : undefined} className={cn('group flex items-center gap-3 rounded-2xl border-2 px-3 py-2.5 font-display text-lg font-bold transition-colors', active ? 'border-ink bg-forge/15' : 'border-transparent hover:border-ink hover:bg-paper-2')}>
                      {meta ? <IconTile name={meta.icon} tone={meta.tone} size="sm" /> : <span className="sticker-sm grid h-11 w-11 place-items-center bg-paper"><Image src="/kernel-forge-mascot.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-lg object-cover object-top" /></span>}
                      <span className="flex-1">{item.name}</span>
                      <ArrowUpRight className="h-4 w-4 text-smoke transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forge-deep" />
                    </Link>
                  </motion.div>
                )
              })}
              <div className="mt-2 grid gap-2 border-t-2 border-sand pt-4 sm:grid-cols-2">
                <Button href="/contact" variant="forge" className="shine w-full"><Send className="h-4 w-4" /> Nous contacter</Button>
                <WhatsAppButton className="w-full">Rejoindre le WhatsApp</WhatsAppButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
