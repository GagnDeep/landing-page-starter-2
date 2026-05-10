"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSoyaChaapSVGProps {
  className?: string;
}

export function AnimatedSoyaChaapSVG({ className }: AnimatedSoyaChaapSVGProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("w-32 h-32 opacity-0", className)} />;
  }

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
      },
    },
  };

  const smokeVariants = {
    animate: {
      y: [0, -20, -40],
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.2, 1.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary stroke-current"
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Skewer */}
        <motion.line
          x1="20"
          y1="80"
          x2="80"
          y2="20"
          strokeWidth="3"
          strokeLinecap="round"
          variants={shouldReduceMotion ? undefined : pathVariants}
        />
        {/* Chaap pieces */}
        <motion.path
          d="M 35 60 C 45 70, 55 50, 45 40 Z"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.2"
          variants={shouldReduceMotion ? undefined : pathVariants}
        />
        <motion.path
          d="M 45 50 C 55 60, 65 40, 55 30 Z"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.2"
          variants={shouldReduceMotion ? undefined : pathVariants}
        />
        <motion.path
          d="M 55 40 C 65 50, 75 30, 65 20 Z"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.2"
          variants={shouldReduceMotion ? undefined : pathVariants}
        />
      </motion.svg>

      {!shouldReduceMotion && (
        <div className="absolute top-[10%] left-[50%] w-full h-full pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-4 h-4 bg-muted rounded-full blur-sm"
            variants={smokeVariants}
            animate="animate"
            style={{ originX: 0.5, originY: 1 }}
          />
          <motion.div
            className="absolute top-4 left-4 w-6 h-6 bg-muted rounded-full blur-md"
            variants={smokeVariants}
            animate="animate"
            transition={{ delay: 1.5, duration: 3.5, repeat: Infinity }}
          />
        </div>
      )}
    </div>
  );
}
