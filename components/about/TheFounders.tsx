import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { FadeUpStagger } from "@/components/visuals";

export function TheFounders() {
  const { headline, profiles } = aboutContent.theFounders;
  const images = [siteImages.about.founder1, siteImages.about.founder2];

  return (
    <section className="py-grand bg-background px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl text-center mb-16">{headline}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {profiles.map((profile, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-full relative aspect-[3/4] mb-8 overflow-hidden rounded-t-full">
                  <Image
                    src={images[idx].url}
                    alt={images[idx].alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="font-heading text-3xl mb-2">{profile.name}</h3>
                <span className="font-sans text-sm text-primary tracking-widest uppercase mb-6">{profile.title}</span>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-sm">
                  {profile.bio}
                </p>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
