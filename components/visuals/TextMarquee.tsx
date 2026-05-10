'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TextMarqueeProps {
  text: string;
  className?: string;
  speed?: number; // duration in seconds for one loop
}

export function TextMarquee({ text, className, speed = 20 }: TextMarqueeProps) {
  // We duplicate the text array enough times to fill a wide screen seamlessly
  const texts = Array(8).fill(text);

  return (
    <div className={cn("relative flex w-full overflow-hidden border-y border-border bg-muted/30 py-3", className)}>
      <div
        className="flex min-w-max animate-marquee motion-reduce:animate-none"
        style={{ '--duration': `${speed}s` } as React.CSSProperties}
      >
        {texts.map((t, i) => (
          <span
            key={i}
            className="mx-4 text-sm font-medium tracking-widest text-muted-foreground uppercase"
          >
            {t} <span className="mx-4 inline-block text-primary/50">✦</span>
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Assuming the content is double width to loop smoothly */
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
      `}} />
    </div>
  );
}
