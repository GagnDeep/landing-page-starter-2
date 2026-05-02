"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface KenBurnsImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function KenBurnsImage({ src, alt, className, priority = false }: KenBurnsImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-muted", className)}>
      <motion.div
        className="w-full h-full relative"
        initial={shouldReduceMotion ? false : { scale: 1.0 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
