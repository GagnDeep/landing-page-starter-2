import React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";
import { SectionDivider } from "@/components/visuals";

export function SherwaniCollection() {
  const content = homeContent.sherwaniCollection;

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionDivider className="mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src={SITE_IMAGES.collections.sherwani1.src}
              alt={SITE_IMAGES.collections.sherwani1.alt}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {content.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.description}
            </p>
            <ul className="space-y-4 pt-4 border-t border-border">
              {content.items.map((item, index) => (
                <li key={index} className="flex items-center text-foreground font-medium text-lg tracking-wide">
                  <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
