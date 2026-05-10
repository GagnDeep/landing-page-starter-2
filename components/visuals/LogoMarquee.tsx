"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").MotionProps>;

export interface LogoMarqueeProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  logos: string[];
  speed?: number;
}

export function LogoMarquee({ logos, speed = 30, className, ...props }: LogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("overflow-hidden flex gap-8", className)} {...props}>
        {logos.map((logo, index) => (
          <span key={index} className="text-xl font-heading text-muted-foreground">{logo}</span>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden flex w-full relative", className)} {...props}>
      <motion.div
        className="flex min-w-full gap-16 pr-16"
        animate={prefersReducedMotion ? {} : { x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {logos.map((logo, index) => (
          <span key={index} className="text-2xl whitespace-nowrap font-heading text-muted-foreground/60">{logo}</span>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-full gap-16 pr-16 absolute left-full"
        animate={prefersReducedMotion ? {} : { x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {logos.map((logo, index) => (
          <span key={`dup-${index}`} className="text-2xl whitespace-nowrap font-heading text-muted-foreground/60">{logo}</span>
        ))}
      </motion.div>
    </div>
  );
}
