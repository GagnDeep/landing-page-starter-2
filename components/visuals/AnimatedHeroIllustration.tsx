"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").MotionProps>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AnimatedHeroIllustrationProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {}

export function AnimatedHeroIllustration({ className, ...props }: AnimatedHeroIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className={cn("relative w-64 h-64 border border-border rounded-arch", className)} {...props} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn("relative w-full max-w-md aspect-square mx-auto", className)}
      {...props as import("framer-motion").HTMLMotionProps<"div">}
    >
      {/* Decorative Arch */}
      <motion.div
        variants={itemVariants}
        className="absolute inset-0 rounded-t-full border border-primary/20 bg-card/50 backdrop-blur-sm"
      />
      {/* Inner Elements */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-secondary/80 blur-2xl"
      />
      <motion.div
        variants={itemVariants}
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/30 blur-2xl"
      />

      {/* Foreground Abstract Shape */}
      <motion.div
        variants={itemVariants}
        className="absolute inset-8 rounded-t-full bg-gradient-to-tr from-primary/10 to-transparent border border-primary/30"
      />
    </motion.div>
  );
}
