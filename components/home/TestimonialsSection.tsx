import { homeContent } from "@/content/home";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const { testimonials } = homeContent;

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.reviews.map((review, index) => (
            <Card key={index} className="bg-card border-none shadow-md hover:shadow-lg transition-shadow rounded-[1.5rem]">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <blockquote className="font-heading text-xl italic leading-relaxed text-foreground/80 mb-8 relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-primary/20">&quot;</span>
                  {review.quote}
                  <span className="absolute -bottom-4 text-4xl text-primary/20">&quot;</span>
                </blockquote>
                <div>
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-sm text-primary font-medium">{review.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
