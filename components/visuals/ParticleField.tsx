"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParticleFieldProps extends React.HTMLAttributes<HTMLCanvasElement> {
  particleCount?: number;
  color?: string; // hex color for particles
}

export function ParticleField({
  className,
  particleCount = 40,
  color = "#8b8b8b", // Muted default
  ...props
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Very slow movement
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };
    initParticles();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls smoothly
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Handle hex to rgb for alpha
        let r=139, g=139, b=139;
        if(color.startsWith('#') && color.length === 7) {
            r = parseInt(color.slice(1,3), 16);
            g = parseInt(color.slice(3,5), 16);
            b = parseInt(color.slice(5,7), 16);
        }
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, prefersReducedMotion, color]);

  if (prefersReducedMotion) {
    return <div className={cn("bg-muted/10", className)} aria-hidden="true" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn("block w-full h-full pointer-events-none absolute inset-0 z-0", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
