import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function TeamGallery() {
  const { headline, description } = aboutContent.teamGallery;

  return (
    <section className="py-grand bg-background px-6">
      <div className="container mx-auto max-w-5xl">
        <FadeUpStagger>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl mb-6">{headline}</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>
          <div className="w-full relative aspect-video overflow-hidden">
             <Image
                src={siteImages.about.teamAction.url}
                alt={siteImages.about.teamAction.alt}
                fill
                className="object-cover"
             />
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
