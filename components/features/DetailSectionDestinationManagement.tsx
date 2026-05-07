import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function DetailSectionDestinationManagement() {
  const { id, headline, description, highlights } = featuresContent.detailSectionDestinationManagement;
  const image = siteImages.features.destinationLogistics;

  return (
    <section id={id} className="py-grand bg-secondary px-6 border-y border-border/50">
      <div className="container mx-auto flex flex-col md:flex-row-reverse gap-12 lg:gap-24 items-center">
        <div className="w-full md:w-5/12 relative aspect-[3/4] overflow-hidden">
          <Image src={image.url} alt={image.alt} fill className="object-cover" />
        </div>
        <div className="w-full md:w-7/12">
          <FadeUpStagger>
            <h2 className="font-heading text-4xl mb-6 text-foreground">{headline}</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="p-4 border border-border bg-background">
                  <span className="font-sans text-sm tracking-widest uppercase text-primary block">{highlight}</span>
                </div>
              ))}
            </div>
          </FadeUpStagger>
        </div>
      </div>
    </section>
  );
}
