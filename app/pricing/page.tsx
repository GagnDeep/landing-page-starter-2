"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export default function PricingPage() {
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <FloatingBlobs color="var(--primary)" size={400} blur={120} delay={0} className="-top-20 -left-20 opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-medium text-foreground tracking-tight">
              {pricingContent.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
              {pricingContent.hero.subheadline}
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-primary pt-4">
              {pricingContent.philosophy}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingContent.tiers.map((tier, idx) => {
              const isHighlighted = ("highlighted" in tier ? tier.highlighted : false);
              return (
                <motion.div key={idx} variants={fadeUp} className="h-full">
                  <Card className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl ${isHighlighted ? 'border-primary shadow-lg shadow-primary/10' : 'border-border/50'}`}>
                    {isHighlighted && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                    )}
                    <CardHeader className="text-center pb-8 pt-10">
                      <CardTitle className="font-heading text-2xl mb-2">{tier.name}</CardTitle>
                      <CardDescription className="text-sm h-10">{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-4">
                        {tier.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-sm">
                            <HugeiconsIcon icon={CheckmarkBadge01Icon} className={`w-5 h-5 flex-shrink-0 ${isHighlighted ? 'text-primary' : 'text-muted-foreground'}`} strokeWidth={2} />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-8 pb-10">
                      <Button asChild className="w-full rounded-full" variant={isHighlighted ? "default" : "outline"}>
                        <Link href="/contact">Inquire Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <motion.h2 variants={fadeUp} className="text-3xl font-heading font-medium">{pricingContent.addons.heading}</motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingContent.addons.items.map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-background p-6 rounded-2xl border border-border text-center">
                  <h3 className="font-medium mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-background text-center px-4">
         <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto space-y-8"
         >
            <motion.h2 variants={fadeUp} className="text-4xl font-heading font-medium text-foreground">{pricingContent.callToAction.heading}</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">{pricingContent.callToAction.subheading}</motion.p>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground/60 italic pt-4"> <span className="sr-only">Note: </span>{pricingContent.paymentTerms.description}</motion.p>
            <motion.div variants={fadeUp} className="pt-4">
              <Button size="lg" asChild className="rounded-full text-lg px-10">
                <Link href="/contact">{pricingContent.callToAction.buttonText}</Link>
              </Button>
            </motion.div>
         </motion.div>
      </section>
    </>
  );
}
