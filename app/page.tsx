"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { homeContent } from "@/content/home";
import { ImageRegistry } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { AvatarStack } from "@/components/visuals/AvatarStack";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, Leaf02Icon, PaintBoardIcon } from "@hugeicons/core-free-icons";

// Map over brand banner strings to create logo track items
const trustLogos = homeContent.brandBanner.map(name => ({ name, url: "#" }));

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      {/* 1-3. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatedGradientMesh />
        <div className="absolute inset-0 z-0">
          <Image
            src={ImageRegistry.HomeHeroBackground.src}
            alt={ImageRegistry.HomeHeroBackground.alt}
            fill
            priority
            className="object-cover opacity-30 dark:opacity-20 mix-blend-overlay"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-heading font-medium tracking-tight text-foreground"
            >
              {homeContent.hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {homeContent.hero.subheadline}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild className="rounded-full w-full sm:w-auto text-lg px-8">
                <Link href="/contact">{homeContent.hero.ctaPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full w-full sm:w-auto text-lg px-8 border-primary/20 hover:bg-primary/5">
                <Link href="/features">{homeContent.hero.ctaSecondary}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Brand Essence Banner */}
      <section className="py-12 border-y border-border/40 bg-muted/30">
        <LogoMarquee logos={trustLogos} speed={40} />
      </section>

      {/* 5. Introduction Block */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium text-foreground leading-tight">
                {homeContent.introduction.heading}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                {homeContent.introduction.paragraph1}
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                {homeContent.introduction.paragraph2}
              </motion.p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={ImageRegistry.AboutHeroSplit.src}
                alt={ImageRegistry.AboutHeroSplit.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6-9. Services Summary */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium">
              {homeContent.servicesSummary.heading}
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { ...homeContent.servicesSummary.card1, img: ImageRegistry.HomeServiceAnandKaraj },
              { ...homeContent.servicesSummary.card2, img: ImageRegistry.HomeServiceReception },
              { ...homeContent.servicesSummary.card3, img: ImageRegistry.HomeServicePreWedding },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden bg-background/5 border border-white/10 p-6 flex flex-col h-full hover:bg-background/10 transition-colors"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.img.src}
                    alt={service.img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-heading font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Link href="/features" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  Explore <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12-16. Process & Why Choose Us */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* The Artisan Process */}
            <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium text-foreground">
                {homeContent.process.heading}
              </motion.h2>

              <motion.div variants={fadeUp} className="relative">
                <CodeWindowTyping
                  lines={[
                    "// Phase 1: Consultation",
                    `console.log("${homeContent.process.steps[0].description}");\n`,
                    "// Phase 2: Design Concept",
                    `buildBlueprint({ style: "Anand Karaj", colors: "Pastel" });\n// ${homeContent.process.steps[1].description}\n`,
                    "// Phase 3: Execution",
                    `await executeVision({ date: "Your Big Day" });\n// ${homeContent.process.steps[2].description}`
                  ]}
                  typingSpeed={20}
                  className="h-full min-h-[300px]"
                />
              </motion.div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12 lg:pt-0 pt-12"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium text-foreground">
                {homeContent.whyChooseUs.heading}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {homeContent.whyChooseUs.points.map((point, idx) => {
                  const icons = [CheckmarkBadge01Icon, Leaf02Icon, PaintBoardIcon, CheckmarkBadge01Icon];
                  const Icon = icons[idx];
                  return (
                    <motion.div key={idx} variants={fadeUp} className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <HugeiconsIcon icon={Icon} className="w-6 h-6 text-current fill-current" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-heading font-medium text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* 11. Testimonial/Social Proof Teaser */}
              <motion.div variants={fadeUp} className="bg-muted/50 rounded-2xl p-6 border border-border/50 flex flex-col sm:flex-row items-center gap-6">
                <AvatarStack
                  avatars={[
                    { url: ImageRegistry.Avatar1.src, alt: ImageRegistry.Avatar1.alt },
                    { url: ImageRegistry.Avatar2.src, alt: ImageRegistry.Avatar2.alt },
                    { url: ImageRegistry.Avatar3.src, alt: ImageRegistry.Avatar3.alt },
                    { url: ImageRegistry.Avatar4.src, alt: ImageRegistry.Avatar4.alt },
                    { url: ImageRegistry.Avatar1.src, alt: "Extra Client" }
                  ]}
                  limit={4}
                />
                <div className="text-center sm:text-left">
                  <p className="font-medium text-foreground">{homeContent.socialProof.lovedBy}</p>
                  <p className="text-sm text-muted-foreground">{homeContent.socialProof.rating}</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 17. Floral Signature Element Break */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={ImageRegistry.HomeSignatureFloral.src}
          alt={ImageRegistry.HomeSignatureFloral.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </section>

      {/* 18. Call to Action */}
      <section className="py-24 bg-background text-center px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground">
            {homeContent.callToAction.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeContent.callToAction.subheading}
          </p>
          <Button size="lg" asChild className="rounded-full text-lg px-10">
            <Link href="/contact">{homeContent.callToAction.buttonText}</Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
