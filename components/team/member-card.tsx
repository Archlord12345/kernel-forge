import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Sticker } from '@/components/ui/sticker'
import type { TeamMember } from '@/lib/data/team'
import { cn } from '@/lib/utils'

const toneByPosition: Record<string, string> = {
  'Lead & Architecture': 'bg-forge',
  Frontend: 'bg-ember',
  Mobile: 'bg-creeper',
  'Backend & Data': 'bg-paper-2',
}

export function MemberCard({ member, hasProfile }: { member: TeamMember; hasProfile: boolean }) {
  const inner = (
    <>
      <div className={cn('relative border-b-2 border-ink p-4', toneByPosition[member.position] ?? 'bg-paper-2')}>
        <div className="halftone absolute inset-0 text-ink/10" aria-hidden="true" />
        <span className="relative mx-auto block aspect-square w-32 overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-hard-sm">
          <Avatar src={member.avatarUrl} name={member.name} className="transition-transform duration-500 group-hover:scale-110" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight">{member.name}</h3>
        <p className="mt-1 font-display text-sm font-bold text-forge-deep">{member.role}</p>
        <p className="mt-2 flex-1 text-sm leading-6 text-smoke">{member.focus}</p>
        <div className="mt-4 flex items-center gap-2 border-t-2 border-sand pt-4">
          <span className="inline-flex h-9 items-center rounded-lg border-2 border-ink bg-paper-2 px-2.5 font-display text-xs font-extrabold">{member.position}</span>
          {member.email && <a href={`mailto:${member.email}`} aria-label={`Écrire à ${member.name}`} className="press grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-paper text-ink shadow-hard-sm hover:bg-forge"><Mail className="h-4 w-4" /></a>}
          {hasProfile && <span className="ml-auto inline-flex items-center gap-1 font-display text-sm font-extrabold text-ink">Voir le CV <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>}
        </div>
      </div>
    </>
  )

  if (hasProfile) {
    return (
      <Sticker as={Link} href={`/team/${member.id}`} hover className="group flex h-full flex-col overflow-hidden">
        {inner}
      </Sticker>
    )
  }
  return (
    <Sticker as="article" hover className="group flex h-full flex-col overflow-hidden">
      {inner}
    </Sticker>
  )
}
