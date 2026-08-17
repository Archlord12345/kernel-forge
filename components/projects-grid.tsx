'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { ProjectCard } from '@/components/project-card'
import { Loader } from 'lucide-react'

const FALLBACK_PROJECTS = [
  { id: 'uniflow', github_repo_url: 'https://github.com/KERNEL-FORGE-G/UniFlow', display_name: 'UniFlow', description: 'Plateforme universitaire offline-first pour les cours, présences, notes et échanges du campus.', featured: true, category: 'web', tags: ['éducation', 'PWA'] },
  { id: 'kernel-forge', github_repo_url: 'https://github.com/KERNEL-FORGE-G', display_name: 'Kernel Forge', description: 'Organisation open source du collectif : prototypes, outils et contributions construits en public.', featured: true, category: 'other', tags: ['open source', 'communauté'] },
  { id: 'kernel-academy', github_repo_url: 'https://github.com/KERNEL-FORGE-G', display_name: 'Kernel Academy', description: 'Un espace pour apprendre en construisant et partager les pratiques du logiciel libre.', featured: true, category: 'library', tags: ['apprentissage', 'partage'] },
]

export function ProjectsGrid() {
  const [projects, setProjects] = useState<any[]>(FALLBACK_PROJECTS)
  const [loading, setLoading] = useState(isSupabaseConfigured)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!isSupabaseConfigured) return
    async function fetchProjects() {
      setLoading(true)
      try {
        let query = supabase.from('project_overrides').select('*')
        if (filter !== 'all') query = query.eq('category', filter)
        const { data, error } = await query.order('featured', { ascending: false }).order('updated_at', { ascending: false })
        if (error) throw error
        setProjects(data?.length ? data : FALLBACK_PROJECTS.filter((project) => filter === 'all' || project.category === filter))
      } catch (error) {
        console.error('Erreur de chargement des projets :', error)
        setProjects(FALLBACK_PROJECTS.filter((project) => filter === 'all' || project.category === filter))
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [filter])

  const categories = ['all', 'web', 'cli', 'library', 'other']
  const visibleProjects = isSupabaseConfigured ? projects : FALLBACK_PROJECTS.filter((project) => filter === 'all' || project.category === filter)

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button key={category} onClick={() => setFilter(category)} className={`rounded-lg px-4 py-2 font-medium transition-all ${filter === category ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
            {category === 'all' ? 'Tous' : category === 'web' ? 'Web' : category === 'cli' ? 'CLI' : category === 'library' ? 'Bibliothèques' : 'Autres'}
          </button>
        ))}
      </div>
      {loading && <div className="flex items-center justify-center py-12"><Loader className="h-6 w-6 animate-spin text-primary" /></div>}
      {!loading && visibleProjects.length > 0 && <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>}
      {!loading && visibleProjects.length === 0 && <div className="py-12 text-center"><p className="text-lg text-muted-foreground">Aucun projet dans cette catégorie pour le moment.</p></div>}
    </div>
  )
}
