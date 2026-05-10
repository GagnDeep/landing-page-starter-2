import { aboutContent } from "@/content/about";
import { MicroIcon } from "@/components/visuals";

const iconMap = ["fire", "veg", "star", "chef"] as const;

export function CoreValues() {
  const { coreValues } = aboutContent;

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {coreValues.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.values.map((value, index) => (
            <div key={index} className="bg-card p-8 rounded-[2rem] shadow-sm border border-border/40 hover:shadow-lg transition-all text-center group">
              <MicroIcon
                icon={iconMap[index % iconMap.length]}
                size={32}
                className="mb-6 bg-primary/10 text-primary p-4 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
              />
              <h3 className="font-heading text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
