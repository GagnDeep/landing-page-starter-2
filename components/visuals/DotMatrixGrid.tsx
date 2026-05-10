import React from 'react';
import { cn } from '@/lib/utils';

interface DotMatrixGridProps {
  className?: string;
  opacity?: number;
}

export const DotMatrixGrid: React.FC<DotMatrixGridProps> = ({
  className,
  opacity = 0.2
}) => {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden -z-20", className)}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" fillOpacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
      {/* Vignette effect to fade out the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_var(--background)_80%)]" />
    </div>
  );
};
