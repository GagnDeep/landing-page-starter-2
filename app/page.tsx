import { homeContent } from "@/content/home";
import { IMAGE_REGISTRY } from "@/lib/images";
import {
  AnimatedGradientMesh,
  FadeInScroll,
  KenBurnsImage,
  CTAGlow,
  ParallaxSection,
  StaggeredTextReveal
} from "@/components/visuals";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-10 bg-background/50 dark:bg-background/70 backdrop-blur-[2px]" />

        <div className="z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <StaggeredTextReveal
            text={homeContent.hero.heading}
            elementType="h1"
            className="text-6xl md:text-8xl lg:text-9xl font-heading text-primary mb-6 tracking-tight leading-[0.9]"
          />
          <FadeInScroll delay={0.6}>
            <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
              {homeContent.hero.subheading}
            </p>
          </FadeInScroll>
        </div>

        <FadeInScroll delay={1.2} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-4 opacity-70">
            <span className="text-xs uppercase tracking-[0.3em] font-medium">{homeContent.hero.scrollIndicator}</span>
            <div className="w-[1px] h-12 bg-primary/50" />
          </div>
        </FadeInScroll>
      </section>

      {/* 2. Trust Indicators */}
      <section className="w-full py-24 border-y border-border/40 bg-muted/20">
        <div className="container mx-auto px-6">
          <FadeInScroll>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
              {homeContent.trustIndicators.badges.map((badge, i) => (
                <span key={i} className="text-sm md:text-base font-medium tracking-widest uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </FadeInScroll>
        </div>
      </section>

      {/* 3. Brand Philosophy Statement */}
      <section className="w-full py-40 md:py-56 bg-background">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <FadeInScroll>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground leading-tight md:leading-tight">
              {homeContent.philosophy.quote}
            </h2>
          </FadeInScroll>
        </div>
      </section>

      {/* 4. Service Categories Grid */}
      <section className="w-full py-24 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {[
            { ...homeContent.servicesGrid.items[0], img: IMAGE_REGISTRY.hairCut },
            { ...homeContent.servicesGrid.items[1], img: IMAGE_REGISTRY.skincare },
            { ...homeContent.servicesGrid.items[2], img: IMAGE_REGISTRY.nails },
            { ...homeContent.servicesGrid.items[3], img: IMAGE_REGISTRY.bridal },
          ].map((service, index) => (
            <FadeInScroll key={service.id} delay={index * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden bg-muted">
                <KenBurnsImage src={service.img.src} alt={service.img.alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-3xl font-heading text-white mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm uppercase tracking-widest text-white/80">{service.label}</span>
                    <div className="w-8 h-[1px] bg-white/50" />
                  </div>
                </div>
              </div>
            </FadeInScroll>
          ))}
        </div>
      </section>

      {/* 5. The "At-Home" Advantage */}
      <section className="w-full py-32 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/5] relative">
            <ParallaxSection speed={0.3} className="w-full h-full">
              <KenBurnsImage src={IMAGE_REGISTRY.mobileSetup.src} alt={IMAGE_REGISTRY.mobileSetup.alt} />
            </ParallaxSection>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <FadeInScroll>
              <h2 className="text-5xl md:text-6xl font-heading text-primary">{homeContent.splitFeatureAtHome.heading}</h2>
            </FadeInScroll>
            <FadeInScroll delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {homeContent.splitFeatureAtHome.description}
              </p>
            </FadeInScroll>
            <FadeInScroll delay={0.4}>
              <Link href="/booking">
                <CTAGlow className="mt-4">{homeContent.splitFeatureAtHome.cta}</CTAGlow>
              </Link>
            </FadeInScroll>
          </div>
        </div>
      </section>

      {/* 6. The "In-Salon" Experience */}
      <section className="w-full py-32 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 space-y-8 lg:pl-12">
            <FadeInScroll>
              <h2 className="text-5xl md:text-6xl font-heading text-primary">{homeContent.splitFeatureInSalon.heading}</h2>
            </FadeInScroll>
            <FadeInScroll delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {homeContent.splitFeatureInSalon.description}
              </p>
            </FadeInScroll>
            <FadeInScroll delay={0.4}>
              <Link href="/booking">
                <CTAGlow className="mt-4">{homeContent.splitFeatureInSalon.cta}</CTAGlow>
              </Link>
            </FadeInScroll>
          </div>
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/5] relative">
            <ParallaxSection speed={0.3} className="w-full h-full">
              <KenBurnsImage src={IMAGE_REGISTRY.salonInterior.src} alt={IMAGE_REGISTRY.salonInterior.alt} />
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* 7. Signature Treatments Highlight */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6">
          <FadeInScroll>
            <div className="flex items-end justify-between mb-16 border-b border-border/40 pb-8">
              <h2 className="text-4xl md:text-5xl font-heading text-foreground">{homeContent.signatureTreatments.heading}</h2>
            </div>
          </FadeInScroll>

          <div className="flex flex-col md:flex-row gap-8">
            {homeContent.signatureTreatments.treatments.map((t, i) => (
              <FadeInScroll key={i} delay={i * 0.15} className="flex-1">
                <div className="p-8 border border-border/50 hover:border-primary/50 transition-colors duration-500 flex flex-col h-full justify-between gap-12 bg-background">
                  <h3 className="text-2xl font-heading">{t.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{t.price}</p>
                </div>
              </FadeInScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonial Showcase */}
      <section className="w-full py-40 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FadeInScroll>
            <div className="text-primary mb-12">
              <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading leading-relaxed mb-12 text-background/90">
              {homeContent.testimonial.quote}
            </h2>
            <p className="text-sm uppercase tracking-widest text-primary">
              — {homeContent.testimonial.author}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 19. Final Call to Action (Booking) */}
      <section className="w-full py-40 border-t border-border/40 relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeInScroll>
            <h2 className="text-5xl md:text-7xl font-heading text-primary mb-12 max-w-3xl mx-auto leading-tight">
              {homeContent.finalCta.heading}
            </h2>
            <Link href="/booking">
              <CTAGlow>{homeContent.finalCta.buttonText}</CTAGlow>
            </Link>
          </FadeInScroll>
        </div>
      </section>
    </main>
  );
}
