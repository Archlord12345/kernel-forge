'use client'

import { motion } from 'framer-motion'
import { ProjectCardPro } from '@/components/project-card-pro'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { useState } from 'react'

const projects = [
  {
    name: 'Kernel OS',
    description: 'A lightweight Linux kernel implementation for educational purposes',
    category: 'OS',
    image: 'https://via.placeholder.com/400x300?text=Kernel+OS',
    featured: true,
  },
  {
    name: 'Forge CLI',
    description: 'Command-line tool for managing open-source projects',
    category: 'CLI',
    image: 'https://via.placeholder.com/400x300?text=Forge+CLI',
  },
  {
    name: 'CodeForge',
    description: 'Web-based collaborative code editor for teams',
    category: 'Web',
    image: 'https://via.placeholder.com/400x300?text=CodeForge',
  },
  {
    name: 'DevKit',
    description: 'Developer toolkit library for rapid development',
    category: 'Library',
    image: 'https://via.placeholder.com/400x300?text=DevKit',
  },
  {
    name: 'Metrics',
    description: 'Real-time project metrics and analytics dashboard',
    category: 'Web',
    image: 'https://via.placeholder.com/400x300?text=Metrics',
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web', 'CLI', 'Library', 'OS']
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Projects
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover the innovative open-source software we&apos;re building
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Filter Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCardPro {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
