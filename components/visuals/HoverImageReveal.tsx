"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HoverImageRevealProps {
  children: ReactNode; // Typically text like a service name
  imageSrc: string;
  className?: string;
  imageClassName?: string;
}

export function HoverImageReveal({
  children,
  imageSrc,
  className,
  imageClassName,
}: HoverImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // For accessibility and touch devices, this effect is primarily decorative for desktop.
  return (
    <motion.div
      className={cn("group relative inline-block cursor-pointer", className)}
      whileHover="hover"
      initial="initial"
    >
      <div className="relative z-10">{children}</div>

      {!shouldReduceMotion && (
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0.9, x: 20, rotate: -5 },
            hover: { opacity: 1, scale: 1, x: 40, rotate: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-full pointer-events-none z-0 hidden md:block",
            "w-48 h-64 rounded-sm overflow-hidden shadow-2xl",
            imageClassName
          )}
        >
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
