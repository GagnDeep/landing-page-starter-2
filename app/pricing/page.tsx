import { Metadata } from "next"
import { pricingContent } from "@/content/pricing"
import { siteImages } from "@/lib/images"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"

import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger-container"
import { KenBurnsHero } from "@/components/visuals/ken-burns-hero"
import { CTAGlow } from "@/components/visuals/cta-glow"
import Link from "next/link"

export const metadata: Metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
}

export default function PricingPage() {
  return (
    <div className="bg-background pt-24">
      {/* 1. Hero: Investment in Excellence */}
      <section className="relative h-[70svh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <KenBurnsHero
                src={siteImages.pricing.hero}
                alt="Elegant place setting"
                overlayOpacity={0.7}
            />
        </div>
        <div className="relative z-10 text-center text-white px-6">
            <RevealText
                as="h1"
                text={pricingContent.hero.headline}
                className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6"
            />
            <FadeIn delay={0.8}>
                <p className="font-sans text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                    {pricingContent.hero.subheadline}
                </p>
            </FadeIn>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-24 md:py-32 bg-background border-b border-border/50">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
             <SlideUp>
                <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                    {pricingContent.introduction.content}
                </p>
            </SlideUp>
        </div>
      </section>

      {/* 3. The Collections */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SlideUp className="text-center mb-24">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                    {pricingContent.collections.heading}
                </h2>
            </SlideUp>

            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {pricingContent.collections.tiers.map((tier, index) => (
                    <StaggerItem key={index}>
                        <div className="bg-background border border-border/50 p-12 h-full flex flex-col hover:border-primary/30 transition-colors shadow-sm">
                            <h3 className="font-heading text-3xl text-primary mb-4">{tier.name}</h3>
                            <p className="font-sans text-sm text-foreground/80 font-semibold tracking-widest uppercase mb-6 h-10">
                                {tier.idealFor}
                            </p>
                            <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                {tier.description}
                            </p>

                            <div className="border-t border-border pt-8 mb-12">
                                <ul className="flex flex-col gap-4">
                                    {tier.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-accent shrink-0 mt-1">✦</span>
                                            <span className="font-sans text-sm text-foreground/80">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <Link href="/contact" className="block text-center w-full border border-primary text-primary py-4 font-sans text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
                                    {tier.ctaText}
                                </Link>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
      </section>

      {/* 4. Inclusions & A La Carte */}
      <section className="py-24 md:py-32 bg-background border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Inclusions */}
            <div>
                <SlideUp>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                        {pricingContent.inclusions.heading}
                    </h2>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                        {pricingContent.inclusions.description}
                    </p>
                    <ul className="grid grid-cols-1 gap-4">
                        {pricingContent.inclusions.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary text-xs">✓</span>
                                </div>
                                <span className="font-sans text-foreground/80">{item}</span>
                            </li>
                        ))}
                    </ul>
                </SlideUp>
            </div>

            {/* A La Carte */}
            <div>
                <SlideUp delay={0.2}>
                     <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                        {pricingContent.aLaCarte.heading}
                    </h2>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8">
                        {pricingContent.aLaCarte.description}
                    </p>
                    <div className="flex flex-col gap-6">
                        {pricingContent.aLaCarte.options.map((option, idx) => (
                            <div key={idx} className="border-b border-border/50 pb-4">
                                <h4 className="font-sans text-sm tracking-widest uppercase text-foreground font-semibold mb-2">{option.name}</h4>
                                <p className="font-sans text-muted-foreground text-sm">{option.description}</p>
                            </div>
                        ))}
                    </div>
                </SlideUp>
            </div>

        </div>
      </section>

      {/* 5. Quotation Process */}
      <section className="py-24 md:py-32 bg-muted text-center">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SlideUp>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-20">
                    {pricingContent.quotationProcess.heading}
                </h2>
            </SlideUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-border z-0" />

                {pricingContent.quotationProcess.steps.map((step, idx) => (
                    <FadeIn key={idx} delay={idx * 0.2} className="relative z-10 bg-muted px-4">
                        <div className="w-16 h-16 rounded-full bg-background border border-primary/20 flex items-center justify-center mx-auto mb-6">
                            <span className="font-heading text-xl text-primary">{step.step}</span>
                        </div>
                        <h3 className="font-sans text-sm tracking-widest uppercase text-foreground font-semibold mb-4">{step.title}</h3>
                        <p className="font-sans text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-primary text-primary-foreground py-32 text-center px-6">
          <div className="mx-auto max-w-2xl flex flex-col items-center">
              <SlideUp>
                  <h2 className="font-heading text-4xl md:text-6xl mb-12">
                      {pricingContent.cta.heading}
                  </h2>
                  <CTAGlow glowColor="rgba(255,255,255,0.2)">
                    <Link
                        href="/contact"
                        className="inline-block border border-primary-foreground text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
                    >
                        {pricingContent.cta.buttonText}
                    </Link>
                  </CTAGlow>
              </SlideUp>
          </div>
      </section>

    </div>
  )
}