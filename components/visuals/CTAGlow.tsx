"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CTAGlow: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className="relative group inline-block">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-sm blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 motion-reduce:hidden"></div>
      <button
        className={cn(
          "relative bg-background text-foreground px-8 py-4 font-sans font-medium uppercase tracking-widest border border-border hover:bg-foreground hover:text-background transition-colors duration-300",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
