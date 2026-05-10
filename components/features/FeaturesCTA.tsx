import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuresContent } from "@/content/features";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function FeaturesCTA() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-border">
      <AnimatedGradientMesh className="absolute inset-0 z-0" intensity="medium" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">{featuresContent.guarantee.heading}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{featuresContent.guarantee.text}</p>

        <div className="bg-card inline-block p-8 rounded-3xl shadow-xl border border-border/50 max-w-md w-full">
          <h3 className="text-2xl font-bold mb-6">{featuresContent.cta.heading}</h3>
          <Button asChild size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg">
            <Link href="/contact">{featuresContent.cta.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
