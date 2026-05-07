"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"

export function SustainabilitySection() {
  const { sustainability } = homeContent

  return (
    <section className="py-24 bg-secondary/10 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <TextFadeIn>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
            {sustainability.heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {sustainability.text}
          </p>
        </TextFadeIn>
      </div>
    </section>
  )
}
