"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"

export function BehindTheScenes() {
  const { behindTheScenes } = homeContent

  return (
    <section className="py-24 bg-accent/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <TextFadeIn>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-8">
            {behindTheScenes.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {behindTheScenes.text}
          </p>
        </TextFadeIn>
      </div>
    </section>
  )
}
