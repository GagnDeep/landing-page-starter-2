"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WarmthGlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  color?: string
  intensity?: "low" | "medium" | "high"
}

export function WarmthGlow({ className, color = "var(--primary)", intensity = "medium", ...props }: WarmthGlowProps) {
  const prefersReducedMotion = useReducedMotion()

  const opacityMap = {
    low: 0.1,
    medium: 0.2,
    high: 0.35,
  }

  const baseOpacity = opacityMap[intensity]

  return (
    <motion.div
      className={cn("pointer-events-none absolute blur-[120px] rounded-full", className)}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0 }}
      animate={
        prefersReducedMotion
          ? { opacity: baseOpacity }
          : {
              opacity: [baseOpacity * 0.8, baseOpacity * 1.2, baseOpacity * 0.8],
              scale: [0.95, 1.05, 0.95],
            }
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...props}
    />
  )
}
