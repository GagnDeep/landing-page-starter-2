"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

/**
 * AnimatedHeroIllustration
 * A bespoke, abstract geometric animation using framer-motion.
 * Evokes the feeling of elegant table settings, plates, and refined culinary elements
 * through intersecting minimalist shapes.
 */
export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  const shouldReduceMotion = useReducedMotion();

  const circleTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 8,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
      };

  const ringTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 12,
        ease: "linear" as const,
        repeat: Infinity,
      };

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", className)} aria-hidden="true">
      {/* Outer Rotating Ring (represents a refined plate rim) */}
      <motion.div
        className="absolute h-96 w-96 rounded-full border-[1px] border-accent/30"
        animate={{ rotate: 360 }}
        transition={ringTransition}
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/80" />
      </motion.div>

      {/* Inner offset circle (represents culinary components) */}
      <motion.div
        className="absolute h-64 w-64 rounded-full border-[1px] border-primary/20 backdrop-blur-sm"
        animate={{
          x: shouldReduceMotion ? 0 : [0, 15, -15, 0],
          y: shouldReduceMotion ? 0 : [0, -15, 15, 0],
        }}
        transition={circleTransition}
      />

      {/* Center piece (The dish) */}
      <motion.div
        className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 shadow-xl backdrop-blur-md"
        animate={{
          scale: shouldReduceMotion ? 1 : [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-2 rounded-full border border-accent/40" />
      </motion.div>

      {/* Accent Lines */}
      <div className="absolute h-[1px] w-full max-w-[500px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute h-full max-h-[500px] w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent" />
    </div>
  );
}