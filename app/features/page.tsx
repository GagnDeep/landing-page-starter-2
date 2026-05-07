import { Metadata } from "next"
import { featuresContent } from "@/content/features"
import { siteImages } from "@/lib/images"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { ParallaxImage } from "@/components/visuals/parallax-image"
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger-container"
import { KenBurnsHero } from "@/components/visuals/ken-burns-hero"
import Link from "next/link"

export const metadata: Metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
}

export default function FeaturesPage() {
  return (
    <div className="bg-background pt-24">
      {/* 1. Hero: The Art of Catering */}
      <section className="relative h-[80svh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <KenBurnsHero
                src={siteImages.features.hero}
                alt="High-end Catering Kitchen"
                overlayOpacity={0.6}
            />
        </div>
        <div className="relative z-10 text-center text-white px-6">
            <RevealText
                as="h1"
                text={featuresContent.hero.headline}
                className="font-heading text-6xl md:text-8xl mb-6"
            />
            <FadeIn delay={0.8}>
                <p className="font-sans text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                    {featuresContent.hero.subheadline}
                </p>
            </FadeIn>
        </div>
      </section>

      {/* 2. Service Overview Grid */}
      <section className="py-24 md:py-32 bg-muted relative z-20 -mt-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center mb-20">
                <SlideUp>
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                        {featuresContent.serviceOverview.heading}
                    </h2>
                </SlideUp>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuresContent.serviceOverview.services.map((service, index) => (
                    <StaggerItem key={index}>
                        <div className="bg-background p-10 h-full border border-border/50 rounded-sm hover:border-primary/30 transition-colors group">
                             <div className="w-12 h-12 mb-8 text-primary/50 group-hover:text-primary transition-colors">
                                {/* Abstract icon representation */}
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-2xl text-foreground mb-4">{service.title}</h3>
                            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
      </section>

      {/* 3. Deep Dive: Live Stalls */}
      <section className="py-24 md:py-32 bg-background border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative h-[60vh] w-full order-2 lg:order-1">
                    <FadeIn className="w-full h-full">
                        <ParallaxImage
                            src={siteImages.features.liveStalls}
                            alt="Theatrical Live Stalls"
                            containerClassName="w-full h-full rounded-sm"
                        />
                    </FadeIn>
                </div>
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <SlideUp>
                        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                            {featuresContent.liveStalls.heading}
                        </h2>
                        <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light mb-10">
                            {featuresContent.liveStalls.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {featuresContent.liveStalls.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm font-sans tracking-widest uppercase text-foreground/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Deep Dive: Traditional Feasts */}
      <section className="py-24 md:py-32 bg-muted/50 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="flex flex-col justify-center">
                    <SlideUp>
                        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                            {featuresContent.traditionalFeasts.heading}
                        </h2>
                        <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light">
                            {featuresContent.traditionalFeasts.content}
                        </p>
                    </SlideUp>
                </div>
                 <div className="relative h-[60vh] w-full">
                    <FadeIn className="w-full h-full">
                        <ParallaxImage
                            src={siteImages.features.traditional}
                            alt="Traditional Heritage Menu"
                            containerClassName="w-full h-full rounded-sm"
                        />
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Deep Dive: Modern Fusion */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative h-[60vh] w-full order-2 lg:order-1">
                    <FadeIn className="w-full h-full">
                        <ParallaxImage
                            src={siteImages.features.fusion}
                            alt="Modern Fusion Plating"
                            containerClassName="w-full h-full rounded-sm"
                        />
                    </FadeIn>
                </div>
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <SlideUp>
                        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                            {featuresContent.modernFusion.heading}
                        </h2>
                        <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light">
                            {featuresContent.modernFusion.content}
                        </p>
                    </SlideUp>
                </div>
            </div>
        </div>
      </section>

      {/* 6. The Logistics of Scale */}
      <section className="py-32 bg-primary text-primary-foreground text-center px-6">
        <div className="mx-auto max-w-5xl">
             <SlideUp>
                <h2 className="font-heading text-4xl md:text-6xl mb-8">
                    {featuresContent.logisticsOfScale.heading}
                </h2>
                <p className="font-sans text-xl font-light text-primary-foreground/80 mb-20 max-w-3xl mx-auto">
                    {featuresContent.logisticsOfScale.description}
                </p>
             </SlideUp>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                {featuresContent.logisticsOfScale.points.map((point, index) => (
                    <FadeIn key={index} delay={index * 0.2} className="border-t border-primary-foreground/20 pt-8">
                        <h3 className="font-sans tracking-widest uppercase text-sm font-semibold mb-4 text-accent">{point.title}</h3>
                        <p className="font-sans text-primary-foreground/70 text-sm leading-relaxed">
                            {point.description}
                        </p>
                    </FadeIn>
                ))}
             </div>
        </div>
      </section>

      {/* 7. Tastings & CTA */}
      <section className="py-24 md:py-32 bg-muted relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
             <ParallaxImage
                src={siteImages.features.tastings}
                alt="Tasting Session"
                containerClassName="w-full h-full"
             />
             <div className="absolute inset-0 bg-background/90" />
         </div>

         <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <SlideUp>
                <span className="font-sans text-xs tracking-widest uppercase text-primary font-semibold mb-6 block">Next Steps</span>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                    {featuresContent.tastings.heading}
                </h2>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light mb-12">
                    {featuresContent.tastings.description}
                </p>
                <Link
                    href="/contact"
                    className="inline-block border border-primary bg-primary text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-primary transition-colors"
                >
                    {featuresContent.cta.buttonText}
                </Link>
            </SlideUp>
         </div>
      </section>

    </div>
  )
}
