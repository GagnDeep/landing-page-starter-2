import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { SITE_IMAGES } from "@/lib/images";

export function TheBeginning() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-border/50">
            <Image
              src={SITE_IMAGES.storefront.url}
              alt={SITE_IMAGES.storefront.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
              {aboutContent.theBeginning.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutContent.theBeginning.text}
            </p>
            <div className="p-6 bg-secondary/20 rounded-2xl border border-border">
              <h3 className="text-xl font-heading font-bold mb-2">{aboutContent.localRoots.heading}</h3>
              <p className="text-muted-foreground">{aboutContent.localRoots.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
