"use client";

import React, { useState } from "react";
import { CTAGlowButton } from "./CTAGlowButton";

import { contactContent } from "@/content/contact";

export function ContactForm({ fields, ctaLabel }: { fields: string[], ctaLabel: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real implementation would send data here
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-primary/10 rounded-3xl border border-primary/20 text-center h-full">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">{contactContent.form.successTitle}</h3>
        <p className="text-muted-foreground">{contactContent.form.successMessage}</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-primary font-medium hover:underline"
        >
          {contactContent.form.resetCta}
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">{fields[0] || "Name"}</label>
          <input type="text" id="contact-name" className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">{fields[1] || "Phone"}</label>
          <input type="tel" id="contact-phone" className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-date" className="text-sm font-medium text-foreground">{fields[2] || "Event Date"}</label>
        <input type="date" id="contact-date" className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">{fields[3] || "Message"}</label>
        <textarea id="contact-message" rows={5} className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" required></textarea>
      </div>
      <CTAGlowButton as="button" type="submit" className="w-full mt-2 py-4">
        {ctaLabel}
      </CTAGlowButton>
    </form>
  );
}
