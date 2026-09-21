'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { LoaderCircle } from 'lucide-react'
import { ProjectCard } from '@/components/projects/project-card'
import { Mascot } from '@/components/mascot'
import { SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'
import { CATEGORY_LABELS, PROJECTS, fromOverride, type Project, type ProjectCategory } from '@/lib/data/projects'
import { isSupabaseConfigured, supabase, type ProjectOverride } from '@/lib/supabase'
import { cn } from '@/lib/utils'

type Filter = 'all' | ProjectCategory

const FILTERS: { id: Filter; icon: SpotIconName }[] = [
  { id: 'all', icon: 'repo' },
  { id: 'web', icon: 'web' },
  { id: 'cli', icon: 'api' },
  { id: 'library', icon: 'saas' },
  { id: 'other', icon: 'mobile' },
]

export function ProjectsExplorer() {
  const reduced = useReducedMotion()
  const [projects, setProjects] = useState<Project[]>(PROJECTS)
  const [loading, setLoading] = useState(isSupabaseConfigured)
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false
    supabase
      .from('project_overrides')
      .select('*')
      .order('featured', { ascending: false })
      .order('updated_at', { ascending: false })
      .then(({ data, error }) => {
        if (cancelled) return
        if (error) console.error('Projets : chargement Supabase impossible, données locales utilisées.', error)
        else if (data?.length) setProjects((data as ProjectOverride[]).map(fromOverride))
        setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const counts = useMemo(() => {
    const map: Record<Filter, number> = { all: projects.length, web: 0, cli: 0, library: 0, other: 0 }
    for (const project of projects) map[project.category] += 1
    return map
  }, [projects])

  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  return (
    <div>
      <LayoutGroup id="projects-filter">
        <div role="tablist" aria-label="Filtrer les projets" className="sticker-sm mb-10 inline-flex max-w-full flex-wrap gap-1 bg-paper p-1.5">
          {FILTERS.map(({ id, icon }) => {
            const active = filter === id
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(id)}
                className={cn('relative inline-flex h-11 items-center gap-2 rounded-lg px-3.5 font-display text-sm font-extrabold transition-colors sm:text-[15px]', active ? 'text-ink' : 'text-smoke hover:text-ink')}
              >
                {active && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-lg border-2 border-ink bg-forge" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }} />}
                <span className="relative flex items-center gap-2">
                  <SpotIcon name={icon} size={22} />
                  {CATEGORY_LABELS[id]}
                  <span className={cn('rounded-full px-1.5 py-0.5 font-pixel text-[10px] leading-none', active ? 'bg-ink text-paper' : 'bg-paper-2 text-smoke')}>{counts[id]}</span>
                </span>
              </button>
            )
          })}
        </div>
      </LayoutGroup>

      {loading && (
        <p className="mb-6 inline-flex items-center gap-2 font-display text-sm font-bold text-smoke"><LoaderCircle className="h-4 w-4 animate-spin text-forge" /> Synchronisation avec la base de données…</p>
      )}

      <motion.ul layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={reduced ? false : { opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.94, y: -8 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <div className="sticker mx-auto mt-4 flex max-w-lg flex-col items-center gap-4 bg-paper p-8 text-center sm:flex-row sm:text-left">
          <div className="w-28 shrink-0"><Mascot pose="lost" sizes="120px" /></div>
          <div>
            <p className="font-display text-xl font-extrabold">Rien dans cette catégorie pour l’instant.</p>
            <p className="mt-1 text-smoke">Les bibliothèques arrivent avec la stabilisation d’UniFlow. Revenez bientôt, ou proposez la vôtre sur GitHub.</p>
          </div>
        </div>
      )}
    </div>
  )
}
