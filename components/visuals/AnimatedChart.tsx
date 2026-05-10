"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").HTMLMotionProps<"div">>;

export interface AnimatedChartProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  data?: number[];
}

export function AnimatedChart({ data = [30, 70, 45, 90, 65, 85, 100], className, ...props }: AnimatedChartProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex items-end gap-2 h-32", className)} {...props}>
        {data.map((val, i) => (
          <div key={i} className="bg-primary flex-1 rounded-t-sm" style={{ height: `${val}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-end gap-2 h-40 border-b border-border p-2", className)} {...props}>
      {data.map((val, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: `${val}%`, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            delay: prefersReducedMotion ? 0 : i * 0.1,
            type: "spring",
            bounce: 0.3,
          }}
          className="bg-primary flex-1 rounded-t-md shadow-glow opacity-80"
        />
      ))}
    </div>
  );
}
