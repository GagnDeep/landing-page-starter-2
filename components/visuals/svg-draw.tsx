"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SvgDrawProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function SvgDraw({
  children,
  className = "",
  duration = 1.5,
  delay = 0.2,
}: SvgDrawProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      initial={prefersReducedMotion ? {} : { pathLength: 0, opacity: 0 }}
      whileInView={prefersReducedMotion ? {} : { pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.svg>
  );
}
