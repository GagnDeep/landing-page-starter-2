"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").MotionProps>;

export interface MicroIconSetProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  icons: React.ReactNode[];
}

export function MicroIconSet({ icons, className, ...props }: MicroIconSetProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex flex-wrap gap-4", className)} {...props}>
        {icons.map((icon, i) => (
          <div key={i} className="p-3 rounded-full bg-secondary/10 text-primary">
            {icon}
          </div>
        ))}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200, damping: 15 }
    },
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("flex flex-wrap gap-4", className)}
      {...props as import("framer-motion").HTMLMotionProps<"div">}
    >
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          variants={prefersReducedMotion ? {} : itemVariants}
          whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.05 }}
          className="p-3 rounded-full bg-secondary/10 text-primary border border-primary/10 shadow-sm flex items-center justify-center"
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  );
}
