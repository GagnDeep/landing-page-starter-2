"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function AnimatedGradientMesh({ className }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("w-full h-full bg-primary/20", className)} />
    );
  }

  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-background", className)}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: ["0%", "5%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear" as const,
        }}
        className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: ["0%", "-5%", "0%"],
          y: ["0%", "-10%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear" as const,
        }}
        className="absolute top-0 right-0 w-[120%] h-[120%] rounded-full bg-secondary/30 blur-[120px]"
      />
    </div>
  );
}
