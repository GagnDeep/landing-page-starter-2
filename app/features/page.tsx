import Image from "next/image";
import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
  RevealText,
} from "@/components/visuals";
import { Check } from "lucide-react";

export const metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function FeaturesPage() {
  const c = featuresContent;
  const blockImages = [
    images.hero.features,
    images.cuisine.international,
    images.cuisine.liveStation,
    images.hero.home,
  ];

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-24 bg-background">
        {/* 1. Hero */}
        <section className="py-32 flex flex-col items-center justify-center text-center border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <FadeIn direction="up">
              <h1 className="font-heading text-5xl md:text-7xl font-medium mb-6 leading-tight">
                <RevealText text={c.hero.title} />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-heading italic">
                {c.hero.subtitle}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 2. Service Blocks */}
        <section>
          {c.serviceBlocks.map((block, i) => {
            const isLeft = block.imageAlignment === "left";
            return (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
                <div className={`relative h-[50vh] lg:h-auto overflow-hidden ${isLeft ? "order-1" : "order-1 lg:order-2"}`}>
                  <ParallaxImage src={blockImages[i]} alt={block.title} />
                </div>

                <div className={`flex flex-col justify-center p-12 lg:p-24 ${isLeft ? "order-2 bg-background" : "order-2 lg:order-1 bg-secondary/30"}`}>
                  <FadeIn direction={isLeft ? "left" : "right"} className="max-w-xl">
                    <h2 className="font-heading text-4xl lg:text-5xl mb-6 font-medium">
                      {block.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {block.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </section>

        {/* 3. Inclusions */}
        <section className="py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <FadeIn direction="up">
                  <h2 className="font-heading text-4xl lg:text-5xl font-medium mb-6">
                    {c.inclusions.title}
                  </h2>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed">
                    {c.inclusions.description}
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                  {c.inclusions.items.map((item, i) => (
                    <StaggerItem key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-background text-primary rounded-full p-1 flex-shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <p className="text-lg font-medium">{item}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
