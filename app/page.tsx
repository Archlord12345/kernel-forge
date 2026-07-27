import { Suspense } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Kernel Forge - Build Open Source Software Together',
  description: 'Join Kernel Forge, a student software development collective at the University of Yaoundé I. Code, forge impact, and contribute to amazing open-source projects.',
  keywords: ['open source', 'software development', 'student collective', 'programming', 'Yaoundé', 'UY1'],
  openGraph: {
    title: 'Kernel Forge - Open Source Software Collective',
    description: 'A student software development collective dedicated to building, learning, and contributing to open-source software.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-21%20at%2016.14.57-3sws87d7kKN9W5WMT4IcP74PjoJ2tp.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Kernel Forge Mascot',
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-secondary animate-pulse" />}>
        <FeaturedProjects />
      </Suspense>
      <CTASection />
      <Footer />
    </main>
  )
}
