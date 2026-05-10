"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedDrivingPath({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  if (!mounted) return null

  return (
    <div className={cn("relative w-full h-[200px] overflow-hidden hidden md:block", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* The Road base */}
        <path
          d="M0 150 Q 250 150, 500 100 T 1000 50"
          stroke="var(--color-border)"
          strokeWidth="4"
          fill="none"
        />
        {/* The Animated Dashed Line representing the learning journey */}
        <motion.path
          d="M0 150 Q 250 150, 500 100 T 1000 50"
          stroke="var(--color-accent)"
          strokeWidth="4"
          strokeDasharray="10 10"
          fill="none"
          animate={prefersReducedMotion ? {} : {
            strokeDashoffset: [0, -100]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Progress Dots */}
        {[0, 0.5, 1].map((progress, i) => (
          <circle
            key={i}
            cx={i === 0 ? 0 : i === 1 ? 500 : 1000}
            cy={i === 0 ? 150 : i === 1 ? 100 : 50}
            r="8"
            fill="var(--color-background)"
            stroke="var(--color-primary)"
            strokeWidth="4"
          />
        ))}
      </svg>
    </div>
  )
}
