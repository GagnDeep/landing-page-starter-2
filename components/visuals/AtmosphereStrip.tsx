"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { UnsplashImage } from "@/lib/images";

interface AtmosphereStripProps {
  image: UnsplashImage;
  caption?: string;
  className?: string;
  height?: "sm" | "md" | "lg" | "screen";
}

export function AtmosphereStrip({
  image,
  caption,
  className,
  height = "md",
}: AtmosphereStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const heightClasses = {
    sm: "h-[30vh] min-h-[300px]",
    md: "h-[50vh] min-h-[400px]",
    lg: "h-[70vh] min-h-[600px]",
    screen: "h-screen",
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden flex items-center justify-center",
        heightClasses[height],
        className
      )}
    >
      <motion.div
        style={shouldReduceMotion ? {} : { scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle overlay to ensure caption readability if present */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4"
        >
          <p className="text-white text-xl md:text-3xl font-heading tracking-wide">
            {caption}
          </p>
        </motion.div>
      )}
    </div>
  );
}
