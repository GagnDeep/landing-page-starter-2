"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 30, x: 0 };
      case "down":
        return { y: -30, x: 0 };
      case "left":
        return { y: 0, x: 30 };
      case "right":
        return { y: 0, x: -30 };
      default:
        return { y: 0, x: 0 };
    }
  };

  const initialVariant = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, ...getDirectionOffset() };

  return (
    <motion.div
      initial={initialVariant}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1] as const, // Custom ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
