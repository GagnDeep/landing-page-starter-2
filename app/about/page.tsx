import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  AnimatedText,
  ScrollReveal,
} from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-24 pb-32">
      {/* 1. Editorial Hero */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh]">
        <FadeIn direction="right" className="order-2 lg:order-1 relative aspect-[3/4] w-full max-h-[800px]">
          <Image src={images.aboutHero.url} alt={images.aboutHero.alt} fill className="object-cover" priority />
        </FadeIn>
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <AnimatedText
            el="h1"
            text={aboutContent.hero.headline}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground mb-8 leading-tight"
          />
          <FadeIn delay={0.4} direction="up">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
              {aboutContent.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Our Origin Story */}
      <section className="py-32 px-6 md:px-12 max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-12 text-center">
            {aboutContent.originStory.heading}
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-foreground font-light leading-relaxed">
            {aboutContent.originStory.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. The Philosophy */}
      <section className="py-32 px-6 md:px-12 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-heading mb-20">{aboutContent.philosophy.heading}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <StaggerReveal>
              {aboutContent.philosophy.pillars.map((pillar, i) => (
                <StaggerItem key={i} className="md:mt-[calc(var(--index)*4rem)]" style={{ "--index": i } as React.CSSProperties}>
                  <h3 className="text-2xl font-heading mb-4 border-b border-secondary-foreground/20 pb-4">{pillar.title}</h3>
                  <p className="opacity-80 leading-relaxed">{pillar.description}</p>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* 4. The Core Team */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading mb-20 text-center text-foreground">{aboutContent.coreTeam.heading}</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {[images.aboutFounder, images.aboutTeamJulian, images.aboutTeamAmara].map((img, i) => {
            const member = aboutContent.coreTeam.members[i];
            return (
              <FadeIn key={i} delay={i * 0.2} direction="up">
                <div className="relative aspect-[3/4] w-full mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src={img.url} alt={img.alt} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-heading text-foreground">{member.name}</h3>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-2 mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 5. Global Reach */}
      <section className="py-32 px-6 md:px-12 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading mb-8 text-foreground">{aboutContent.globalReach.heading}</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
              {aboutContent.globalReach.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {aboutContent.globalReach.locations.map((loc) => (
                <span key={loc} className="text-sm tracking-widest uppercase text-foreground border border-border px-4 py-2">
                  {loc}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Signature Approach */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading mb-20 text-center text-foreground">{aboutContent.signatureApproach.heading}</h2>
        </FadeIn>
        <div className="space-y-16">
          {aboutContent.signatureApproach.steps.map((step, i) => (
            <FadeIn key={i} direction="up" className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <span className="text-6xl md:text-8xl font-heading text-muted opacity-30 leading-none">{step.number}</span>
              <div className="mt-2 md:mt-6">
                <h3 className="text-2xl md:text-3xl font-heading mb-4 text-foreground">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 7. Media & Press */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-12">{aboutContent.mediaPress.heading}</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {aboutContent.mediaPress.logos.map((logo) => (
              <span key={logo} className="font-heading text-xl md:text-2xl">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-40 px-6 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading mb-6 text-foreground">{aboutContent.finalCta.heading}</h2>
          <p className="text-xl text-muted-foreground mb-12">{aboutContent.finalCta.subheading}</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-all uppercase tracking-widest text-sm"
          >
            <span>{aboutContent.finalCta.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
