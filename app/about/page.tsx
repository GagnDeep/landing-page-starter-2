import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { globalContent } from "@/content/global";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* 1. Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <AnimatedGradientMesh intensity="light" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {aboutContent.hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {aboutContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. The Purba Story */}
      <section className="py-24 relative">
        <FloatingBlobs variant="secondary" className="opacity-10 absolute inset-0 -z-10" />
        <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="font-heading text-3xl font-bold mb-6">{aboutContent.story.headline}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-primary">
                {aboutContent.story.content}
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-editorial">
                <Image src={images.founderPortrait.src} alt={images.founderPortrait.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-16">{aboutContent.philosophy.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {aboutContent.philosophy.items.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Artisans & 5. Timeline (Simplified) */}
      <section className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">{aboutContent.artisans.headline}</h2>
          <p className="text-lg text-muted-foreground mb-12">{aboutContent.artisans.description}</p>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
            <Image src={images.tailoringProcess.src} alt="Master tailors at work" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 6. Visit Us & 7. CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{aboutContent.visit.headline}</h2>
          <p className="text-muted/80 mb-12 text-lg">{aboutContent.visit.address}</p>
          <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer">
            <CTAGlow className="bg-background text-foreground hover:bg-muted ring-0">{aboutContent.visit.cta}</CTAGlow>
          </a>
        </div>
      </section>
    </div>
  );
}
