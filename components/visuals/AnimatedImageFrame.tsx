'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ImageRegistryEntry } from '@/lib/images';

interface AnimatedImageFrameProps {
  image: ImageRegistryEntry;
  className?: string;
  priority?: boolean;
}

export function AnimatedImageFrame({ image, className, priority = false }: AnimatedImageFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn(
      "relative overflow-hidden bg-muted rounded-[2rem]",
      // Apply a subtle, organic border radius distortion on hover (only if mounted to avoid hydration mismatch if relying on JS, but we use pure CSS here)
      "transition-all duration-700 ease-out",
      mounted && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && "hover:rounded-[1rem]",
      className
    )}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        className={cn(
          "object-cover w-full h-full transition-all duration-1000",
          !isLoaded ? "scale-105 blur-sm grayscale-[0.2]" : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-border/20 rounded-[inherit] pointer-events-none" />
    </div>
  );
}
