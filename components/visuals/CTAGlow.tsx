"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface CTAGlowProps {
  children: React.ReactNode;
  className?: string;
}

export function CTAGlow({ children, className }: CTAGlowProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 motion-reduce:transition-none" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
