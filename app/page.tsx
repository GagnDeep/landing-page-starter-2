import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SupplierDirectory } from "@/components/supplier-directory"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/json-ld"

export default function Home() {
  const orgSchema = getOrganizationSchema()
  const webSiteSchema = getWebSiteSchema()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h1 className="mb-4 font-heading text-4xl font-bold tracking-wider uppercase">
              Aerospace UAE
            </h1>
            <p className="text-lg leading-loose text-muted-foreground">
              A curated directory of UAE aerospace, MRO and
              defence-manufacturing suppliers plus a specialist jobs board.
              Designed for procurement staff at primes and recruiters hiring
              specialist engineers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-6 font-heading text-2xl font-semibold tracking-wider uppercase">
              Supplier Index
            </h2>
            <SupplierDirectory />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </div>
  )
}
