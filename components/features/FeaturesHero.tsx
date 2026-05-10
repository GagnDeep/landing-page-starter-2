import React from 'react';
import { featuresHero } from '@/content/features';
import { WarmGradientMesh } from '@/components/visuals/WarmGradientMesh';
import { HeritageStamp } from '@/components/visuals/HeritageStamp';

export function FeaturesHero() {
  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background border-b border-border/50">
      <WarmGradientMesh className="opacity-50" />
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Features-02-PageHero (Text Side) */}
        <div className="flex flex-col items-start">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
            Artisanal Techniques
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            {featuresHero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
            {featuresHero.subheading}
          </p>
        </div>

        {/* Features-02-PageHero (Graphic Side) */}
        <div className="flex justify-center lg:justify-end items-center h-full min-h-[300px]">
           <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
             <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_30s_linear_infinite] border-dashed" />
             <div className="absolute inset-4 border-[1px] border-primary/40 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             <HeritageStamp className="w-48 h-48 md:w-56 md:h-56" />
           </div>
        </div>

      </div>
    </section>
  );
}
