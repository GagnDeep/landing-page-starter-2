"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedGradientMeshProps {
  className?: string;
  fallbackColor?: string;
}

export function AnimatedGradientMesh({ className, fallbackColor = "bg-primary/5" }: AnimatedGradientMeshProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  if (!isMounted) {
    return <div className={cn("w-full h-full", fallbackColor, className)} />;
  }

  if (prefersReducedMotion) {
    return <div className={cn("w-full h-full opacity-50 bg-gradient-to-br from-primary/10 to-transparent", className)} />;
  }

  return (
    <div className={cn("relative overflow-hidden w-full h-full pointer-events-none", className)}>
      <motion.div
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 mix-blend-soft-light"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          ease: "linear" as const,
          repeat: Infinity,
        }}
        style={{
          background: "radial-gradient(circle at center, var(--color-primary) 0%, transparent 40%), radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 40%)",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
}
