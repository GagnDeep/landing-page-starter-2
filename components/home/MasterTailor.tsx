import React from "react";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function MasterTailor() {
  const content = homeContent.masterTailor;

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-accent shrink-0 shadow-2xl">
            <Image
              src={SITE_IMAGES.team.masterTailor.src}
              alt={SITE_IMAGES.team.masterTailor.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="text-center md:text-left space-y-6">
            <blockquote className="text-2xl md:text-4xl font-heading italic font-light leading-relaxed">
              "{content.quote}"
            </blockquote>
            <div>
              <p className="text-xl font-bold tracking-widest uppercase text-accent">{content.name}</p>
              <p className="text-sm opacity-80 uppercase tracking-widest mt-1">{content.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
