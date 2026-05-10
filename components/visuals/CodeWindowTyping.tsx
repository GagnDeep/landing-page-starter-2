"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function CodeWindowTyping({
  text,
  author,
  className
}: {
  text: string;
  author: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  if (!mounted) return null

  // A simulated "typing" effect for a testimonial, stylized like an elegant chat or review box
  return (
    <div className={cn("w-full max-w-lg mx-auto bg-card border border-border rounded-xl shadow-lg overflow-hidden", className)}>
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/50" />
        <div className="w-3 h-3 rounded-full bg-accent/50" />
        <div className="w-3 h-3 rounded-full bg-primary/50" />
      </div>
      <div className="p-6">
        {prefersReducedMotion ? (
          <p className="text-lg font-medium text-foreground leading-relaxed">&quot;{text}&quot;</p>
        ) : (
          <motion.p
            className="text-lg font-medium text-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &quot;{text}&quot;
          </motion.p>
        )}
        <div className="mt-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">{author.charAt(0)}</span>
          </div>
          <span className="text-sm text-muted-foreground font-medium">— {author}</span>
        </div>
      </div>
    </div>
  )
}
