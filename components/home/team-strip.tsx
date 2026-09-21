import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/motion/primitives'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { IconTile } from '@/components/ui/spot-icon'
import { POSITION_ORDER, TEAM } from '@/lib/data/team'

const ringByPosition: Record<string, string> = {
  'Lead & Architecture': 'bg-forge',
  Frontend: 'bg-ember',
  Mobile: 'bg-creeper',
  'Backend & Data': 'bg-paper-2',
}

export function TeamStrip() {
  return (
    <section className="section border-b-2 border-ink bg-paper">
      <div className="wrap">
        <Reveal>
          <Sticker tone="paper-2" className="relative overflow-hidden p-6 sm:p-10">
            <div className="halftone absolute -right-10 -top-10 h-48 w-48 rounded-full text-ink/10" aria-hidden="true" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <div className="flex items-center gap-3">
                  <IconTile name="collab" tone="creeper" size="sm" wiggle={false} />
                  <p className="font-display text-sm font-extrabold text-smoke">{TEAM.length} membres, {POSITION_ORDER.length} pôles</p>
                </div>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">Des étudiants qui livrent, relisent et transmettent.</h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-smoke">Frontend, mobile, backend et architecture : chaque membre a un CV public sur ce site, avec ses projets, ses compétences et ses certifications.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/team" variant="ink" className="shine">Rencontrer l’équipe <ArrowRight className="h-4 w-4" /></Button>
                  <Button href="/community" variant="paper">Rejoindre le collectif</Button>
                </div>
              </div>
              <ul className="grid grid-cols-4 gap-3 sm:gap-4" aria-label="Membres de l’équipe">
                {TEAM.map((member, index) => (
                  <li key={member.id} className={index % 2 === 1 ? 'translate-y-4' : ''}>
                    <Link href={`/team/${member.id}`} className={`group block sticker-sm overflow-hidden ${ringByPosition[member.position]} p-1.5 transition-transform duration-300 hover:-translate-y-1 hover:rotate-2`} title={member.name}>
                      <span className="block aspect-square overflow-hidden rounded-lg border-2 border-ink bg-ink">
                        <Avatar src={member.avatarUrl} name={member.name} className="transition-transform duration-500 group-hover:scale-110" />
                      </span>
                      <span className="sr-only">{member.name}, {member.role}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Sticker>
        </Reveal>
      </div>
    </section>
  )
}
