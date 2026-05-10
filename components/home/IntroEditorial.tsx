import React from 'react';
import { introEditorial } from '@/content/home';
import { images } from '@/lib/images';
import { AnimatedImageFrame } from '@/components/visuals/AnimatedImageFrame';
import { FlourDustParticles } from '@/components/visuals/FlourDustParticles';
import { HeritageStamp } from '@/components/visuals/HeritageStamp';

export function IntroEditorial() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Home-06-IntroEditorialBlock - Image Side */}
        <div className="lg:col-span-5 relative">
          <FlourDustParticles className="opacity-50" count={15} />
          <div className="aspect-[3/4] w-full max-w-md mx-auto relative z-10">
            <AnimatedImageFrame
              image={images.storefront}
              className="w-full h-full shadow-xl"
            />
            {/* Decorative Stamp */}
            <div className="absolute -bottom-8 -right-8 z-20 bg-background rounded-full p-2 hidden sm:block">
              <HeritageStamp />
            </div>
          </div>
        </div>

        {/* Home-06-IntroEditorialBlock - Text Side */}
        <div className="lg:col-span-7 lg:pl-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
            {introEditorial.heading}
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 font-medium">
            <p>{introEditorial.content}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
