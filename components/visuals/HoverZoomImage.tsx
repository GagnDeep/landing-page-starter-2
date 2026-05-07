"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverZoomImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
}

export function HoverZoomImage({
  src,
  alt,
  aspectRatio = "auto",
  className,
  ...props
}: HoverZoomImageProps) {
  const prefersReducedMotion = useReducedMotion();

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "aspect-auto",
  };

  return (
    <div
      className={cn("relative overflow-hidden group rounded-md bg-muted", aspectClasses[aspectRatio], className)}
      {...props}
    >
      <motion.div
        className="w-full h-full"
        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
