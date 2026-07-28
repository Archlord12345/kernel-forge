'use client'

import { useEffect, useState } from 'react'
import { localDataClient } from '@/lib/local-data'
import { Loader, Plus, Edit, Trash2 } from 'lucide-react'
import { ProjectForm } from '@/components/admin/project-form'

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<any>(null)

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    try {
      const { data, error } = await localDataClient
        .from('project_overrides')
        .select('*')
        .order('featured', { ascending: false })
        .order('updated_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setLoading(false)
    }
  }

  async function deleteProject(id: string) {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const { error } = await localDataClient.from('project_overrides').delete().eq('id', id)
      if (error) throw error
      setProjects(projects.filter((p) => p.id !== id))
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Failed to delete project')
    }
  }

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-1">Manage project overrides and metadata</p>
          </div>
          <button
            onClick={() => {
              setEditingProject(null)
              setShowForm(!showForm)
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Form */}
        {showForm && (
          <div className="mb-8 p-6 rounded-xl bg-card border border-border">
            <ProjectForm
              project={editingProject}
              onSave={() => {
                setShowForm(false)
                setEditingProject(null)
                loadProjects()
              }}
              onCancel={() => {
                setShowForm(false)
                setEditingProject(null)
              }}
            />
          </div>
        )}

        {/* Projects List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="w-6 h-6 text-primary animate-spin" />
          </div>
        ) : projects.length > 0 ? (
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.display_name || project.github_repo_url}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  <div className="flex gap-2 mt-3">
                    {project.featured && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary border border-primary/40">
                        Featured
                      </span>
                    )}
                    {project.category && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-accent/20 text-accent border border-accent/40">
                        {project.category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => {
                      setEditingProject(project)
                      setShowForm(true)
                    }}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="p-2 rounded-lg hover:bg-red-500/10 transition-colors text-muted-foreground hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found</p>
          </div>
        )}
      </div>
    </div>
  )
}
