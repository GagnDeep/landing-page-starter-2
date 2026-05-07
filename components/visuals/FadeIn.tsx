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
  amount?: "some" | "all" | number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  amount = "some",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffsets = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionOffsets[direction];

  const hidden = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...offset };

  const visible = shouldReduceMotion
    ? { opacity: 1, transition: { duration, delay } }
    : {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden,
        visible,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
