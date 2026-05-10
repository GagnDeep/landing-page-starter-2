import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const imageMap = [
  siteImages.grandWeddings,
  siteImages.corporateBanquets,
  siteImages.intimateGatherings,
];

export function ServicesOverview() {
  const { servicesOverview } = homeContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {servicesOverview.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesOverview.services.map((service, index) => {
            const image = imageMap[index % imageMap.length];
            return (
              <Card key={index} className="group overflow-hidden border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 rounded-[1.5rem]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
