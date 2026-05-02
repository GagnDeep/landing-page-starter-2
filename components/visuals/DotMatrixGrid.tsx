"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface DotMatrixGridProps {
  className?: string;
  dotColor?: string;
  spacing?: number;
}

export function DotMatrixGrid({ className, spacing = 24 }: DotMatrixGridProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none opacity-20", className)}
      style={{
        backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  );
}
