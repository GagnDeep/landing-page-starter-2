"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { UnsplashImage } from "@/lib/images";

interface ParallaxImageProps {
  image: UnsplashImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  offset?: number;
}

export function ParallaxImage({
  image,
  className,
  imageClassName,
  priority = false,
  offset = 50,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        style={shouldReduceMotion ? {} : { y }}
        className={cn("absolute inset-[-10%] w-[120%] h-[120%]", imageClassName)}
      >
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
