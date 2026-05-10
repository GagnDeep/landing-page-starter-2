"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

interface DotMatrixGridProps {
  className?: string;
  dotSize?: number;
  spacing?: number;
}

/**
 * DotMatrixGrid
 * A subtle, canvas-based grid of dots. Generates a 'studio' or 'architectural' feel.
 * Dots slightly glow/pulse in a wave pattern.
 */
export function DotMatrixGrid({ className, dotSize = 1.5, spacing = 24 }: DotMatrixGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const render = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      // Read accent color from DOM
      const style = getComputedStyle(document.body);
      const dotColor = style.getPropertyValue("--primary").trim() || "oklch(0.85 0.02 75)";

      ctx.fillStyle = dotColor;

      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      const offsetX = (width - cols * spacing) / 2;
      const offsetY = (height - rows * spacing) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;

          // Create a wave effect based on distance and time
          const dist = Math.sqrt(Math.pow(i - cols / 2, 2) + Math.pow(j - rows / 2, 2));

          let alpha = 0.2;
          if (!shouldReduceMotion) {
            // Wave pulse
            const pulse = (Math.sin(dist * 0.5 - time * 0.05) + 1) / 2;
            alpha = 0.1 + pulse * 0.4;
          }

          // Use string replacement for OKLCH alpha handling for canvas compat
          ctx.fillStyle = `color-mix(in srgb, ${dotColor} ${alpha * 100}%, transparent)`;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time++;
      if (!shouldReduceMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    // Handle resize
    window.addEventListener('resize', render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', render);
    };
  }, [dotSize, spacing, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      aria-hidden="true"
    />
  );
}