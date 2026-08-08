import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { landingPageContent } from "@/content"
import { images } from "@/lib/images"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative grid min-h-[calc(100vh-4rem)] items-center lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-6 py-12 lg:px-12 xl:px-24">
            <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {landingPageContent.hero.headline}
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              {landingPageContent.hero.subheadline}
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-base">
                {landingPageContent.hero.primaryCTA}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base"
              >
                {landingPageContent.hero.secondaryCTA}
              </Button>
            </div>
          </div>
          <div className="relative hidden h-full w-full bg-muted lg:block">
            <Image
              src={images.hero}
              alt="Aerospace manufacturing environment"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>
        </section>

        <section className="bg-muted py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {landingPageContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-lg bg-background p-6 shadow-sm"
                >
                  <h3 className="font-heading text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>{landingPageContent.footer.copyright}</p>
      </footer>
    </div>
  )
}
