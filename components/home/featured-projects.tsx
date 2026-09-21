import { ArrowRight } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/primitives'
import { ProjectCard } from '@/components/projects/project-card'
import { SectionHeading } from '@/components/site/section-heading'
import { Button } from '@/components/ui/button'
import { SpotIcon } from '@/components/ui/spot-icon'
import { FEATURED_PROJECTS, PROJECTS } from '@/lib/data/projects'

export function FeaturedProjects() {
  const featured = FEATURED_PROJECTS.slice(0, 3)
  return (
    <section className="section border-y-2 border-ink bg-paper-2">
      <div className="wrap">
        <SectionHeading
          title="Ce que nous forgeons en ce moment."
          lead="UniFlow est notre chantier principal : une plateforme universitaire qui fonctionne même sans réseau, avec ses applications web, mobile et son backend."
          action={<Button href="/projects" variant="ink" className="shine"><SpotIcon name="repo" size={20} /> Les {PROJECTS.length} projets <ArrowRight className="h-4 w-4" /></Button>}
        />
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} priority={index === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
