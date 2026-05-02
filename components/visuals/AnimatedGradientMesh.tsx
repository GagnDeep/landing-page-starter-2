"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
}

export function AnimatedGradientMesh({ className }: AnimatedGradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run if user prefers motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // Gets computed colors from CSS variables to respect light/dark mode
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      // Fallbacks in case variables are not immediately parsed
      return [
        style.getPropertyValue("--primary").trim() || "oklch(0.70 0.15 80)", // Gold
        style.getPropertyValue("--secondary").trim() || "oklch(0.40 0.02 250)", // Slate
      ];
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      const width = canvas.width;
      const height = canvas.height;
      const colors = getColors();

      ctx.clearRect(0, 0, width, height);

      // Create a subtle, slow-moving gradient mesh
      const gradient = ctx.createLinearGradient(
        0,
        0,
        width * Math.sin(time * 0.001),
        height * Math.cos(time * 0.001)
      );

      gradient.addColorStop(0, `oklch(from ${colors[0]} l c h / 0.1)`);
      gradient.addColorStop(1, `oklch(from ${colors[1]} l c h / 0.05)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-50 dark:opacity-30 motion-reduce:hidden"
        aria-hidden="true"
      />
      {/* Fallback for reduced motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 motion-safe:hidden" />
    </div>
  );
}
