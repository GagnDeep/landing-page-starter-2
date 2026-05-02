"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items: string[];
}

export function LogoMarquee({ className, items }: LogoMarqueeProps) {
  return (
    <div className={cn("flex w-full overflow-hidden border-y border-border/50 py-8", className)}>
      <div className="flex w-fit motion-safe:animate-[marquee_40s_linear_infinite] motion-reduce:animate-none space-x-16 px-8">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0 text-xl font-heading text-muted-foreground uppercase tracking-widest flex items-center gap-4">
             <span className="w-2 h-2 rounded-full bg-accent/50" />
             {item}
          </div>
        ))}
      </div>
    </div>
  );
}
