"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
}

export function AnimatedGradientMesh({ className }: AnimatedGradientMeshProps) {
  const shouldReduceMotion = useReducedMotion();

  // Defines a slow, elegant morphing background suitable for luxury brands
  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-background", className)}>
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: ["0%", "5%", "0%"],
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: ["0%", "-5%", "0%"],
              y: ["0%", "-10%", "0%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[40%] right-[0%] w-[50%] h-[70%] rounded-full bg-secondary/10 blur-[100px] pointer-events-none"
          />
        </>
      )}
      {/* If reduced motion is on, just show a static soft gradient fallback */}
      {shouldReduceMotion && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5 pointer-events-none" />
      )}
    </div>
  );
}
