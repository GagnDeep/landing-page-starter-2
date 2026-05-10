import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { AnimatedCakeIllustration } from "@/components/visuals/AnimatedCakeIllustration";

export function FeaturedCakes() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <DotMatrixGrid />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="col-span-1 h-full pb-8">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={SITE_IMAGES.heroCake.url}
                    alt="Custom Cake Detail 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="col-span-1 h-full pt-8">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={SITE_IMAGES.bakeryProcess.url}
                    alt="Custom Cake Detail 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start">
            <AnimatedCakeIllustration className="w-24 h-24 mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {homeContent.featuredCakes.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {homeContent.featuredCakes.description}
            </p>
            <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8">
              <Link href="/pricing">{homeContent.featuredCakes.cta}</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
