"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";
import {
  AnimatedGradient,
  FadeInUp,
  ParallaxImage,
  AnimatedLine,
  HoverZoomImage,
  MagneticButton,
  TextReveal,
  ParticleField,
} from "@/components/visuals";

export default function Home() {
  const {
    hero,
    manifesto,
    featuredServices,
    signatureDestinations,
    processTimeline,
    testimonial,
    portfolioTeaser,
    founderIntro,
    pressStrip,
    interactiveSelector,
    destinationSpotlight,
    behindTheScenes,
    faqTeaser,
    newsletter,
    blogTeaser,
    partnersMarquee,
    finalCta,
  } = homeContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Global Header (Layout handles this) */}

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleField particleCount={60} color="#f0f0f0" className="opacity-50" />
        <div className="absolute inset-0 -z-10">
          <Image
            src={SITE_IMAGES.heroHome.src}
            alt={SITE_IMAGES.heroHome.alt}
            fill
            priority
            className="object-cover brightness-[0.7] dark:brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <TextReveal
            text={hero.headline}
            as="h1"
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-tight mb-6 justify-center"
          />
          <FadeInUp delay={0.4} className="max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide mb-10">
              {hero.subtitle}
            </p>
            <MagneticButton className="bg-white text-foreground hover:bg-white/90">
              {hero.ctaText}
            </MagneticButton>
          </FadeInUp>
        </div>
      </section>

      {/* 3. Brand Manifesto */}
      <section className="py-spacing-4xl bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <FadeInUp>
            <h2 className="font-heading text-3xl md:text-5xl leading-relaxed text-foreground mb-8">
              "{manifesto.quote}"
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium">
              {manifesto.author}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 4. Featured Services Overview */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-20 text-center">{featuredServices.heading}</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredServices.services.map((service, idx) => {
              const images = [
                SITE_IMAGES.servicePlanning,
                SITE_IMAGES.serviceStyling,
                SITE_IMAGES.serviceConcierge,
              ];
              return (
                <FadeInUp key={service.title} delay={idx * 0.2} className="flex flex-col">
                  <HoverZoomImage
                    src={images[idx].src}
                    alt={images[idx].alt}
                    aspectRatio="portrait"
                    className="mb-8 rounded-lg shadow-sm"
                  />
                  <h3 className="font-heading text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <AnimatedLine className="mt-8" />
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Signature Destinations Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-16">{signatureDestinations.heading}</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signatureDestinations.locations.map((loc, idx) => {
              const images = [
                SITE_IMAGES.destLakeComo,
                SITE_IMAGES.destProvence,
                SITE_IMAGES.destBali,
                SITE_IMAGES.destSantorini,
              ];
              return (
                <FadeInUp key={loc.name} delay={idx * 0.1}>
                  <div className="relative group overflow-hidden rounded-lg aspect-video">
                    <Image
                      src={images[idx].src}
                      alt={images[idx].alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-white font-heading text-2xl mb-2">{loc.name}</h3>
                      <p className="text-white/80 text-sm">{loc.caption}</p>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Process Timeline */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <FadeInUp>
            <h2 className="font-heading text-4xl text-center mb-24">{processTimeline.heading}</h2>
          </FadeInUp>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-24">
              {processTimeline.steps.map((step, idx) => (
                <FadeInUp key={step.phase} className="relative flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 flex ${idx % 2 === 0 ? "md:justify-end md:pr-16" : "md:order-last md:pl-16"} pl-12 md:pl-0 w-full`}>
                    <div className="text-left w-full max-w-md">
                      <span className="text-primary font-medium tracking-widest uppercase text-xs mb-2 block">
                        {step.phase}
                      </span>
                      <h3 className="font-heading text-3xl mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 mt-2 md:mt-0" />
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonial Highlight */}
      <section className="py-spacing-4xl relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={SITE_IMAGES.testimonialBg.src}
            alt="Ambient background"
            fill
            className="object-cover opacity-10 dark:opacity-5 blur-sm"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
          <FadeInUp>
            <h2 className="font-heading text-3xl md:text-5xl leading-relaxed mb-12">
              "{testimonial.quote}"
            </h2>
            <div className="uppercase tracking-widest text-sm font-medium">
              {testimonial.clientName}
            </div>
            <div className="text-muted-foreground text-sm mt-2 italic">
              {testimonial.location}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 8. Portfolio Teaser (Curated Gallery) */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
          <h2 className="font-heading text-4xl">{portfolioTeaser.heading}</h2>
          <button className="hidden md:block uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors">
            {portfolioTeaser.ctaText}
          </button>
        </div>
        <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 snap-x hide-scrollbar">
          {[SITE_IMAGES.weddingDetails1, SITE_IMAGES.weddingDetails2, SITE_IMAGES.weddingDetails3].map((img, i) => (
            <div key={i} className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/5] relative rounded-lg overflow-hidden snap-center flex-shrink-0">
               <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 9. Founder Intro */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <FadeInUp className="w-full md:w-1/2">
              <HoverZoomImage
                src={SITE_IMAGES.founderPortrait.src}
                alt={SITE_IMAGES.founderPortrait.alt}
                aspectRatio="portrait"
                className="w-full rounded-lg shadow-lg"
              />
            </FadeInUp>
            <FadeInUp className="w-full md:w-1/2 space-y-8" delay={0.2}>
              <h2 className="font-heading text-4xl lg:text-5xl">{founderIntro.heading}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {founderIntro.bio}
              </p>
              <div className="font-heading text-4xl italic text-primary/80 pt-4">
                {founderIntro.signature}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 10. Press Strip */}
      <section className="py-16 border-y border-border bg-background">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
            {pressStrip.heading}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
             {pressStrip.publications.map(pub => (
               <span key={pub} className="font-heading text-xl md:text-2xl font-semibold">
                 {pub}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* 11 & 12 Placeholder areas for Interactive Selector / Destination Spotlight to keep layout dense but minimal in code weight for now */}
      <ParallaxImage
        src={SITE_IMAGES.destAmalfi.src}
        alt={SITE_IMAGES.destAmalfi.alt}
        className="h-[60vh] md:h-[80vh]"
      />
      <section className="py-24 bg-primary text-primary-foreground text-center">
         <FadeInUp className="container mx-auto px-6 max-w-3xl">
           <h2 className="font-heading text-4xl mb-6">{destinationSpotlight.heading}</h2>
           <p className="text-primary-foreground/80 leading-relaxed mb-10 text-lg">
             {destinationSpotlight.description}
           </p>
           <MagneticButton className="bg-background text-foreground hover:bg-background/90">
             {destinationSpotlight.ctaText}
           </MagneticButton>
         </FadeInUp>
      </section>

      {/* 13. Behind the Scenes */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl mb-16">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-6">{behindTheScenes.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{behindTheScenes.description}</p>
          </FadeInUp>
        </div>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoverZoomImage src={SITE_IMAGES.studioVibe.src} alt="Studio" aspectRatio="video" />
            <HoverZoomImage src={SITE_IMAGES.teamCollaboration.src} alt="Team" aspectRatio="video" />
        </div>
      </section>

      {/* 15. Newsletter */}
      <section className="py-32 bg-muted/30">
        <AnimatedGradient className="container mx-auto px-6 md:px-12 max-w-4xl py-24 rounded-2xl text-center shadow-lg border border-border/50 bg-background/50 backdrop-blur-sm">
           <FadeInUp>
             <h2 className="font-heading text-4xl mb-4">{newsletter.heading}</h2>
             <p className="text-muted-foreground mb-10 max-w-xl mx-auto">{newsletter.description}</p>
             <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input
                 type="email"
                 placeholder={newsletter.inputPlaceholder}
                 className="flex-1 bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
               />
               <MagneticButton type="submit">
                 {newsletter.buttonText}
               </MagneticButton>
             </form>
           </FadeInUp>
        </AnimatedGradient>
      </section>

      {/* 18. Final Call to Action */}
      <section className="py-40 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-foreground" />
        <ParticleField particleCount={100} color="#ffffff" className="opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-background">
          <FadeInUp>
            <h2 className="font-heading text-5xl md:text-7xl mb-8">{finalCta.heading}</h2>
            <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              {finalCta.description}
            </p>
            <MagneticButton className="bg-background text-foreground hover:bg-background/90 px-10 py-4 text-lg">
              {finalCta.buttonText}
            </MagneticButton>
          </FadeInUp>
        </div>
      </section>

    </div>
  );
}
