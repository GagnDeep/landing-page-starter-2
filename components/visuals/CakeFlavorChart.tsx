"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CakeFlavorChartProps {
  className?: string;
  flavors: {
    id: string;
    name: string;
    colorClass: string;
  }[];
}

export function CakeFlavorChart({ className, flavors }: CakeFlavorChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={containerRef} className={cn("w-full max-w-sm mx-auto flex flex-col items-center justify-end h-64 relative", className)}>
      {flavors.map((flavor, index) => {
        // Reverse index for z-index stacking (bottom layer needs higher z-index if overlapping, or just stack visually)
        const isTop = index === flavors.length - 1;

        return (
          <motion.div
            key={flavor.id}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, y: -50, scale: 0.9 }}
            animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.9 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className={cn(
              "w-full h-16 border-2 border-background flex items-center justify-center relative shadow-lg group",
              flavor.colorClass,
              isTop ? "rounded-t-3xl" : "",
              index === 0 ? "rounded-b-md" : "-mt-2" // Negative margin to overlap slightly
            )}
          >
            <span className="font-sans font-medium text-background mix-blend-luminosity drop-shadow-md">
              {flavor.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
