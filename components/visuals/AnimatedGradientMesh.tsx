"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedGradientMesh({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  if (!mounted) return null

  // Using the primary and secondary colors from our OKLCH palette defined in globals.css
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10 bg-background", className)}>
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-30 dark:opacity-20"
        style={{ backgroundColor: "var(--color-primary)" }}
        animate={prefersReducedMotion ? {} : {
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 dark:opacity-20"
        style={{ backgroundColor: "var(--color-accent)" }}
        animate={prefersReducedMotion ? {} : {
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
