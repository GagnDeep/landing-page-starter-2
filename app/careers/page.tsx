import { careersContent } from "@/content/careers";
import { images } from "@/lib/images";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  ParallaxImage,
  AnimatedText,
  ScrollReveal,
} from "@/components/visuals";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-24 pb-32">
      {/* 1. Careers Hero */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <ParallaxImage image={images.careersHero} className="absolute inset-0" priority offset={40} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <AnimatedText
            el="h1"
            text={careersContent.hero.headline}
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-tight"
          />
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-2xl text-white/80 font-light tracking-wide max-w-3xl mx-auto">
              {careersContent.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Culture Statement */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-b border-border">
        <ScrollReveal>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
            {careersContent.cultureStatement.heading}
          </h2>
          <p className="text-xl md:text-3xl font-heading leading-relaxed text-foreground">
            {careersContent.cultureStatement.body}
          </p>
        </ScrollReveal>
      </section>

      {/* 3. Benefits & Perks */}
      <section className="py-32 px-6 md:px-12 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading mb-20 text-center">{careersContent.benefits.heading}</h2>
          </FadeIn>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {careersContent.benefits.pillars.map((pillar, i) => (
              <StaggerItem key={i} className="text-center md:text-left">
                <div className="w-12 h-12 bg-secondary-foreground/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-sm font-heading">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-heading mb-4">{pillar.title}</h3>
                <p className="opacity-80 leading-relaxed">{pillar.description}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* 4. Open Positions */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-heading mb-16 text-foreground">{careersContent.openPositions.heading}</h2>
        </FadeIn>
        <div className="space-y-6">
          {careersContent.openPositions.roles.map((role, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="group border border-border p-8 hover:border-foreground transition-colors cursor-pointer bg-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-heading text-foreground mb-2 group-hover:opacity-80 transition-opacity">{role.title}</h3>
                    <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground">
                      <span>{role.location}</span>
                      <span>•</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors hidden md:block" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Spontaneous Application */}
      <section className="py-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center border border-background/20 p-12 lg:p-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">{careersContent.spontaneousApplication.heading}</h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              {careersContent.spontaneousApplication.body}
            </p>
            <Link
              href="mailto:careers@guideevents.com"
              className="inline-flex items-center space-x-2 text-background border-b border-background pb-1 hover:opacity-70 transition-all uppercase tracking-widest text-sm"
            >
              <span>{careersContent.spontaneousApplication.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
