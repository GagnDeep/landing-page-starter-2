import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import Image from "next/image";

export function HeritageStory() {
  const { storyPart1, timeline, storyPart2 } = aboutContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        {/* Part 1 */}
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl font-bold mb-8 text-foreground">{storyPart1.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed md:leading-loose">
            {storyPart1.body}
          </p>
        </div>

        {/* Timeline Photo & Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src={siteImages.founderStory.src}
              alt="Harbhajan's History"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h3 className="font-heading text-3xl font-bold mb-6 border-b border-primary pb-4 inline-block">{timeline.title}</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
               {timeline.events.map((event, index) => (
                 <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-primary shadow shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-border bg-card shadow-sm">
                      <div className="font-heading font-bold text-primary mb-1">{event.year}</div>
                      <div className="text-muted-foreground text-sm leading-relaxed">{event.description}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-8 text-foreground">{storyPart2.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed md:leading-loose">
            {storyPart2.body}
          </p>
        </div>

      </div>
    </section>
  );
}
