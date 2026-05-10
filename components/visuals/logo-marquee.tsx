"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: string[]
  speed?: "fast" | "normal" | "slow"
}

export function LogoMarquee({ className, logos, speed = "slow", ...props }: LogoMarqueeProps) {
  const speedClasses = {
    fast: "animate-[marquee_20s_linear_infinite]",
    normal: "animate-[marquee_40s_linear_infinite]",
    slow: "animate-[marquee_60s_linear_infinite]",
  }

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden border-y border-border/50 bg-muted/20 py-8",
        className
      )}
      {...props}
    >
      <div className={cn("flex w-max min-w-full shrink-0 gap-16 px-8 motion-reduce:animate-none", speedClasses[speed])}>
        {logos.map((logo, index) => (
          <span
            key={index}
            className="text-muted-foreground/60 font-heading text-2xl font-semibold tracking-widest uppercase transition-colors hover:text-foreground/80"
          >
            {logo}
          </span>
        ))}
      </div>
      {/* Duplicate for seamless looping */}
      <div className={cn("flex w-max min-w-full shrink-0 gap-16 px-8 motion-reduce:animate-none", speedClasses[speed])} aria-hidden="true">
        {logos.map((logo, index) => (
          <span
            key={`dup-${index}`}
            className="text-muted-foreground/60 font-heading text-2xl font-semibold tracking-widest uppercase transition-colors hover:text-foreground/80"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  )
}
