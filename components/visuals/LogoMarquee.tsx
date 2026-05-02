"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items?: string[];
}

export function LogoMarquee({ className, items = ["Trust", "Precision", "Heritage", "Mastery", "Elegance", "Bespoke"] }: LogoMarqueeProps) {
  return (
    <div className={cn("relative flex overflow-x-hidden border-y border-border py-4 bg-secondary/5", className)} aria-hidden="true">
      <div className="animate-marquee whitespace-nowrap flex gap-12 motion-reduce:animate-none">
        {items.map((item, i) => (
          <span key={`1-${i}`} className="text-sm uppercase tracking-widest text-muted-foreground font-sans">
            {item}
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 pt-4 motion-reduce:hidden">
         {items.map((item, i) => (
          <span key={`2-${i}`} className="text-sm uppercase tracking-widest text-muted-foreground font-sans">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
