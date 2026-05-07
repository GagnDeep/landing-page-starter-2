"use client";

import Image from "next/image";
import Link from "next/link";
import { contactContent } from "@/content/contact";
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
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const {
    hero,
    contactInfo,
    inquiryForm,
    officeHours,
    faqTeaser,
    socialLinks,
    studioLocation,
    pressInquiry,
  } = contactContent;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 2. Hero Section (Let's Begin) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border bg-muted/10">
        <ParticleField particleCount={20} color="#e5e5e5" className="opacity-40" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <TextReveal
                text={hero.headline}
                as="h1"
                className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              />
              <FadeInUp delay={0.4}>
                <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide max-w-lg leading-relaxed">
                  {hero.subtitle}
                </p>
              </FadeInUp>
            </div>
            <FadeInUp className="w-full lg:w-1/2" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                 <Image
                   src={SITE_IMAGES.heroContact.src}
                   alt={SITE_IMAGES.heroContact.alt}
                   fill
                   priority
                   className="object-cover"
                 />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column: Direct Contact & Info */}
            <div className="w-full lg:w-1/3 space-y-16">
              {/* 3. Direct Contact Information */}
              <FadeInUp>
                <h3 className="font-heading text-2xl mb-8">{contactInfo.heading}</h3>
                <ul className="space-y-6">
                  <li>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-start group">
                      <Mail className="w-5 h-5 text-primary mt-0.5 mr-4 shrink-0" />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                        <p className="font-medium group-hover:text-primary transition-colors">{contactInfo.email}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${contactInfo.phone}`} className="flex items-start group">
                      <Phone className="w-5 h-5 text-primary mt-0.5 mr-4 shrink-0" />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                        <p className="font-medium group-hover:text-primary transition-colors">{contactInfo.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 mr-4 shrink-0" />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Studio</p>
                      <p className="font-medium leading-relaxed">{contactInfo.address}</p>
                      <p className="text-sm text-muted-foreground mt-2 italic">{studioLocation.description}</p>
                    </div>
                  </li>
                </ul>
              </FadeInUp>

              <AnimatedLine />

              {/* 5. Office Hours */}
              <FadeInUp>
                <h3 className="font-heading text-xl mb-4">{officeHours.heading}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {officeHours.description}
                </p>
              </FadeInUp>

              {/* 9. Press Inquiry */}
              <FadeInUp>
                <h3 className="font-heading text-xl mb-2">{pressInquiry.heading}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {pressInquiry.description}
                </p>
                <a href={`mailto:${pressInquiry.email}`} className="text-sm font-medium text-primary hover:text-foreground transition-colors">
                  {pressInquiry.email}
                </a>
              </FadeInUp>

              {/* 7. Social Links */}
              <FadeInUp>
                <h3 className="font-heading text-xl mb-4">{socialLinks.heading}</h3>
                <div className="flex flex-col space-y-3">
                   {socialLinks.links.map(link => (
                     <a key={link.platform} href={link.url} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                       {link.platform}
                       <ArrowRight className="w-3 h-3 ml-2 opacity-50" />
                     </a>
                   ))}
                </div>
              </FadeInUp>

              {/* 6. FAQ Teaser */}
              <FadeInUp className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-heading text-lg mb-4">{faqTeaser.heading}</h3>
                <ul className="space-y-3">
                   {faqTeaser.links.map(link => (
                     <li key={link.label}>
                       <Link href={link.href} className="text-sm text-primary hover:underline underline-offset-4 transition-all">
                         {link.label}
                       </Link>
                     </li>
                   ))}
                </ul>
              </FadeInUp>

            </div>

            {/* Right Column: 4. The Inquiry Form */}
            <div className="w-full lg:w-2/3">
              <FadeInUp delay={0.2} className="bg-background rounded-2xl shadow-xl shadow-black/5 border border-border/50 p-8 md:p-12">
                <h2 className="font-heading text-3xl mb-8">{inquiryForm.heading}</h2>
                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {inquiryForm.fields.slice(0, 4).map((field) => (
                      <div key={field.name} className="flex flex-col">
                        <label htmlFor={field.name} className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 text-foreground"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                       <label htmlFor={inquiryForm.fields[4].name} className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                         {inquiryForm.fields[4].label}
                       </label>
                       <input
                         type={inquiryForm.fields[4].type}
                         id={inquiryForm.fields[4].name}
                         name={inquiryForm.fields[4].name}
                         placeholder={inquiryForm.fields[4].placeholder}
                         className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 text-foreground"
                       />
                    </div>
                    <div className="flex flex-col">
                       <label htmlFor={inquiryForm.fields[5].name} className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                         {inquiryForm.fields[5].label}
                       </label>
                       <input
                         type={inquiryForm.fields[5].type}
                         id={inquiryForm.fields[5].name}
                         name={inquiryForm.fields[5].name}
                         placeholder={inquiryForm.fields[5].placeholder}
                         className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 text-foreground"
                       />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor={inquiryForm.fields[6].name} className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                      {inquiryForm.fields[6].label}
                    </label>
                    <select
                      id={inquiryForm.fields[6].name}
                      name={inquiryForm.fields[6].name}
                      className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none rounded-none"
                    >
                      <option value="" disabled selected>Select an option</option>
                      {inquiryForm.fields[6].options?.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor={inquiryForm.fields[7].name} className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                      {inquiryForm.fields[7].label}
                    </label>
                    <textarea
                      id={inquiryForm.fields[7].name}
                      name={inquiryForm.fields[7].name}
                      placeholder={inquiryForm.fields[7].placeholder}
                      rows={4}
                      className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 text-foreground resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <MagneticButton type="submit" className="w-full md:w-auto px-10 py-4">
                      {inquiryForm.submitButton}
                    </MagneticButton>
                  </div>
                </form>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
