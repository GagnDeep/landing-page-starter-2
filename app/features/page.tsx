import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowRight01Icon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export const metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function FeaturesPage() {
  const serviceImages = [
    images.services.weddings,
    images.services.corporate,
    images.services.social,
    images.services.bespoke
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-foreground text-background">
        <AnimatedGradientMesh className="absolute inset-0 opacity-10 pointer-events-none" />
        <DotMatrixGrid className="absolute inset-0 opacity-20 pointer-events-none" dotColor="oklch(0.98 0.01 75)" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {featuresContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-background/80 font-light max-w-2xl mx-auto">
            {featuresContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-24 px-6 bg-background relative">
        <FloatingBlobs className="opacity-40" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <p className="text-2xl md:text-3xl font-heading leading-relaxed text-foreground">
            {featuresContent.intro.body}
          </p>
        </div>
      </section>

      <SectionDivider width="200px" />

      {/* 3, 4, 5, 6. Services */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 space-y-32">
          {featuresContent.servicesList.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-32">
                <div className={`flex flex-col items-start ${isEven ? 'order-2 md:order-1 md:ml-auto' : 'order-2'}`}>
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-6">
                     0{idx + 1}
                   </div>
                   <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                     {service.title}
                   </h2>
                   <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                     {service.description}
                   </p>
                   <ul className="space-y-4 mb-10 w-full">
                     {service.features.map((feature, fIdx) => (
                       <li key={fIdx} className="flex items-center gap-3 text-foreground font-medium bg-secondary/20 py-3 px-4 rounded-lg">
                         <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} className="w-5 h-5 text-primary shrink-0" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                   {idx === 0 && (
                      <Link href="/pricing" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                        View Sample Packages
                        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4" />
                      </Link>
                   )}
                </div>
                <div className={isEven ? 'order-1 md:order-2' : 'order-1'}>
                  <AnimatedHeroIllustration
                    imageSrc={serviceImages[idx]}
                    alt={service.title}
                    className="aspect-[4/5] w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. The Tasting Experience */}
      <section className="py-32 px-6 bg-secondary/30 relative border-t border-border">
         <DotMatrixGrid className="absolute inset-0 opacity-30" />
         <div className="container mx-auto max-w-4xl text-center relative z-10">
           <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">{featuresContent.tasting.title}</h2>
           <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
             {featuresContent.tasting.body}
           </p>
           <CTAGlow>
             <Link
               href="/contact"
               className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all inline-block"
             >
               {featuresContent.tasting.cta}
             </Link>
           </CTAGlow>
         </div>
      </section>
    </div>
  );
}
