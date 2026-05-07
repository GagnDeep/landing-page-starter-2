import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { FadeUpStagger, ShimmerText } from "@/components/visuals";
import { Button } from "@/components/ui/button";

export function FinalCallToAction() {
  const { headline, subheadline, cta, ctaHref } = homeContent.finalCallToAction;

  return (
    <section className="py-32 px-6 bg-background border-t border-border/50 text-center">
      <div className="container mx-auto max-w-3xl">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl md:text-6xl mb-6 text-foreground">
            {headline}
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-12">
            {subheadline}
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-8 text-sm tracking-widest uppercase transition-all duration-300">
            <Link href={ctaHref}>
              <ShimmerText>{cta}</ShimmerText>
            </Link>
          </Button>
        </FadeUpStagger>
      </div>
    </section>
  );
}
