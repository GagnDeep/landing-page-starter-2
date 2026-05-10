"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradientMesh({ className, children }: AnimatedGradientMeshProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("relative overflow-hidden bg-background", className)}>{children}</div>;
  }

  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute -top-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/10 blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[30%] -right-[10%] h-[40vw] w-[40vw] rounded-full bg-secondary/15 blur-[120px]"
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
      {shouldReduceMotion && (
        <>
          <div className="absolute -top-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute top-[30%] -right-[10%] h-[40vw] w-[40vw] rounded-full bg-secondary/15 blur-[120px]" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
