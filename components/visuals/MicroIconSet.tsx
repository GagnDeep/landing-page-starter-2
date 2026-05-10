"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CarFrontIcon, CircleDashedIcon, RouteIcon, TrafficConeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type IconType = "car" | "wheel" | "road" | "traffic"

export function MicroIconSet({
  icon,
  className,
  size = "md"
}: {
  icon: IconType;
  className?: string;
  size?: "sm" | "md" | "lg"
}) {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  if (!mounted) return null

  const IconMap = {
    car: CarFrontIcon,
    wheel: CircleDashedIcon,
    road: RouteIcon,
    traffic: TrafficConeIcon,
  }

  const SelectedIcon = IconMap[icon]
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14"
  }

  return (
    <motion.div
      className={cn("p-3 rounded-full bg-primary/10 text-primary flex items-center justify-center", className)}
      whileHover={prefersReducedMotion ? {} : { scale: 1.05, backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
      transition={{ duration: 0.2 }}
    >
      <SelectedIcon className={sizeClasses[size]} />
    </motion.div>
  )
}
