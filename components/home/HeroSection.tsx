"use client"

import { Button } from "@/components/ui/button"
import { HeroReveal, ParallaxScroll, AnimatedGradientMesh } from "@/components/visuals"
import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"

export function HeroSection() {
  const { hero } = homeContent

  return (
    <section className="relative min-h-[90svh] flex flex-col justify-end pb-24 pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParallaxScroll offset={30} className="h-full">
          {/* We use an animated gradient mesh as a rich fallback and overlay */}
          <div className="absolute inset-0 z-10 bg-black/40" />
          <AnimatedGradientMesh colorA="var(--primary)" colorB="var(--secondary)" className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.home.hero}
            alt={homeContent.seo.title}
            className="w-full h-full object-cover object-center"
          />
        </ParallaxScroll>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <HeroReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white leading-tight mb-6 tracking-tight">
              {hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-sans font-medium max-w-xl mb-10 leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base h-12 px-8 rounded-full">
                {hero.ctaPrimary}
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white text-base h-12 px-8 rounded-full">
                {hero.ctaSecondary}
              </Button>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  )
}
