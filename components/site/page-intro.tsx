import type { ReactNode } from 'react'
import { Cog } from 'lucide-react'
import { cn } from '@/lib/utils'

type PageIntroProps = {
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  tone?: 'ink' | 'paper'
  compact?: boolean
}

/** Bandeau d'ouverture des pages intérieures : titre, chapeau, actions, et une image à côté. */
export function PageIntro({ title, lead, children, aside, tone = 'ink', compact = false }: PageIntroProps) {
  const dark = tone === 'ink'
  return (
    <section className={cn('relative overflow-hidden border-b-2 border-ink', dark ? 'bg-ink text-paper' : 'bg-paper-2 text-ink')}>
      {dark && <div className="forge-grid absolute inset-0" aria-hidden="true" />}
      <div className={cn('glow-orb -left-32 -top-32 h-[28rem] w-[28rem] animate-drift', dark ? 'bg-forge/30' : 'bg-forge/20')} aria-hidden="true" />
      <div className={cn('glow-orb -bottom-40 right-0 h-[24rem] w-[24rem] animate-drift-2', dark ? 'bg-creeper/20' : 'bg-creeper/15')} aria-hidden="true" />
      <div className={cn('halftone absolute -right-10 top-10 h-56 w-56 rounded-full', dark ? 'text-paper/15' : 'text-ink/15')} aria-hidden="true" />
      <Cog className={cn('absolute -bottom-20 -right-16 h-72 w-72 animate-spin-slow', dark ? 'text-paper/[0.05]' : 'text-ink/[0.05]')} aria-hidden="true" />

      <div className={cn('wrap relative grid items-center gap-10', aside ? 'lg:grid-cols-[1.15fr_.85fr]' : '', compact ? 'py-14 md:py-20' : 'py-20 md:py-28')}>
        <div>
          <h1 className="max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
          {lead && <p className={cn('mt-6 max-w-2xl text-lg leading-8 sm:text-xl', dark ? 'text-sand/85' : 'text-smoke')}>{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside && <div className="relative mx-auto w-full max-w-md lg:max-w-none">{aside}</div>}
      </div>
    </section>
  )
}
