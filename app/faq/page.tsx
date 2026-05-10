"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { faqContent } from "@/content/faq";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export default function FAQPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-muted/20 border-b border-border">
        <AnimatedGradientMesh duration={40} className="opacity-10" />

        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tight">
              {faqContent.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {faqContent.hero.subheadline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories & Accordions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="space-y-16"
          >
            {faqContent.categories.map((category, catIdx) => (
              <motion.div key={catIdx} variants={fadeUp} className="space-y-6">
                <h2 className="text-2xl font-heading font-medium text-primary border-b border-border pb-4">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${catIdx}-${qIdx}`}>
                      <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border bg-muted/10 text-center px-4">
         <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto space-y-8"
         >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-medium text-foreground">
              {faqContent.callToAction.heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              {faqContent.callToAction.subheading}
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm font-medium text-foreground/80 pt-2">
              <a href={`tel:${faqContent.callToAction.contactInfo.replace(/\s+/g, '')}`} className="text-primary hover:underline">{faqContent.callToAction.contactInfo}</a>
            </motion.p>
            <motion.div variants={fadeUp} className="pt-4">
              <Button size="lg" asChild className="rounded-full text-lg px-10">
                <Link href="/contact">{faqContent.callToAction.buttonText}</Link>
              </Button>
            </motion.div>
         </motion.div>
      </section>
    </>
  );
}
