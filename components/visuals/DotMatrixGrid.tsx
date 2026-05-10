"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").HTMLMotionProps<"div">>;

export interface DotMatrixGridProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  rows?: number;
  cols?: number;
}

export function DotMatrixGrid({ rows = 10, cols = 10, className, ...props }: DotMatrixGridProps) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn("grid gap-4", className)}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        {...props}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-primary/20" />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("grid gap-4", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      {...props}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1, scale: 0.5 }}
          whileInView={{ opacity: [0.1, 0.5, 0.1], scale: [0.5, 1, 0.5] }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: (i % cols) * 0.1 + Math.floor(i / cols) * 0.1,
            ease: "easeInOut",
          }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      ))}
    </div>
  );
}
