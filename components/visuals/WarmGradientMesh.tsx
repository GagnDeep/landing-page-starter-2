'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function WarmGradientMesh({ className }: { className?: string }) {
  // Using pure CSS variables mapped from our theme.
  // Avoid inline JS animations for better performance. We rely on CSS animation.
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <div
        className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] opacity-40 dark:opacity-20 motion-reduce:animate-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 40%)",
          filter: "blur(80px)",
          animation: "meshSpin 30s linear infinite",
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes meshSpin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}} />
    </div>
  );
}
