"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  offset?: number
}

export function ParallaxScroll({ children, className, offset = 50, ...props }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div ref={ref} className={cn("overflow-hidden w-full", className)} {...props}>
      <motion.div style={{ y: prefersReducedMotion ? 0 : y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
}
