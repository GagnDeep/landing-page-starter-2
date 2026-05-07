import { KenBurnsHero } from "@/components/visuals/ken-burns-hero"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { CTAGlow } from "@/components/visuals/cta-glow"
import Link from "next/link"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"

export function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <KenBurnsHero
          src={siteImages.home.heroFallback}
          alt="Luxury wedding catering setup"
          overlayOpacity={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center text-white mt-12 md:mt-24">
        <RevealText
          as="h1"
          text={homeContent.hero.headline}
          className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl leading-tight"
        />

        <FadeIn delay={0.8} duration={1}>
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
            {homeContent.hero.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={1.2}>
          <CTAGlow glowColor="var(--color-primary)">
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
            >
              {homeContent.hero.ctaText}
            </Link>
          </CTAGlow>
        </FadeIn>
      </div>
    </section>
  )
}
