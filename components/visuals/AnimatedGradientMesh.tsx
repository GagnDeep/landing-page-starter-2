"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  variant?: "hero" | "subtle";
}

export function AnimatedGradientMesh({
  className,
  variant = "hero",
}: AnimatedGradientMeshProps) {
  const shouldReduceMotion = useReducedMotion();

  const isHero = variant === "hero";

  // Provide a static fallback for reduced motion
  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "absolute inset-0 z-[-1] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 z-[-1] overflow-hidden bg-background",
        className
      )}
    >
      <motion.div
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: isHero ? 15 : 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-40 mix-blend-soft-light"
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 40%),
                       radial-gradient(circle at 80% 20%, var(--accent) 0%, transparent 40%),
                       radial-gradient(circle at 20% 80%, var(--secondary) 0%, transparent 40%)`,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
