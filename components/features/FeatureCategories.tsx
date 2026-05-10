import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import { MicroIcon } from "@/components/visuals";

export function FeatureCategories() {
  const { culinaryExperience, servicePresentation, logisticsReliability } = featuresContent;

  const categories = [
    { data: culinaryExperience, image: siteImages.liveCounters, icon: "pot" as const, flip: false },
    { data: servicePresentation, image: siteImages.staffUniform, icon: "star" as const, flip: true },
    { data: logisticsReliability, image: siteImages.freshIngredients, icon: "leaf" as const, flip: false },
  ];

  return (
    <div className="flex flex-col">
      {categories.map((category, idx) => (
        <section key={idx} className={`py-24 ${idx % 2 !== 0 ? 'bg-muted/30' : 'bg-background'}`}>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl ${category.flip ? 'lg:order-2' : 'lg:order-1'}`}>
                <Image
                  src={category.image.src}
                  alt={category.data.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className={`${category.flip ? 'lg:order-1' : 'lg:order-2'}`}>
                <h2 className="font-heading text-4xl font-bold mb-10 flex items-center gap-4">
                   <MicroIcon icon={category.icon} size={28} className="bg-primary/10 text-primary" />
                   {category.data.title}
                </h2>
                <div className="space-y-8">
                  {category.data.features.map((feature, fIdx) => (
                    <div key={fIdx} className="border-l-4 border-primary/30 pl-6 hover:border-primary transition-colors">
                      <h3 className="font-heading text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
