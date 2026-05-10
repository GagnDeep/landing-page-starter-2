"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedChartProps {
  className?: string;
  data?: number[];
  maxValue?: number;
}

export function AnimatedChart({ className, data = [40, 70, 45, 90, 60, 100, 80], maxValue = 100 }: AnimatedChartProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("flex items-end gap-2 h-40 opacity-0", className)} />;
  }

  return (
    <div className={cn("flex items-end gap-3 h-48 w-full", className)}>
      {data.map((value, index) => {
        const heightPercent = `${(value / maxValue) * 100}%`;
        return (
          <div key={index} className="relative flex-1 bg-muted/30 rounded-t-sm h-full flex items-end">
            {shouldReduceMotion ? (
              <div
                className="w-full bg-primary/80 rounded-t-sm"
                style={{ height: heightPercent }}
              />
            ) : (
              <motion.div
                className="w-full bg-primary/80 rounded-t-sm origin-bottom"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ height: heightPercent }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
