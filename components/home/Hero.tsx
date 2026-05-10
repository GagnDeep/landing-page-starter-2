import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-32 overflow-hidden">
      <AnimatedGradientMesh className="absolute inset-0 z-0" intensity="high" />
      <FloatingBlobs className="z-0 opacity-50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-6 animate-fade-in">
              <span className="flex w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
              {homeContent.global.header.badge}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              {homeContent.hero.heading}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {homeContent.hero.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <CTAGlow active={true}>
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-medium">
                  <Link href="/contact">{homeContent.hero.primaryCta}</Link>
                </Button>
              </CTAGlow>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-medium border-border hover:bg-secondary/50">
                <Link href="/features#gifts">{homeContent.hero.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] lg:aspect-square max-w-lg mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-secondary rounded-[2rem] transform rotate-3 scale-105 motion-reduce:rotate-0 motion-reduce:scale-100 transition-transform duration-700" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src={SITE_IMAGES.heroCake.url}
                alt={SITE_IMAGES.heroCake.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
