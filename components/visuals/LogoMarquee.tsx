"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items: string[];
}

export function LogoMarquee({ className, items }: LogoMarqueeProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("overflow-hidden whitespace-nowrap py-4", className)}>
        <div className="flex gap-8 opacity-0">
          {items.map((item, i) => (
            <span key={i} className="text-muted-foreground font-heading text-lg font-medium tracking-wider uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 30,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div className={cn("relative overflow-hidden whitespace-nowrap py-6", className)}>
      <div className="absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      {shouldReduceMotion ? (
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {items.map((item, i) => (
            <span key={`static-${i}`} className="text-muted-foreground font-heading text-lg font-medium tracking-wider uppercase">
              {item}
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex w-fit gap-16 pr-16"
          variants={marqueeVariants}
          animate="animate"
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items, ...items].map((item, i) => (
            <span key={`animated-${i}`} className="text-muted-foreground font-heading text-xl font-medium tracking-wider uppercase inline-block">
              {item}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
