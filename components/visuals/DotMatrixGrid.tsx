"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DotMatrixGridProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: number; // 1-10
  color?: string; // Optional color override
  durationMultiplier?: number;
}

export function DotMatrixGrid({ className, density = 5, color, durationMultiplier = 1, ...props }: DotMatrixGridProps) {
  const shouldReduceMotion = useReducedMotion();

  // Calculate grid gap based on density
  const gapMap: Record<number, string> = {
    1: "gap-12",
    2: "gap-10",
    3: "gap-8",
    4: "gap-6",
    5: "gap-4",
    6: "gap-3",
    7: "gap-2",
    8: "gap-1",
  };
  const gapClass = gapMap[density] || "gap-4";

  // Using useState with an initializer function to guarantee the impure function runs only once per instance.
  const [dots] = useState(() =>
    Array.from({ length: 400 }).map(() => ({
      duration: (3 + Math.random() * 4) * durationMultiplier,
      delay: Math.random() * 2,
    }))
  );

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-wrap w-full h-full p-4", gapClass)}>
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className={cn("w-1 h-1 rounded-full", color ? "" : "bg-foreground")}
            style={color ? { backgroundColor: color } : {}}
            initial={shouldReduceMotion ? { opacity: 0.5 } : { opacity: 0.1 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.5 }
                : { opacity: [0.1, 0.5, 0.1] }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: dot.duration,
                    repeat: Infinity,
                    delay: dot.delay,
                    ease: "easeInOut" as const,
                  }
            }
          />
        ))}
      </div>
    </div>
  );
}
