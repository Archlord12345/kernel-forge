import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Lock } from 'lucide-react'
import { Reveal } from '@/components/motion/primitives'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { SITE } from '@/lib/data/site'
import { getTeamProfile, TEAM_PROFILES } from '@/lib/team-profiles'

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return TEAM_PROFILES.map((profile) => ({ id: profile.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const profile = getTeamProfile(id)
  if (!profile) return { title: 'Profil introuvable' }
  return {
    title: `${profile.name} — CV`,
    description: `${profile.role}. Parcours public, compétences et projets de ${profile.name} au sein de Kernel Forge.`,
    alternates: { canonical: `/team/${profile.id}` },
    openGraph: { title: `${profile.name} — Kernel Forge`, description: profile.summary, url: `/team/${profile.id}`, images: [{ url: profile.avatarUrl, alt: `Portrait de ${profile.name}` }] },
  }
}

function Panel({ icon, tone, title, children }: { icon: SpotIconName; tone: 'forge' | 'ember' | 'creeper' | 'paper-2'; title: string; children: React.ReactNode }) {
  return (
    <Sticker as="section" className="p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <IconTile name={icon} tone={tone} size="sm" wiggle={false} />
        <h2 className="font-display text-2xl font-extrabold tracking-tight">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </Sticker>
  )
}

export default async function TeamProfilePage({ params }: Props) {
  const { id } = await params
  const profile = getTeamProfile(id)
  if (!profile) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    image: profile.avatarUrl,
    url: `${SITE.url}/team/${profile.id}`,
    sameAs: profile.links.filter((link) => !/github\.com/i.test(link.href)).map((link) => link.href),
    worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper">
        <div className="forge-grid absolute inset-0" aria-hidden="true" />
        <div className="glow-orb -right-32 -top-20 h-[26rem] w-[26rem] bg-forge/30 animate-drift" aria-hidden="true" />
        <div className="wrap relative py-14 md:py-20">
          <Link href="/team" className="inline-flex items-center gap-2 font-display text-sm font-bold text-sand/80 transition-colors hover:text-ember"><ArrowLeft className="h-4 w-4" /> Toute l’équipe</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end">
            <div className="sticker sticker-forge h-44 w-44 overflow-hidden bg-ink-2 sm:h-52 sm:w-52">
              <Avatar src={profile.avatarUrl} name={profile.name} className="text-5xl" />
            </div>
            <div>
              <span className="inline-flex rounded-full border-2 border-ink bg-creeper px-3 py-1 font-display text-xs font-extrabold text-ink">{profile.position}</span>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">{profile.name}</h1>
              <p className="mt-3 font-display text-xl font-bold text-ember">{profile.role}</p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-sand/85">{profile.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {profile.links.filter((link) => !/github\.com/i.test(link.href)).map((link) => (
                  <Button key={link.href} href={link.href} variant={link.label === 'Portfolio' ? 'forge' : 'ghost-light'} size="sm">
                    <ExternalLink className="h-4 w-4" /> {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-6">
            <Reveal>
              <Panel icon="build" tone="forge" title="Spécialités">
                <p className="leading-8 text-smoke">{profile.expertise}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {profile.skills.map((skill) => <li key={skill} className="rounded-full border-2 border-ink bg-paper-2 px-3 py-1 font-display text-sm font-bold">{skill}</li>)}
                </ul>
              </Panel>
            </Reveal>
            <Reveal delay={0.08}>
              <Panel icon="repo" tone="ember" title="Projets">
                {profile.projects.length ? (
                  <ul className="grid gap-3">
                    {profile.projects.map((project) => (
                      <li key={project.name} className="rounded-xl border-2 border-sand bg-paper p-4">
                        <h3 className="font-display font-extrabold">{project.name}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-smoke">{project.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : <p className="leading-7 text-smoke">Aucun projet suffisamment documenté n’a été retenu dans les sources publiques consultées.</p>}
                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-smoke"><Lock className="mt-1 h-4 w-4 shrink-0 text-forge-deep" /> Le code des projets du collectif est partagé sur demande. <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold text-creeper-deep underline-offset-2 hover:underline">Écrivez-nous sur WhatsApp</a>.</p>
              </Panel>
            </Reveal>
          </div>
          <div className="space-y-6">
            <Reveal delay={0.04}>
              <Panel icon="learn" tone="creeper" title="Formation">
                <ul className="space-y-3">{profile.education.map((item) => <li key={item} className="border-l-[3px] border-forge pl-4 leading-7 text-smoke">{item}</li>)}</ul>
              </Panel>
            </Reveal>
            <Reveal delay={0.1}>
              <Panel icon="shield" tone="paper-2" title="Certifications">
                {profile.certifications.length ? (
                  <ul className="divide-y-2 divide-sand">
                    {profile.certifications.map((certification) => (
                      <li key={certification.name} className="py-3 first:pt-0 last:pb-0">
                        <p className="font-display font-extrabold">{certification.name}</p>
                        {certification.issuer && <p className="mt-0.5 text-sm font-bold text-forge-deep">{certification.issuer}</p>}
                        {certification.verification && (
                          <p className="mt-1 break-words text-xs leading-5 text-smoke">
                            {certification.verification.startsWith('http') ? <a href={certification.verification} target="_blank" rel="noopener noreferrer" className="font-bold text-creeper-deep underline-offset-2 hover:underline">Vérifier l’attestation</a> : certification.verification}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : <p className="leading-7 text-smoke">Aucune certification publique vérifiable n’a été trouvée dans les sources consultées.</p>}
              </Panel>
            </Reveal>
            {(profile.languages?.length || profile.interests?.length) ? (
              <Reveal delay={0.14}>
                <Panel icon="collab" tone="ember" title="Langues et centres d’intérêt">
                  <ul className="flex flex-wrap gap-2">
                    {profile.languages?.map((language) => <li key={language} className="rounded-full border-2 border-ink bg-creeper/30 px-3 py-1 font-display text-sm font-bold">{language}</li>)}
                    {profile.interests?.map((interest) => <li key={interest} className="rounded-full border-2 border-ink bg-forge/25 px-3 py-1 font-display text-sm font-bold">{interest}</li>)}
                  </ul>
                </Panel>
              </Reveal>
            ) : null}
            <p className="rounded-2xl border-2 border-dashed border-sand p-5 text-xs leading-6 text-smoke">{profile.evidence}</p>
          </div>
        </div>
      </section>
    </>
  )
}
