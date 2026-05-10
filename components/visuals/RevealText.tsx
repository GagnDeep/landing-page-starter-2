"use client";

import { motion, useReducedMotion } from "framer-motion";

export const RevealText = ({
  children,
  className = "",
  as: Tag = "span"
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Create a wrapper component instead of passing 'as' directly to motion
  const MotionComponent = motion.div;

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <span className="inline-block overflow-hidden align-bottom">
      <MotionComponent
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        <Tag className="block">{children}</Tag>
      </MotionComponent>
    </span>
  );
};
