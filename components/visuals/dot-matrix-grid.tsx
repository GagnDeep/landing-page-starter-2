"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DotMatrixGridProps extends React.HTMLAttributes<HTMLDivElement> {
  rows?: number
  cols?: number
  spacing?: number
}

export function DotMatrixGrid({ className, rows = 10, cols = 10, spacing = 20, ...props }: DotMatrixGridProps) {
  const [activeDots, setActiveDots] = React.useState<number[]>([])

  React.useEffect(() => {
    // Randomly activate dots for a subtle shimmering effect
    const interval = setInterval(() => {
      const numActive = Math.floor(Math.random() * (rows * cols * 0.1)) // 10% max active
      const newActive = Array.from({ length: numActive }, () =>
        Math.floor(Math.random() * (rows * cols))
      )
      queueMicrotask(() => setActiveDots(newActive))
    }, 2000)

    return () => clearInterval(interval)
  }, [rows, cols])

  return (
    <div
      className={cn("relative grid opacity-50", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${spacing}px)`,
        gridTemplateRows: `repeat(${rows}, ${spacing}px)`,
      }}
      aria-hidden="true"
      {...props}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="flex items-center justify-center">
          <div
            className={cn(
              "h-1 w-1 rounded-full transition-all duration-1000",
              activeDots.includes(i) ? "bg-primary scale-150 opacity-100" : "bg-muted-foreground opacity-20 scale-100"
            )}
          />
        </div>
      ))}
    </div>
  )
}
