"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FloatingBlobsProps {
  className?: string;
  colors?: string[];
}

export function FloatingBlobs({ className, colors = ["bg-primary/10", "bg-accent/10"] }: FloatingBlobsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  if (!isMounted) return null;
  if (prefersReducedMotion) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-[-1]", className)}>
      <motion.div
        className={cn("absolute w-[40vw] max-w-lg aspect-square rounded-full blur-[80px]", colors[0])}
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "-20%", "10%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" as const }}
        style={{ top: "10%", left: "-10%" }}
      />
      <motion.div
        className={cn("absolute w-[35vw] max-w-md aspect-square rounded-full blur-[80px]", colors[1] || colors[0])}
        animate={{
          x: ["0%", "-20%", "10%", "0%"],
          y: ["0%", "20%", "-10%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" as const, delay: 5 }}
        style={{ bottom: "5%", right: "-5%" }}
      />
    </div>
  );
}
