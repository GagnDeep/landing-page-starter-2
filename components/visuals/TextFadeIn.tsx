"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface TextFadeInProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  children: React.ReactNode
  delay?: number
}

export function TextFadeIn({ children, className, delay = 0, ...props }: TextFadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
