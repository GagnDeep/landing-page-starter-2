"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").HTMLMotionProps<"div">>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FloatingBlobsProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {}

export function FloatingBlobs({ className, ...props }: FloatingBlobsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    );
  }

  const animateProps = prefersReducedMotion ? {} : {
    x: [0, 30, -20, 0],
    y: [0, -40, 20, 0],
    scale: [1, 1.1, 0.9, 1],
  };

  return (
    <div className={cn("relative overflow-hidden w-full h-full", className)} {...props}>
      <motion.div
        animate={animateProps}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        animate={prefersReducedMotion ? {} : {
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-40"
      />
    </div>
  );
}
