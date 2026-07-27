import Link from 'next/link'
import { Star, Code } from 'lucide-react'

export async function FeaturedProjects() {
  // Mock projects data - use this when local database is not configured
  const projects = [
      {
        id: '1',
        github_repo_url: 'https://github.com/kernel-forge/awesome-web',
        display_name: 'Awesome Web',
        description: 'A curated collection of web development resources and tools',
        tags: ['web', 'resources'],
        featured: true,
      },
      {
        id: '2',
        github_repo_url: 'https://github.com/kernel-forge/kernel-cli',
        display_name: 'Kernel CLI',
        description: 'Command-line tool for project scaffolding and management',
        tags: ['cli', 'tools'],
        featured: true,
      },
      {
        id: '3',
        github_repo_url: 'https://github.com/kernel-forge/kernel-ui',
        display_name: 'Kernel UI',
        description: 'Beautiful and accessible component library for React',
        tags: ['ui', 'components'],
        featured: true,
      },
    ]

  return (
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most impactful open-source contributions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <div
                key={project.id}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.display_name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {new URL(project.github_repo_url).pathname.split('/')[2]}
                    </p>
                  </div>
                  <Star className="w-5 h-5 text-primary" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <a
                  href={project.github_repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  <Code className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    )
}
