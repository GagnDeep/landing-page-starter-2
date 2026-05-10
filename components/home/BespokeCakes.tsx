import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { bespokeCakes } from '@/content/home';
import { images } from '@/lib/images';

export function BespokeCakes() {
  return (
    <section className="w-full relative py-32 lg:py-48 overflow-hidden bg-foreground">
      {/* Home-09-BespokeCakesParallax Background */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 mix-blend-luminosity">
        <Image
          src={images.customWeddingCake.src}
          alt={images.customWeddingCake.alt}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex justify-end">
        {/* Home-10-BespokeCakesContent Floating Card */}
        <div className="bg-card/95 backdrop-blur-md p-10 md:p-14 rounded-3xl max-w-xl border border-border shadow-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {bespokeCakes.heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            {bespokeCakes.content}
          </p>
          <Link
            href={bespokeCakes.cta.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold tracking-wide hover:bg-primary/90 transition-all hover:scale-105 duration-300"
          >
            {bespokeCakes.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
