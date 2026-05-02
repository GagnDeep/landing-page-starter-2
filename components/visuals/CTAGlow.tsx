"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface CTAGlowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  glowColor?: "primary" | "accent" | "secondary";
}

export function CTAGlow({ children, className, glowColor = "primary", ...props }: CTAGlowProps) {
  const glowMap = {
    primary: "bg-[var(--primary)]",
    accent: "bg-[var(--accent)]",
    secondary: "bg-[var(--secondary)]",
  };

  return (
    <div className="relative inline-flex group">
      <div
        className={cn(
          "absolute -inset-0.5 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200",
          glowMap[glowColor]
        )}
      />
      <button
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-4 text-sm font-sans tracking-widest uppercase transition-all bg-background text-foreground border border-border rounded-full hover:bg-foreground hover:text-background",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
