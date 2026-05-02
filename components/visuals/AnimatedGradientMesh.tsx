"use client";

import { cn } from "@/lib/utils";

export function AnimatedGradientMesh({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-primary/5",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_50%)] before:opacity-20",
        "after:absolute after:inset-0 after:-z-10 after:bg-[radial-gradient(ellipse_at_top_right,_var(--color-secondary)_0%,_transparent_50%)] after:opacity-20",
        "motion-safe:before:animate-pulse motion-safe:after:animate-pulse motion-safe:before:duration-10000 motion-safe:after:duration-7000",
        className
      )}
    >
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px]" />
    </div>
  );
}
