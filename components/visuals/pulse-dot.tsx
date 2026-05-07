"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PulseDotProps {
  color?: string; // Tailwind bg class
  size?: string; // Tailwind size class (e.g., size-3)
  className?: string;
}

export function PulseDot({
  color = "bg-primary",
  size = "size-3",
  className = "",
}: PulseDotProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative flex items-center justify-center ${size} ${className}`}>
      <motion.div
        className={`absolute inset-0 rounded-full ${color} opacity-75`}
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 2, 2],
                opacity: [0.75, 0, 0],
              }
        }
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <div className={`relative rounded-full ${color} ${size}`} />
    </div>
  );
}
