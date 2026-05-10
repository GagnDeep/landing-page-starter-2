import Image from "next/image";
import type { Metadata } from "next";
import { featuresContent } from "@/content/features";
import { SITE_IMAGES } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import { PaintBoardIcon, StarIcon, Leaf02Icon, DeliveryBox01Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: featuresContent.metadata.title,
  description: featuresContent.metadata.description,
};

export default function FeaturesPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <DotMatrixGrid dotSize={2} spacing={32} className="opacity-50" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-sm max-w-4xl mx-auto">
            {featuresContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {featuresContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Grid of features */}
      <section className="py-24 bg-card relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-24">

            {/* 2. Themed Design Capabilities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                  <HugeiconsIcon icon={PaintBoardIcon} className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {featuresContent.themedDesigns.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuresContent.themedDesigns.description}
                </p>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-border">
                <Image src={SITE_IMAGES.gallery.superhero} alt="Themed Design Capabilities" fill className="object-cover" />
              </div>
            </div>

            {/* 3. Premium Ingredients */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-border">
                <Image src={SITE_IMAGES.flavors.chocolate} alt="Premium Ingredients" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-2">
                  <HugeiconsIcon icon={StarIcon} className="w-8 h-8 fill-accent text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {featuresContent.premiumIngredients.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuresContent.premiumIngredients.description}
                </p>
              </div>
            </div>

            {/* 4. Dietary Accommodations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary-foreground mb-2">
                  <HugeiconsIcon icon={Leaf02Icon} className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {featuresContent.dietaryAccommodations.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuresContent.dietaryAccommodations.description}
                </p>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-border">
                <Image src={SITE_IMAGES.flavors.vanilla} alt="Dietary Accommodations" fill className="object-cover" />
              </div>
            </div>

            {/* 5. Delivery & Care */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-border bg-muted flex items-center justify-center">
                 <HugeiconsIcon icon={DeliveryBox01Icon} className="w-32 h-32 text-muted-foreground/30" />
                 {/* Optional: Add a real delivery image if added to lib/images.ts later */}
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                  <HugeiconsIcon icon={DeliveryBox01Icon} className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {featuresContent.deliveryCare.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuresContent.deliveryCare.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
