"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export function RevealText({
  text,
  className,
  delay = 0
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
          staggerChildren: prefersReducedMotion ? 0 : 0.05,
          delayChildren: prefersReducedMotion ? 0 : delay
      },
    },
  }

  const child = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  // Split text into words, then map to characters for smooth word-wrapping
  const words = text.split(" ")

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("inline-block", className)}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((character, charIndex) => (
            <motion.span
              variants={child}
              key={charIndex}
              className="inline-block"
            >
              {character}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  )
}