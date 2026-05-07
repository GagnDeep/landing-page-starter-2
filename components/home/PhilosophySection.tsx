"use client"

import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"
import { TextFadeIn, SubtleScaleImage, PatternOverlay } from "@/components/visuals"

export function PhilosophySection() {
  const { philosophy } = homeContent

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <PatternOverlay opacity={0.02} />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <SubtleScaleImage
                src={IMAGES.home.philosophy}
                alt={philosophy.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <TextFadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-8 leading-tight">
                {philosophy.heading}
              </h2>
            </TextFadeIn>
            <TextFadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {philosophy.text}
              </p>
            </TextFadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
