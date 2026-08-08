import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorTable } from "@/components/vendor-table"
import { JsonLdOrganization, JsonLdWebSite } from "@/lib/json-ld"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "The Underwriting Desk: Periodical for Underwriters",
  description:
    "A sponsorship-funded trade publication for working P&C insurance underwriters. News on tooling, hiring, and the AI debate.",
  path: "/",
})

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdOrganization />
      <JsonLdWebSite />
      <Header />
      <main className="container mx-auto flex max-w-[1440px] flex-1 flex-col gap-12 px-4 py-12 lg:flex-row lg:py-20">
        <div className="max-w-[66ch] flex-1">
          <h1 className="mb-6 font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl lg:text-6xl">
            The Desk
          </h1>
          <p className="mb-8 text-xl leading-[1.7] text-muted-foreground md:text-2xl">
            The modern trade periodical for working P&C insurance underwriters.
          </p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-[17px] leading-[1.7]">
              Welcome to {siteConfig.name}. We publish twice-weekly issues on
              underwriting tooling, hiring, market moves and the live argument
              about AI in underwriting. This is explicitly not career-entry
              content — no how-to-become-an-underwriter, no credentialing, no
              exam prep. The reader already has the job.
            </p>
            <p className="text-[17px] leading-[1.7]">
              Underwriting-workflow vendors raised large rounds between 2023 and
              2025 and need a channel reaching practitioners rather than the
              C-suite. We are that channel.
            </p>
          </div>
        </div>
        <aside className="w-full shrink-0 space-y-8 lg:w-[400px]">
          <div className="rounded-lg border bg-muted/20 p-6">
            <h2 className="mb-4 font-heading text-2xl font-semibold text-primary">
              Vendor Landscape
            </h2>
            <VendorTable />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
