import React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function FabricGallery() {
  const content = homeContent.fabricGallery;

  const fabrics = [
    SITE_IMAGES.blog.post1,
    SITE_IMAGES.blog.post2,
    SITE_IMAGES.blog.post3,
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {content.headline}
          </h2>
          <p className="text-muted-foreground">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {fabrics.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group rounded-sm">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
