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
  spacing = 20,
}: DotMatrixGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `radial-gradient(circle at center, var(--color-border) ${dotSize}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
}
