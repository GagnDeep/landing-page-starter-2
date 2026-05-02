"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  lines: string[];
}

export const CodeWindowTyping: React.FC<Props> = ({ lines, className, ...props }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("bg-card border border-border rounded-lg p-4 shadow-sm h-32 w-full", className)}></div>;
  }

  return (
    <div className={cn("bg-card text-card-foreground border border-border rounded-lg shadow-md overflow-hidden font-mono text-sm", className)} {...props}>
      <div className="bg-muted px-4 py-2 border-b border-border flex space-x-2 items-center">
        <div className="w-3 h-3 rounded-full bg-destructive"></div>
        <div className="w-3 h-3 rounded-full bg-accent"></div>
        <div className="w-3 h-3 rounded-full bg-primary"></div>
      </div>
      <div className="p-4 space-y-2">
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typing motion-reduce:animate-none motion-reduce:w-full motion-reduce:border-none" style={{ animationDelay: `${index * 1.5}s` }}>
             <span className="text-muted-foreground mr-2">{index + 1}</span> {line}
          </div>
        ))}
        <div className="animate-blink border-r-2 border-foreground w-1 h-4 mt-2"></div>
      </div>
    </div>
  );
};
