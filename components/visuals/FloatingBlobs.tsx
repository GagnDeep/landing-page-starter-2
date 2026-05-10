"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

/**
 * FloatingBlobs
 * Deep, unfocused organic shapes that float slowly in the background.
 * Adds texture and movement without distracting from content.
 * CSS filters are used for deep blurring, matching the 'Evening Fitting' aesthetic.
 */
export function FloatingBlobs({ className }: FloatingBlobsProps) {
  const shouldReduceMotion = useReducedMotion();

  const blob1Animation = shouldReduceMotion
    ? {}
    : {
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      };

  const blob2Animation = shouldReduceMotion
    ? {}
    : {
        x: [0, -40, 30, 0],
        y: [0, 30, -30, 0],
        scale: [1, 0.9, 1.1, 1],
      };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)} aria-hidden="true">
      {/* Blob 1 */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-accent/10 opacity-50 blur-[100px] mix-blend-screen"
        animate={blob1Animation}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] h-[70%] w-[70%] rounded-full bg-primary/10 opacity-50 blur-[120px] mix-blend-screen"
        animate={blob2Animation}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />
    </div>
  );
}