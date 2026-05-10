import { aboutContent } from "@/content/about"
import { IMAGES } from "@/lib/images"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { FloatingBlobs } from "@/components/visuals/floating-blobs"
import { DotMatrixGrid } from "@/components/visuals/dot-matrix-grid"
import { HugeiconsIcon } from "@hugeicons/react"
import { GlobalIcon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
}

export default function AboutPage() {
  const {
    aboutHero,
    ourStoryNarrative,
    theTeamGrid,
    coreValuesList,
    globalFootprintMap,
    pressMentions,
    aboutCta,
  } = aboutContent

  return (
    <>
      {/* 1: about-hero */}
      <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden bg-background pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroAbout.src}
            alt={IMAGES.heroAbout.alt}
            fill
            className="object-cover opacity-50 dark:opacity-30 motion-safe:animate-[zoom_20s_linear_infinite_alternate]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground drop-shadow-md">
            {aboutHero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide max-w-2xl mx-auto">
            {aboutHero.subheading}
          </p>
        </div>
      </section>

      {/* 2: our-story-narrative */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <FloatingBlobs className="opacity-30" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground">{ourStoryNarrative.heading}</h2>
            <div className="w-12 h-[1px] bg-primary mx-auto mt-6" />
          </div>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-foreground/90">
             {ourStoryNarrative.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-2xl md:text-3xl font-heading text-foreground" : ""}>
                   {paragraph}
                </p>
             ))}
          </div>
        </div>
      </section>

      {/* 3: the-team-grid */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
           <h2 className="font-heading text-4xl md:text-5xl mb-16 text-center">{theTeamGrid.heading}</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {theTeamGrid.members.map((member, i) => (
                <div key={i} className="group cursor-default">
                   <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                      {/* Only Founder has a real image, use a subtle gradient block for the rest as placeholder structure */}
                      {i === 0 ? (
                         <Image src={IMAGES.founderPortrait.src} alt={IMAGES.founderPortrait.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                      ) : (
                         <div className="absolute inset-0 bg-gradient-to-br from-muted-foreground/10 to-transparent flex items-center justify-center">
                            <span className="font-heading text-6xl text-muted-foreground/20">{member.name.charAt(0)}</span>
                         </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                   </div>
                   <h3 className="font-heading text-2xl mb-1">{member.name}</h3>
                   <p className="text-sm tracking-widest uppercase text-primary mb-2">{member.role}</p>
                   <p className="text-sm text-muted-foreground font-light">{member.expertise}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4: core-values-list */}
      <section className="py-32 px-6 bg-card text-card-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
             <div className="lg:col-span-1">
                <h2 className="font-heading text-4xl md:text-5xl sticky top-32">{coreValuesList.heading}</h2>
             </div>
             <div className="lg:col-span-2 space-y-16">
                {coreValuesList.values.map((value, i) => (
                  <div key={i} className="border-t border-border pt-8 relative">
                     <span className="absolute right-0 top-8 font-mono text-sm text-primary opacity-50">0{i+1}</span>
                     <h3 className="font-heading text-3xl mb-4 pr-12">{value.title}</h3>
                     <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">{value.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5: global-footprint-map & 6: press-mentions */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
         <DotMatrixGrid className="absolute inset-0 opacity-20 pointer-events-none" rows={20} cols={30} spacing={40} />
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-8">
                  <HugeiconsIcon icon={GlobalIcon} className="w-12 h-12 text-primary opacity-50" />
                  <h2 className="font-heading text-4xl md:text-5xl">{globalFootprintMap.heading}</h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">{globalFootprintMap.description}</p>
                  <div className="flex flex-wrap gap-4 pt-4">
                     {globalFootprintMap.locations.map((loc, i) => (
                        <span key={i} className="px-4 py-2 border border-border text-sm tracking-widest uppercase font-medium bg-card/50 backdrop-blur-sm">
                           {loc}
                        </span>
                     ))}
                  </div>
               </div>

               <div className="space-y-8 bg-muted/30 p-8 md:p-12 border-l border-primary/20">
                  <h3 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-8">{pressMentions.heading}</h3>
                  {pressMentions.quotes.map((quote, i) => (
                     <blockquote key={i} className="space-y-4">
                        <p className="font-heading text-2xl leading-tight">&ldquo;{quote.quote}&rdquo;</p>
                        <footer className="text-sm tracking-widest uppercase text-primary">— {quote.publication}</footer>
                     </blockquote>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7: about-cta */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative text-center overflow-hidden">
         <AnimatedGradientMesh opacity={0.2} className="mix-blend-overlay" />
         <div className="container mx-auto max-w-2xl relative z-10">
           <h2 className="font-heading text-4xl md:text-5xl mb-12">{aboutCta.heading}</h2>
           <Button asChild variant="secondary" size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase bg-background text-foreground hover:bg-background/90">
             <Link href={aboutCta.cta.href}>
               {aboutCta.cta.label}
             </Link>
           </Button>
         </div>
      </section>
    </>
  )
}
