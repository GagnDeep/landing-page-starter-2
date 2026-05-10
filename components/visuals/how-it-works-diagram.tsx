"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function HowItWorksDiagram({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const steps = [
    { label: "Vision", position: "left-0 top-1/2 -translate-y-1/2" },
    { label: "Curation", position: "left-1/3 top-1/4" },
    { label: "Logistics", position: "right-1/3 bottom-1/4" },
    { label: "Execution", position: "right-0 top-1/2 -translate-y-1/2" },
  ]

  return (
    <div className={cn("relative w-full h-64 sm:h-96", className)} {...props}>
      {/* Connecting Line */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path
          d="M 5 50 C 30 50, 20 25, 35 25 C 50 25, 50 75, 65 75 C 80 75, 70 50, 95 50"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="0.5"
          className="motion-safe:animate-[draw_3s_ease-in-out_forwards] stroke-dasharray-[1000] stroke-dashoffset-[1000]"
        />
        {/* Animated dot following path */}
        <circle r="1" fill="var(--color-primary)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 5 50 C 30 50, 20 25, 35 25 C 50 25, 50 75, 65 75 C 80 75, 70 50, 95 50"
          />
        </circle>
      </svg>

      {/* Nodes */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            "absolute flex flex-col items-center gap-2 opacity-0 motion-safe:animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_forwards]",
            step.position
          )}
          style={{ animationDelay: `${index * 0.8}s` }}
        >
          <div className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_var(--color-primary)] shadow-primary/20" />
          <span className="text-xs uppercase tracking-widest font-medium text-muted-foreground bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
            {step.label}
          </span>
        </div>
      ))}
    </div>
  )
}
