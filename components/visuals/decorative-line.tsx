"use client";

import { motion, useReducedMotion } from "framer-motion";

interface DecorativeLineProps {
  className?: string;
  color?: string; // Tailwind class like bg-primary
  width?: string;
}

export function DecorativeLine({
  className = "",
  color = "bg-primary",
  width = "w-24",
}: DecorativeLineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`h-[2px] overflow-hidden ${width} ${className}`}>
      <motion.div
        className={`h-full w-full ${color}`}
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
