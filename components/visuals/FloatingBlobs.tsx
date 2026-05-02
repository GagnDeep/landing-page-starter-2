"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("relative w-full h-full overflow-hidden pointer-events-none", className)}>
      <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-[var(--primary)]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl motion-reduce:animate-none animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute top-[40%] right-[20%] w-72 h-72 bg-[var(--secondary)]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl motion-reduce:animate-none animate-[float_10s_ease-in-out_infinite_reverse_1s]" />
      <div className="absolute bottom-[10%] left-[40%] w-56 h-56 bg-[var(--accent)]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl motion-reduce:animate-none animate-[float_9s_ease-in-out_infinite_2s]" />
    </div>
  );
}
