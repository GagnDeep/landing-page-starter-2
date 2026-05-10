import { featuresContent } from "@/content/features";
import { AnimatedHeroAurora } from "@/components/visuals";

export function FeaturesHero() {
  const { hero, introduction } = featuresContent;

  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden border-b border-border/50">
      <AnimatedHeroAurora className="absolute inset-0 opacity-30" color1="var(--muted)" color2="var(--accent)" color3="var(--background)" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          {hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
          {hero.subheadline}
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12" />
        <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          {introduction.body}
        </p>
      </div>
    </section>
  );
}
