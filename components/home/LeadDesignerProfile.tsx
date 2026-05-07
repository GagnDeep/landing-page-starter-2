import React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function LeadDesignerProfile() {
  const { headline, message, name, title } = homeContent.leadDesignerProfile;
  const image = siteImages.about.founder1;

  return (
    <section className="py-grand bg-background px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full md:w-5/12 relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-full">
           <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-7/12">
          <FadeUpStagger>
            <h2 className="font-heading text-3xl md:text-4xl mb-8">{headline}</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 italic">
              &quot;{message}&quot;
            </p>
            <div>
              <p className="font-heading text-xl">{name}</p>
              <p className="font-sans text-sm text-primary tracking-widest uppercase mt-1">{title}</p>
            </div>
          </FadeUpStagger>
        </div>
      </div>
    </section>
  );
}
