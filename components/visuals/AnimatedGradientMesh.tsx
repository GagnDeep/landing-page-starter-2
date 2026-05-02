"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  intensity?: "subtle" | "medium" | "high";
  speed?: "slow" | "normal" | "fast";
  fallbackColor?: string; // e.g., 'bg-primary'
}

export function AnimatedGradientMesh({
  className,
  intensity = "subtle",
  speed = "slow",
  fallbackColor = "bg-primary/5"
}: AnimatedGradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const speedMultiplier = speed === "slow" ? 0.001 : speed === "normal" ? 0.003 : 0.005;
    const alphaMultiplier = intensity === "subtle" ? 0.1 : intensity === "medium" ? 0.3 : 0.6;

    const resize = () => {
      // Use offsetWidth to avoid blurry canvas on high DPI
      const { width, height } = canvas.parentElement?.getBoundingClientRect() || { width: 300, height: 300 };
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx1 = canvas.width * 0.2 + Math.sin(t) * 100;
      const cy1 = canvas.height * 0.2 + Math.cos(t) * 100;
      const r1 = Math.max(canvas.width, canvas.height) * 0.5;

      const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
      grad1.addColorStop(0, `rgba(130, 10, 30, ${alphaMultiplier})`); // Deep maroon hint
      grad1.addColorStop(1, "rgba(130, 10, 30, 0)");

      const cx2 = canvas.width * 0.8 + Math.cos(t * 0.8) * 150;
      const cy2 = canvas.height * 0.8 + Math.sin(t * 1.2) * 150;
      const r2 = Math.max(canvas.width, canvas.height) * 0.6;

      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
      grad2.addColorStop(0, `rgba(230, 200, 200, ${alphaMultiplier * 0.8})`); // Blush hint
      grad2.addColorStop(1, "rgba(230, 200, 200, 0)");

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t += speedMultiplier;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, prefersReducedMotion, intensity, speed]);

  if (!mounted) return <div className={cn("w-full h-full absolute inset-0", className)} />;

  if (prefersReducedMotion) {
    return <div className={cn("w-full h-full absolute inset-0", fallbackColor, className)} />;
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-50 transition-opacity duration-1000", className)}
      aria-hidden="true"
    />
  );
}
