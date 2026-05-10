"use client";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  dotSize?: number;
  spacing?: number;
  opacity?: number;
}

export function DotMatrixPattern({
  className,
  dotSize = 2,
  spacing = 24,
  opacity = 0.15,
  ...props
}: Props) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `radial-gradient(circle at center, var(--foreground) ${dotSize}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity,
      }}
      {...props}
    />
  );
}
