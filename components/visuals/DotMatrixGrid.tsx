"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
}

export function DotMatrixGrid({
  className,
  rows = 10,
  cols = 10,
  dotSize = 3,
  gap = 20
}: DotMatrixGridProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);

  const totalDots = rows * cols;

  return (
    <div
      className={cn("relative grid opacity-30", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${gap}px)`,
        gridTemplateRows: `repeat(${rows}, ${gap}px)`,
        width: `${cols * gap}px`,
        height: `${rows * gap}px`
      }}
      aria-hidden="true"
    >
      {[...Array(totalDots)].map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        // Create a gentle wave pattern delay based on position
        const delay = (row * 0.1) + (col * 0.1);

        return (
          <div
            key={i}
            className="flex items-center justify-center w-full h-full"
          >
            <div
              className={cn(
                "rounded-full bg-foreground/50 transition-all duration-1000",
                mounted && !prefersReducedMotion ? "animate-pulse" : ""
              )}
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                animationDelay: `${delay}s`,
                animationDuration: "3s"
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
