import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenu" className="min-h-[60dvh]">
        {children}
      </main>
      <Footer />
    </>
  )
}
