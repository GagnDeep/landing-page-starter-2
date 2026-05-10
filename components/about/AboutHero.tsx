import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { SectionDivider } from "@/components/visuals";
import Image from "next/image";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="relative w-full h-[60svh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20 bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.kitchenAction.src}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center mt-10">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
          {hero.headline}
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[1%] opacity-100 pointer-events-none">
         <SectionDivider fillColor="var(--background)" />
      </div>
    </section>
  );
}
