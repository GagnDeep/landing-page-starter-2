"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  items: React.ReactNode[];
  speed?: number; // duration in seconds
}

export function LogoMarquee({ className, items, speed = 40 }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("flex flex-wrap gap-8 justify-center", className)}>
        {items}
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden flex relative", className)}>
       <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
       <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-16 py-4 px-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: speed, ease: "linear" as const, repeat: Infinity }}
      >
        {items}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-16 py-4 px-8 absolute top-0 left-full"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: speed, ease: "linear" as const, repeat: Infinity }}
      >
        {items}
      </motion.div>
    </div>
  );
}
