import React from "react";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { KenBurnsImage, ShimmerText, FadeUpStagger } from "@/components/visuals";

export function HeroCinematic() {
  const { headline, subheadline } = homeContent.heroCinematic;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <KenBurnsImage image={siteImages.home.heroFallback} priority={true} />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <FadeUpStagger staggerDelay={200} className="flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
            {headline}
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl font-light tracking-wide drop-shadow-md">
            {subheadline}
          </p>
        </FadeUpStagger>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-white text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
