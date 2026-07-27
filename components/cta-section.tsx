import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground text-balance">
            Ready to Contribute?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
            Join our community of developers, designers, and creators. Whether you&apos;re a beginner or an expert, there&apos;s a place for you in Kernel Forge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/team"
              className="px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
