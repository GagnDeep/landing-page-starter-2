"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ShieldCheckIcon, StarIcon, BadgeCheckIcon, AwardIcon } from "lucide-react"

const ICONS = [ShieldCheckIcon, StarIcon, BadgeCheckIcon, AwardIcon]

export function LogoMarquee({ className, items }: { className?: string; items: string[] }) {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  if (!mounted) return null

  const renderContent = () => (
    <div className="flex items-center gap-8 px-4 md:gap-16 md:px-8 shrink-0">
      {items.map((item, idx) => {
        const Icon = ICONS[idx % ICONS.length]
        return (
          <div key={idx} className="flex items-center gap-2 md:gap-3">
             <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0" />
            <span className="text-sm md:text-base font-medium font-heading tracking-wide text-foreground whitespace-nowrap">
              {item}
            </span>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className={cn("overflow-hidden w-full py-4 border-y border-border bg-card/50 backdrop-blur-sm", className)}>
      {prefersReducedMotion ? (
        <div className="flex justify-center flex-wrap gap-8 px-4">{renderContent()}</div>
      ) : (
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {renderContent()}
          {renderContent()}
        </motion.div>
      )}
    </div>
  )
}
