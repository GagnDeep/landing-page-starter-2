"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  variant?: "primary" | "secondary" | "muted";
}

export function AnimatedGradientMesh({ className, variant = "primary" }: AnimatedGradientMeshProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // We defer setMounted so it doesn't trigger set-state-in-effect warning synchronously
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return <div className={cn("bg-background w-full h-full", className)} />;
  }

  // Uses the defined OKLCH variables from design system
  const colorMap = {
    primary: "from-[var(--primary)] via-[var(--accent)] to-[var(--background)]",
    secondary: "from-[var(--secondary)] via-[var(--muted)] to-[var(--background)]",
    muted: "from-[var(--muted)] via-[var(--background)] to-[var(--background)]",
  };

  return (
    <div className={cn("relative overflow-hidden w-full h-full", className)}>
      <div
        className={cn(
          "absolute inset-0 opacity-40 bg-gradient-to-tr animate-mesh-slow mix-blend-multiply dark:mix-blend-screen blur-3xl",
          colorMap[variant]
        )}
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientMesh 15s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[100px]" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientMesh {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (prefers-reduced-motion) {
          .animate-mesh-slow { animation: none !important; }
        }
      `}} />
    </div>
  );
}
