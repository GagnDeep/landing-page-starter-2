import React from 'react';
import { localIngredients } from '@/content/home';
import { images } from '@/lib/images';
import { AnimatedImageFrame } from '@/components/visuals/AnimatedImageFrame';

export function IngredientsHighlight() {
  return (
    <section className="w-full py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Home-13-LocalIngredientsHighlight - Text Left */}
        <div className="order-2 lg:order-1 lg:pr-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            {localIngredients.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {localIngredients.content}
          </p>
        </div>

        {/* Home-13-LocalIngredientsHighlight - Image Right */}
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] w-full relative">
            <AnimatedImageFrame
              image={images.ingredients}
              className="w-full h-full shadow-lg"
            />
            {/* Subtle decorative accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
