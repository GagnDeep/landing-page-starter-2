import React from "react";
import { homeContent } from "@/content/home";
import Image from "next/image";
import { SITE_IMAGES } from "@/lib/images";

export function InstagramFeed() {
  const images = [
    SITE_IMAGES.heroCake,
    SITE_IMAGES.giftHamper,
    SITE_IMAGES.midnightRescue,
    SITE_IMAGES.dryFruits,
  ];

  return (
    <section className="bg-background overflow-hidden">
      <div className="text-center py-12">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          {homeContent.instagram.heading}
        </h2>
        <a href="#" className="text-primary hover:underline font-medium">
          {homeContent.instagram.cta}
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-square">
            <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
