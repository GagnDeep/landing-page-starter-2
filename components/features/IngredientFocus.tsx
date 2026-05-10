import React from 'react';
import Image from 'next/image';
import { ingredientFocus } from '@/content/features';
import { images } from '@/lib/images';
import { OrganicSectionDivider } from '@/components/visuals/OrganicSectionDivider';

export function IngredientFocus() {
  // Mapping placeholder images for the alternating rows to avoid hardcoding raw URLs.
  // In a real scenario, the content file might dictate the image keys.
  const rowImages = [
    images.ingredients,
    images.doughKneading,
    images.pastryDetails
  ];

  return (
    <section className="w-full relative pb-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 pt-24">

        {/* Features-04-IngredientFocusSection */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {ingredientFocus.heading}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50" />
        </div>

        {/* Features-05-IngredientHighlight (Alternating Rows) */}
        <div className="space-y-24 md:space-y-32">
          {ingredientFocus.items.map((item, i) => {
            const isEven = i % 2 === 0;
            const img = rowImages[i % rowImages.length];
            return (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden bg-card border border-border shadow-md">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                </div>

                <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold font-sans mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-6">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[99%] text-background z-10 rotate-180">
        <OrganicSectionDivider className="fill-current" />
      </div>
    </section>
  );
}
