'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { ProjectCard } from '@/components/project-card'
import { Loader } from 'lucide-react'

const UNIFLOW_SCREENSHOT = 'https://i.imgur.com/35YpEbS.png'
const FALLBACK_PROJECTS = [
  { id: 'uniflow', github_repo_url: 'https://github.com/KERNEL-FORGE-G/uniflow', display_name: 'UniFlow', description: 'Plateforme universitaire modulaire Offline-First : documentation, gouvernance et orchestration du produit central.', featured: true, category: 'web', tags: ['éducation', 'offline-first'], image_url: UNIFLOW_SCREENSHOT },
  { id: 'uniflow-web', github_repo_url: 'https://github.com/KERNEL-FORGE-G/uniflow-web', display_name: 'UniFlow Web', description: 'Interface web de la plateforme universitaire : cours, présences QR code, devoirs, notes et bulletins.', featured: true, category: 'web', tags: ['TypeScript', 'PWA'], image_url: UNIFLOW_SCREENSHOT },
  { id: 'uniflow-mobile', github_repo_url: 'https://github.com/KERNEL-FORGE-G/uniflow-mobile', display_name: 'UniFlow Mobile', description: 'Application mobile Flutter pour Android et iOS avec navigation et moteur de synchronisation offline.', featured: true, category: 'other', tags: ['Dart', 'Flutter'], image_url: UNIFLOW_SCREENSHOT },
  { id: 'uniflow-desktop', github_repo_url: 'https://github.com/KERNEL-FORGE-G/uniflow-desktop', display_name: 'UniFlow Desktop', description: 'Application desktop pour Windows, Linux et macOS, basée sur le moteur mobile et un packaging natif.', featured: false, category: 'other', tags: ['JavaScript', 'Desktop'], image_url: UNIFLOW_SCREENSHOT },
  { id: 'uniflow-backend', github_repo_url: 'https://github.com/KERNEL-FORGE-G/uniflow-backend', display_name: 'UniFlow Backend', description: 'API REST NestJS, logique métier, PostgreSQL/Prisma et endpoints de synchronisation.', featured: true, category: 'cli', tags: ['NestJS', 'PostgreSQL'] },
  { id: 'uniflow-backend2', github_repo_url: 'https://github.com/KERNEL-FORGE-G/uniflow-backend2', display_name: 'UniFlow Backend 2', description: 'Second backend UniFlow destiné aux comptes qui ne sont pas encore liés à une université.', featured: false, category: 'cli', tags: ['TypeScript', 'API'] },
  { id: 'kernel-store', github_repo_url: 'https://github.com/KERNEL-FORGE-G/kernel-store', display_name: 'Kernel Store', description: 'Projet open source de l’écosystème Kernel Forge, actuellement en construction par le collectif.', featured: false, category: 'web', tags: ['TypeScript', 'prototype'] },
  { id: 'dino-project', github_repo_url: 'https://github.com/KERNEL-FORGE-G/Dino_project', display_name: 'Dino Project', description: 'Projet scolaire de ICT202 : une réinterprétation du jeu Dino de Chrome avec une touche personnelle.', featured: false, category: 'other', tags: ['TypeScript', 'projet scolaire'] },
]

export function ProjectsGrid() {
  const [projects, setProjects] = useState<any[]>(FALLBACK_PROJECTS)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!isSupabaseConfigured) return
    async function fetchProjects() {
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

  return <div>
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`rounded-lg px-4 py-2 font-medium transition-all ${filter === category ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>{category === 'all' ? 'Tous' : category === 'web' ? 'Web' : category === 'cli' ? 'API & back-end' : category === 'library' ? 'Bibliothèques' : 'Mobile & projets scolaires'}</button>)}
    </div>
    {loading && <div className="flex items-center justify-center py-12"><Loader className="h-6 w-6 animate-spin text-primary" /></div>}
    {!loading && visibleProjects.length > 0 && <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>}
    {!loading && visibleProjects.length === 0 && <div className="py-12 text-center"><p className="text-lg text-muted-foreground">Aucun projet dans cette catégorie pour le moment.</p></div>}
  </div>
}
