"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ParallaxImageProps = React.ComponentProps<"div"> & {
  src: string;
  alt: string;
  imageClassName?: string;
  priority?: boolean;
  offset?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  offset = 50,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moves the image vertically based on scroll position
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (shouldReduceMotion) {
    return (
      <div className={cn("relative overflow-hidden w-full h-full", className)} {...props}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", imageClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <motion.div
        style={{ y }}
        className="absolute w-full left-0 right-0"
      >
        <div style={{ height: `calc(100% + ${offset * 2}px)`, top: -offset, position: 'relative' }}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn("object-cover", imageClassName)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
