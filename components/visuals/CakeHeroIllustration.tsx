"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

import { SVGMotionProps } from "framer-motion";

type OmitFramerProps<T> = Omit<T, keyof SVGMotionProps<any>>;

interface CakeHeroIllustrationProps extends OmitFramerProps<React.ComponentProps<"svg">> {
  className?: string;
}

export function CakeHeroIllustration({ className, ...props }: CakeHeroIllustrationProps) {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = shouldReduceMotion ? {} : {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut" as const,
      repeat: Infinity,
    }
  };

  const candleAnimation = shouldReduceMotion ? {} : {
    scaleY: [1, 1.1, 0.9, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const,
    }
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={cn("w-full h-auto max-w-md mx-auto drop-shadow-xl", className)}
      animate={floatAnimation}
      {...props}
    >
      {/* Stand */}
      <path d="M100 320 Q200 350 300 320 L280 340 L120 340 Z" fill="currentColor" className="text-secondary/80" />
      <path d="M180 340 L180 380 L220 380 L220 340 Z" fill="currentColor" className="text-secondary" />
      <path d="M150 380 Q200 400 250 380 L250 390 Q200 410 150 390 Z" fill="currentColor" className="text-secondary" />

      {/* Base Tier */}
      <rect x="120" y="240" width="160" height="80" rx="10" fill="currentColor" className="text-primary" />
      <path d="M120 250 Q200 270 280 250" stroke="currentColor" strokeWidth="4" fill="none" className="text-primary-foreground opacity-50" />

      {/* Top Tier */}
      <rect x="140" y="180" width="120" height="60" rx="8" fill="currentColor" className="text-accent" />

      {/* Drip Effect */}
      <path d="M140 180 Q150 210 160 180 Q170 220 180 180 Q190 200 200 180 Q210 230 220 180 Q230 210 240 180 Q250 200 260 180" fill="currentColor" className="text-background" />

      {/* Candle Base */}
      <rect x="195" y="140" width="10" height="40" fill="currentColor" className="text-secondary" />

      {/* Flame */}
      <motion.path
        d="M200 120 Q190 135 200 140 Q210 135 200 120"
        fill="#fbbf24"
        style={{ originY: "140px", originX: "200px" }}
        animate={candleAnimation}
      />
    </motion.svg>
  );
}
