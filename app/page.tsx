import { siteContent } from "@/content/site-content"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <section className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-center px-4 py-24 text-center md:py-32">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {siteContent.hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {siteContent.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="#guide">
              {siteContent.hero.ctaPrimary}
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base"
          >
            <Link href="#features">{siteContent.hero.ctaSecondary}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
