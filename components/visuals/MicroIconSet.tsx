'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type IconName = 'wheat' | 'cake' | 'bread' | 'oven';

interface MicroIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export function MicroIcon({ name, className, ...props }: MicroIconProps) {
  const baseClasses = "text-primary stroke-current fill-none stroke-[1.5] motion-reduce:transition-none transition-transform hover:scale-110 duration-300";

  switch (name) {
    case 'wheat':
      return (
        <svg viewBox="0 0 24 24" className={cn(baseClasses, className)} {...props}>
          <path d="M12 22C12 22 11 16 7 12C3 8 2 5 2 5C2 5 5 4 9 8C13 12 12 22 12 22Z" />
          <path d="M12 22C12 22 13 16 17 12C21 8 22 5 22 5C22 5 19 4 15 8C11 12 12 22 12 22Z" />
          <path d="M12 22V15" />
        </svg>
      );
    case 'cake':
      return (
        <svg viewBox="0 0 24 24" className={cn(baseClasses, className)} {...props}>
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v2" />
          <path d="M12 8v2" />
          <path d="M17 8v2" />
          <path d="M7 4h.01" />
          <path d="M12 4h.01" />
          <path d="M17 4h.01" />
        </svg>
      );
    case 'bread':
      return (
        <svg viewBox="0 0 24 24" className={cn(baseClasses, className)} {...props}>
          <path d="M7 21h10a2 2 0 0 0 2-2V9.414a2 2 0 0 0-.586-1.414l-2.828-2.828A2 2 0 0 0 14.172 5H9.828a2 2 0 0 0-1.414.586L5.586 8.414A2 2 0 0 0 5 9.828V19a2 2 0 0 0 2 2z" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case 'oven':
      return (
        <svg viewBox="0 0 24 24" className={cn(baseClasses, className)} {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18" />
          <path d="M8 15h8" />
          <path d="M10 15v3" />
          <path d="M14 15v3" />
          <circle cx="8" cy="6" r="1" />
          <circle cx="12" cy="6" r="1" />
          <circle cx="16" cy="6" r="1" />
        </svg>
      );
    default:
      return null;
  }
}
