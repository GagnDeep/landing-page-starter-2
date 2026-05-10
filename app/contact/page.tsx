"use client";

import React from "react";
import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AnimatedGradientMesh,
  DotMatrixGrid
} from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, CallIcon, Location01Icon, InstagramIcon, Facebook01Icon, YoutubeIcon } from "@hugeicons/core-free-icons";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-card min-h-screen">
      <DotMatrixGrid opacity={0.1} />

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border z-10">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight text-foreground mb-6">
            {contactContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            {contactContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* 2. Contact Form */}
            <div className="lg:col-span-7 bg-background border border-border p-8 md:p-12 shadow-sm rounded-sm">
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="names" className="font-sans font-medium text-foreground">{contactContent.form.labels.names}</Label>
                    <Input id="names" placeholder={contactContent.form.placeholders.names} className="rounded-none bg-muted/20 border-border h-12" required />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="email" className="font-sans font-medium text-foreground">{contactContent.form.labels.email}</Label>
                    <Input id="email" type="email" placeholder={contactContent.form.placeholders.email} className="rounded-none bg-muted/20 border-border h-12" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="phone" className="font-sans font-medium text-foreground">{contactContent.form.labels.phone}</Label>
                    <Input id="phone" type="tel" placeholder={contactContent.form.placeholders.phone} className="rounded-none bg-muted/20 border-border h-12" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="eventDates" className="font-sans font-medium text-foreground">{contactContent.form.labels.eventDates}</Label>
                    <Input id="eventDates" placeholder={contactContent.form.placeholders.eventDates} className="rounded-none bg-muted/20 border-border h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="locations" className="font-sans font-medium text-foreground">{contactContent.form.labels.locations}</Label>
                    <Input id="locations" placeholder={contactContent.form.placeholders.locations} className="rounded-none bg-muted/20 border-border h-12" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="budget" className="font-sans font-medium text-foreground">{contactContent.form.labels.budget}</Label>
                    <Select>
                      <SelectTrigger className="rounded-none bg-muted/20 border-border h-12 font-sans">
                        <SelectValue placeholder={contactContent.form.placeholders.budget} />
                      </SelectTrigger>
                      <SelectContent>
                        {contactContent.form.budgetOptions.map((opt, idx) => (
                          <SelectItem key={idx} value={opt} className="font-sans">{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="message" className="font-sans font-medium text-foreground">{contactContent.form.labels.message}</Label>
                  <Textarea
                    id="message"
                    placeholder={contactContent.form.placeholders.message}
                    className="rounded-none bg-muted/20 border-border min-h-[150px] resize-y"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto self-start rounded-none px-12 mt-4 text-base">
                  {contactContent.form.submitButton}
                </Button>
              </form>
            </div>

            {/* 3, 4, 5. Sidebar Info */}
            <div className="lg:col-span-5 flex flex-col gap-16">

              {/* Direct Contact Info */}
              <div className="flex flex-col gap-8">
                <h3 className="font-heading text-3xl text-foreground border-b border-border pb-4">{contactContent.directContact.title}</h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 bg-muted/30">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.5 as any} className="size-5 text-foreground" />
                  </div>
                  <div className="flex flex-col gap-1 pt-2">
                    <span className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">{contactContent.directContact.email.label}</span>
                    <a href={`mailto:${contactContent.directContact.email.value}`} className="font-sans text-lg text-foreground hover:text-primary transition-colors">
                      {contactContent.directContact.email.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 bg-muted/30">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <HugeiconsIcon icon={CallIcon} strokeWidth={1.5 as any} className="size-5 text-foreground" />
                  </div>
                  <div className="flex flex-col gap-1 pt-2">
                    <span className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">{contactContent.directContact.phone.label}</span>
                    <a href={`tel:${contactContent.directContact.phone.value}`} className="font-sans text-lg text-foreground hover:text-primary transition-colors">
                      {contactContent.directContact.phone.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 bg-muted/30">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <HugeiconsIcon icon={Location01Icon} strokeWidth={1.5 as any} className="size-5 text-foreground" />
                  </div>
                  <div className="flex flex-col gap-1 pt-2">
                    <span className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">{contactContent.directContact.address.label}</span>
                    <span className="font-sans text-lg text-foreground max-w-[250px]">
                      {contactContent.directContact.address.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expectations */}
              <div className="flex flex-col gap-6 bg-muted/20 p-8 border border-border rounded-sm">
                <h3 className="font-heading text-2xl text-foreground">{contactContent.expectations.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {contactContent.expectations.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-2xl text-foreground">{contactContent.social.title}</h3>
                <div className="flex gap-4">
                  <a href={contactContent.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <HugeiconsIcon icon={InstagramIcon} strokeWidth={1.5 as any} className="size-5" />
                  </a>
                  <a href={contactContent.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <HugeiconsIcon icon={Facebook01Icon} strokeWidth={1.5 as any} className="size-5" />
                  </a>
                  <a href={contactContent.social.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <HugeiconsIcon icon={YoutubeIcon} strokeWidth={1.5 as any} className="size-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
