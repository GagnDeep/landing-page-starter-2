import React from "react";
import { LogoMarquee, AnimatedStatCounter } from "@/components/visuals";

export function TrustIndicators() {
  const brands = [
    "Vogue India",
    "GQ",
    "Harper's Bazaar",
    "MensXP",
    "WedMeGood",
  ];

  return (
    <section className="bg-background pt-12 pb-24 border-b border-border/50">
      <div className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedStatCounter value={1985} label="Established" suffix="" />
          <AnimatedStatCounter value={10000} label="Garments Crafted" suffix="+" />
          <AnimatedStatCounter value={5.0} label="Client Rating" suffix="★" />
        </div>
      </div>
      <LogoMarquee items={brands} />
    </section>
  );
}
