import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function DetailSectionBeverageMixology() {
  const { id, headline, description, highlights } = featuresContent.detailSectionBeverageMixology;
  const image = siteImages.features.beverageMixology;

  return (
    <section id={id} className="py-grand bg-[#111111] text-[#f2f2f2] px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        <div className="w-full md:w-1/2 relative aspect-square overflow-hidden">
          <Image src={image.url} alt={image.alt} fill className="object-cover opacity-80" />
        </div>
        <div className="w-full md:w-1/2">
          <FadeUpStagger>
            <h2 className="font-heading text-4xl mb-6">{headline}</h2>
            <p className="font-sans text-lg text-[#a3a3a3] leading-relaxed mb-12">{description}</p>
            <ul className="space-y-6">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="font-heading text-xl border-b border-[#333333] pb-4">
                  {highlight}
                </li>
              ))}
            </ul>
          </FadeUpStagger>
        </div>
      </div>
    </section>
  );
}
