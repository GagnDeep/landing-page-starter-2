"use client"

import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"
import { SubtleScaleImage } from "@/components/visuals"

export function VenuesSection() {
  const { venues } = homeContent

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading text-foreground">
            {venues.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {venues.list.map((venueName, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/2] rounded-xl overflow-hidden mb-4 relative">
                <SubtleScaleImage
                  src={IMAGES.home.venues[idx]}
                  alt={venueName}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-center text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {venueName}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
