"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedChartProps {
  className?: string;
  data?: number[];
  color?: string; // Tailwind class like 'bg-primary'
}

export function AnimatedChart({
  className,
  data = [30, 45, 60, 40, 75, 55, 90, 85],
  color = "bg-primary"
}: AnimatedChartProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);

  const max = Math.max(...data);

  return (
    <div className={cn("flex items-end justify-between h-40 gap-2 overflow-hidden", className)}>
      {data.map((value, index) => {
        const heightPercent = `${(value / max) * 100}%`;
        const delay = index * 100;

        return (
          <div
            key={index}
            className="w-full flex justify-center group relative"
          >
            {/* Tooltip on hover */}
            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium text-muted-foreground">
              {value}
            </div>
            <div
              className={cn(
                "w-full max-w-12 rounded-t-sm origin-bottom transition-all duration-1000 ease-out",
                color,
                !isMounted && !prefersReducedMotion ? "h-0 opacity-0" : "opacity-80 group-hover:opacity-100"
              )}
              style={{
                height: isMounted || prefersReducedMotion ? heightPercent : '0%',
                transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`
              }}
              role="presentation"
            />
          </div>
        );
      })}
    </div>
  );
}
