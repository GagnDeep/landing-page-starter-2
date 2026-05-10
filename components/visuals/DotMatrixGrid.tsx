"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DotMatrixGridProps {
  className?: string;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
}

export function DotMatrixGrid({ className, dotSize = 2, spacing = 32, opacity = 0.15 }: DotMatrixGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  if (!isMounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-[-1]", className)}>
      <motion.div
        className="w-[200%] h-[200%] absolute top-0 left-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--color-foreground) ${dotSize}px, transparent 0)`,
          backgroundSize: `${spacing}px ${spacing}px`,
          opacity,
        }}
        animate={prefersReducedMotion ? {} : { y: [0, -(spacing)] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }}
      />
      {/* Fade out edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
}
