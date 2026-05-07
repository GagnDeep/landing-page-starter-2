import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function DetailSectionWeddingCatering() {
  const { id, headline, description, highlights } = featuresContent.detailSectionWeddingCatering;
  const image = siteImages.features.weddingCatering;

  return (
    <section id={id} className="py-grand bg-background px-6">
      <div className="container mx-auto">
        <div className="w-full relative aspect-video md:aspect-[21/9] mb-16 overflow-hidden">
          <Image src={image.url} alt={image.alt} fill className="object-cover" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <FadeUpStagger>
              <h2 className="font-heading text-4xl mb-6 text-foreground">{headline}</h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">{description}</p>
            </FadeUpStagger>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <FadeUpStagger staggerDelay={150}>
              <ul className="space-y-6">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-heading text-xl">{highlight}</span>
                  </li>
                ))}
              </ul>
            </FadeUpStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
