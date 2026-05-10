import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import { AnimatedStatCounter } from "@/components/visuals";

export function KitchenSourcing() {
  const { kitchenBehindTheScenes, sourcingPhilosophy, milestones } = aboutContent;

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
             <h2 className="font-heading text-4xl font-bold mb-6">{kitchenBehindTheScenes.title}</h2>
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">{kitchenBehindTheScenes.description}</p>
             <h2 className="font-heading text-3xl font-bold mb-4">{sourcingPhilosophy.title}</h2>
             <p className="text-lg text-muted-foreground leading-relaxed">{sourcingPhilosophy.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="relative aspect-square rounded-[2rem] overflow-hidden">
               <Image src={siteImages.freshIngredients.src} alt={kitchenBehindTheScenes.imagesAlt[0]} fill className="object-cover" />
             </div>
             <div className="relative aspect-square rounded-[2rem] overflow-hidden translate-y-8">
               <Image src={siteImages.kitchenAction.src} alt={kitchenBehindTheScenes.imagesAlt[1]} fill className="object-cover" />
             </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row justify-around items-center gap-8 shadow-xl">
           {milestones.stats.map((stat, i) => (
             <div key={i} className="text-center">
               <div className="text-5xl md:text-6xl font-heading font-bold mb-2">
                 {stat.value.replace(/[^0-9]/g, '') === stat.value ? (
                    <AnimatedStatCounter value={parseInt(stat.value)} />
                 ) : (
                    <span>{stat.value}</span>
                 )}
               </div>
               <div className="text-sm uppercase tracking-widest font-semibold text-white/80">{stat.label}</div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
