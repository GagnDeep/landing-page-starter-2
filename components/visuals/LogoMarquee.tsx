"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: string[];
  className?: string;
  speed?: "fast" | "normal" | "slow";
}

export function LogoMarquee({ logos, className, speed = "normal" }: LogoMarqueeProps) {
  const speedClass = {
    fast: "animate-marquee-fast",
    normal: "animate-marquee",
    slow: "animate-marquee-slow",
  }[speed];

  return (
    <div className={cn("flex w-full overflow-hidden bg-transparent select-none py-8", className)}>
      <div className={cn("flex shrink-0 min-w-full items-center justify-around gap-16 px-8", speedClass)}>
        {logos.map((logo, idx) => (
          <span key={`logo-1-${idx}`} className="text-xl font-heading text-muted-foreground whitespace-nowrap tracking-widest uppercase opacity-70">
            {logo}
          </span>
        ))}
      </div>
      <div aria-hidden="true" className={cn("flex shrink-0 min-w-full items-center justify-around gap-16 px-8", speedClass)}>
        {logos.map((logo, idx) => (
          <span key={`logo-2-${idx}`} className="text-xl font-heading text-muted-foreground whitespace-nowrap tracking-widest uppercase opacity-70">
            {logo}
          </span>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-fast { animation: marquee 15s linear infinite; }
        .animate-marquee-slow { animation: marquee 50s linear infinite; }

        @media (prefers-reduced-motion) {
          .animate-marquee, .animate-marquee-fast, .animate-marquee-slow {
            animation: none !important;
            transform: translateX(0);
          }
        }
      `}} />
    </div>
  );
}
