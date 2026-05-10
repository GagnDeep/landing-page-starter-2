"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { ImageRegistry } from "@/lib/images";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
      {/* 2. About Hero Split */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-muted/20">
        <FloatingBlobs color="var(--primary)" size={400} blur={120} delay={0} className="top-0 left-0" />
        <FloatingBlobs color="var(--accent)" size={300} blur={100} delay={2} className="bottom-0 right-1/4" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl space-y-6"
            >
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-medium text-foreground leading-tight">
                {aboutContent.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
                {aboutContent.hero.subheadline}
              </motion.p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border-4 border-background/50"
            >
              <Image
                src={ImageRegistry.AboutHeroSplit.src}
                alt={ImageRegistry.AboutHeroSplit.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium">
              {aboutContent.ourStory.heading}
            </motion.h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {aboutContent.ourStory.paragraphs.map((paragraph, idx) => (
                <motion.p key={idx} variants={fadeUp}>{paragraph}</motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4-7. Milestone Timeline */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <DotMatrixGrid density={6} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-medium">{aboutContent.milestones.heading}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            {aboutContent.milestones.events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 group"
              >
                <div className="md:w-1/3 text-primary font-heading font-semibold text-2xl md:text-right pt-1">
                  {event.year}
                </div>
                <div className="relative md:w-2/3 pb-12 md:pl-12 border-l-2 border-border group-last:border-l-0 group-last:pb-0 pl-6 border-l-border">
                  <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <h3 className="text-2xl font-medium mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9-12. Team Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-medium">{aboutContent.team.heading}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { ...aboutContent.team.members[0], img: ImageRegistry.AboutTeamAli },
              { ...aboutContent.team.members[1], img: ImageRegistry.AboutTeamFeroz }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group text-center"
              >
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-muted">
                  <Image
                    src={member.img.src}
                    alt={member.img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-2xl font-heading font-medium mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Sustainability */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={ImageRegistry.AboutGallery2.src}
                  alt={ImageRegistry.AboutGallery2.alt}
                  fill
                  className="object-cover"
                />
             </div>
             <motion.div
                initial={shouldReduceMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 lg:pl-12"
             >
                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-medium">
                  {aboutContent.sustainability.heading}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed">
                  {aboutContent.sustainability.description}
                </motion.p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 18. Philosophy Quote */}
      <section className="py-32 relative overflow-hidden bg-muted/10 text-center px-4">
        <FloatingBlobs color="var(--primary)" size={500} blur={150} className="-top-1/2 left-1/4 opacity-10" />
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto relative z-10 space-y-8"
        >
          <div className="text-6xl text-primary font-heading leading-none">&quot;</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium leading-tight text-foreground">
            {aboutContent.philosophy.statement}
          </h2>
          <div className="text-lg text-muted-foreground uppercase tracking-widest font-semibold pt-6">
            — {aboutContent.philosophy.heading}
          </div>
        </motion.div>
      </section>

      {/* 19. CTA */}
      <section className="py-24 border-t border-border bg-background text-center px-4">
         <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto space-y-8"
         >
            <h2 className="text-4xl font-heading font-medium">{aboutContent.callToAction.heading}</h2>
            <Button size="lg" asChild className="rounded-full text-lg px-10">
              <Link href="/contact">{aboutContent.callToAction.buttonText}</Link>
            </Button>
         </motion.div>
      </section>
    </>
  );
}
