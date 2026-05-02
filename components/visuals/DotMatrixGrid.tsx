import React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string; // Valid CSS color string or variable
}

export const DotMatrixGrid: React.FC<Props> = ({ className, color = 'var(--border)', ...props }) => {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none opacity-40", className)}
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
      aria-hidden="true"
      {...props}
    />
  );
};
