import { siteContent } from "@/content/site-content"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col p-6 lg:p-12">
      <div className="flex max-w-2xl min-w-0 flex-col gap-8 text-sm leading-loose">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            {siteContent.hero.headline}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {siteContent.hero.subheadline}
          </p>
        </header>

        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
