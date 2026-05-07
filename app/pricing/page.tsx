"use client";

import Image from "next/image";
import { pricingContent } from "@/content/pricing";
import { SITE_IMAGES } from "@/lib/images";
import {
  AnimatedGradient,
  FadeInUp,
  ParallaxImage,
  AnimatedLine,
  MagneticButton,
  TextReveal,
  ParticleField,
} from "@/components/visuals";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const {
    hero,
    philosophy,
    tier1,
    tier2,
    tier3,
    standardInclusions,
    customAdditions,
    faq,
    ctaSection,
  } = pricingContent;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 2. Hero Section (The Investment) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleField particleCount={30} color="#e5e5e5" className="opacity-30" />
        <div className="absolute inset-0 -z-10">
          <Image
            src={SITE_IMAGES.heroPricing.src}
            alt={SITE_IMAGES.heroPricing.alt}
            fill
            priority
            className="object-cover brightness-[0.8] dark:brightness-[0.3]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <TextReveal
            text={hero.headline}
            as="h1"
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-tight mb-6 justify-center"
          />
          <FadeInUp delay={0.4} className="max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide">
              {hero.subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 3. Pricing Philosophy */}
      <section className="py-spacing-4xl bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <FadeInUp>
            <h2 className="font-heading text-3xl md:text-4xl mb-8 text-foreground">
              {philosophy.heading}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              {philosophy.body}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 4, 5, 6. Pricing Tiers */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1 */}
            <FadeInUp delay={0.1} className="flex h-full">
              <div className="bg-background border border-border p-10 rounded-xl w-full flex flex-col hover:border-primary/30 transition-colors">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
                  {tier1.subtitle}
                </p>
                <h3 className="font-heading text-3xl mb-4">{tier1.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {tier1.description}
                </p>
                <div className="text-2xl font-heading mb-8 pt-6 border-t border-border">
                  {tier1.pricingText}
                </div>
                <ul className="space-y-4 mb-8">
                  {tier1.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mr-3 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            {/* Tier 2 (Highlighted) */}
            <FadeInUp delay={0.2} className="flex h-full">
              <div className="bg-secondary/20 dark:bg-secondary/5 border-2 border-primary/20 p-10 rounded-xl w-full flex flex-col relative shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium">
                  {tier2.badge}
                </div>
                <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4 mt-2">
                  {tier2.subtitle}
                </p>
                <h3 className="font-heading text-4xl mb-4">{tier2.name}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-8 flex-1">
                  {tier2.description}
                </p>
                <div className="pt-6 border-t border-primary/20 mb-8">
                  <div className="text-3xl font-heading mb-1">{tier2.pricingText}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{tier2.subtext}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier2.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground/90">
                      <Check className="w-4 h-4 text-primary shrink-0 mr-3 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            {/* Tier 3 */}
            <FadeInUp delay={0.3} className="flex h-full">
              <div className="bg-background border border-border p-10 rounded-xl w-full flex flex-col hover:border-primary/30 transition-colors">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">
                  {tier3.subtitle}
                </p>
                <h3 className="font-heading text-3xl mb-4">{tier3.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {tier3.description}
                </p>
                <div className="text-2xl font-heading mb-8 pt-6 border-t border-border">
                  {tier3.pricingText}
                </div>
                <ul className="space-y-4 mb-8">
                  {tier3.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mr-3 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 7. What's Always Included */}
      <section className="py-32 bg-background border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl mb-4">{standardInclusions.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{standardInclusions.description}</p>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standardInclusions.items.map((item, idx) => (
              <FadeInUp key={item.title} delay={idx * 0.1} className="text-center p-6">
                <h4 className="font-heading text-xl mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Custom Additions */}
      <section className="py-24 bg-muted/10">
         <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <FadeInUp className="text-center mb-16">
               <h2 className="font-heading text-4xl mb-4">{customAdditions.heading}</h2>
               <p className="text-muted-foreground leading-relaxed">{customAdditions.description}</p>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
               {customAdditions.services.map((service, idx) => (
                 <FadeInUp key={idx} delay={idx * 0.05} className="flex items-center space-x-4 border-b border-border/50 pb-4">
                   <Plus className="w-4 h-4 text-primary shrink-0" />
                   <span className="text-foreground/80">{service}</span>
                 </FadeInUp>
               ))}
            </div>
         </div>
      </section>

      {/* 9. FAQ (Pricing Specific) */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeInUp className="text-center mb-16">
            <h2 className="font-heading text-4xl">{faq.heading}</h2>
          </FadeInUp>
          <div className="space-y-4">
            {faq.questions.map((q, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 bg-background hover:bg-muted/30 transition-colors flex justify-between items-center"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-medium text-foreground pr-8">{q.q}</span>
                    <Plus
                      className={cn(
                        "w-5 h-5 text-primary shrink-0 transition-transform duration-300",
                        openFaq === idx ? "rotate-45" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                          {q.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="py-32 bg-muted/20 text-center relative overflow-hidden">
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
