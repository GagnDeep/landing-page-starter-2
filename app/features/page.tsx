import { featuresContent } from "@/content/features";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import { AnimatedNeedleThread } from "@/components/visuals/AnimatedNeedleThread";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export const metadata = featuresContent.meta;

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden py-24 bg-secondary">
        <DotMatrixGrid className="opacity-10" />
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
           <Image src={IMAGES.fabricSwatches} alt="Fabrics" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl text-secondary-foreground">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">{featuresContent.hero.title}</h1>
          <p className="text-xl opacity-80 font-serif">{featuresContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {featuresContent.services.map((service, idx) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-heading text-primary">{service.title}</h2>
                <h3 className="text-xl font-serif text-foreground">{service.subtitle}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="space-y-3 pt-4">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-lg ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <Image
                  src={
                    service.id === 'bespoke' ? IMAGES.serviceBespoke :
                    service.id === 'mtm' ? IMAGES.serviceMtm :
                    service.id === 'alterations' ? IMAGES.serviceAlterations :
                    IMAGES.serviceNri
                  }
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <AnimatedNeedleThread className="mb-6 h-12" />
            <h2 className="text-3xl font-heading">{featuresContent.comparisonTable.heading}</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {featuresContent.comparisonTable.columns.map((col, idx) => (
                    <th key={idx} className="pb-6 border-b-2 border-border font-heading text-lg text-primary p-4">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {featuresContent.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.bespoke}</td>
                    <td className="p-4 text-muted-foreground">{row.mtm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
