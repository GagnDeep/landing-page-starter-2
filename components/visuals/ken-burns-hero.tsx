"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

interface KenBurnsHeroProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  overlayOpacity?: number
}

export function KenBurnsHero({
  src,
  alt,
  priority = true,
  className = "",
  overlayOpacity = 0.4
}: KenBurnsHeroProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={`relative h-full w-full overflow-hidden bg-background ${className}`}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{
            scale: prefersReducedMotion ? 1 : 1, // Final scale state
            opacity: 1
        }}
        transition={{
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 20, ease: "linear" } // Very slow zoom out
        }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  )
}
