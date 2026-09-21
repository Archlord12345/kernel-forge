import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Instrument_Sans, Silkscreen } from 'next/font/google'
import { SITE } from '@/lib/data/site'
import './globals.css'

const bricolage = Bricolage_Grotesque({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-bricolage', axes: ['opsz', 'wdth'] })
const instrument = Instrument_Sans({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-instrument' })
const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-silkscreen' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Kernel Forge — Collectif open source de l’Université de Yaoundé I', template: '%s | Kernel Forge' },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ['Kernel Forge', 'KERNEL FORGE', 'logiciel libre', 'open source Cameroun', 'Université de Yaoundé I', 'UniFlow', 'développement web Yaoundé', 'application mobile Cameroun', 'Linux'],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Kernel Forge — Code. Forge. Impact.',
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Arch, Tux et le Creeper : l’équipage Kernel Forge' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kernel Forge — Code. Forge. Impact.', description: SITE.description, images: [SITE.ogImage] },
  icons: { icon: [{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  manifest: '/manifest.webmanifest',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#17120f',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${instrument.variable} ${silkscreen.variable} bg-paper`}>
      <body className="min-h-dvh antialiased">
        <a href="#contenu" className="sr-only z-[100] rounded-xl border-2 border-ink bg-forge px-4 py-3 font-display font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Aller au contenu
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
