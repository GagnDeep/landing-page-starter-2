import React from 'react';
import { newsletterPrompt } from '@/content/blog'; // Reusing the prompt from blog content

export function Newsletter() {
  return (
    <section className="w-full py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
        {/* Home-17-NewsletterSignupPrompt */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
          {newsletterPrompt.heading}
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
          {newsletterPrompt.description}
        </p>

        {/* Home-18-NewsletterInputForm */}
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="#" method="POST">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="flex-1 px-6 py-4 rounded-full bg-background text-foreground border border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-foreground text-background font-semibold tracking-wide hover:bg-foreground/90 transition-colors"
          >
            {newsletterPrompt.cta.label}
          </button>
        </form>
      </div>
    </section>
  );
}
