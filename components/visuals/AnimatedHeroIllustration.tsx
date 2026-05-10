"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedHeroIllustration({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
      },
    },
  };

  const carVariants = {
    hidden: { offsetDistance: "0%", opacity: 0 },
    visible: {
      offsetDistance: "100%",
      opacity: [0, 1, 1, 0], // Fade in, hold, fade out
      transition: {
        duration: 8,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={cn("relative w-full h-full min-h-[300px]", className)}>
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Background road base */}
        <path
          d="M 50 350 Q 200 350, 300 250 T 600 150 Q 700 150, 750 50"
          stroke="var(--color-muted)"
          strokeWidth="40"
          strokeLinecap="round"
          className="opacity-20"
        />

        {/* Animated dashed line (the road) */}
        <motion.path
          d="M 50 350 Q 200 350, 300 250 T 600 150 Q 700 150, 750 50"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeDasharray="10 10"
          strokeLinecap="round"
          variants={pathVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          id="roadPath"
        />

        {/* Abstract "Car" moving along the path */}
        {!prefersReducedMotion && (
          <motion.g
            style={{ offsetPath: "path('M 50 350 Q 200 350, 300 250 T 600 150 Q 700 150, 750 50')" }}
            variants={carVariants}
            initial="hidden"
            animate="visible"
          >
            <circle cx="0" cy="0" r="10" fill="var(--color-accent)" />
            {/* Subtle glow behind the car */}
            <circle cx="0" cy="0" r="20" fill="var(--color-accent)" className="opacity-20 blur-md" />
          </motion.g>
        )}
      </svg>
    </div>
  );
}
