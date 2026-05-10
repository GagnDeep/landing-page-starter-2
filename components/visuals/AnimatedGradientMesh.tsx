"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").MotionProps>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AnimatedGradientMeshProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {}

export function AnimatedGradientMesh({ className, ...props }: AnimatedGradientMeshProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className={cn("bg-primary/20", className)} {...props} />;
  }

  const animationVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 20,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
    reduced: {
      backgroundPosition: "0% 0%",
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      animate={prefersReducedMotion ? "reduced" : "animate"}
      className={cn(
        "absolute inset-0 z-0 opacity-30",
        "bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%),_radial-gradient(ellipse_at_top_left,_var(--color-secondary)_0%,_transparent_50%)]",
        "bg-[length:200%_200%]",
        className
      )}
      {...props as import("framer-motion").HTMLMotionProps<"div">}
    />
  );
}
