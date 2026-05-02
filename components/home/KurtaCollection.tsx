import React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function KurtaCollection() {
  const content = homeContent.kurtaCollection;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {content.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.description}
            </p>
            <ul className="space-y-4 pt-4 border-t border-border">
              {content.items.map((item, index) => (
                <li key={index} className="flex items-center text-foreground font-medium text-lg tracking-wide">
                  <span className="w-8 h-[1px] bg-accent mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-border/50 p-4 bg-muted/20">
            <div className="relative w-full h-full rounded-sm overflow-hidden">
                <Image
                  src={SITE_IMAGES.collections.kurta1.src}
                  alt={SITE_IMAGES.collections.kurta1.alt}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
