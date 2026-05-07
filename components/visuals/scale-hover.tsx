"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScaleHoverProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}

export function ScaleHover({ children, className = "", scale = 1.05 }: ScaleHoverProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { scale }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
