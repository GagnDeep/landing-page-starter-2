import React from 'react';
import Image from 'next/image';
import { techniqueShowcase, customCraftsmanship, dietaryOptions, freshnessGuarantee } from '@/content/features';
import { images } from '@/lib/images';
import { MicroIcon } from '@/components/visuals/MicroIconSet';

export function TechniquesAndGuarantees() {
  const stepIcons = ["bread", "wheat", "oven"] as const;

  return (
    <>
      {/* Features-06-TechniqueShowcase */}
      <section className="w-full py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{techniqueShowcase.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Where time is our most crucial ingredient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {techniqueShowcase.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-background/5 rounded-[2rem] border border-background/10">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{step.stepNumber}</span>
                <MicroIcon name={stepIcons[i]} className="w-12 h-12 text-background opacity-80 mb-6" />
                <h3 className="font-heading text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features-08-CustomCraftsmanship */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">{customCraftsmanship.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{customCraftsmanship.content as string}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-muted">
             <Image src={images.customWeddingCake.src} alt={images.customWeddingCake.alt} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Features-10-DietaryOptionsBanner & Features-12-FreshnessGuarantee */}
      <section className="w-full py-16 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-border">

          <div className="md:pr-12 pb-8 md:pb-0">
            <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-6 mx-auto md:mx-0 text-primary">
              <span className="font-bold font-heading">V</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{dietaryOptions.heading}</h3>
            <p className="text-muted-foreground">{dietaryOptions.content}</p>
          </div>

          <div className="md:pl-12 pt-8 md:pt-0">
             <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-6 mx-auto md:mx-0 text-primary">
              <span className="font-bold font-heading">D</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{freshnessGuarantee.heading}</h3>
            <p className="text-muted-foreground">{freshnessGuarantee.content}</p>
          </div>

        </div>
      </section>
    </>
  );
}
