"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function AnimatedHeroIllustration({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative flex items-center justify-center h-full w-full opacity-0 motion-safe:animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_forwards]", className)} {...props}>
      {/* Central focus ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] rounded-full border border-primary/20 motion-safe:animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-secondary/30 border-dashed motion-safe:animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-foreground/10 motion-safe:animate-[spin_30s_linear_infinite]" />
      </div>

      {/* Abstract architectural elements representing structure/logistics */}
      <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 20 100 L 20 40 L 50 10 L 80 40 L 80 100"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="0.2"
          className="opacity-30 motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
        />
        <path
          d="M 10 100 L 10 60 L 50 30 L 90 60 L 90 100"
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth="0.1"
          className="opacity-20 motion-safe:animate-[pulse_4s_ease-in-out_infinite_reverse]"
        />
      </svg>

      {/* Central elegant motif */}
      <div className="relative z-10 p-8 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl motion-safe:animate-[fade-in_1.5s_cubic-bezier(0.22,1,0.36,1)_0.5s_forwards] opacity-0">
         <span className="font-heading text-4xl text-foreground tracking-widest italic">A2Z</span>
      </div>
    </div>
  )
}
