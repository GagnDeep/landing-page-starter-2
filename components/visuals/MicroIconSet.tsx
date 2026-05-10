"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MicroIconSetProps {
  className?: string;
  icons: React.ElementType[];
}

/**
 * MicroIconSet
 * A cluster of small, elegantly animated icons that fade and float.
 * Ideal for adding subtle visual interest to empty spaces or large image corners.
 */
export function MicroIconSet({ className, icons }: MicroIconSetProps) {
  const shouldReduceMotion = useReducedMotion();

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    },
  };

  // Subtle continuous float
  const floatTransition = shouldReduceMotion ? { duration: 0 } : {
    duration: 4,
    ease: "easeInOut" as const,
    repeat: Infinity,
    repeatType: "reverse" as const,
  };

  return (
    <motion.div
      className={cn("flex flex-wrap gap-4", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      {icons.map((Icon, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:border-accent/50 hover:text-foreground"
        >
          <motion.div
            animate={{ y: shouldReduceMotion ? 0 : [0, -4, 0] }}
            transition={shouldReduceMotion ? { duration: 0 } : { ...floatTransition, delay: idx * 0.5 }}
          >
            <Icon className="h-4 w-4 stroke-[1.5]" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}