import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  ParallaxImage,
  AnimatedText,
  ScrollReveal,
} from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen w-full bg-background pb-32">
      {/* 1. Services Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <ParallaxImage image={images.featuresHero} className="absolute inset-0" priority offset={50} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <AnimatedText
            el="h1"
            text={featuresContent.hero.headline}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-tight"
          />
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              {featuresContent.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Full-Service Coordination */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn direction="right" className="relative aspect-[4/5] w-full">
          <Image src={images.featuresFullService.url} alt={images.featuresFullService.alt} fill className="object-cover" />
        </FadeIn>
        <div className="flex flex-col justify-center">
          <FadeIn direction="left">
            <h2 className="text-4xl md:text-5xl font-heading mb-8 text-foreground">{featuresContent.fullService.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {featuresContent.fullService.description}
            </p>
            <ul className="space-y-4">
              {featuresContent.fullService.details.map((detail, i) => (
                <li key={i} className="flex items-start text-foreground/80">
                  <span className="mr-4 text-primary text-xl leading-none">•</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 3. Design & Styling */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-secondary/30">
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-heading mb-8 text-foreground">{featuresContent.designAndStyling.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {featuresContent.designAndStyling.description}
            </p>
            <ul className="space-y-4">
              {featuresContent.designAndStyling.details.map((detail, i) => (
                <li key={i} className="flex items-start text-foreground/80">
                  <span className="mr-4 text-primary text-xl leading-none">•</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <FadeIn direction="left" className="order-1 lg:order-2 relative aspect-[4/5] w-full">
          <Image src={images.featuresDesignStyling.url} alt={images.featuresDesignStyling.alt} fill className="object-cover" />
        </FadeIn>
      </section>

      {/* 4. Guest Experience Management */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-heading mb-8 text-foreground">{featuresContent.guestExperience.heading}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20 leading-relaxed">
            {featuresContent.guestExperience.description}
          </p>
        </ScrollReveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {featuresContent.guestExperience.pillars.map((pillar, i) => (
            <StaggerItem key={i} className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-heading mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* 5. Vendor Curation */}
      <section className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-heading mb-8">{featuresContent.vendorCuration.heading}</h2>
            <p className="text-xl opacity-80 leading-relaxed mb-16">
              {featuresContent.vendorCuration.description}
            </p>
          </FadeIn>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {featuresContent.vendorCuration.partnerships.map((partner, i) => (
              <StaggerItem key={i} className="border-t border-background/20 pt-6">
                <p className="text-lg font-light tracking-wide">{partner}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* 6. Inclusions & Exclusions */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading mb-6 text-foreground">{featuresContent.inclusionsExclusions.heading}</h2>
          <p className="text-lg text-muted-foreground">{featuresContent.inclusionsExclusions.description}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn direction="up" delay={0.1}>
            <h3 className="text-xl tracking-widest uppercase text-foreground border-b border-border pb-4 mb-8">Inclusions</h3>
            <ul className="space-y-6">
              {featuresContent.inclusionsExclusions.inclusions.map((item, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed">{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h3 className="text-xl tracking-widest uppercase text-foreground border-b border-border pb-4 mb-8 opacity-60">Exclusions</h3>
            <ul className="space-y-6">
              {featuresContent.inclusionsExclusions.exclusions.map((item, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed opacity-80">{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 7. Service Process Timeline */}
      <section className="py-32 px-6 md:px-12 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading mb-20 text-center">{featuresContent.timeline.heading}</h2>
          </FadeIn>
          <div className="relative border-l border-secondary-foreground/20 ml-4 md:ml-8 space-y-16">
            {featuresContent.timeline.phases.map((phase, i) => (
              <FadeIn key={i} direction="up" className="relative pl-8 md:pl-16">
                <span className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-secondary-foreground" />
                <h3 className="text-sm tracking-widest uppercase opacity-60 mb-2">{phase.month}</h3>
                <p className="text-2xl font-heading">{phase.title}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-40 px-6 text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading mb-6 text-foreground">{featuresContent.finalCta.heading}</h2>
          <p className="text-xl text-muted-foreground mb-12">{featuresContent.finalCta.subheading}</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-foreground text-background uppercase tracking-widest text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            {featuresContent.finalCta.ctaLabel}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
