import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

function ServiceRow({
  headline,
  description,
  image,
  reversed = false
}: {
  headline: string,
  description: string,
  image: { url: string, alt: string, width: number, height: number },
  reversed?: boolean
}) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-12 lg:gap-24",
      reversed ? "md:flex-row-reverse" : ""
    )}>
      <div className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden group">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <FadeUpStagger>
          <h3 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">{headline}</h3>
          <p className="font-sans text-muted-foreground leading-relaxed text-lg">{description}</p>
        </FadeUpStagger>
      </div>
    </div>
  );
}

export function ServiceHighlights() {
  return (
    <section className="py-macro px-6 bg-background">
      <div className="container mx-auto max-w-6xl flex flex-col gap-24 lg:gap-32">
        <ServiceRow
          headline={homeContent.serviceHighlightCulinaryArtistry.headline}
          description={homeContent.serviceHighlightCulinaryArtistry.description}
          image={siteImages.home.culinaryArtistry}
        />
        <ServiceRow
          headline={homeContent.serviceHighlightTheGrandSetup.headline}
          description={homeContent.serviceHighlightTheGrandSetup.description}
          image={siteImages.home.grandSetup}
          reversed={true}
        />
        <ServiceRow
          headline={homeContent.serviceHighlightImpeccableHospitality.headline}
          description={homeContent.serviceHighlightImpeccableHospitality.description}
          image={siteImages.home.impeccableHospitality}
        />
      </div>
    </section>
  );
}
