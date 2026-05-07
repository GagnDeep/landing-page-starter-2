"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"

export function PressMedia() {
  const { press } = homeContent

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <TextFadeIn>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              {press.heading}
            </h3>
          </TextFadeIn>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {press.publications.map((pub, idx) => (
              <TextFadeIn key={idx} delay={0.1 * (idx + 1)}>
                <span className="text-xl md:text-2xl font-heading text-foreground opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  {pub}
                </span>
              </TextFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
