import Link from 'next/link'
import { Zap, Code2, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <span className="text-sm font-medium text-accent">Welcome to Kernel Forge</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance leading-tight">
            Build, Learn, Share, Contribute
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A student software development collective at the University of Yaoundé I dedicated to creating exceptional open-source software and fostering a community of innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Explore Projects
            </Link>
            <Link
              href="/community"
              className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Join Community
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">25+</p>
              <p className="text-sm text-muted-foreground">Open Source Projects</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Community Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
