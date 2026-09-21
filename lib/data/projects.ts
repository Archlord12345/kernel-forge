import type { ProjectOverride } from '@/lib/supabase'

export type ProjectCategory = 'web' | 'cli' | 'library' | 'other'

export type Project = {
  id: string
  name: string
  description: string
  repoUrl: string
  liveUrl?: string
  featured: boolean
  category: ProjectCategory
  tags: string[]
  image: string | null
}

export const CATEGORY_LABELS: Record<'all' | ProjectCategory, string> = {
  all: 'Tous',
  web: 'Web',
  cli: 'API & back-end',
  library: 'Bibliothèques',
  other: 'Mobile & desktop',
}

const UNIFLOW_SCREENSHOT = '/projects/uniflow.webp'

export const PROJECTS: Project[] = [
  { id: 'uniflow', name: 'UniFlow', description: 'Plateforme universitaire modulaire offline-first : documentation, gouvernance et orchestration du produit central.', repoUrl: 'https://github.com/KERNEL-FORGE-G/uniflow', liveUrl: 'https://uniflow.kernelforge.codes/', featured: true, category: 'web', tags: ['éducation', 'offline-first'], image: UNIFLOW_SCREENSHOT },
  { id: 'uniflow-web', name: 'UniFlow Web', description: 'Interface web de la plateforme : cours, présences par QR code, devoirs, notes et bulletins.', repoUrl: 'https://github.com/KERNEL-FORGE-G/uniflow-web', featured: true, category: 'web', tags: ['TypeScript', 'PWA'], image: '/projects/uniflow-web.webp' },
  { id: 'uniflow-mobile', name: 'UniFlow Mobile', description: 'Application Flutter pour Android et iOS, avec navigation native et moteur de synchronisation hors ligne.', repoUrl: 'https://github.com/KERNEL-FORGE-G/uniflow-mobile', featured: true, category: 'other', tags: ['Dart', 'Flutter'], image: '/projects/uniflow-mobile.webp' },
  { id: 'uniflow-desktop', name: 'UniFlow Desktop', description: 'Application desktop pour Windows, Linux et macOS, basée sur le moteur mobile et un packaging natif.', repoUrl: 'https://github.com/KERNEL-FORGE-G/uniflow-desktop', featured: false, category: 'other', tags: ['JavaScript', 'Desktop'], image: '/projects/uniflow-desktop.webp' },
  { id: 'uniflow-backend', name: 'UniFlow Backend', description: 'API REST NestJS, logique métier, PostgreSQL avec Prisma et endpoints de synchronisation.', repoUrl: 'https://github.com/KERNEL-FORGE-G/uniflow-backend', featured: true, category: 'cli', tags: ['NestJS', 'PostgreSQL'], image: '/projects/uniflow-backend.webp' },
  { id: 'uniflow-backend2', name: 'UniFlow Backend 2', description: 'Second backend UniFlow destiné aux comptes qui ne sont pas encore rattachés à une université.', repoUrl: 'https://github.com/KERNEL-FORGE-G/uniflow-backend2', featured: false, category: 'cli', tags: ['TypeScript', 'API'], image: '/projects/uniflow-backend2.webp' },
  { id: 'kernel-store', name: 'Kernel Store', description: 'Projet open source de l’écosystème Kernel Forge, en construction par le collectif.', repoUrl: 'https://github.com/KERNEL-FORGE-G/kernel-store', featured: false, category: 'web', tags: ['TypeScript', 'prototype'], image: '/projects/kernel-store.webp' },
  { id: 'dino-project', name: 'Dino Project', description: 'Projet de cours ICT202 : une réinterprétation du jeu Dino de Chrome avec une touche personnelle.', repoUrl: 'https://github.com/KERNEL-FORGE-G/Dino_project', featured: false, category: 'other', tags: ['TypeScript', 'projet scolaire'], image: '/projects/dino-project.webp' },
]

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured)

export const ECOSYSTEM = [
  { name: 'Le groupe WhatsApp', description: 'Le point d’entrée du collectif : on y demande l’accès aux dépôts, on y pose ses questions, on y suit le quotidien.', href: 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde', tags: ['accès au code', 'équipe'] },
  { name: 'UniFlow', description: 'La plateforme universitaire offline-first : cours, présences, notes et échanges du campus.', href: 'https://uniflow.kernelforge.codes/', tags: ['éducation', 'PWA'] },
  { name: 'Kernel Forge Academy', description: 'Apprendre en construisant : ateliers, revues de code et partage des pratiques du logiciel libre.', href: '/community', tags: ['apprentissage', 'communauté'] },
]

export function fromOverride(row: ProjectOverride): Project {
  const category = (['web', 'cli', 'library', 'other'] as ProjectCategory[]).includes(row.category as ProjectCategory) ? (row.category as ProjectCategory) : 'other'
  return {
    id: row.id,
    name: row.display_name ?? row.github_repo_url.split('/').pop() ?? 'Projet',
    description: row.description ?? '',
    repoUrl: row.github_repo_url,
    featured: row.featured,
    category,
    tags: row.tags ?? [],
    image: row.image_url,
  }
}
