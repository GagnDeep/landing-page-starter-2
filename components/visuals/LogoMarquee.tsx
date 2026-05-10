"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LogoMarquee({ className, logos }: { className?: string; logos: string[] }) {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={cn("flex overflow-hidden relative w-full", className)}>
      {/* Fade masks for the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex min-w-full shrink-0 gap-16 py-4 items-center justify-around"
        animate={
          prefersReducedMotion
            ? { x: 0 }
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }
        }
      >
        {duplicatedLogos.map((logo, index) => (
          <span
            key={index}
            className="text-muted-foreground font-semibold text-lg whitespace-nowrap opacity-70"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
