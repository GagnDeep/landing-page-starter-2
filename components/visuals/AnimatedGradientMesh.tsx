import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientMeshProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark';
}

export const AnimatedGradientMesh: React.FC<AnimatedGradientMeshProps> = ({
  className,
  variant = 'primary'
}) => {
  // Using pure CSS animations via Tailwind utility classes mapped to CSS variables
  // The colors map back to the OKLCH tokens defined in globals.css

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'from-secondary/50 via-muted/50 to-background';
      case 'dark':
        return 'from-primary/20 via-background to-secondary/10';
      case 'primary':
      default:
        return 'from-primary/30 via-accent/20 to-background';
    }
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <div
        className={cn(
          "absolute -inset-[100%] opacity-50",
          "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
          getVariantStyles(),
          "motion-safe:animate-[spin_40s_linear_infinite]",
          "motion-reduce:animate-none motion-reduce:opacity-30"
        )}
        style={{
          transformOrigin: 'center center',
        }}
      />
      {/* Overlay to soften the gradient and blend it into the background */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[100px]" />
    </div>
  );
};
