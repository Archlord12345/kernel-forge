import type { Metadata, Viewport } from 'next'
import './globals.css'

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
        url: '/kernel-forge-logo.png',
        width: 400,
        height: 400,
        alt: 'Kernel Forge Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kernel_forge',
    creator: '@kernel_forge',
    title: 'Kernel Forge - Open Source Software Collective',
    description: 'Join our student software development collective at UY1.',
    images: ['/kernel-forge-logo.png'],
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
    <html className="bg-background">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
