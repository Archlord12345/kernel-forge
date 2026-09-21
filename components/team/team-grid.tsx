'use client'

import { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/primitives'
import { MemberCard } from '@/components/team/member-card'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { POSITION_BLURB, POSITION_ORDER, TEAM, groupByPosition, type Position, type TeamMember } from '@/lib/data/team'
import { isSupabaseConfigured, supabase, type Member } from '@/lib/supabase'
import { TEAM_PROFILES } from '@/lib/team-profiles'

const POSITION_ICONS: Record<Position, { icon: SpotIconName; tone: 'forge' | 'ember' | 'creeper' | 'paper-2' }> = {
  'Lead & Architecture': { icon: 'build', tone: 'forge' },
  Frontend: { icon: 'web', tone: 'ember' },
  Mobile: { icon: 'mobile', tone: 'creeper' },
  'Backend & Data': { icon: 'api', tone: 'paper-2' },
}

const PROFILE_IDS = new Set(TEAM_PROFILES.map((profile) => profile.id))

function fromMemberRow(row: Member): TeamMember | null {
  const profile = row.profile
  if (!profile?.full_name) return null
  const position = (POSITION_ORDER as string[]).includes(row.position) ? (row.position as Position) : 'Backend & Data'
  return { id: row.id, name: profile.full_name, role: profile.bio?.split('·')[0]?.trim() ?? position, position, focus: profile.bio?.split('·')[1]?.trim() ?? '', github: profile.github_username ?? '', avatarUrl: profile.avatar_url }
}

export function TeamGrid() {
  const [members, setMembers] = useState<TeamMember[]>(TEAM)
  const [loading, setLoading] = useState(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false
    supabase
      .from('members')
      .select('*, profile:user_id (username, full_name, avatar_url, bio, github_username, twitter_handle)')
      .order('order_priority', { ascending: true })
      .then(({ data, error }) => {
        if (cancelled) return
        if (error) console.error('Équipe : chargement Supabase impossible, données locales utilisées.', error)
        else {
          const mapped = ((data ?? []) as Member[]).map(fromMemberRow).filter((member): member is TeamMember => member !== null)
          if (mapped.length) setMembers(mapped)
        }
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="space-y-16">
      {loading && <p className="inline-flex items-center gap-2 font-display text-sm font-bold text-smoke"><LoaderCircle className="h-4 w-4 animate-spin text-forge" /> Synchronisation avec la base de données…</p>}
      {groupByPosition(members).map(({ position, members: group }) => (
        <section key={position} aria-labelledby={`pole-${position}`}>
          <div className="mb-7 flex items-center gap-4">
            <IconTile name={POSITION_ICONS[position].icon} tone={POSITION_ICONS[position].tone} size="md" wiggle={false} />
            <div>
              <h2 id={`pole-${position}`} className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{position}</h2>
              <p className="text-smoke">{POSITION_BLURB[position]}</p>
            </div>
            <span className="ml-auto hidden rounded-full border-2 border-ink bg-paper-2 px-3 py-1 font-pixel text-xs sm:inline-flex">{group.length}</span>
          </div>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.map((member) => (
              <StaggerItem key={member.id} className="h-full">
                <MemberCard member={member} hasProfile={PROFILE_IDS.has(member.id)} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      ))}
    </div>
  )
}
