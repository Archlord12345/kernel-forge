import type { MetadataRoute } from 'next'
import { TEAM_PROFILES } from '@/lib/team-profiles'

const baseUrl = 'https://kernelforge.codes'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = [
    ['', 1, 'weekly'],
    ['/projects', 0.9, 'weekly'],
    ['/services', 0.95, 'weekly'],
    ['/team', 0.8, 'monthly'],
    ['/community', 0.8, 'monthly'],
    ['/about', 0.7, 'monthly'],
    ['/contact', 0.8, 'monthly'],
  ] as const

  const pages: MetadataRoute.Sitemap = routes.map(([path, priority, changeFrequency]) => ({ url: `${baseUrl}${path}`, lastModified, changeFrequency, priority }))
  const profiles: MetadataRoute.Sitemap = TEAM_PROFILES.map((profile) => ({ url: `${baseUrl}/team/${profile.id}`, lastModified, changeFrequency: 'monthly', priority: 0.6 }))

  return [...pages, ...profiles]
}
