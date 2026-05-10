"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
  rows?: number;
  columns?: number;
}

export function DotMatrixGrid({ className, rows = 10, columns = 10 }: DotMatrixGridProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("grid gap-4 opacity-0", className)} />;
  }

  const dots = Array.from({ length: rows * columns }).map((_, i) => i);

  return (
    <div
      className={cn("grid gap-6 w-fit", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {dots.map((i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-border relative">
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 bg-primary rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: (i % columns) * 0.05 + Math.floor(i / columns) * 0.05,
                repeat: Infinity,
                repeatDelay: 5 + Math.random() * 5,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
