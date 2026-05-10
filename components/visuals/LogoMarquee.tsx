"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items: React.ReactNode[];
  speed?: "slow" | "fast";
}

export function LogoMarquee({ className, items, speed = "slow" }: LogoMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const duration = speed === "fast" ? 20 : 40;

  if (shouldReduceMotion) {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-8 py-8 overflow-hidden", className)}>
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 opacity-80">
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("relative flex w-full overflow-hidden bg-background py-8", className)}>
      <motion.div
        className="flex min-w-full flex-shrink-0 items-center justify-around gap-16 px-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, i) => (
          <div key={`marquee-1-${i}`} className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-full flex-shrink-0 items-center justify-around gap-16 px-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, i) => (
          <div key={`marquee-2-${i}`} className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
