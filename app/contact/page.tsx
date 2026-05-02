"use client";

import React, { useState } from 'react';

// Content
import { contactContent } from '@/content/contact';

// Visual Components
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { CTAGlow } from '@/components/visuals/CTAGlow';

// UI Components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Location01Icon,
  Mail01Icon,
  CallIcon,
  Clock01Icon,
  InstagramIcon,
  Facebook01Icon
} from '@hugeicons/core-free-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* 1. Hero Intro */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden pt-20 border-b border-border bg-background">
        <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--muted)" className="opacity-40" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
           <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">
             {contactContent.hero.heading}
           </h1>
           <p className="text-xl font-light text-muted-foreground">
             {contactContent.hero.subheading}
           </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-background relative">
        <DotMatrixGrid className="opacity-20" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

             {/* 2. Contact Info Block & 5. Social Links */}
             <div className="space-y-12">
                <div>
                   <h2 className="font-heading text-3xl mb-8">{contactContent.detailsHeading}</h2>
                   <div className="space-y-6">
                     <div className="flex items-start space-x-4">
                       <HugeiconsIcon icon={Location01Icon} className="text-primary mt-1 shrink-0" />
                       <div>
                         <p className="font-medium text-foreground mb-1">Address</p>
                         <p className="text-muted-foreground">{contactContent.contactInfo.address}</p>
                       </div>
                     </div>
                     <div className="flex items-start space-x-4">
                       <HugeiconsIcon icon={Mail01Icon} className="text-primary mt-1 shrink-0" />
                       <div>
                         <p className="font-medium text-foreground mb-1">Email</p>
                         <a href={`mailto:${contactContent.contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                           {contactContent.contactInfo.email}
                         </a>
                       </div>
                     </div>
                     <div className="flex items-start space-x-4">
                       <HugeiconsIcon icon={CallIcon} className="text-primary mt-1 shrink-0" />
                       <div>
                         <p className="font-medium text-foreground mb-1">Phone</p>
                         <a href={`tel:${contactContent.contactInfo.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                           {contactContent.contactInfo.phone}
                         </a>
                       </div>
                     </div>
                     <div className="flex items-start space-x-4">
                       <HugeiconsIcon icon={Clock01Icon} className="text-primary mt-1 shrink-0" />
                       <div>
                         <p className="font-medium text-foreground mb-1">Hours</p>
                         <p className="text-muted-foreground">{contactContent.contactInfo.hours}</p>
                       </div>
                     </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-border">
                   <h3 className="font-medium uppercase tracking-widest text-xs text-muted-foreground mb-6">{contactContent.social.heading}</h3>
                   <div className="flex space-x-4">
                      <a href={contactContent.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                         <HugeiconsIcon icon={InstagramIcon} size={20} />
                      </a>
                      <a href={contactContent.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                         <HugeiconsIcon icon={Facebook01Icon} size={20} />
                      </a>
                   </div>
                </div>
             </div>

             {/* 4. Contact Form */}
             <div className="bg-card border border-border p-8 md:p-12 shadow-sm rounded-sm">
                <h2 className="font-heading text-3xl mb-8">{contactContent.form.heading}</h2>

                {isSuccess ? (
                  <div className="bg-primary/10 border border-primary/20 text-primary p-6 rounded-sm text-center">
                    <h3 className="font-medium mb-2">{contactContent.form.successTitle}</h3>
                    <p className="text-sm">{contactContent.form.successMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{contactContent.form.nameLabel}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-background"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{contactContent.form.emailLabel}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-background"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{contactContent.form.subjectLabel}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="bg-background"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{contactContent.form.messageLabel}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="bg-background resize-none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full uppercase tracking-widest text-xs py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : contactContent.form.submitLabel}
                    </Button>
                  </form>
                )}
             </div>

          </div>
        </div>
      </section>

      {/* 3. Map Embed (Simulated with visual component placeholder) */}
      <section className="h-[400px] bg-muted relative overflow-hidden flex items-center justify-center">
         <AnimatedGradientMesh baseColor="var(--muted)" overlayColor="var(--secondary)" />
         <div className="relative z-10 flex flex-col items-center opacity-50">
            <HugeiconsIcon icon={Location01Icon} size={48} className="mb-4 text-muted-foreground" />
            <p className="font-mono text-sm tracking-widest uppercase">Interactive Map Integration</p>
            <p className="text-xs text-muted-foreground mt-2">(Requires Google Maps API Key in production)</p>
         </div>
      </section>
    </>
  );
}
