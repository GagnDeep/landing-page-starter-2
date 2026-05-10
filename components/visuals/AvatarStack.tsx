"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarStackProps {
  className?: string;
  images: { url: string; alt: string }[];
}

export function AvatarStack({ className, images }: AvatarStackProps) {
  const prefersReducedMotion = useReducedMotion();
  const limitedImages = images.slice(0, 4);

  return (
    <div className={cn("flex items-center -space-x-3", className)}>
      {limitedImages.map((img, i) => (
        <motion.div
          key={i}
          className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden"
          style={{ zIndex: limitedImages.length - i }}
          initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
          animate={prefersReducedMotion ? false : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
        >
          <Image
            src={img.url}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="40px"
          />
        </motion.div>
      ))}
      <motion.div
        className="relative w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground"
        style={{ zIndex: 0 }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={prefersReducedMotion ? false : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: limitedImages.length * 0.1, ease: "easeOut" as const }}
      >
        +1k
      </motion.div>
    </div>
  );
}
