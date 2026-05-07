import React from "react";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { HoverRevealImage, FadeUpStagger } from "@/components/visuals";

export function SignatureDishGallery() {
  const { headline, imagesAlt } = homeContent.signatureDishGallery;

  const images = [
    siteImages.home.signatureDish1,
    siteImages.home.signatureDish2,
    siteImages.home.signatureDish3,
    siteImages.home.signatureDish4
  ];

  return (
    <section className="py-grand px-6 bg-background">
      <div className="container mx-auto">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl text-center mb-16">{headline}</h2>
        </FadeUpStagger>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <HoverRevealImage
              key={idx}
              image={img}
              overlayText={imagesAlt[idx]}
              className="aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
