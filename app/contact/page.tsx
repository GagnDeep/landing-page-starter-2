"use client";

import { contactContent } from "@/content/contact";
import { IMAGES } from "@/lib/images";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ScaleImage } from "@/components/visuals/ScaleImage";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  // Using a client component here because we are rendering a form.
  // In a real app, this would tie into a Server Action or form library.

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-background relative overflow-hidden border-b border-border">
        <DotMatrixGrid className="opacity-40" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <RevealText as="h1" className="text-5xl md:text-7xl font-heading font-medium text-foreground">
            {contactContent.hero.headline}
          </RevealText>
        </div>
      </section>

      {/* Split Layout: Details & Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Contact Details */}
            <div>
              <RevealText>
                <h2 className="text-3xl font-heading text-foreground mb-10 border-b border-border pb-4">
                  Direct Inquiries
                </h2>

                <div className="space-y-8 mb-16">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Headquarters</p>
                      <p className="text-lg text-foreground">{contactContent.details.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${contactContent.details.phone.replace(/\\s/g, '')}`} className="text-lg text-foreground hover:text-primary transition-colors">
                        {contactContent.details.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${contactContent.details.email}`} className="text-lg text-foreground hover:text-primary transition-colors">
                        {contactContent.details.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Office Hours</p>
                      <p className="text-lg text-foreground">{contactContent.details.hours}</p>
                    </div>
                  </div>
                </div>
              </RevealText>

              <FadeIn delay={0.2}>
                <ScaleImage className="aspect-[4/3] relative rounded-none shadow-lg mb-12">
                   <Image src={IMAGES.locationUdaipur.src} alt="Guide Events Location" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </ScaleImage>
              </FadeIn>

              <RevealText delay={0.3}>
                 <h3 className="text-2xl font-heading text-foreground mb-6">Consultation FAQ</h3>
                 <Accordion type="single" collapsible className="w-full">
                  {contactContent.faq.map((q, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary py-4">
                        {q.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {q.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </RevealText>
            </div>

            {/* Right: The Form */}
            <div className="bg-muted p-8 md:p-12 border border-border">
              <RevealText>
                <h2 className="text-3xl font-heading text-foreground mb-4">
                  {contactContent.form.headline}
                </h2>
                <p className="text-muted-foreground mb-10">
                  {contactContent.form.subheadline}
                </p>
              </RevealText>

              <FadeIn delay={0.2}>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="names">{contactContent.form.fields.names}</Label>
                    <Input id="names" placeholder="e.g. Rohan & Priya" className="bg-background rounded-none border-border h-12" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">{contactContent.form.fields.email}</Label>
                      <Input id="email" type="email" placeholder="hello@example.com" className="bg-background rounded-none border-border h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{contactContent.form.fields.phone}</Label>
                      <Input id="phone" type="tel" placeholder="+1 234 567 8900" className="bg-background rounded-none border-border h-12" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dates">{contactContent.form.fields.eventDates}</Label>
                      <Input id="dates" placeholder="e.g. December 2024" className="bg-background rounded-none border-border h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">{contactContent.form.fields.guestCount}</Label>
                      <Input id="guests" placeholder="e.g. 250" className="bg-background rounded-none border-border h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">{contactContent.form.fields.location}</Label>
                    <Input id="location" placeholder="e.g. Udaipur, Rajasthan" className="bg-background rounded-none border-border h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vision">{contactContent.form.fields.vision}</Label>
                    <Textarea
                      id="vision"
                      placeholder="Tell us about your dream celebration..."
                      className="bg-background rounded-none border-border min-h-[150px] resize-y"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 text-lg tracking-wide mt-4">
                    {contactContent.form.submitLabel}
                  </Button>
                </form>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}