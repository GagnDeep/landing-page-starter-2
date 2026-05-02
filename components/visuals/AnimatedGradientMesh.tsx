"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: string; // CSS variable like 'var(--background)'
  overlayColor?: string; // CSS variable like 'var(--primary)'
}

export const AnimatedGradientMesh: React.FC<Props> = ({
  className,
  baseColor = 'var(--background)',
  overlayColor = 'var(--accent)',
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
       canvas.style.background = `linear-gradient(to bottom right, ${baseColor}, ${overlayColor})`;
       return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const render = () => {
      t += 0.005;
      const w = canvas.width;
      const h = canvas.height;

      // Simple gradient animation
      const gradient = ctx.createLinearGradient(
        w/2 + Math.sin(t) * w/2, h/2 + Math.cos(t) * h/2,
        w/2 - Math.sin(t) * w/2, h/2 - Math.cos(t) * h/2
      );

      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(1, overlayColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      animationFrameId = requestAnimationFrame(render);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseColor, overlayColor]);

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)} {...props}>
      <canvas ref={canvasRef} className="w-full h-full opacity-30 mix-blend-soft-light transition-colors duration-700" />
    </div>
  );
};
