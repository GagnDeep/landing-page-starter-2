"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IMAGES, ImageAsset } from "@/lib/images";

interface ParallaxImageProps {
  imageKey: keyof typeof IMAGES;
  className?: string;
  altOverride?: string;
  priority?: boolean;
}

export function ParallaxImage({ imageKey, className, altOverride, priority = false }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const asset: ImageAsset = IMAGES[imageKey];

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", className)}
    >
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src={asset.src}
          alt={altOverride || asset.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
