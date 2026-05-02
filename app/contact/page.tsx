"use client";

import { contactContent } from "@/content/contact";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import { useState } from "react";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border pb-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6">{contactContent.hero.title}</h1>
              <p className="text-xl text-muted-foreground font-serif">{contactContent.hero.subtitle}</p>
            </div>
            <div className="hidden lg:block relative aspect-[4/3] rounded-lg overflow-hidden grayscale opacity-80">
              <Image src={IMAGES.storefront} alt="Atelier Door" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-card border border-border p-8 md:p-12 rounded-lg shadow-sm">
                <h2 className="text-2xl font-heading text-primary mb-8">{contactContent.form.heading}</h2>

                {formStatus === "success" ? (
                  <div className="bg-primary/10 border border-primary text-primary p-6 rounded text-center">
                    <p className="font-medium text-lg mb-2">Inquiry Received</p>
                    <p className="text-sm">Thank you for reaching out. Our master tailor will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">{contactContent.form.fields.name}</label>
                        <input id="name" required className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">{contactContent.form.fields.email}</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">{contactContent.form.fields.phone}</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-foreground">{contactContent.form.fields.serviceType}</label>
                      <select id="service" required defaultValue="" className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="" disabled>Select a service...</option>
                        {contactContent.form.fields.serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">{contactContent.form.fields.message}</label>
                      <textarea id="message" rows={4} required className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                    </div>

                    <CTAGlow className="w-full">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors disabled:opacity-70"
                      >
                        {formStatus === "submitting" ? "Sending..." : contactContent.form.submitButton}
                      </button>
                    </CTAGlow>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
               <div>
                 <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">{contactContent.directInfo.phoneHeading}</h3>
                 <p className="text-2xl font-serif text-foreground mb-1">{contactContent.directInfo.phone}</p>
                 <p className="text-sm text-muted-foreground">{contactContent.directInfo.whatsappText}</p>
               </div>

               <div>
                 <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">{contactContent.directInfo.emailHeading}</h3>
                 <a href={`mailto:${contactContent.directInfo.email}`} className="text-xl font-serif text-foreground hover:text-primary transition-colors">
                   {contactContent.directInfo.email}
                 </a>
               </div>

               <div>
                 <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">{contactContent.directInfo.addressHeading}</h3>
                 <p className="text-lg font-serif text-foreground leading-relaxed whitespace-pre-line mb-6">
                   {contactContent.directInfo.address}
                 </p>
                 <div className="relative aspect-video rounded border border-border overflow-hidden opacity-80 mix-blend-luminosity">
                    <Image src={IMAGES.mapIllustration} alt="Map" fill className="object-cover" />
                 </div>
               </div>

               <div className="p-6 bg-secondary/5 border border-border rounded">
                 <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">{contactContent.hours.heading}</h3>
                 <ul className="space-y-3">
                   {contactContent.hours.details.map((h, i) => (
                     <li key={i} className="flex justify-between text-sm">
                       <span className="text-muted-foreground">{h.day}</span>
                       <span className="font-medium text-foreground">{h.time}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
