"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CTAGlowProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

/**
 * CTAGlow
 * Wraps a button or important element with an animated, soft glowing border.
 * Designed to draw attention to "Order Now" or "Emergency Delivery" buttons.
 */
export function CTAGlow({ children, className, active = true }: CTAGlowProps) {
  return (
    <div className={cn("relative group inline-block", className)}>
      {active && (
        <div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary opacity-50 blur-md transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200 motion-reduce:hidden"
          aria-hidden="true"
        />
      )}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
