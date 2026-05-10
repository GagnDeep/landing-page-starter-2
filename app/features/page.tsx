"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { featuresContent } from "@/content/features";
import { ImageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export default function FeaturesPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      {/* 2-3. Hero & Overview */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={ImageRegistry.FeaturesHero.src}
            alt={ImageRegistry.FeaturesHero.alt}
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-medium text-foreground tracking-tight">
              {featuresContent.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-foreground font-medium max-w-2xl mx-auto">
              {featuresContent.hero.subheadline}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-3xl mx-auto pt-6 leading-relaxed">
              {featuresContent.overview}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4-5. Anand Karaj Decor */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={ImageRegistry.HomeServiceAnandKaraj.src}
                alt={featuresContent.services[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium text-primary">
                {featuresContent.services[0].title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                {featuresContent.services[0].description}
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {featuresContent.services[0].features.map((feature, idx) => (
                  <motion.li key={idx} variants={fadeUp} className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6-7. Reception & Gala */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <DotMatrixGrid density={5} color="rgba(255,255,255,0.1)" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8 lg:order-1 order-2"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium">
                {featuresContent.services[1].title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed">
                {featuresContent.services[1].description}
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {featuresContent.services[1].features.map((feature, idx) => (
                  <motion.li key={idx} variants={fadeUp} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl lg:order-2 order-1"
            >
              <Image
                src={ImageRegistry.HomeServiceReception.src}
                alt={featuresContent.services[1].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8-9. Pre-wedding & Installations Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Pre-wedding */}
              <motion.div
                initial={shouldReduceMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
                  <Image src={ImageRegistry.HomeServicePreWedding.src} alt={featuresContent.services[2].title} fill className="object-cover" />
                </div>
                <motion.h3 variants={fadeUp} className="text-3xl font-heading font-medium mb-4">{featuresContent.services[2].title}</motion.h3>
                <motion.p variants={fadeUp} className="text-muted-foreground mb-8">{featuresContent.services[2].description}</motion.p>
                <motion.ul variants={staggerContainer} className="space-y-3">
                  {featuresContent.services[2].features.map((feature, idx) => (
                    <motion.li key={idx} variants={fadeUp} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Installations */}
              <motion.div
                initial={shouldReduceMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
                  <Image src={ImageRegistry.FeaturesInstallations.src} alt={featuresContent.services[3].title} fill className="object-cover" />
                </div>
                <motion.h3 variants={fadeUp} className="text-3xl font-heading font-medium mb-4">{featuresContent.services[3].title}</motion.h3>
                <motion.p variants={fadeUp} className="text-muted-foreground mb-8">{featuresContent.services[3].description}</motion.p>
                <motion.ul variants={staggerContainer} className="space-y-3">
                  {featuresContent.services[3].features.map((feature, idx) => (
                    <motion.li key={idx} variants={fadeUp} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 19. CTA */}
      <section className="py-24 border-t border-border bg-muted/10 text-center px-4">
         <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto space-y-8"
         >
            <motion.h2 variants={fadeUp} className="text-4xl font-heading font-medium text-foreground">{featuresContent.callToAction.heading}</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">{featuresContent.callToAction.subheading}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" asChild className="rounded-full text-lg px-8">
                <Link href="/contact">{featuresContent.callToAction.buttonPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-lg px-8">
                <Link href="/pricing">{featuresContent.callToAction.buttonSecondary}</Link>
              </Button>
            </motion.div>
         </motion.div>
      </section>
    </>
  );
}
