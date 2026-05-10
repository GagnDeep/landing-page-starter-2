import React from 'react';
import Link from 'next/link';
import { homeHero } from '@/content/home';
import { images } from '@/lib/images';
import { WarmGradientMesh } from '@/components/visuals/WarmGradientMesh';
import { AnimatedImageFrame } from '@/components/visuals/AnimatedImageFrame';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
      {/* Home-03-HeroCinematic Background */}
      <WarmGradientMesh />

      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Home-04-HeroTypographyOverlay */}
        <div className="flex flex-col items-start justify-center order-2 lg:order-1 max-w-xl">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
            Est. 1985
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-foreground mb-6 text-balance">
            {homeHero.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
            {homeHero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {homeHero.cta && (
              <Link
                href={homeHero.cta.href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold tracking-wide hover:bg-primary/90 transition-all hover:scale-105 duration-300"
              >
                {homeHero.cta.label}
              </Link>
            )}
            {homeHero.secondaryCta && (
              <Link
                href={homeHero.secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold tracking-wide hover:bg-primary/5 transition-all"
              >
                {homeHero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full">
             <AnimatedImageFrame
               image={images.heroBake}
               priority={true}
               className="w-full h-full shadow-2xl shadow-primary/10"
             />
          </div>
        </div>

      </div>
    </section>
  );
}
