"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

interface AnimatedGradientMeshProps {
  className?: string;
  speed?: "slow" | "medium" | "fast";
  intensity?: "subtle" | "strong";
}

/**
 * AnimatedGradientMesh
 * A luxurious, slowly shifting gradient background utilizing OKLCH CSS variables.
 * Designed to act as an ambient background layer (e.g., 'The Evening Fitting' dark mode).
 * Safely falls back to a static gradient if prefers-reduced-motion is enabled.
 */
export function AnimatedGradientMesh({
  className,
  speed = "slow",
  intensity = "subtle",
}: AnimatedGradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const speedMultiplier = speed === "slow" ? 0.001 : speed === "medium" ? 0.003 : 0.006;
    const opacity = intensity === "subtle" ? 0.4 : 0.8;

    const render = () => {
      // Resize canvas to match display size
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // Read CSS variables for thematic consistency
      const style = getComputedStyle(document.body);
      const bg = style.getPropertyValue("--background").trim() || "oklch(0.18 0.01 250)";
      const primary = style.getPropertyValue("--primary").trim() || "oklch(0.85 0.02 75)";
      const accent = style.getPropertyValue("--accent").trim() || "oklch(0.70 0.10 75)";

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Create base fill
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Draw floating gradient orbs
      const drawOrb = (xOffset: number, yOffset: number, radius: number, color: string, timePhase: number) => {
        const x = width * xOffset + Math.sin(t * timePhase) * (width * 0.1);
        const y = height * yOffset + Math.cos(t * timePhase * 1.2) * (height * 0.1);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        // We use a hacky string replacement here because canvas gradients don't natively understand OKLCH without a modern browser,
        // but modern browsers do. If issues arise, fallback to rgba.
        gradient.addColorStop(0, `color-mix(in srgb, ${color} ${opacity * 100}%, transparent)`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      };

      // Draw orbs using theme colors
      drawOrb(0.3, 0.4, width * 0.6, primary, 1);
      drawOrb(0.7, 0.6, width * 0.5, accent, 0.8);
      drawOrb(0.5, 0.2, width * 0.7, primary, 1.3);

      t += speedMultiplier;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, intensity, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div
        className={cn("absolute inset-0 -z-10 bg-gradient-to-br from-background via-primary/5 to-accent/10", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 -z-10 w-full h-full opacity-60 blur-3xl", className)}
      aria-hidden="true"
    />
  );
}