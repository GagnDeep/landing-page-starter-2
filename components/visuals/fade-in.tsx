"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({ children, delay = 0, duration = 0.8, className, once = true }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // Custom slow ease-out for a luxurious feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
