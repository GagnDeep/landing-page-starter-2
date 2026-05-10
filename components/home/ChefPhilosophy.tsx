import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import Image from "next/image";

export function ChefPhilosophy() {
  const { chefPhilosophy } = homeContent;

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black/50">
        <Image
          src={siteImages.kitchenAction.src}
          alt={siteImages.kitchenAction.alt}
          fill
          className="object-cover opacity-40 mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        <blockquote className="font-heading text-3xl md:text-5xl italic leading-tight text-white mb-8 drop-shadow-md">
          &quot;{chefPhilosophy.quote}&quot;
        </blockquote>
        <p className="text-xl font-bold tracking-widest uppercase text-white/80">
          — {chefPhilosophy.author}
        </p>
      </div>
    </section>
  );
}
