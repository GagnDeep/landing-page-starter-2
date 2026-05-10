"use client";

import * as React from "react";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AnimatedSVGIllustration } from "@/components/visuals";

const imageMap = [
  siteImages.amritsariKulcha,
  siteImages.dalMakhani,
  siteImages.paneerButterMasala,
];

export function SignatureDishes() {
  const { signatureDishes } = homeContent;

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <AnimatedSVGIllustration className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            {signatureDishes.title}
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {signatureDishes.dishes.map((dish, index) => {
              const image = imageMap[index % imageMap.length];
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-lg rounded-[2rem] bg-card hover:shadow-xl transition-all duration-300 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={image.src}
                          alt={dish.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                          <h3 className="font-heading text-2xl font-bold mb-2 leading-tight">
                            {dish.name}
                          </h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {dish.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="static translate-y-0 w-12 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
