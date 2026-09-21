import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Collectif open source`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    lang: 'fr',
    background_color: '#fffbef',
    theme_color: '#17120f',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
