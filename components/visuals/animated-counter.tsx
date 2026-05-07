"use client"

import { animate, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  className,
  duration = 2
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()
  const hasAnimatedRef = useRef(false)

  // Extract the numeric part and the suffix (e.g. "5000+" -> num: 5000, suffix: "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const node = ref.current

    if (node && isInView && !hasAnimatedRef.current) {
      if (prefersReducedMotion || isNaN(numericValue)) {
        node.textContent = value
        hasAnimatedRef.current = true
        return
      }

      const controls = animate(0, numericValue, {
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // Slow, deliberate ease out
        onUpdate(value) {
          node.textContent = `${Math.floor(value)}${suffix}`
        },
        onComplete() {
            hasAnimatedRef.current = true
        }
      })

      return () => controls.stop()
    }
  }, [isInView, numericValue, suffix, value, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={cn("font-heading tabular-nums", className)}>
      {/* SSR Fallback to start at 0 if it's a number, else the string */}
      {isNaN(numericValue) ? value : `0${suffix}`}
    </span>
  )
}