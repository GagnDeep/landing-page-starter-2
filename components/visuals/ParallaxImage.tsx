"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  priority?: boolean;
  offset?: number;
}

export function ParallaxImage({
  src,
  alt,
  priority = false,
  offset = 50,
  className,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : [`-${offset}px`, `${offset}px`]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-muted", className)} {...props}>
      <motion.div className="absolute inset-0 -top-24 -bottom-24" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
