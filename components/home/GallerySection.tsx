"use client"

import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"
import { SubtleScaleImage } from "@/components/visuals"

export function GallerySection() {
  const { gallery } = homeContent

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-heading text-foreground">
          {gallery.heading}
        </h2>
      </div>

      {/* Edge-to-edge masonry-like grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        {IMAGES.home.gallery.map((src, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl overflow-hidden ${
              idx === 0 ? 'aspect-square md:aspect-[4/5]' :
              idx === 1 ? 'aspect-[4/3] md:aspect-[3/4] md:mt-12' :
              'aspect-square md:aspect-[4/5]'
            }`}
          >
            <SubtleScaleImage
              src={src}
              alt={gallery.imagesAltText[idx]}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
