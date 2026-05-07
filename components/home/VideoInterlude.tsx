import React from "react";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { KenBurnsImage, FadeUpStagger } from "@/components/visuals";

export function VideoInterlude() {
  const { headline, description } = homeContent.videoInterlude;

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <KenBurnsImage image={siteImages.about.teamAction} />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <FadeUpStagger className="flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 drop-shadow-md">
            {headline}
          </h2>
          <p className="font-sans text-lg text-white/90 drop-shadow-sm">
            {description}
          </p>
        </FadeUpStagger>
      </div>
    </section>
  );
}
