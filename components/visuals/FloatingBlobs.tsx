"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-20", className)}>
         <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
         <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-secondary/10 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-30", className)}>
      <motion.div
        animate={{
          x: ["0%", "10%", "-5%", "0%"],
          y: ["0%", "-10%", "5%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div
        animate={{
          x: ["0%", "-15%", "10%", "0%"],
          y: ["0%", "15%", "-10%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-secondary/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
      />
    </div>
  );
}
