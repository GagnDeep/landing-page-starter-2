import { homeContent } from "@/content/home";
import { AnimatedStatCounter, SectionDivider } from "@/components/visuals";

export function GenerousPromise() {
  const { generousPromise } = homeContent;

  return (
    <section className="relative bg-primary text-primary-foreground py-32 overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full -translate-y-[1%] opacity-20 pointer-events-none">
         <SectionDivider fillColor="var(--background)" flipY />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-sm">
          {generousPromise.headline}
        </h2>
        <p className="text-xl md:text-2xl font-medium text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto">
          {generousPromise.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <AnimatedStatCounter value={100} suffix="%" className="text-5xl md:text-6xl text-white drop-shadow-md mb-2" />
            <span className="text-sm uppercase tracking-widest font-semibold text-white/80">Pure Vegetarian</span>
          </div>
          <div className="flex flex-col items-center">
            <AnimatedStatCounter value={500} suffix="+" className="text-5xl md:text-6xl text-white drop-shadow-md mb-2" />
            <span className="text-sm uppercase tracking-widest font-semibold text-white/80">Weddings Catered</span>
          </div>
          <div className="flex flex-col items-center">
            <AnimatedStatCounter value={1} suffix="M+" className="text-5xl md:text-6xl text-white drop-shadow-md mb-2" />
            <span className="text-sm uppercase tracking-widest font-semibold text-white/80">Plates Served</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[1%] opacity-20 pointer-events-none">
         <SectionDivider fillColor="var(--background)" />
      </div>
    </section>
  );
}
