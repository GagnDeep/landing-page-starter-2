import React from "react";
import { cn } from "@/lib/utils";

interface CTAGlowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function CTAGlow({ children, className, ...props }: CTAGlowProps) {
  return (
    <div className="relative inline-flex group">
      {/* Outer glow effect */}
      <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-primary to-accent opacity-60 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse motion-reduce:animate-none" />

      {/* The actual button */}
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-muted transition-colors ring-1 ring-border",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
