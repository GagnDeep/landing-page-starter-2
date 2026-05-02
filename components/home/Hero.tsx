import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";
import { AnimatedGradientMesh, CTAGlow, FloatingBlobs } from "@/components/visuals";

export function Hero() {
  const content = homeContent.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden isolation-auto pt-20">
      {/* Background visual components */}
      <div className="absolute inset-0 z-0">
         <Image
           src={SITE_IMAGES.hero.main.src}
           alt={SITE_IMAGES.hero.main.alt}
           fill
           priority
           className="object-cover opacity-20 dark:opacity-10 mix-blend-overlay"
         />
         <AnimatedGradientMesh className="absolute inset-0" />
         <FloatingBlobs className="absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-foreground tracking-tight drop-shadow-sm">
          {content.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          {content.subheadline}
        </p>

        <CTAGlow>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            {content.cta}
          </Link>
        </CTAGlow>
      </div>
    </section>
  );
}
