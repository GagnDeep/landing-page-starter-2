"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { careersContent } from "@/content/careers";
import { ImageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Time02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function CareersPage() {
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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={ImageRegistry.CareersHero.src}
            alt={ImageRegistry.CareersHero.alt}
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
            sizes="100vw"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-medium text-white tracking-tight">
              {careersContent.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {careersContent.hero.subheadline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <FloatingBlobs color="var(--accent)" size={300} blur={100} delay={0} className="-top-20 -right-20 opacity-10 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16 space-y-6"
          >
             <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-medium">
               {careersContent.culture.heading}
             </motion.h2>
             <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
               {careersContent.culture.description}
             </motion.p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {careersContent.culture.benefits.map((benefit, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-muted/30 p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-heading font-medium mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
           <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-12"
           >
             <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
               {careersContent.openings.heading}
             </h2>
           </motion.div>

           <div className="space-y-6">
             {careersContent.openings.jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="hover:border-primary/50 transition-colors bg-background">
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading text-foreground">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 pt-2">
                        <span className="flex items-center gap-1.5 text-sm">
                          <HugeiconsIcon icon={Location01Icon} className="w-4 h-4 text-primary" strokeWidth={2} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm">
                          <HugeiconsIcon icon={Time02Icon} className="w-4 h-4 text-primary" strokeWidth={2} />
                          {job.type}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="gap-2 group">
                         {careersContent.applyText}
                         <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Application Process & General App */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <motion.div
             initial={shouldReduceMotion ? "visible" : "hidden"}
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="space-y-16"
           >
              <div className="space-y-8">
                 <motion.h2 variants={fadeUp} className="text-3xl font-heading font-medium">{careersContent.applicationProcess.heading}</motion.h2>
                 <motion.ul variants={staggerContainer} className="text-left space-y-4 max-w-2xl mx-auto bg-muted/20 p-8 rounded-2xl border border-border">
                    {careersContent.applicationProcess.steps.map((step, idx) => (
                      <motion.li key={idx} variants={fadeUp} className="flex gap-4">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{step}</span>
                      </motion.li>
                    ))}
                 </motion.ul>
              </div>

              <motion.div variants={fadeUp} className="space-y-4 pt-12 border-t border-border/50">
                 <h2 className="text-2xl font-heading font-medium">{careersContent.generalApplication.heading}</h2>
                 <p className="text-muted-foreground">{careersContent.generalApplication.description}</p>
                 <Button size="lg" asChild className="mt-4 rounded-full px-8">
                   <a href={`mailto:${careersContent.generalApplication.email}`}>{careersContent.generalApplication.buttonText}</a>
                 </Button>
              </motion.div>
           </motion.div>
        </div>
      </section>
    </>
  );
}
