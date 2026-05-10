import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function SecondaryCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <AnimatedGradientMesh className="absolute inset-0 z-0" intensity="low" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8">
          {homeContent.secondaryCta.heading}
        </h2>
        <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-10 text-lg font-bold">
          <Link href="/contact">{homeContent.secondaryCta.cta}</Link>
        </Button>
      </div>
    </section>
  );
}
