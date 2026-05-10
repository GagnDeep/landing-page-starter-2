import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  className?: string;
  logos: React.ReactNode[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  className,
  logos,
  speed = 'normal',
  direction = 'left'
}) => {
  const speedClass = {
    slow: 'duration-[60s]',
    normal: 'duration-[40s]',
    fast: 'duration-[20s]'
  }[speed];

  const directionClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={cn("w-full overflow-hidden flex flex-col justify-center", className)}>
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div
          className={cn(
            "flex w-max min-w-full shrink-0 gap-16 px-8 items-center justify-around",
            "motion-safe:animate-marquee",
            direction === 'right' && "motion-safe:animate-marquee-reverse",
            speedClass,
            "motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
          )}
        >
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              {logo}
            </div>
          ))}
          {/* Duplicate set for seamless loop - hidden when reduced motion is preferred */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 motion-reduce:hidden"
              aria-hidden="true"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind config needs these keyframes:
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' }
          },
          'marquee-reverse': {
            '0%': { transform: 'translateX(-50%)' },
            '100%': { transform: 'translateX(0%)' }
          }
        }
      */}
    </div>
  );
};
