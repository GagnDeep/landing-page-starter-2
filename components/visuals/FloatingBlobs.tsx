"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function FloatingBlobs({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  if (!mounted) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <motion.div
        className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        style={{ top: "10%", left: "5%" }}
        animate={prefersReducedMotion ? {} : {
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        style={{ bottom: "10%", right: "5%" }}
        animate={prefersReducedMotion ? {} : {
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
