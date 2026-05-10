"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: string[];
  className?: string;
  speed?: number;
}

export function LogoMarquee({ logos, className, speed = 40 }: LogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Ensure enough for seamless loop

  if (prefersReducedMotion) {
    return (
      <div className={cn("w-full overflow-hidden flex flex-wrap justify-center gap-8 py-6", className)}>
        {logos.map((logo, i) => (
          <span key={i} className="text-muted-foreground font-sans font-semibold text-lg tracking-widest uppercase">
            {logo}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden relative flex items-center py-6", className)}>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap gap-16 pr-16"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: speed,
          ease: "linear" as const,
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, i) => (
          <span key={i} className="text-muted-foreground/60 font-sans font-semibold text-lg tracking-widest uppercase inline-block">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
