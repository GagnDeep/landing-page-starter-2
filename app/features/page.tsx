"use client";

import Image from "next/image";
import { featuresContent } from "@/content/features";
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
import { Check } from "lucide-react";

export default function FeaturesPage() {
  const {
    hero,
    philosophy,
    serviceOne,
    serviceTwo,
    serviceThree,
    addOns,
    toolkit,
    caseStudyTeaser,
    ctaSection,
  } = featuresContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Hero Section (Our Expertise) */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <ParticleField particleCount={50} color="#e5e5e5" className="opacity-40" />
        <div className="absolute inset-0 -z-10">
          <Image
            src={SITE_IMAGES.heroFeatures.src}
            alt={SITE_IMAGES.heroFeatures.alt}
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
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide">
              {hero.subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 3. Introduction / Service Philosophy */}
      <section className="py-spacing-4xl bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <FadeInUp>
            <h2 className="font-heading text-3xl md:text-4xl mb-8">{philosophy.heading}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              {philosophy.body}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 4. Service 1: Full-Service Destination Planning */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <FadeInUp className="w-full lg:w-1/2">
              <HoverZoomImage
                src={SITE_IMAGES.servicePlanning.src}
                alt={SITE_IMAGES.servicePlanning.alt}
                aspectRatio="portrait"
                className="rounded-xl shadow-lg"
              />
            </FadeInUp>
            <div className="w-full lg:w-1/2 space-y-8">
              <FadeInUp>
                <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                  {serviceOne.subtitle}
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl mb-6">{serviceOne.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {serviceOne.description}
                </p>
                <AnimatedLine className="mb-8" />
                <ul className="space-y-4">
                  {serviceOne.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0 mr-4 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service 2: Event Design & Styling (Alternating Layout) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <FadeInUp className="w-full lg:w-1/2">
              <HoverZoomImage
                src={SITE_IMAGES.serviceStyling.src}
                alt={SITE_IMAGES.serviceStyling.alt}
                aspectRatio="portrait"
                className="rounded-xl shadow-lg"
              />
            </FadeInUp>
            <div className="w-full lg:w-1/2 space-y-8">
              <FadeInUp>
                <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                  {serviceTwo.subtitle}
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl mb-6">{serviceTwo.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {serviceTwo.description}
                </p>
                <AnimatedLine className="mb-8" />
                <ul className="space-y-4">
                  {serviceTwo.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0 mr-4 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service 3: Guest Concierge & Logistics */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <FadeInUp className="w-full lg:w-1/2">
              <HoverZoomImage
                src={SITE_IMAGES.serviceConcierge.src}
                alt={SITE_IMAGES.serviceConcierge.alt}
                aspectRatio="portrait"
                className="rounded-xl shadow-lg"
              />
            </FadeInUp>
            <div className="w-full lg:w-1/2 space-y-8">
              <FadeInUp>
                <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                  {serviceThree.subtitle}
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl mb-6">{serviceThree.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {serviceThree.description}
                </p>
                <AnimatedLine className="mb-8" />
                <ul className="space-y-4">
                  {serviceThree.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start text-foreground/80">
                      <Check className="w-5 h-5 text-primary shrink-0 mr-4 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Add-Ons */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl mb-4">{addOns.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{addOns.description}</p>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.services.map((service, idx) => (
              <FadeInUp key={service.name} delay={idx * 0.1}>
                <div className="border border-border/50 rounded-xl p-8 hover:shadow-md transition-shadow h-full bg-muted/10">
                  <h3 className="font-heading text-2xl mb-3">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 8. The Toolkit */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-6">{toolkit.heading}</h2>
            <p className="text-background/80 leading-relaxed text-lg font-light">
              {toolkit.description}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 9. Case Study Teaser */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
           <Image
             src={SITE_IMAGES.destLakeComo.src}
             alt={SITE_IMAGES.destLakeComo.alt}
             fill
             className="object-cover brightness-[0.5]"
           />
        </div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
           <FadeInUp className="bg-background/10 backdrop-blur-md border border-white/20 p-12 max-w-2xl mx-auto rounded-xl">
             <h2 className="font-heading text-3xl md:text-5xl mb-4">{caseStudyTeaser.heading}</h2>
             <p className="text-white/90 leading-relaxed mb-8">{caseStudyTeaser.description}</p>
             <button className="uppercase tracking-widest text-sm font-medium border-b border-white hover:text-white/70 hover:border-white/70 transition-colors pb-1">
               {caseStudyTeaser.ctaText}
             </button>
           </FadeInUp>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="py-32 bg-background text-center relative overflow-hidden">
        <AnimatedGradient className="absolute inset-0 opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">{ctaSection.heading}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              {ctaSection.description}
            </p>
            <MagneticButton className="px-10 py-4 text-lg">
              {ctaSection.buttonText}
            </MagneticButton>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
