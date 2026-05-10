import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import Image from "next/image";

export function IntroSection() {
  const { introduction } = homeContent;

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={siteImages.founderStory.src}
                alt={introduction.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              {introduction.title}
            </h2>
            <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              {introduction.body}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
