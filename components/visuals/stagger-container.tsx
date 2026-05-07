"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  delayChildren?: number
  staggerChildren?: number
  className?: string
  once?: boolean
}

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.15,
  className,
  once = true
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
        delayChildren: prefersReducedMotion ? 0 : delayChildren,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Helper component for children inside a StaggerContainer
export function StaggerItem({ children, className, yOffset = 20 }: { children: ReactNode, className?: string, yOffset?: number }) {
  const prefersReducedMotion = useReducedMotion()

  const itemVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : yOffset },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.22, 1, 0.36, 1] as const,
            duration: 0.8
        }
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}