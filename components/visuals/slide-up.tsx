"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
  once?: boolean
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  className,
  once = true
}: SlideUpProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        y: prefersReducedMotion ? 0 : yOffset
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // Luxurious ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
