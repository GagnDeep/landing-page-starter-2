"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageRegistry } from "@/lib/images";

interface AvatarStackProps {
  className?: string;
}

export function AvatarStack({ className }: AvatarStackProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex -space-x-4 opacity-0", className)}>
        {ImageRegistry.avatars.map((avatar, i) => (
          <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted" />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex -space-x-4", className)}>
      {ImageRegistry.avatars.map((avatar, i) => {
        const isLast = i === ImageRegistry.avatars.length - 1;

        return (
          <div key={i} className="relative z-10 hover:z-20">
            {shouldReduceMotion ? (
              <div className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden bg-muted">
                <Image
                  src={avatar.url}
                  alt={avatar.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ) : (
              <motion.div
                className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden bg-muted cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={avatar.url}
                  alt={avatar.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
