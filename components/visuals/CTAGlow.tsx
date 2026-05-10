"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface CTAGlowProps {
  children: ReactNode;
  className?: string;
}

export const CTAGlow = ({ children, className = "" }: CTAGlowProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Glow layer */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-accent/50 blur-xl rounded-full z-0"
        />
      )}
      {/* Content layer */}
      <div className="relative z-10">
        <motion.div
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
