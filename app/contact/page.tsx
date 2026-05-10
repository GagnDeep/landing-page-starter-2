"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { contactContent } from "@/content/contact";
import { ImageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Call02Icon, Mail02Icon, Time02Icon } from "@hugeicons/core-free-icons";

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

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
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-foreground text-background pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={ImageRegistry.ContactHero.src}
            alt={ImageRegistry.ContactHero.alt}
            fill
            priority
            className="object-cover opacity-30 mix-blend-overlay"
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
              {contactContent.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {contactContent.hero.subheadline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

             {/* Contact Form */}
             <motion.div
               initial={shouldReduceMotion ? "visible" : "hidden"}
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={fadeUp}
               className="bg-muted/20 p-8 md:p-12 rounded-3xl border border-border"
             >
               {isSubmitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
                   <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                     <span className="text-primary text-2xl">✓</span>
                   </div>
                   <h3 className="text-2xl font-heading font-medium text-foreground">{contactContent.statusText.received}</h3>
                   <p className="text-muted-foreground">{contactContent.form.successMessage}</p>
                   <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4 rounded-full">
                     {contactContent.statusText.sendAnother}
                   </Button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <Label htmlFor="name">{contactContent.form.nameLabel}</Label>
                       <Input id="name" required className="bg-background border-border" />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="phone">{contactContent.form.phoneLabel}</Label>
                       <Input id="phone" type="tel" required className="bg-background border-border" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email">{contactContent.form.emailLabel}</Label>
                     <Input id="email" type="email" required className="bg-background border-border" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <Label htmlFor="date">{contactContent.form.dateLabel}</Label>
                       <Input id="date" type="date" className="bg-background border-border" />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="venue">{contactContent.form.venueLabel}</Label>
                       <Input id="venue" className="bg-background border-border" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="message">{contactContent.form.messageLabel}</Label>
                     <Textarea id="message" required className="min-h-[150px] bg-background border-border" />
                   </div>
                   <Button type="submit" size="lg" className="w-full rounded-full text-lg mt-4">
                     {contactContent.form.submitButton}
                   </Button>
                 </form>
               )}
             </motion.div>

             {/* Contact Details */}
             <motion.div
               initial={shouldReduceMotion ? "visible" : "hidden"}
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="space-y-12"
             >
                <div className="space-y-8">
                  <motion.h2 variants={fadeUp} className="text-3xl font-heading font-medium">{contactContent.details.heading}</motion.h2>

                  <motion.div variants={staggerContainer} className="space-y-6">
                    <motion.div variants={fadeUp} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HugeiconsIcon icon={Location01Icon} className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contactContent.details.address.label}</p>
                        <p className="text-muted-foreground">{contactContent.details.address.value}</p>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HugeiconsIcon icon={Call02Icon} className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contactContent.details.phone.label}</p>
                        <a href={`tel:${contactContent.details.phone.value.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {contactContent.details.phone.value}
                        </a>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HugeiconsIcon icon={Mail02Icon} className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contactContent.details.email.label}</p>
                        <a href={`mailto:${contactContent.details.email.value}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {contactContent.details.email.value}
                        </a>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HugeiconsIcon icon={Time02Icon} className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contactContent.details.hours.label}</p>
                        <p className="text-muted-foreground">{contactContent.details.hours.value}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* FAQ Teaser */}
                <motion.div variants={fadeUp} className="bg-muted/50 p-6 rounded-2xl border border-border">
                   <p className="text-foreground font-medium mb-2">{contactContent.faqTeaser.text}</p>
                   <Link href="/faq" className="text-primary hover:underline">{contactContent.faqTeaser.linkText} &rarr;</Link>
                </motion.div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Decorative Image Break */}
      <section className="h-[40vh] min-h-[300px] relative overflow-hidden">
         <Image
           src={ImageRegistry.ContactDecorative.src}
           alt={ImageRegistry.ContactDecorative.alt}
           fill
           className="object-cover"
           sizes="100vw"
         />
      </section>
    </>
  );
}
