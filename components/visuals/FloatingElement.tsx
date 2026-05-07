"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className = "",
  yOffset = 15,
  duration = 4,
  delay = 0,
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        delay,
        ease: "easeInOut" as const,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}
