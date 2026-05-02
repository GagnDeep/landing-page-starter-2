import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { globalContent } from "@/content/global";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { HowItWorksDiagram } from "@/components/visuals/HowItWorksDiagram";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { cn } from "@/lib/utils";

export const metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function ServicesPage() {
  const serviceImages = [
    images.kurtaDetail,
    images.nehruJacket,
    images.fabricRolls, // Reusing fabric rolls as placeholder for trousers/shirts
  ];

  return (
    <div className="pb-24">
      {/* 1. Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-muted/20 border-b border-border/50">
        <DotMatrixGrid spacing={30} className="opacity-30" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {featuresContent.hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {featuresContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2, 3, 4. Services Overview */}
      <section className="py-24 space-y-32">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {featuresContent.services.map((service, idx) => {
            const isImageLeft = idx % 2 === 0;
            return (
              <div key={service.id} id={service.id} className={cn("flex flex-col md:flex-row gap-16 items-center", !isImageLeft && "md:flex-row-reverse")}>
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                    <Image src={serviceImages[idx].src} alt={serviceImages[idx].alt} fill className="object-cover" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. The Fabric Library */}
      <section className="py-24 bg-foreground text-background">
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">{featuresContent.fabricLibrary.headline}</h2>
          <p className="text-lg text-muted/80 mb-16">{featuresContent.fabricLibrary.description}</p>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image src={images.heroBackdrop.src} alt={images.heroBackdrop.alt} fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-8">
               <span className="font-heading text-2xl font-bold tracking-widest uppercase">{featuresContent.fabricLibrary.imageBadge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Measurement Process */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">{featuresContent.process.headline}</h2>
          <p className="text-lg text-muted-foreground mb-16">{featuresContent.process.description}</p>
          <div className="hidden md:block mb-12">
            <HowItWorksDiagram activeStep={2} />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 relative overflow-hidden text-center">
        <AnimatedGradientMesh intensity="medium" />
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold mb-10">{featuresContent.cta.headline}</h2>
          <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer">
            <CTAGlow className="px-8 py-4 text-base">{featuresContent.cta.button}</CTAGlow>
          </a>
        </div>
      </section>
    </div>
  );
}
