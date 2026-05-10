"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientMesh({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.3 }
            : {
                opacity: [0.3, 0.4, 0.3],
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.2 }
            : {
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] -right-[10%] w-[60%] h-[80%] rounded-full bg-accent/20 blur-[120px]"
      />
    </div>
  );
}
