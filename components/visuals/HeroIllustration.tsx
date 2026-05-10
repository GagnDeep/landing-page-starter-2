"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  activeState?: "idle" | "processing" | "complete";
}

export function HeroIllustration({ activeState = "idle", className, ...props }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const outerVariants = {
    idle: { scale: 1, rotate: 0 },
    processing: { scale: 1.05, rotate: 90 },
    complete: { scale: 1, rotate: 0 },
  };

  const innerVariants = {
    idle: { opacity: 0.5, scale: 0.8 },
    processing: { opacity: 1, scale: [0.8, 1.2, 0.8], transition: { repeat: Infinity, duration: 2 } },
    complete: { opacity: 1, scale: 1 },
  };

  return (
    <div className={cn("relative flex items-center justify-center w-64 h-64", className)} {...props}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl mix-blend-screen" />

      {/* Outer rotating dashed ring */}
      <motion.div
        variants={outerVariants}
        animate={shouldReduceMotion ? "idle" : activeState}
        transition={{ duration: 3, ease: "easeInOut" as const }}
        className="absolute inset-4 rounded-full border-2 border-dashed border-primary/40"
      />

      {/* Inner pulsing core */}
      <motion.div
        variants={innerVariants}
        animate={shouldReduceMotion ? "idle" : activeState}
        className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-lg flex items-center justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm" />
      </motion.div>
    </div>
  );
}
