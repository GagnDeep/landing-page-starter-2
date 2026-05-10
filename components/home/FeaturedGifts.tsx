import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function FeaturedGifts() {
  return (
    <section id="gifts" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {homeContent.featuredGifts.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {homeContent.featuredGifts.description}
            </p>
            <ul className="space-y-4 mb-8">
              {homeContent.featuredGifts.list.map((item, i) => (
                <li key={i} className="flex items-center text-foreground font-medium">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/features#gifts">{homeContent.featuredGifts.cta}</Link>
            </Button>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={SITE_IMAGES.giftHamper.url}
              alt={SITE_IMAGES.giftHamper.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
