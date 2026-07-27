import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kernel Forge - Open Source Software Collective at UY1',
  description: 'Join Kernel Forge, a student software development collective at the University of Yaoundé I. Build, learn, share, and contribute to amazing open-source projects.',
  keywords: ['open source', 'software development', 'student collective', 'Yaoundé', 'coding', 'programming'],
  generator: 'v0.app',
  applicationName: 'Kernel Forge',
  authors: [{ name: 'Kernel Forge Team' }],
  creator: 'Kernel Forge',
  publisher: 'Kernel Forge',
  metadataBase: new URL('https://kernel-forge.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kernel-forge.dev',
    siteName: 'Kernel Forge',
    title: 'Kernel Forge - Open Source Software Collective',
    description: 'A student software development collective dedicated to building, learning, and contributing to open-source software at the University of Yaoundé I.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-21%20at%2016.14.57-3sws87d7kKN9W5WMT4IcP74PjoJ2tp.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Kernel Forge Mascot - Linux Penguin with Orange Gear',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kernel_forge',
    creator: '@kernel_forge',
    title: 'Kernel Forge - Open Source Software Collective',
    description: 'Join our student software development collective at UY1.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-21%20at%2016.14.57-3sws87d7kKN9W5WMT4IcP74PjoJ2tp.jpeg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1410' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${inter.className} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
