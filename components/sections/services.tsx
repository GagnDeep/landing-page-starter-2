import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { content } from "@/content"
import { images } from "@/lib/images"

export function Services() {
  return (
    <section id="services" className="w-full py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            {content.services.heading}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {content.services.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.services.items.map((service) => (
            <Card key={service.id} className="overflow-hidden border-border/50 bg-background transition-colors hover:border-border">
              <div className="relative h-64 w-full">
                <Image
                  src={images[service.imageSlot]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
