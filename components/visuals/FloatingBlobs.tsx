"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("relative w-full h-full min-h-[300px]", className)} />;
  }

  if (shouldReduceMotion) {
    return (
      <div className={cn("relative w-full h-full min-h-[300px] overflow-hidden", className)}>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full min-h-[300px] overflow-hidden", className)}>
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
