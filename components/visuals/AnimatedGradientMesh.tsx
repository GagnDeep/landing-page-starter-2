"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedGradientMeshProps {
  className?: string;
}

export const AnimatedGradientMesh = ({ className = "" }: AnimatedGradientMeshProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden bg-background ${className}`}>
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 50%)",
        }}
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle at center, var(--accent) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};
