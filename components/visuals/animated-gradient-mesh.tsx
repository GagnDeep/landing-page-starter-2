"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  opacity?: number
}

export function AnimatedGradientMesh({ className, opacity = 0.5, ...props }: AnimatedGradientMeshProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ opacity }}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-30 blur-[100px] motion-safe:animate-pulse" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--color-secondary)_0%,_transparent_50%)] opacity-20 blur-[80px] motion-safe:animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent)_0%,_transparent_50%)] opacity-20 blur-[80px] motion-safe:animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
    </div>
  )
}
