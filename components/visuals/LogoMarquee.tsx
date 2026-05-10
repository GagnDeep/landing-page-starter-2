"use client";

import { motion, useReducedMotion } from "framer-motion";

interface LogoMarqueeProps {
  items: string[];
}

export const LogoMarquee = ({ items }: LogoMarqueeProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex overflow-hidden relative w-full bg-muted/50 py-8 border-y border-border">
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : { x: ["0%", "-50%"] }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 w-max"
      >
        {/* Duplicate items for seamless looping */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-8 md:px-16 text-muted-foreground font-semibold uppercase tracking-widest text-sm whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </motion.div>
      {/* Gradient masks for smooth fade at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};
