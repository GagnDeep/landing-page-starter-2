"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import Image, { ImageProps } from "next/image"

interface ParallaxImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  offset?: number
  containerClassName?: string
}

export function ParallaxImage({
  src,
  alt,
  offset = 100,
  containerClassName = "",
  className = "",
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Move the image slightly slower than the scroll, creating depth
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y }}
        className="absolute inset-[-15%] h-[130%] w-[130%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          {...props}
          className={`object-cover ${className}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  )
}