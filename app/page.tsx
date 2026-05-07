import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  ParallaxImage,
  AnimatedText,
  HoverScale,
  SmoothAccordion,
  LuxuryGrid,
  LuxuryGridItem,
  ScrollReveal,
  AtmosphereStrip,
} from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background">
      {/* 1. Minimal Navigation Bar (Placeholder for Phase 7) */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border">
        <Link href="/" className="font-heading text-xl tracking-widest text-foreground uppercase">
          {homeContent.navigation.logoText}
        </Link>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
          {homeContent.navigation.links.map((link) => (
            <Link key={link.label} href={link.href} className="text-foreground hover:text-muted-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* 2. Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20">
        <ParallaxImage image={images.homeHero} className="absolute inset-0" priority offset={80} />
        <div className="absolute inset-0 bg-black/40" />
        <FadeIn delay={0.2} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <AnimatedText
            el="h1"
            text={homeContent.hero.headline}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-tight"
          />
          <p className="text-lg md:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto mb-10">
            {homeContent.hero.subheadline}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-white border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-all uppercase tracking-widest text-sm"
          >
            <span>{homeContent.hero.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>

      {/* 3. The Promise */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-heading mb-8 text-foreground">{homeContent.promise.heading}</h2>
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
            {homeContent.promise.body}
          </p>
        </ScrollReveal>
      </section>

      {/* 4. Curated Destinations */}
      <section className="py-24 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading mb-16 text-secondary-foreground">
              {homeContent.curatedDestinations.heading}
            </h2>
          </FadeIn>
          <LuxuryGrid columns={2} className="gap-y-24">
            {[
              { img: images.homeDestinationComo, dest: homeContent.curatedDestinations.destinations[0] },
              { img: images.homeDestinationKyoto, dest: homeContent.curatedDestinations.destinations[1], mt: "md:mt-32" },
              { img: images.homeDestinationProvence, dest: homeContent.curatedDestinations.destinations[2] },
              { img: images.homeDestinationUdaipur, dest: homeContent.curatedDestinations.destinations[3], mt: "md:mt-32" },
            ].map((item, i) => (
              <LuxuryGridItem key={i} className={item.mt}>
                <HoverScale>
                  <div className="relative aspect-[3/4] w-full">
                    <Image src={item.img.url} alt={item.img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </HoverScale>
                <div className="mt-6">
                  <h3 className="text-2xl font-heading text-secondary-foreground">{item.dest.name}</h3>
                  <p className="text-muted-foreground mt-2">{item.dest.description}</p>
                </div>
              </LuxuryGridItem>
            ))}
          </LuxuryGrid>
        </div>
      </section>

      {/* 5. Trust Bar */}
      <section className="py-20 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm tracking-widest uppercase text-muted-foreground mb-10">
            {homeContent.trustBar.heading}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            {homeContent.trustBar.logos.map((logo) => (
              <span key={logo} className="font-heading text-2xl md:text-3xl">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Approach */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading mb-20 text-center text-foreground">{homeContent.approach.heading}</h2>
        </FadeIn>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {homeContent.approach.pillars.map((pillar, i) => (
            <StaggerItem key={i} className="border-t border-border pt-8">
              <h3 className="text-2xl font-heading mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* 7 & 8. Featured Real Wedding */}
      <section className="py-24 bg-card text-card-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <FadeIn>
            <div className="relative aspect-[21/9] w-full mb-12">
              <Image src={images.homeFeaturedWeddingMain.url} alt={images.homeFeaturedWeddingMain.alt} fill className="object-cover" />
            </div>
            <div className="max-w-3xl">
              <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">{homeContent.featuredWeddingSetup.location}</h4>
              <h2 className="text-4xl md:text-5xl font-heading mb-6">{homeContent.featuredWeddingSetup.heading}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{homeContent.featuredWeddingSetup.description}</p>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[images.homeFeaturedWeddingDetail1, images.homeFeaturedWeddingDetail2, images.homeFeaturedWeddingDetail3].map((img, i) => (
              <StaggerItem key={i}>
                <HoverScale>
                  <div className="relative aspect-square w-full mb-6">
                    <Image src={img.url} alt={img.alt} fill className="object-cover" />
                  </div>
                </HoverScale>
                <p className="text-sm text-muted-foreground">{homeContent.featuredWeddingDetails.items[i]}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* 9. Founder's Quote */}
      <section className="py-40 px-6 md:px-12 bg-primary text-primary-foreground text-center">
        <ScrollReveal className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-heading leading-snug mb-10 italic">
            "{homeContent.founderQuote.quote}"
          </p>
          <p className="text-sm tracking-widest uppercase opacity-80">
            — {homeContent.founderQuote.author}
          </p>
        </ScrollReveal>
      </section>

      {/* 10. The Guide Difference */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-heading mb-16 text-center text-foreground">{homeContent.guideDifference.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-border bg-card/50">
              <p className="text-muted-foreground leading-relaxed">{homeContent.guideDifference.standardExperience}</p>
            </div>
            <div className="p-8 border border-foreground bg-foreground text-background">
              <p className="leading-relaxed">{homeContent.guideDifference.guideExperience}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 11. Immersive Video/Atmosphere Strip */}
      <AtmosphereStrip image={images.homeAtmosphereStrip} caption={homeContent.immersiveVideo.caption} height="lg" />

      {/* 12. Service Scope: Full Planning */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <h2 className="text-4xl md:text-6xl font-heading mb-6 text-foreground">{homeContent.serviceFullPlanning.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{homeContent.serviceFullPlanning.body}</p>
          <Link
            href="/features"
            className="inline-flex items-center space-x-2 text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-all uppercase tracking-widest text-sm"
          >
            <span>{homeContent.serviceFullPlanning.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
        <FadeIn direction="left">
          <div className="relative aspect-[3/4] w-full">
            <Image src={images.homeServiceFullPlanning.url} alt={images.homeServiceFullPlanning.alt} fill className="object-cover" />
          </div>
        </FadeIn>
      </section>

      {/* 13. Service Scope: Design & Styling */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full">
            <Image src={images.homeServiceDesign.url} alt={images.homeServiceDesign.alt} fill className="object-cover" />
          </div>
        </FadeIn>
        <FadeIn direction="left" className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-foreground">{homeContent.serviceDesign.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{homeContent.serviceDesign.body}</p>
        </FadeIn>
      </section>

      {/* 14. Testimonial */}
      <section className="py-32 px-6 md:px-12 bg-secondary text-secondary-foreground text-center">
        <ScrollReveal className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-heading leading-snug mb-10">
            "{homeContent.testimonial.quote}"
          </p>
          <p className="text-sm tracking-widest uppercase">
            {homeContent.testimonial.author} <span className="opacity-60 block mt-2 text-xs">{homeContent.testimonial.location}</span>
          </p>
        </ScrollReveal>
      </section>

      {/* 15 & 16. Venues & Behind the Scenes (Combined conceptually in layout) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 text-foreground">{homeContent.venues.heading}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{homeContent.venues.description}</p>
          </div>
        </FadeIn>
        {/* Placeholder for carousel from phase 1 intent */}
        <div className="w-full h-[40vh] bg-muted/30 flex items-center justify-center border border-border">
            <p className="text-muted-foreground uppercase tracking-widest text-sm">[ Venue Carousel Placeholder ]</p>
        </div>
      </section>

      {/* 17. Investment Teaser */}
      <section className="py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading mb-6 text-foreground">{homeContent.investmentTeaser.heading}</h2>
            <p className="text-lg text-muted-foreground mb-10">{homeContent.investmentTeaser.description}</p>
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 bg-foreground text-background uppercase tracking-widest text-sm hover:bg-foreground/90 transition-colors"
            >
              {homeContent.investmentTeaser.ctaLabel}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 18. FAQ Highlights */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-heading mb-12 text-center text-foreground">{homeContent.faqHighlights.heading}</h2>
          <SmoothAccordion items={homeContent.faqHighlights.questions} />
        </FadeIn>
      </section>

      {/* 19. Final CTA */}
      <section className="py-40 px-6 bg-foreground text-background text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-heading mb-6">{homeContent.finalCta.heading}</h2>
          <p className="text-xl mb-12 opacity-80">{homeContent.finalCta.subheading}</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-background text-foreground uppercase tracking-widest text-sm font-medium hover:bg-background/90 transition-colors"
          >
            {homeContent.finalCta.ctaLabel}
          </Link>
        </FadeIn>
      </section>

      {/* 20. Expansive Footer (Placeholder for Phase 7) */}
      <footer className="py-12 px-6 border-t border-border text-center text-sm text-muted-foreground flex flex-col items-center">
        <p className="uppercase tracking-widest mb-4 text-foreground">{homeContent.footer.brandName}</p>
        <p className="mb-8">{homeContent.footer.tagline}</p>
        <p>{homeContent.footer.copyright}</p>
      </footer>
    </main>
  );
}
