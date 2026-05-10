"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BarData {
  label: string;
  value: number; // 0 to 100
}

interface AnimatedChartProps {
  data: BarData[];
  className?: string;
}

/**
 * AnimatedChart
 * A minimalist, elegant bar chart animation.
 * Ideal for 'Guest Count Scaling' or 'Service Statistics'.
 * Fades and slides in smoothly when it enters the viewport.
 */
export function AnimatedChart({ data, className }: AnimatedChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={containerRef} className={cn("flex flex-col gap-6", className)} aria-hidden="true">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex justify-between font-sans text-sm tracking-wide text-foreground">
            <span>{item.label}</span>
            <span className="text-muted-foreground">{item.value}%</span>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-border/50">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: shouldReduceMotion ? `${item.value}%` : 0 }}
              animate={isInView || shouldReduceMotion ? { width: `${item.value}%` } : { width: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1], // ease-out-expo
                      delay: index * 0.15,
                    }
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}