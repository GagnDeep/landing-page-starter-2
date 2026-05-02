"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAGlowProps {
  children: ReactNode;
  className?: string;
}

export function CTAGlow({ children, className }: CTAGlowProps) {
  return (
    <div className={cn("relative group inline-block", className)}>
      <div className="absolute -inset-0.5 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 motion-reduce:hidden rounded-lg"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
