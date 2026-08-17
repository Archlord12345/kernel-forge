'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Loader } from 'lucide-react'

interface ProjectFormProps {
  project?: any
  onSave: () => void
  onCancel: () => void
}

export function ProjectForm({ project, onSave, onCancel }: ProjectFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    github_repo_url: project?.github_repo_url || '',
    display_name: project?.display_name || '',
    description: project?.description || '',
    featured: project?.featured || false,
    featured_order: project?.featured_order || 0,
    category: project?.category || 'web',
    tags: project?.tags?.join(', ') || '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const data = {
        github_repo_url: formData.github_repo_url,
        display_name: formData.display_name || null,
        description: formData.description || null,
        featured: formData.featured,
        featured_order: formData.featured ? formData.featured_order : null,
        category: formData.category || null,
        tags: formData.tags ? formData.tags.split(',').map((t) => t.trim()) : null,
      }

      if (project?.id) {
        const { error } = await supabase
          .from('project_overrides')
          .update(data)
          .eq('id', project.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from('project_overrides').insert([data])
        if (error) throw error
      }

      onSave()
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Failed to save project')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* GitHub URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            GitHub Repository URL
          </label>
          <input
            type="url"
            required
            value={formData.github_repo_url}
            onChange={(e) => setFormData({ ...formData, github_repo_url: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="https://github.com/user/repo"
          />
        </div>

        {/* Display Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Display Name</label>
          <input
            type="text"
            value={formData.display_name}
            onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="My Project"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="web">Web</option>
            <option value="cli">CLI</option>
            <option value="library">Library</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">Description</label>
          <textarea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Project description"
          />
        </div>

        {/* Tags */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="react, typescript, web"
          />
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4 rounded border-border bg-background cursor-pointer"
          />
          <label htmlFor="featured" className="text-sm font-medium text-foreground cursor-pointer">
            Featured
          </label>
        </div>

        {/* Featured Order */}
        {formData.featured && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Order</label>
            <input
              type="number"
              value={formData.featured_order}
              onChange={(e) => setFormData({ ...formData, featured_order: parseInt(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
              placeholder="0"
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading && <Loader className="w-4 h-4 animate-spin" />}
          {project ? 'Update' : 'Add'} Project
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
