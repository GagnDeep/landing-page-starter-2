import React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function Heritage() {
  const content = homeContent.heritage;

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-xl">
            <Image
              src={SITE_IMAGES.hero.about.src}
              alt={SITE_IMAGES.hero.about.alt}
              fill
              className="object-cover sepia-[.3] contrast-125 hover:sepia-0 transition-all duration-1000"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {content.headline}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {content.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
