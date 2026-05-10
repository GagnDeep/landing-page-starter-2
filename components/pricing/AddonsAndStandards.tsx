import { pricingContent } from "@/content/pricing";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { MicroIcon } from "@/components/visuals";

export function AddonsAndStandards() {
  const { addons, customMenu, alwaysIncluded } = pricingContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Addons Grid */}
        <div className="mb-24">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">{addons.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {addons.items.map((addon, idx) => (
               <div key={idx} className="bg-muted/20 p-8 rounded-[2rem] border border-border text-center hover:bg-muted/40 transition-colors">
                  <MicroIcon icon={idx === 0 ? "fire" : idx === 1 ? "leaf" : "star"} size={32} className="mb-4 text-primary bg-primary/10" />
                  <h3 className="font-heading text-xl font-bold mb-3">{addon.name}</h3>
                  <p className="text-muted-foreground">{addon.description}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Custom Menu Banner */}
        <div className="relative overflow-hidden rounded-[3rem] shadow-2xl mb-24">
           <div className="absolute inset-0 z-0 bg-black/60">
             <Image src={siteImages.amritsariKulcha.src} alt={siteImages.amritsariKulcha.alt} fill className="object-cover opacity-60 mix-blend-overlay" />
           </div>
           <div className="relative z-10 px-8 py-16 md:p-24 text-center">
             <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">{customMenu.headline}</h2>
             <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">{customMenu.description}</p>
             <button className="bg-white text-foreground hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1">
               {customMenu.cta}
             </button>
           </div>
        </div>

        {/* The Harbhajan Standard */}
        <div>
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">{alwaysIncluded.title}</h2>
          <p className="text-center text-muted-foreground text-lg mb-10">{alwaysIncluded.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             {alwaysIncluded.features.map((feature, idx) => (
               <div key={idx} className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                 <HugeiconsIcon icon={CheckmarkBadge01Icon} size={24} className="text-primary shrink-0" strokeWidth={1.5} />
                 <span className="font-medium text-foreground/90">{feature}</span>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
