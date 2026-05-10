"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null; // Don't render decorative floating blobs if reduced motion is requested
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-[-1]", className)} aria-hidden="true">
      {/* Blob 1 */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/10 mix-blend-multiply filter blur-3xl dark:mix-blend-lighten"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      {/* Blob 2 */}
      <motion.div
        className="absolute top-[40%] right-[10%] w-72 h-72 rounded-full bg-accent/10 mix-blend-multiply filter blur-3xl dark:mix-blend-lighten"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      />
      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-[10%] left-[20%] w-56 h-56 rounded-full bg-secondary/20 mix-blend-multiply filter blur-3xl dark:mix-blend-lighten"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />
    </div>
  );
}
