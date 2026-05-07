"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CTAGlowProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function CTAGlow({
  children,
  className,
  glowColor = "var(--color-primary)"
}: CTAGlowProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
      return <div className={cn("relative inline-block", className)}>{children}</div>
  }

  return (
    <div className={cn("relative inline-block group", className)}>
      {/* The glowing background element */}
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-700"
        style={{ backgroundColor: glowColor }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* The actual button/content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}