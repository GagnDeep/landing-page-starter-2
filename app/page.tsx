import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignatureComponent } from "@/components/signature-component"
import { buildMetadata } from "@/lib/site"
import { buildWebSiteLd, buildOrganizationLd } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "The Caterer's Business Toolkit - Practical Resources",
  description:
    "A practical resource for people who already run a catering business — licensing, cottage-food law, pricing, contracts, software and food-safety certification.",
  path: "/",
})

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteLd()),
          }}
        />

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl">
            Practical Resources for Catering Businesses
          </h1>
          <p className="text-xl text-muted-foreground">
            Information on licensing, cottage-food law, pricing, contracts,
            software and food-safety certification for operators running events
            out of a commercial or legal home kitchen.
          </p>
        </div>

        <SignatureComponent />
      </main>
      <Footer />
    </div>
  )
}
