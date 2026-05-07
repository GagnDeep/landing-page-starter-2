import { Metadata } from "next"
import { aboutContent } from "@/content/about"
import { siteImages } from "@/lib/images"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { ParallaxImage } from "@/components/visuals/parallax-image"
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger-container"
import { KenBurnsHero } from "@/components/visuals/ken-burns-hero"
import { CTAGlow } from "@/components/visuals/cta-glow"
import Link from "next/link"

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
}

export default function AboutPage() {
  return (
    <div className="bg-background pt-24">
      {/* 1. Hero: The Origin */}
      <section className="relative h-[80svh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <KenBurnsHero
                src={siteImages.about.hero}
                alt="Vintage Heritage Building"
                overlayOpacity={0.6}
            />
        </div>
        <div className="relative z-10 text-center text-white px-6">
            <RevealText
                as="h1"
                text={aboutContent.hero.headline}
                className="font-heading text-6xl md:text-8xl mb-6"
            />
            <FadeIn delay={0.8}>
                <p className="font-sans text-xl md:text-2xl text-white/80 font-light tracking-wide">
                    {aboutContent.hero.subheadline}
                </p>
            </FadeIn>
        </div>
      </section>

      {/* 2. The Founder's Narrative */}
      <section className="py-24 md:py-32 lg:py-40 bg-background overflow-hidden border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative h-[60vh] lg:h-[80vh] w-full">
                    <FadeIn className="w-full h-full">
                        <ParallaxImage
                            src={siteImages.about.founder}
                            alt="The Founder"
                            containerClassName="w-full h-full rounded-sm"
                        />
                    </FadeIn>
                </div>
                <div className="flex flex-col justify-center">
                    <SlideUp>
                        <span className="font-sans text-xs tracking-widest uppercase text-primary font-semibold mb-6 block">Our Story</span>
                        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-10">
                            {aboutContent.foundersNarrative.heading}
                        </h2>
                        {/* Drop cap implementation via CSS or first-letter tailwind class */}
                        <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light first-letter:float-left first-letter:text-6xl first-letter:pr-2 first-letter:font-heading first-letter:text-primary">
                            {aboutContent.foundersNarrative.content}
                        </p>
                    </SlideUp>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Generational Evolution (Timeline) */}
      <section className="py-24 md:py-32 bg-muted relative">
        <div className="mx-auto max-w-5xl px-6 md:px-12 text-center mb-24">
            <SlideUp>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                    {aboutContent.generationalEvolution.heading}
                </h2>
            </SlideUp>
        </div>

        <div className="mx-auto max-w-4xl px-6 md:px-12 relative">
             {/* Central Gold Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/30 md:-translate-x-1/2 z-0" />

            <StaggerContainer className="flex flex-col gap-16 md:gap-24 relative z-10">
                {aboutContent.generationalEvolution.eras.map((era, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <StaggerItem key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                            {/* Mobile timeline dot */}
                            <div className="absolute left-[24px] top-1 w-[7px] h-[7px] rounded-full bg-accent md:hidden" />

                            {/* Year - Left on Desktop, Top on Mobile */}
                            <div className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-16' : 'md:order-3 md:text-left md:pl-16'} pl-16 md:pl-0 mb-4 md:mb-0`}>
                                <span className="font-heading text-3xl md:text-4xl text-primary italic">
                                    {era.year}
                                </span>
                            </div>

                            {/* Desktop timeline dot */}
                            <div className="hidden md:block w-[7px] h-[7px] rounded-full bg-accent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                            {/* Content - Right on Desktop, Bottom on Mobile */}
                            <div className={`md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:order-3 md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                                <h3 className="font-sans tracking-widest uppercase text-sm font-semibold text-foreground mb-4">{era.title}</h3>
                                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{era.description}</p>
                            </div>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>
        </div>
      </section>

      {/* 4. Our Philosophy: The Three Pillars */}
      <section className="py-24 md:py-32 bg-background border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <SlideUp className="text-center mb-24">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                    {aboutContent.philosophy.heading}
                </h2>
            </SlideUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                {aboutContent.philosophy.pillars.map((pillar, index) => (
                    <StaggerItem key={index} className="text-center flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mb-8 text-accent">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <h3 className="font-heading text-3xl text-foreground mb-4">{pillar.title}</h3>
                        <p className="font-sans text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
      </section>

      {/* 5. Sourcing & Ingredients */}
      <section className="relative h-[70svh] w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
             <ParallaxImage
                src={siteImages.about.sourcing}
                alt="Sourcing Ingredients"
                containerClassName="w-full h-full"
             />
             <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
              <SlideUp>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8">
                      {aboutContent.sourcing.heading}
                  </h2>
                  <p className="font-sans text-lg md:text-xl font-light text-white/80 leading-relaxed">
                      {aboutContent.sourcing.content}
                  </p>
              </SlideUp>
          </div>
      </section>

      {/* 6. The Bawa Standard (Quality Assurance) */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
            <SlideUp className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                    {aboutContent.qualityAssurance.heading}
                </h2>
                <div className="h-[1px] w-24 bg-accent mx-auto" />
            </SlideUp>

            <ul className="flex flex-col gap-8">
                {aboutContent.qualityAssurance.checklist.map((item, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <li className="flex items-start gap-6 bg-background p-6 shadow-sm border border-border/50 rounded-sm">
                            <span className="text-accent shrink-0 mt-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                            <span className="font-sans text-foreground/80 leading-relaxed">
                                {item}
                            </span>
                        </li>
                    </FadeIn>
                ))}
            </ul>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-primary text-primary-foreground py-32 text-center px-6">
          <div className="mx-auto max-w-2xl flex flex-col items-center">
              <SlideUp>
                  <h2 className="font-heading text-5xl md:text-6xl mb-12">
                      {aboutContent.cta.heading}
                  </h2>
                  <CTAGlow glowColor="rgba(255,255,255,0.2)">
                    <Link
                        href="/contact"
                        className="inline-block border border-primary-foreground text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
                    >
                        {aboutContent.cta.buttonText}
                    </Link>
                  </CTAGlow>
              </SlideUp>
          </div>
      </section>
    </div>
  )
}
