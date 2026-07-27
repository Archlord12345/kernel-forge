'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface Hover3DCardProps {
  children: ReactNode
  className?: string
}

export function Hover3DCard({ children, className = '' }: Hover3DCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    const rect = element.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 10
    const y = -(e.clientX - rect.left - rect.width / 2) / 10

    setRotation({ x, y })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      whileHover={{ scale: 1.05 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  )
}
