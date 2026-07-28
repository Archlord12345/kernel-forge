'use client'

import { useEffect, useState } from 'react'
import { localDataClient } from '@/lib/local-data'
import { ProjectCard } from '@/components/project-card'
import { Loader } from 'lucide-react'

export function ProjectsGrid() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchProjects()
  }, [filter])

  async function fetchProjects() {
    setLoading(true)
    try {
      let query = localDataClient.from('project_overrides').select('*')

      if (filter !== 'all') {
        query = query.eq('category', filter)
      }

      const { data, error } = await query.order('featured', { ascending: false }).order('updated_at', { ascending: false })

      if (error) throw error

      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', 'web', 'cli', 'library', 'other']

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader className="w-6 h-6 text-primary animate-spin" />
        </div>
      )}

      {/* Projects Grid */}
      {!loading && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No projects found</p>
        </div>
      )}
    </div>
  )
}
