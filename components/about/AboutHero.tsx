import React from 'react';
import { aboutHero } from '@/content/about';
import { images } from '@/lib/images';
import { AnimatedImageFrame } from '@/components/visuals/AnimatedImageFrame';
import { FlourDustParticles } from '@/components/visuals/FlourDustParticles';

export function AboutHero() {
  return (
    <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <FlourDustParticles count={25} className="opacity-40" />
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        {/* About-02-PageTitleHero */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
          {aboutHero.heading}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-16">
          {aboutHero.subheading}
        </p>

        {/* About-03-HeroAtmosphericImage */}
        <div className="w-full max-w-5xl mx-auto aspect-[21/9] relative">
          <AnimatedImageFrame
            image={images.bakeryInterior}
            priority={true}
            className="w-full h-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
