import { Metadata } from "next"
import { careersContent } from "@/content/careers"
import { siteImages } from "@/lib/images"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger-container"
import { KenBurnsHero } from "@/components/visuals/ken-burns-hero"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: careersContent.seo.title,
  description: careersContent.seo.description,
}

export default function CareersPage() {
  return (
    <div className="bg-background pt-24 min-h-screen pb-32">

      {/* 1. Hero: Join the Legacy */}
      <section className="relative h-[70svh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <KenBurnsHero
                src={siteImages.careers.hero}
                alt="Culinary Team in Action"
                overlayOpacity={0.6}
            />
        </div>
        <div className="relative z-10 text-center text-white px-6">
            <RevealText
                as="h1"
                text={careersContent.hero.headline}
                className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6"
            />
            <FadeIn delay={0.8}>
                <p className="font-sans text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                    {careersContent.hero.subheadline}
                </p>
            </FadeIn>
        </div>
      </section>

      {/* 2. Our Culture & Standards */}
      <section className="py-24 md:py-32 bg-background border-b border-border/50">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
             <SlideUp>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                    {careersContent.culture.heading}
                </h2>
                <p className="font-sans text-xl text-muted-foreground leading-relaxed font-light">
                    {careersContent.culture.content}
                </p>
            </SlideUp>
        </div>
      </section>

      {/* 3. Benefits of Excellence Grid */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
             <SlideUp className="text-center mb-16 md:mb-24">
                <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                    {careersContent.benefits.heading}
                </h2>
            </SlideUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {careersContent.benefits.items.map((benefit, index) => (
                    <StaggerItem key={index}>
                        <div className="bg-background border border-border/50 p-12 h-full text-center flex flex-col items-center hover:border-primary/30 transition-colors shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                ✦
                            </div>
                            <h3 className="font-heading text-2xl text-foreground mb-4">{benefit.title}</h3>
                            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    </StaggerItem>
                 ))}
            </StaggerContainer>
        </div>
      </section>

      {/* 4. Open Positions Accordion */}
      <section className="py-24 md:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
               <SlideUp className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground text-center">
                        {careersContent.openPositions.heading}
                    </h2>
                </SlideUp>

                <FadeIn delay={0.2}>
                    <Accordion type="single" collapsible className="w-full">
                        {careersContent.openPositions.positions.map((job, index) => (
                            <AccordionItem key={index} value={`job-${index}`} className="border-border py-4">
                                <AccordionTrigger className="font-sans text-left text-lg md:text-xl text-foreground hover:text-primary transition-colors data-[state=open]:text-primary font-medium group">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full pr-4">
                                        <span>{job.title}</span>
                                        <div className="flex gap-4 font-sans text-xs tracking-widest uppercase text-muted-foreground font-normal">
                                            <span>{job.type}</span>
                                            <span>•</span>
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="font-sans text-muted-foreground leading-relaxed text-base mt-6">
                                    <div className="bg-muted p-6 md:p-8 border border-border/50 rounded-sm">
                                        <p className="mb-8">{job.description}</p>
                                        <Link
                                            href={`mailto:careers@bawacaterers.com?subject=Application: ${job.title}`}
                                            className="inline-block bg-primary text-primary-foreground px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
                                        >
                                            Apply for this position
                                        </Link>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </FadeIn>
          </div>
      </section>

      {/* 5. General Application CTA */}
      <section className="bg-primary text-primary-foreground py-24 text-center px-6">
          <div className="mx-auto max-w-2xl flex flex-col items-center">
              <SlideUp>
                  <h2 className="font-heading text-3xl md:text-4xl mb-4">
                      {careersContent.cta.heading}
                  </h2>
                  <p className="font-sans text-primary-foreground/80 text-sm md:text-base mb-10 max-w-md">
                      {careersContent.cta.description}
                  </p>
                  <Link
                      href="mailto:careers@bawacaterers.com?subject=General Application"
                      className="inline-block border border-primary-foreground text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                      {careersContent.cta.buttonText}
                  </Link>
              </SlideUp>
          </div>
      </section>

    </div>
  )
}