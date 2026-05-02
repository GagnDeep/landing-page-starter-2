import { careersContent } from "@/content/careers";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import { AnimatedNeedleThread } from "@/components/visuals/AnimatedNeedleThread";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export const metadata = careersContent.meta;

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.tailorsWorking} alt="Tailors Working" fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl pt-24">
          <AnimatedNeedleThread className="mb-8 h-16" />
          <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6">{careersContent.hero.title}</h1>
          <p className="text-xl text-muted-foreground font-serif">{careersContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-card border-y border-border text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-heading mb-8">{careersContent.culture.heading}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-serif">
            {careersContent.culture.text}
          </p>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-heading mb-12 text-center">{careersContent.openings.heading}</h2>

          <div className="space-y-8">
            {careersContent.openings.roles.length > 0 ? (
               careersContent.openings.roles.map((role, idx) => (
                  <div key={idx} className="border border-border p-8 rounded-lg hover:border-primary/50 transition-colors bg-background flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                     <div className="space-y-3 max-w-xl">
                        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-primary">
                           <span>{role.type}</span>
                           <span className="w-1 h-1 rounded-full bg-border"></span>
                           <span className="text-muted-foreground">{role.location}</span>
                        </div>
                        <h3 className="text-2xl font-heading">{role.title}</h3>
                        <p className="text-muted-foreground">{role.description}</p>
                     </div>
                     <a href="mailto:careers@imrantailor.com" className="px-6 py-3 border border-border rounded text-sm font-medium hover:bg-secondary/10 transition-colors shrink-0">
                        Apply Now
                     </a>
                  </div>
               ))
            ) : (
               <p className="text-center text-muted-foreground">{careersContent.openings.noOpeningsMessage}</p>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Application Process */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
           <h2 className="text-2xl font-heading mb-12">{careersContent.applicationProcess.heading}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {careersContent.applicationProcess.steps.map((step, idx) => (
                 <div key={idx} className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-mono flex items-center justify-center font-bold">
                       {idx + 1}
                    </div>
                    <p className="text-muted-foreground text-sm">{step}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
