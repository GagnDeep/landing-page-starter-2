"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientMeshProps {
  className?: string;
}

export function AnimatedGradientMesh({ className }: AnimatedGradientMeshProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("bg-background", className)} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-30 dark:opacity-20 motion-reduce:animate-none animate-[spin_60s_linear_infinite]">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[var(--primary)] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-[var(--secondary)] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-1/4 left-1/3 w-1/2 h-1/2 bg-[var(--accent)] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-[pulse_15s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
