import type { MetadataRoute } from 'next'

const baseUrl = 'https://kernelforge.codes'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ['', 1, 'weekly'],
    ['/projects', 0.9, 'weekly'],
    ['/team', 0.8, 'monthly'],
    ['/community', 0.8, 'monthly'],
    ['/about', 0.7, 'monthly'],
    ['/contact', 0.8, 'monthly'],
  ] as const
  return routes.map(([path, priority, changeFrequency]) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency, priority }))
}
