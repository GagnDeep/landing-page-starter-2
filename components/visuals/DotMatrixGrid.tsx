"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
}

export function DotMatrixGrid({ className }: DotMatrixGridProps) {
  const prefersReducedMotion = useReducedMotion();

  // A simple static grid for reduced motion
  if (prefersReducedMotion) {
    return (
      <div
        className={cn("absolute inset-0 pointer-events-none opacity-20", className)}
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    );
  }

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.1, 0.3, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[200%] h-[200%] -top-[50%] -left-[50%] absolute"
        style={{
          backgroundImage: "radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 60%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 60%)"
        }}
      />
    </div>
  );
}
