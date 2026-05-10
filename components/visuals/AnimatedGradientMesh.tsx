"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
}

/**
 * AnimatedGradientMesh
 * A soft, warm, slow-moving gradient background evoking the warmth of a bakery
 * and the 'Evening Fitting' vibe of a 24/7 rescue service.
 * Supports prefers-reduced-motion by falling back to a static gradient.
 */
export function AnimatedGradientMesh({ className, intensity = "medium" }: AnimatedGradientMeshProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("bg-background", className)} aria-hidden="true" />;
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full bg-background isolate",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 pointer-events-none motion-reduce:hidden opacity-40 dark:opacity-20 mix-blend-soft-light">
        {/* Blob 1: Warm Caramel */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] bg-primary animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "0s" }}
        />
        {/* Blob 2: Gold Accent */}
        <div
          className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[120px] bg-accent animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "2s" }}
        />
        {/* Blob 3: Deep Night (Darker contrast) */}
        <div
          className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full blur-[100px] bg-secondary animate-pulse"
          style={{ animationDuration: "18s", animationDelay: "4s" }}
        />
      </div>

      {/* Static Fallback for reduced motion */}
      <div className="absolute inset-0 pointer-events-none hidden motion-reduce:block opacity-30 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}
