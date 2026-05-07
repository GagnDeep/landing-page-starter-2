"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const { cta } = homeContent

  return (
    <section className="py-32 bg-primary text-primary-foreground text-center border-t border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000')] opacity-5 mix-blend-overlay" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <TextFadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-10 max-w-3xl mx-auto leading-tight">
            {cta.heading}
          </h2>
          <Button size="lg" variant="secondary" className="text-lg h-14 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
            {cta.button}
          </Button>
        </TextFadeIn>
      </div>
    </section>
  )
}
