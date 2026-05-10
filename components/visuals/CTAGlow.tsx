"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export function CTAGlow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative group inline-block", className)}>
      {!prefersReducedMotion && (
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ backgroundSize: "200% 200%" }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
