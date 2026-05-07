"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface SubtleScaleImageProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string
}

export function SubtleScaleImage({ containerClassName, className, alt, ...props }: SubtleScaleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={cn("relative overflow-hidden bg-muted", containerClassName)}>
      <motion.div
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : (prefersReducedMotion ? 1 : 1.05),
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          {...props}
          alt={alt}
          className={cn("object-cover w-full h-full", className)}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  )
}
