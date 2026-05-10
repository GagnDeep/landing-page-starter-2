'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FlourDustParticles({ className, count = 20 }: { className?: string; count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  // We use useEffect to prevent hydration mismatches from random values
  useEffect(() => {
    // Check for reduced motion preference early
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1, // 1px to 5px
      duration: Math.random() * 10 + 10, // 10s to 20s
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden z-10", className)}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/40 dark:bg-primary/20 blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}} />
    </div>
  );
}
