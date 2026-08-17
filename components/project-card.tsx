import { ProjectOverride } from '@/lib/supabase'
import { Star, Code, ExternalLink } from 'lucide-react'

export function ProjectCard({ project }: { project: ProjectOverride }) {
  const repoName = new URL(project.github_repo_url).pathname.split('/')[2]

  return (
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {project.display_name || repoName}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Code className="w-3 h-3" />
            {repoName}
          </p>
        </div>
        {project.featured && (
          <Star className="w-5 h-5 text-primary fill-primary" />
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
        {project.description || 'Description bientôt disponible.'}
      </p>

      {/* Category and Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.category && (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/40">
            {project.category}
          </span>
        )}
        {project.tags?.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.github_repo_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all hover:underline"
      >
        Voir le dépôt
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  )
}
