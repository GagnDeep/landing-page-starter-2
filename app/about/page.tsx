import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbLd } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "About | The Caterer's Business Toolkit",
  description:
    "Learn more about The Caterer's Business Toolkit, a practical resource for people who already run a catering business.",
  path: "/about/",
})

export default function About() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildBreadcrumbLd([{ name: "About", url: "/about/" }])
            ),
          }}
        />

        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "About", url: "/about/" }]} />

          <Prose>
            <h1>About The Caterer&apos;s Business Toolkit</h1>
            <p>
              This is a practical resource for people who already run a catering
              business. We provide information on licensing, cottage-food law,
              pricing, contracts, software and food-safety certification.
            </p>
            <p>
              Our reader is an operator running events out of a commercial or
              legal home kitchen who needs to know whether their state permits
              what they are doing, what to charge per head, and what to put in a
              contract so a cancelled wedding does not bankrupt them.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
