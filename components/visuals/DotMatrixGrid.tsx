"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
  dotSize?: number;
  spacing?: number;
}

export function DotMatrixGrid({
  className,
  dotSize = 2,
  spacing = 24,
}: DotMatrixGridProps) {
  return (
    <div
      className={cn("absolute inset-0 z-[-1] pointer-events-none", className)}
      style={{
        backgroundImage: `radial-gradient(circle at center, var(--border) ${dotSize}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      aria-hidden="true"
    />
  );
}
