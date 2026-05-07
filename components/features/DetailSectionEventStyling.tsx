import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function DetailSectionEventStyling() {
  const { id, headline, description, highlights } = featuresContent.detailSectionEventStyling;
  const image = siteImages.features.eventStyling;

  return (
    <section id={id} className="py-grand bg-background px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        <div className="w-full md:w-1/3 md:sticky md:top-32 self-start">
          <FadeUpStagger>
            <h2 className="font-heading text-4xl mb-6 text-foreground">{headline}</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
            <ul className="space-y-4 font-sans text-sm tracking-widest uppercase text-primary">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-2">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </FadeUpStagger>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-8">
           <div className="w-full relative aspect-[4/3] overflow-hidden">
            <Image src={image.url} alt={image.alt} fill className="object-cover" />
           </div>
        </div>
      </div>
    </section>
  );
}
