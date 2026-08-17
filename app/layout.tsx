import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Kernel Forge — Code. Forge. Impact.', template: '%s | Kernel Forge' },
  description: 'Kernel Forge est un collectif étudiant de l’Université de Yaoundé I. Nous construisons, apprenons et partageons des logiciels libres utiles, accessibles et durables.',
  keywords: ['Kernel Forge', 'logiciel libre Cameroun', 'open source Yaoundé', 'Université de Yaoundé I', 'UniFlow', 'développement logiciel', 'collectif étudiant'],
  applicationName: 'Kernel Forge',
  authors: [{ name: 'Kernel Forge Team' }],
  creator: 'Kernel Forge',
  publisher: 'Kernel Forge',
  metadataBase: new URL('https://kernelforge.codes'),
  verification: { google: 'googlef0892b997568f046' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kernelforge.codes',
    siteName: 'Kernel Forge',
    title: 'Kernel Forge — Code. Forge. Impact.',
    description: 'Le collectif open source de l’Université de Yaoundé I : bâtir, apprendre, partager et contribuer.',
    images: [
      {
        url: '/kernel-forge-academy.png',
        width: 2048,
        height: 1152,
        alt: 'Kernel Forge Academy — Build, Learn, Share, Contribute',
        type: 'image/png',
      },
      {
        url: '/kernel-forge-mascot.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Mascotte Kernel Forge',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KERNEL_FORGE_G',
    creator: '@KERNEL_FORGE_G',
    title: 'Kernel Forge — Code. Forge. Impact.',
    description: 'Construire, apprendre, partager et contribuer au logiciel libre à l’Université de Yaoundé I.',
    images: ['/kernel-forge-academy.png'],
  },
  icons: {
    icon: '/kernel-forge-logo.png',
    apple: '/kernel-forge-logo.png',
    other: {
      rel: 'logo',
      url: '/kernel-forge-logo.png',
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f97316',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
