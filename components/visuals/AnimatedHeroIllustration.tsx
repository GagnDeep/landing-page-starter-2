"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  if (!isMounted) return null;

  return (
    <div className={cn("relative w-full aspect-square max-w-md mx-auto flex items-center justify-center", className)}>
      {/* Central Abstract Lens/Iris concept */}
      <motion.div
        className="absolute w-3/4 h-3/4 rounded-full border-[1px] border-primary/20"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
      />
      <motion.div
        className="absolute w-1/2 h-1/2 rounded-full border-[1px] border-primary/40"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }}
      />
      <motion.div
        className="absolute w-1/4 h-1/4 rounded-full bg-gradient-to-tr from-primary/30 to-accent/20 blur-xl"
        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
      />

      {/* Floating accent elements (e.g. "focus points") */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-accent/40 blur-[1px]"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/50 blur-[1px]"
            animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
          />
        </>
      )}
    </div>
  );
}
