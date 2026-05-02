"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CTAGlowProps {
  className?: string;
  children: React.ReactNode;
}

export function CTAGlow({ className, children }: CTAGlowProps) {
  return (
    <div className={cn("relative group inline-block", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded opacity-0 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 blur motion-reduce:transition-none motion-reduce:group-hover:opacity-0"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
