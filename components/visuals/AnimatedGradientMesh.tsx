"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  colors?: [string, string, string]; // Hex or oklch strings
}

export function AnimatedGradientMesh({
  className,
  colors = ["var(--primary)", "var(--accent)", "var(--secondary)"]
}: AnimatedGradientMeshProps) {
  return (
    <div className={cn("relative overflow-hidden w-full h-full isolation-auto", className)}>
      <div
        className="absolute inset-0 opacity-40 mix-blend-soft-light dark:mix-blend-overlay dark:opacity-20 motion-safe:animate-pulse"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${colors[0]} 0%, transparent 50%),
                       radial-gradient(circle at 100% 100%, ${colors[1]} 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, ${colors[2]} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
