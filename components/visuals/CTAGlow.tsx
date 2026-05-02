"use client";

import { ReactNode } from "react";

interface CTAGlowProps {
  children: ReactNode;
}

export function CTAGlow({ children }: CTAGlowProps) {
  return (
    <div className="relative group inline-block">
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse motion-reduce:animate-none"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
