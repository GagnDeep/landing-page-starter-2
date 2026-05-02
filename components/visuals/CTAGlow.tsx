"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAGlowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CTAGlow({ children, className, onClick }: CTAGlowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("relative group inline-block", className)}>
      {!shouldReduceMotion && (
        <motion.div
          className="absolute -inset-0.5 rounded-sm blur-md bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-40 transition-opacity duration-500"
          initial={false}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
        />
      )}
      <button
        onClick={onClick}
        className="relative bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 px-8 py-4 text-sm tracking-widest uppercase font-medium"
      >
        {children}
      </button>
    </div>
  );
}
