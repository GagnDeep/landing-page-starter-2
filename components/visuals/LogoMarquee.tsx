"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: { name: string; url: string }[];
  speed?: number;
}

export function LogoMarquee({
  className,
  logos,
  speed = 30,
  ...props
}: LogoMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className={cn(
        "w-full overflow-hidden flex whitespace-nowrap mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)",
        className
      )}
      {...props}
    >
      <motion.div
        className="flex gap-12 items-center px-6"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: ["0%", "-33.33%"],
              }
        }
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: speed,
                repeat: Infinity,
                ease: "linear" as const,
              }
        }
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <span className="text-xl font-heading font-medium tracking-wide text-foreground">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
