"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffsets = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: { x: 0, y: 0 },
};

export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
}: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();

  const initialOffset = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...directionOffsets[direction] };
  const animateOffset = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initialOffset}
      whileInView={animateOffset}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom soft easing
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
