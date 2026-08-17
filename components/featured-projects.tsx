import Link from 'next/link'
import { ArrowUpRight, Code2, Star } from 'lucide-react'

export async function FeaturedProjects() {
  const projects = [
    { id: '1', github_repo_url: 'https://github.com/KERNEL-FORGE-G', display_name: 'Kernel Forge', description: 'Le dépôt de l’organisation : idées, prototypes, outils et contributions du collectif.', tags: ['organisation', 'open source'] },
    { id: '2', github_repo_url: 'https://uniflow.kernelforge.codes/', display_name: 'UniFlow', description: 'Plateforme universitaire offline-first pour les cours, présences, notes et échanges du campus.', tags: ['éducation', 'PWA'] },
    { id: '3', github_repo_url: 'https://github.com/KERNEL-FORGE-G', display_name: 'Kernel Academy', description: 'Un espace pour apprendre en construisant et partager les pratiques du logiciel libre.', tags: ['apprentissage', 'communauté'] },
  ]

  return (
    <section id="manifesto" className="bg-[#fffaf0] py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#e95716]">Ce que nous forgeons</p><h2 className="text-3xl font-black tracking-tight text-[#17120f] md:text-5xl">Des projets qui passent de l’idée à l’impact.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-[#74665d]">Découvrez les produits, outils et espaces qui font vivre la vision Kernel Forge.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => <article key={project.id} className="group flex min-h-[280px] flex-col rounded-3xl border border-[#eadfd4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ff9a5a] hover:shadow-xl hover:shadow-[#e95716]/10"><div className="mb-8 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17120f] text-[#ff9a5a]"><Code2 className="h-5 w-5" /></div><Star className="h-5 w-5 text-[#ff7626]" /></div><h3 className="text-xl font-black text-[#17120f]">{project.display_name}</h3><p className="mt-3 flex-1 text-sm leading-7 text-[#74665d]">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#e8f8ef] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#285b45]">{tag}</span>)}</div><a href={project.github_repo_url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#e95716]">Découvrir <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a></article>)}
        </div>
        <div className="mt-10 text-center"><Link href="/projects" className="duo-outline inline-flex items-center rounded-xl px-5 py-3 text-sm">Voir tous les projets</Link></div>
      </div>
    </section>
  )
}
