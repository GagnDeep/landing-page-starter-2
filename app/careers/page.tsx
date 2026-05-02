"use client";

import { careersContent } from "@/content/careers";
import { IMAGE_REGISTRY } from "@/lib/images";
import {
  FadeInScroll,
  CTAGlow,
  KenBurnsImage,
  ParallaxSection,
  AnimatedGradientMesh
} from "@/components/visuals";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function ExpandableRole({ role }: { role: typeof careersContent.openings.roles[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <div>
          <h3 className="text-2xl font-heading text-foreground group-hover:text-primary transition-colors">{role.title}</h3>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mt-2">{role.location}</p>
        </div>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors text-muted-foreground">
          {isOpen ? "−" : "+"}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <p className="text-foreground/80 leading-relaxed mb-6">{role.description}</p>
              <Link href={`mailto:${careersContent.contactForHiring.email}?subject=Application: ${role.title}`}>
                <CTAGlow>Apply for this role</CTAGlow>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background">

      {/* 1. Hero */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <KenBurnsImage src={IMAGE_REGISTRY.heroCareers.src} alt={IMAGE_REGISTRY.heroCareers.alt} priority className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="z-20 text-center px-4 max-w-4xl mx-auto">
          <FadeInScroll>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 tracking-tight">
              {careersContent.hero.heading}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
              {careersContent.hero.subheading}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="w-full py-32 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FadeInScroll>
            <p className="text-2xl md:text-4xl font-heading text-foreground leading-relaxed">
              {careersContent.philosophy.text}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="w-full py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeInScroll className="mb-16 text-center">
            <h2 className="text-4xl font-heading text-primary">{careersContent.benefits.heading}</h2>
          </FadeInScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {careersContent.benefits.items.map((item, i) => (
              <FadeInScroll key={i} delay={i * 0.1}>
                <div className="p-8 border border-border/40 bg-background h-full">
                  <h3 className="text-xl font-heading mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeInScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Split Features */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6 space-y-32 max-w-6xl">

          {/* Mobile Life */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 aspect-square relative">
              <ParallaxSection speed={0.2} className="w-full h-full">
                <KenBurnsImage src={IMAGE_REGISTRY.mobileSetup.src} alt="Mobile Styling Setup" />
              </ParallaxSection>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 lg:pl-12">
              <FadeInScroll>
                <h2 className="text-4xl font-heading text-primary">{careersContent.atHomeLife.heading}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">{careersContent.atHomeLife.description}</p>
              </FadeInScroll>
            </div>
          </div>

          {/* In-Salon */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-6 lg:pr-12">
              <FadeInScroll>
                <h2 className="text-4xl font-heading text-primary">{careersContent.inSalonEnvironment.heading}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">{careersContent.inSalonEnvironment.description}</p>
              </FadeInScroll>
            </div>
            <div className="w-full lg:w-1/2 aspect-square relative">
              <ParallaxSection speed={0.2} className="w-full h-full">
                <KenBurnsImage src={IMAGE_REGISTRY.salonInterior.src} alt="Salon Environment" />
              </ParallaxSection>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Education Highlight */}
      <section className="w-full py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeInScroll>
            <h2 className="text-sm uppercase tracking-[0.2em] mb-12 opacity-80">{careersContent.educationHighlight.heading}</h2>
            <p className="text-3xl md:text-5xl font-heading leading-relaxed">
              {careersContent.educationHighlight.quote}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 7-10. Openings */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeInScroll className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary">{careersContent.openings.heading}</h2>
          </FadeInScroll>
          <div className="border-t border-border/40">
            {careersContent.openings.roles.map((role, i) => (
              <FadeInScroll key={i} delay={0.1 * i}>
                <ExpandableRole role={role} />
              </FadeInScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Requirements */}
      <section className="w-full py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeInScroll>
            <h2 className="text-3xl font-heading text-primary mb-12 text-center">{careersContent.requirements.heading}</h2>
            <ul className="space-y-6">
              {careersContent.requirements.items.map((req, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <span className="text-lg text-foreground/80">{req}</span>
                </li>
              ))}
            </ul>
          </FadeInScroll>
        </div>
      </section>

      {/* 13. Process */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeInScroll className="mb-16 text-center">
            <h2 className="text-4xl font-heading text-primary">{careersContent.applicationProcess.heading}</h2>
          </FadeInScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {careersContent.applicationProcess.steps.map((step, i) => (
              <FadeInScroll key={i} delay={i * 0.2} className="relative">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full border border-primary flex items-center justify-center text-xl font-heading text-primary">
                  {i + 1}
                </div>
                <h3 className="text-xl font-heading mb-4 text-foreground">{step.title.replace(/^\d+\.\s*/, '')}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {i < 2 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-border/50 -z-10" />}
              </FadeInScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Testimonial */}
      <section className="w-full py-32 border-y border-border/40">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <FadeInScroll>
            <p className="text-2xl md:text-4xl font-heading text-foreground leading-relaxed mb-8">
              {careersContent.testimonial.quote}
            </p>
            <p className="text-sm uppercase tracking-widest text-primary">
              — {careersContent.testimonial.author}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 14, 15, 17, 18. General Application & Contact */}
      <section className="w-full py-40 relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <FadeInScroll>
            <h2 className="text-4xl font-heading text-primary mb-6">{careersContent.generalApplication.heading}</h2>
            <p className="text-muted-foreground mb-12">{careersContent.generalApplication.description}</p>

            <div className="p-8 border border-primary/20 bg-primary/5 mb-12">
              <h3 className="text-lg font-heading text-primary mb-4">{careersContent.portfolioRequirements.heading}</h3>
              <p className="text-sm text-foreground/80">{careersContent.portfolioRequirements.description}</p>
            </div>

            <Link href={`mailto:${careersContent.contactForHiring.email}`}>
              <CTAGlow>Email Your Portfolio</CTAGlow>
            </Link>

            <p className="text-xs text-muted-foreground mt-16">{careersContent.diversityStatement.text}</p>
          </FadeInScroll>
        </div>
      </section>

    </main>
  );
}
