import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function AboutTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-8 relative shadow-xl ring-4 ring-secondary">
            <Image
              src={SITE_IMAGES.teamMember1.url}
              alt="A-One Cakes Founder"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
            "{homeContent.aboutTeaser.heading}"
          </h2>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="/about">{homeContent.aboutTeaser.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
