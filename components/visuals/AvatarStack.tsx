"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarStackProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: { url: string; alt: string }[];
  limit?: number;
  duration?: number;
  borderColor?: string;
}

export function AvatarStack({
  className,
  avatars,
  limit = 4,
  duration = 0.5,
  borderColor,
  ...props
}: AvatarStackProps) {
  const shouldReduceMotion = useReducedMotion();
  const displayAvatars = avatars.slice(0, limit);
  const remainingCount = avatars.length - limit;

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <div className="flex -space-x-4">
        {displayAvatars.map((avatar, index) => (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration,
              delay: index * 0.1,
              ease: "easeOut" as const,
            }}
            className={cn("relative w-12 h-12 rounded-full border-2 overflow-hidden z-10", borderColor ? "" : "border-background")}
            style={{ zIndex: 10 - index, ...(borderColor ? { borderColor } : {}) }}
          >
            <Image
              src={avatar.url}
              alt={avatar.alt}
              fill
              className="object-cover"
              sizes="48px"
            />
          </motion.div>
        ))}
        {remainingCount > 0 && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: displayAvatars.length * 0.1 }}
            className={cn("relative flex items-center justify-center w-12 h-12 rounded-full border-2 bg-muted text-muted-foreground font-medium text-sm z-0", borderColor ? "" : "border-background")}
            style={borderColor ? { borderColor } : {}}
          >
            +{remainingCount}
          </motion.div>
        )}
      </div>
    </div>
  );
}
