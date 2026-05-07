"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

// We limit the "as" prop to valid HTML elements that Framer Motion supports natively via motion.*
type ValidTags = "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "blockquote";

interface RevealTextProps {
  text: string
  as?: ValidTags
  className?: string
  delay?: number
}

export function RevealText({
  text,
  as = "span",
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
  const MotionComponent = motion[as]

  return (
    <MotionComponent
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
    </MotionComponent>
  )
}