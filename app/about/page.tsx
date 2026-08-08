import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "About",
  description: "About the Washington DC Review.",
})

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12 md:px-6">
        <Breadcrumbs items={[{ label: "About" }]} />
        <Prose className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold">About Us</h1>
          <p className="lead mt-4 mb-8 text-xl text-muted-foreground">
            We are an independent guide to federal contracting for small
            businesses.
          </p>
          <p>
            The reader is a small-business owner who has been told they should
            sell to the government, cannot work out where to start, and is being
            circled by consultants. We aim to write plainly, sequence
            everything, and never gate the actual answer.
          </p>
          <h2>Our Mission</h2>
          <p>
            A reference hub that walks small businesses through winning federal
            contracts: SAM.gov registration, set-aside certifications, GSA
            Schedule entry — a job the SBA and GSA do badly and that paid GovCon
            consultants only do as a funnel into their own services.
          </p>
        </Prose>
      </main>
      <Footer />
    </div>
  )
}
