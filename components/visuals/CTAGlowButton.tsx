"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<any>>;

type ValidTags = "button" | "span" | "div";

interface CTAGlowButtonProps extends OmitFramerProps<React.HTMLAttributes<HTMLElement>> {
  className?: string;
  children: React.ReactNode;
  as?: ValidTags;
  type?: "button" | "submit" | "reset";
}

export const CTAGlowButton = React.forwardRef<HTMLElement, CTAGlowButtonProps>(
  ({ className, children, as = "button", ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const Component = motion[as] as React.ElementType;

    return (
      <Component
        ref={ref}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        className={cn(
          "relative group px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg rounded-full overflow-hidden transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className
        )}
        {...props}
      >
        {/* Glow effect */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 -z-10 bg-primary opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
        )}

        {/* Shine sweep */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        )}

        <span className="relative z-10">{children}</span>
      </Component>
    );
  }
);
CTAGlowButton.displayName = "CTAGlowButton";
