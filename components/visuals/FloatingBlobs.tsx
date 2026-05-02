import React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color1?: string;
  color2?: string;
}

export const FloatingBlobs: React.FC<Props> = ({
  className,
  color1 = 'bg-primary/20',
  color2 = 'bg-accent/20',
  ...props
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-[-1]", className)} {...props} aria-hidden="true">
      <div className={cn("absolute top-[-10%] left-[-10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob motion-reduce:animate-none", color1)}></div>
      <div className={cn("absolute top-[20%] right-[-10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:2s] motion-reduce:animate-none", color2)}></div>
      <div className={cn("absolute bottom-[-20%] left-[20%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:4s] motion-reduce:animate-none", color1)}></div>
    </div>
  );
};
