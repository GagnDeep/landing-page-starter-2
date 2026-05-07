"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardHoverEffectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  children: React.ReactNode
}

export function CardHoverEffect({ children, className, ...props }: CardHoverEffectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("relative h-full transition-colors duration-300", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: isHovered ? -4 : 0,
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-xl bg-primary/5 dark:bg-primary/10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isHovered && !prefersReducedMotion ? 1 : 0,
          scale: isHovered && !prefersReducedMotion ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  )
}
