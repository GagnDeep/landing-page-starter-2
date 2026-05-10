"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
}

/**
 * DotMatrixGrid
 * A subtle background grid of dots that creates a precise, architectural feel,
 * balancing the organic cake imagery.
 */
export function DotMatrixGrid({ className }: DotMatrixGridProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.05]", className)}
      style={{
        backgroundImage: 'radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
      aria-hidden="true"
    />
  );
}
