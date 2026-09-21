import Image from 'next/image'
import { ArrowUpRight, Lock } from 'lucide-react'
import { Sticker } from '@/components/ui/sticker'
import { SpotIcon } from '@/components/ui/spot-icon'
import { CategoryChip } from '@/components/projects/category-chip'
import type { Project } from '@/lib/data/projects'
import { SITE } from '@/lib/data/site'

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Sticker as="article" tone="white" hover className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden border-b-2 border-ink bg-paper-2">
        {project.image ? (
          <Image src={project.image} alt={`Aperçu de ${project.name}`} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" priority={priority} className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
        ) : (
          <div className="grid h-full place-items-center"><SpotIcon name="repo" size={72} /></div>
        )}
        <div className="scanlines absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        <div className="absolute left-3 top-3 flex gap-2">
          <CategoryChip category={project.category} />
          {project.featured && <span className="inline-flex h-7 items-center gap-1 rounded-full border-2 border-ink bg-paper px-2.5 font-display text-xs font-extrabold text-ink">★ Phare</span>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-extrabold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-7 text-smoke">{project.description}</p>
        {project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.tags.map((tag) => <li key={tag} className="rounded-full border border-sand bg-paper px-2.5 py-0.5 text-xs font-semibold text-smoke">{tag}</li>)}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t-2 border-sand pt-4 font-display text-sm font-bold">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink hover:text-creeper-deep" title="Le code est partagé sur demande, via WhatsApp"><Lock className="h-4 w-4 text-forge-deep" /> Code sur demande</a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-creeper-deep hover:text-ink">Voir en ligne <ArrowUpRight className="h-4 w-4" /></a>}
        </div>
      </div>
    </Sticker>
  )
}
