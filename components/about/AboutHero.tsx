import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function AboutHero() {
  const { headline, subheadline } = aboutContent.aboutHero;

  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
         <Image
          src={siteImages.about.hero.url}
          alt={siteImages.about.hero.alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 transition-colors duration-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-20">
        <FadeUpStagger staggerDelay={200} className="flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
            {headline}
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl font-light tracking-wide drop-shadow-md">
            {subheadline}
          </p>
        </FadeUpStagger>
      </div>
    </section>
  );
}
