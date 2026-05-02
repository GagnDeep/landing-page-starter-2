import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export function AnimatedGradientMesh({
  className,
  intensity = "medium",
}: AnimatedGradientMeshProps) {
  const intensityMap = {
    light: "opacity-30",
    medium: "opacity-60",
    heavy: "opacity-90",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute -inset-[100%] animate-spin [animation-duration:120s] motion-reduce:animate-none",
          intensityMap[intensity]
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_50%)] blur-3xl mix-blend-multiply opacity-40 dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-secondary)_0%,_transparent_40%)] blur-3xl mix-blend-multiply opacity-30 dark:mix-blend-screen translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent)_0%,_transparent_40%)] blur-3xl mix-blend-multiply opacity-30 dark:mix-blend-screen -translate-x-1/4 -translate-y-1/4" />
      </div>
    </div>
  );
}
