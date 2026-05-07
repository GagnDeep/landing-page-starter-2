"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  colorA?: string
  colorB?: string
  colorC?: string
}

export function AnimatedGradientMesh({
  className,
  colorA = "var(--primary)",
  colorB = "var(--secondary)",
  colorC = "var(--accent)",
  ...props
}: AnimatedGradientMeshProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-background", className)} {...props}>
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen"
        animate={
          prefersReducedMotion
            ? { opacity: 0.3 }
            : {
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 0.9, 1],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorA} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colorB} 0%, transparent 40%), radial-gradient(circle at 20% 80%, ${colorC} 0%, transparent 40%)`,
        }}
      />
    </div>
  )
}
