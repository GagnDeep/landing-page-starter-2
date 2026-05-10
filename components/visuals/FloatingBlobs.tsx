"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FloatingBlobsProps {
  className?: string;
}

export const FloatingBlobs = ({ className = "" }: FloatingBlobsProps) => {
  const prefersReducedMotion = useReducedMotion();

  const blobVariants = {
    animate1: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
    },
    animate2: {
      y: [0, 20, 0],
      x: [0, -10, 0],
      scale: [1, 0.95, 1],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
    },
  };

  if (prefersReducedMotion) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen opacity-40 ${className}`}>
      <motion.div
        variants={blobVariants}
        animate="animate1"
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
      />
      <motion.div
        variants={blobVariants}
        animate="animate2"
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
      />
    </div>
  );
};
