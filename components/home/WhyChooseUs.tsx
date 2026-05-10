import { homeContent } from "@/content/home";
import { MicroIcon } from "@/components/visuals";

const iconMapping = ["fire", "veg", "chef", "restaurant"] as const;

export function WhyChooseUs() {
  const { whyChooseUs } = homeContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {whyChooseUs.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {whyChooseUs.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-[2rem] bg-muted/20 border border-border/50 hover:bg-muted/40 transition-colors">
              <MicroIcon icon={iconMapping[index % iconMapping.length]} size={32} className="mb-6 bg-primary/10 text-primary p-4" />
              <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
