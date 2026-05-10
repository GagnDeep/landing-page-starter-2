import React from 'react';
import { homeTestimonials } from '@/content/home';

export function Testimonials() {
  return (
    <section className="w-full py-24 bg-primary/5 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Home-12-TestimonialSlider (Static grid representation for now, slider logic typically implemented via a library, but sticking to CSS/React basics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {homeTestimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-background rounded-[2rem] shadow-sm border border-border">
              <span className="text-6xl text-primary/20 font-heading leading-none mb-4">"</span>
              <p className="text-lg md:text-xl text-foreground font-medium mb-8 flex-1 italic">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
