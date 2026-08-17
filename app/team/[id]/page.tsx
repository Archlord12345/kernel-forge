import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, ExternalLink, GitBranch, GraduationCap, ShieldCheck } from 'lucide-react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { getTeamProfile, TEAM_PROFILES } from '@/lib/team-profiles'

type TeamProfilePageProps = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return TEAM_PROFILES.map((profile) => ({ id: profile.id }))
}

export async function generateMetadata({ params }: TeamProfilePageProps): Promise<Metadata> {
  const { id } = await params
  const profile = getTeamProfile(id)
  if (!profile) return { title: 'Profil introuvable | Kernel Forge' }
  return {
    title: `${profile.name} — CV | Kernel Forge`,
    description: `${profile.role}. Découvrez le parcours public, les compétences et les projets de ${profile.name} au sein de Kernel Forge.`,
    alternates: { canonical: `/team/${profile.id}` },
    openGraph: {
      title: `${profile.name} — Kernel Forge`,
      description: profile.summary,
      images: [{ url: profile.avatarUrl, alt: `Portrait de ${profile.name}` }],
    },
  }
}

export default async function TeamProfilePage({ params }: TeamProfilePageProps) {
  const { id } = await params
  const profile = getTeamProfile(id)

  if (!profile) {
    return (
      <main className="min-h-screen bg-[#17120f] text-[#fffaf0]">
        <Header />
        <section className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-black">Profil introuvable</h1>
          <Link href="/team" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ff7626] px-5 py-3 font-black text-[#17120f]">Retour à l’équipe <ArrowUpRight className="h-4 w-4" /></Link>
        </section>
        <Footer />
      </main>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    image: profile.avatarUrl,
    url: `https://kernelforge.codes/team/${profile.id}`,
    sameAs: profile.links.map((link) => link.href),
    worksFor: { '@type': 'Organization', name: 'Kernel Forge', url: 'https://kernelforge.codes/' },
  }

  return (
    <main className="min-h-screen bg-[#17120f] text-[#fffaf0]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="relative overflow-hidden border-b border-[#fffaf0]/10 bg-[radial-gradient(circle_at_80%_18%,rgba(255,118,38,0.19),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(86,213,160,0.12),transparent_25%)] px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-black text-[#cbbdb2] transition hover:text-[#ff9a5a]"><ArrowLeft className="h-4 w-4" /> Retour à l’équipe</Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="flex flex-col items-start gap-6">
              <img src={profile.avatarUrl} alt={`Portrait de ${profile.name}`} className="h-44 w-44 rounded-[2rem] border-4 border-[#ff7626]/40 object-cover shadow-[0_20px_60px_rgba(255,118,38,0.18)]" />
              <span className="rounded-full border border-[#56d5a0]/30 bg-[#56d5a0]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#8ff0c4]">{profile.position}</span>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff9a5a]">Curriculum public · Kernel Forge</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{profile.name}</h1>
              <p className="mt-5 text-xl font-black text-[#ff9a5a]">{profile.role}</p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#cbbdb2]">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#fffaf0]/15 px-4 py-2.5 text-sm font-black text-[#fffaf0] transition hover:border-[#ff7626] hover:bg-[#30231c]"><ExternalLink className="h-4 w-4" />{link.label}</a>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-6 px-4 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-6">
          <section className="rounded-[1.5rem] border border-[#fffaf0]/10 bg-[#241b16] p-7 md:p-9">
            <div className="flex items-center gap-3"><BriefcaseBusiness className="h-5 w-5 text-[#ff7626]" /><h2 className="text-2xl font-black">Spécialités</h2></div>
            <p className="mt-5 leading-8 text-[#cbbdb2]">{profile.expertise}</p>
            <div className="mt-6 flex flex-wrap gap-2">{profile.skills.map((skill) => <span key={skill} className="rounded-full border border-[#ff7626]/25 bg-[#ff7626]/10 px-3 py-1.5 text-sm text-[#ffd1b5]">{skill}</span>)}</div>
          </section>
          <section className="rounded-[1.5rem] border border-[#fffaf0]/10 bg-[#241b16] p-7 md:p-9">
            <div className="flex items-center gap-3"><GitBranch className="h-5 w-5 text-[#56d5a0]" /><h2 className="text-2xl font-black">Projets publics</h2></div>
            {profile.projects.length ? <div className="mt-6 grid gap-3">{profile.projects.map((project) => <a key={project.href} href={project.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-[#fffaf0]/10 bg-[#30231c] p-4 transition hover:border-[#56d5a0]/50"><div className="flex items-center justify-between gap-4"><h3 className="font-black text-[#fffaf0]">{project.name}</h3><ArrowUpRight className="h-4 w-4 text-[#56d5a0] transition group-hover:translate-x-0.5" /></div><p className="mt-2 text-sm leading-6 text-[#cbbdb2]">{project.description}</p></a>)}</div> : <p className="mt-5 leading-7 text-[#cbbdb2]">Aucun projet suffisamment documenté n’a été retenu dans les sources publiques consultées.</p>}
          </section>
        </div>
        <div className="space-y-6">
          <section className="rounded-[1.5rem] border border-[#fffaf0]/10 bg-[#241b16] p-7 md:p-9">
            <div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-[#ff7626]" /><h2 className="text-2xl font-black">Formation</h2></div>
            <div className="mt-6 space-y-4">{profile.education.map((item) => <p key={item} className="border-l-2 border-[#ff7626] pl-4 leading-7 text-[#cbbdb2]">{item}</p>)}</div>
          </section>
          <section className="rounded-[1.5rem] border border-[#fffaf0]/10 bg-[#241b16] p-7 md:p-9">
            <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#56d5a0]" /><h2 className="text-2xl font-black">Certifications</h2></div>
            {profile.certifications.length ? <div className="mt-6 space-y-4">{profile.certifications.map((certification) => <div key={certification.name} className="border-b border-[#fffaf0]/10 pb-4 last:border-0"><p className="font-black text-[#fffaf0]">{certification.name}</p>{certification.issuer && <p className="mt-1 text-sm text-[#ff9a5a]">{certification.issuer}</p>}{certification.verification && <p className="mt-2 break-words text-xs leading-5 text-[#cbbdb2]">{certification.verification.startsWith('http') ? <a href={certification.verification} target="_blank" rel="noreferrer" className="text-[#8ff0c4] hover:underline">Vérifier l’attestation</a> : certification.verification}</p>}</div>)}</div> : <p className="mt-5 leading-7 text-[#cbbdb2]">Aucune certification publique vérifiable n’a été trouvée dans les sources consultées.</p>}
          </section>
          <p className="rounded-2xl border border-[#fffaf0]/10 bg-[#1d1713] p-5 text-xs leading-6 text-[#9f8f83]">{profile.evidence}</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
