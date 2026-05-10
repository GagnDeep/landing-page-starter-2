"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  imageSrc: string;
  alt: string;
}

export function AnimatedHeroIllustration({ className, imageSrc, alt }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("relative rounded-xl overflow-hidden shadow-2xl", className)}>
        <Image src={imageSrc} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn("relative rounded-xl overflow-hidden shadow-2xl", className)}
    >
      <motion.div
        animate={{ scale: [1.05, 1] }}
        transition={{ duration: 1.5, ease: "easeOut" as const }}
        className="w-full h-full relative"
      >
        <Image src={imageSrc} alt={alt} fill className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
    </motion.div>
  );
}
