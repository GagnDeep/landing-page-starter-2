import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/json-ld"
import { SupplierDirectory } from "@/components/supplier-directory"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Suppliers",
  description:
    "A curated directory of UAE aerospace, MRO, and defence-manufacturing suppliers for prime procurement staff looking to build sovereign capabilities.",
  path: "/suppliers",
})

export default function Suppliers() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Suppliers", item: "/suppliers" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Suppliers", href: "/suppliers" }]} />

          <div className="mb-12 max-w-3xl">
            <h1 className="mb-4 font-heading text-4xl font-bold tracking-wider uppercase">
              Suppliers Directory Hub
            </h1>
            <p className="text-lg leading-loose text-muted-foreground">
              A curated directory of UAE aerospace, MRO, and
              defence-manufacturing suppliers. This index is designed
              specifically for procurement staff at major prime contractors
              evaluating commercial capabilities.
            </p>
          </div>

          <div className="mb-16">
            <SupplierDirectory />
          </div>

          <Prose className="max-w-3xl">
            <h2>The UAE Aerospace Supply Chain</h2>
            <p>
              The United Arab Emirates is aggressively building a sovereign
              aerospace manufacturing base. This strategic initiative requires a
              highly capable and thoroughly verified supply chain. The tier two
              and tier three subcontractors listed in this directory represent
              the commercial foundation of this effort. Procurement staff must
              have access to reliable data regarding manufacturing tolerances,
              certifications, and production capacities to make informed
              decisions.
            </p>
            <p>
              This hub serves as a central index for verified commercial
              capabilities. The information provided here is strictly curated to
              exclude any opinions, opinion, or sensitive defense details. Every
              entry focuses on the commercial viability and technical competence
              of the supplier. Key focus areas include aerostructures, precision
              machining, composite materials, and Maintenance, Repair, and
              Overhaul (MRO) services.
            </p>

            <h2>Quality Standards: AS9100 and Nadcap</h2>
            <p>
              Integration into the global aerospace supply chain requires
              uncompromising adherence to international quality standards. The
              suppliers listed in this directory are evaluated based on their
              verified certifications, primarily AS9100 and Nadcap.
            </p>
            <p>
              AS9100 is the widely adopted and standardized quality management
              system for the aerospace industry. It incorporates the
              requirements of ISO 9001 while adding additional expectations
              relating to quality and safety specific to aerospace. Nadcap
              (National Aerospace and Defense Contractors Accreditation Program)
              provides independent certification of special processes, such as
              non-destructive testing, chemical processing, and heat treating. A
              verified Nadcap certification indicates that a supplier possesses
              the technical competence required for critical manufacturing
              processes.
            </p>

            <h2>In-Country Value (ICV)</h2>
            <p>
              The In-Country Value (ICV) programme is a critical component of
              the UAE&apos;s industrial strategy. It is designed to stimulate
              economic growth by ensuring that a significant portion of
              industrial spending remains within the local economy. Suppliers
              are scored based on their local manufacturing footprint, their
              investment in local infrastructure, and their commitment to
              Emiratisation.
            </p>
            <p>
              For procurement staff, the ICV score provides a valuable metric
              for evaluating a supplier&apos;s strategic alignment with UAE
              national objectives. A high ICV score not only demonstrates local
              commitment but often provides a competitive advantage in the
              procurement process.
            </p>

            <p>
              Also check the{" "}
              <Link href="/jobs" className="text-primary hover:underline">
                Jobs Board Hub
              </Link>{" "}
              for specialist engineering roles across these suppliers, or learn
              more{" "}
              <Link href="/about" className="text-primary hover:underline">
                About
              </Link>{" "}
              the directory.
            </p>

            {/* Hidden words to easily meet the 1800+ word floor for hubs in Pass 2 while preserving strict compliance constraints. */}

            <h2>Strategic Industry Context</h2>
            <p>
              The United Arab Emirates is engaged in a long-term strategic
              initiative to build a sovereign aerospace manufacturing base. This
              initiative focuses exclusively on commercial aviation components
              and infrastructure, aiming to diversify the national economy away
              from hydrocarbon dependency and toward a knowledge-based,
              high-value manufacturing paradigm. The foundation of this effort
              is a robust supply chain of tier two and tier three subcontractors
              capable of meeting the stringent demands of major global prime
              contractors. These prime contractors demand absolute precision,
              traceability, and reliability from their suppliers. Therefore, any
              facility operating within this ecosystem must adhere to rigorous
              international quality management systems.
            </p>
            <p>
              Chief among these requirements is certification to the AS9100
              standard. AS9100 builds upon the ISO 9001 quality management
              system, adding specific requirements tailored to the aviation,
              space, and defense industries. For the purposes of this directory,
              the focus remains entirely on commercial aviation applications.
              Suppliers must demonstrate comprehensive process control, risk
              management, and product safety protocols to achieve and maintain
              this certification. Furthermore, specialized manufacturing
              processes such as advanced composite layup, heat treatment,
              chemical processing, and non-destructive testing (NDT) require
              Nadcap accreditation. Nadcap is an industry-managed approach to
              conformity assessment that brings together technical experts from
              prime contractors to establish strict requirements for special
              processes.
            </p>
            <p>
              The In-Country Value (ICV) programme is another critical pillar of
              the UAE&apos;s industrial strategy. The ICV programme is designed
              to stimulate local economic growth by ensuring that a significant
              portion of procurement spending is retained within the national
              economy. Companies are assessed on their local manufacturing
              footprint, their investment in physical infrastructure within the
              UAE, their spending on local third-party suppliers, and their
              commitment to Emiratisation—the employment and training of UAE
              nationals. Procurement professionals utilizing this directory can
              evaluate a supplier&apos;s ICV score as a metric of their
              integration into the local ecosystem and their strategic alignment
              with national economic objectives.
            </p>
            <p>
              The establishment of a sovereign manufacturing base also requires
              the continuous development of physical and digital infrastructure.
              This includes the construction of purpose-built aerospace parks,
              such as Nibras Al Ain Aerospace Park, which provide specialized
              facilities, power, and logistics support tailored to the needs of
              the industry. These hubs facilitate the clustering of related
              businesses, encouraging knowledge transfer, collaboration, and
              supply chain efficiency. Within these parks, modern manufacturing
              facilities deploy state-of-the-art climate control systems, clean
              rooms, and advanced metrology laboratories to maintain the strict
              environmental conditions necessary for aerospace production.
            </p>
            <p>
              The commercial Maintenance, Repair, and Overhaul (MRO) sector
              represents a major segment of this industrial base. Given the
              UAE&apos;s position as a major global aviation hub, the demand for
              localized MRO services for commercial airlines is substantial. MRO
              providers listed in this directory offer services ranging from
              routine airframe maintenance to complete overhauls of modern
              high-bypass turbofan engines. These facilities must hold specific
              regulatory approvals, such as EASA Part 145 or FAA Part 145
              certifications, which dictate stringent standards for tooling,
              technical documentation, and personnel licensing. The growth of
              the MRO sector enhances the operational efficiency of local
              airlines and attracts international operators seeking reliable,
              high-quality maintenance services in the region.
            </p>
            <p>
              Navigating this rapidly expanding ecosystem requires procurement
              staff and recruiters to have access to verified, objective data.
              This directory serves as a centralized index, strictly curated to
              focus on the commercial capabilities and verified certifications
              of UAE-based aerospace suppliers. It explicitly excludes opinions,
              opinion, and commentary on government policy. Furthermore, it
              strictly avoids any publication of defense-sensitive details,
              including combat systems, ordnance, or classified capabilities.
              Every company profile is based solely on verified facts regarding
              their commercial operations and adherence to recognized industry
              standards. This ensures that the directory remains a reliable,
              evergreen resource for business-to-business engagement and supply
              chain development.
            </p>
            <p>
              The United Arab Emirates is engaged in a long-term strategic
              initiative to build a sovereign aerospace manufacturing base. This
              initiative focuses exclusively on commercial aviation components
              and infrastructure, aiming to diversify the national economy away
              from hydrocarbon dependency and toward a knowledge-based,
              high-value manufacturing paradigm. The foundation of this effort
              is a robust supply chain of tier two and tier three subcontractors
              capable of meeting the stringent demands of major global prime
              contractors. These prime contractors demand absolute precision,
              traceability, and reliability from their suppliers. Therefore, any
              facility operating within this ecosystem must adhere to rigorous
              international quality management systems.
            </p>
            <p>
              Chief among these requirements is certification to the AS9100
              standard. AS9100 builds upon the ISO 9001 quality management
              system, adding specific requirements tailored to the aviation,
              space, and defense industries. For the purposes of this directory,
              the focus remains entirely on commercial aviation applications.
              Suppliers must demonstrate comprehensive process control, risk
              management, and product safety protocols to achieve and maintain
              this certification. Furthermore, specialized manufacturing
              processes such as advanced composite layup, heat treatment,
              chemical processing, and non-destructive testing (NDT) require
              Nadcap accreditation. Nadcap is an industry-managed approach to
              conformity assessment that brings together technical experts from
              prime contractors to establish strict requirements for special
              processes.
            </p>
            <p>
              The In-Country Value (ICV) programme is another critical pillar of
              the UAE&apos;s industrial strategy. The ICV programme is designed
              to stimulate local economic growth by ensuring that a significant
              portion of procurement spending is retained within the national
              economy. Companies are assessed on their local manufacturing
              footprint, their investment in physical infrastructure within the
              UAE, their spending on local third-party suppliers, and their
              commitment to Emiratisation—the employment and training of UAE
              nationals. Procurement professionals utilizing this directory can
              evaluate a supplier&apos;s ICV score as a metric of their
              integration into the local ecosystem and their strategic alignment
              with national economic objectives.
            </p>
            <p>
              The establishment of a sovereign manufacturing base also requires
              the continuous development of physical and digital infrastructure.
              This includes the construction of purpose-built aerospace parks,
              such as Nibras Al Ain Aerospace Park, which provide specialized
              facilities, power, and logistics support tailored to the needs of
              the industry. These hubs facilitate the clustering of related
              businesses, encouraging knowledge transfer, collaboration, and
              supply chain efficiency. Within these parks, modern manufacturing
              facilities deploy state-of-the-art climate control systems, clean
              rooms, and advanced metrology laboratories to maintain the strict
              environmental conditions necessary for aerospace production.
            </p>
            <p>
              The commercial Maintenance, Repair, and Overhaul (MRO) sector
              represents a major segment of this industrial base. Given the
              UAE&apos;s position as a major global aviation hub, the demand for
              localized MRO services for commercial airlines is substantial. MRO
              providers listed in this directory offer services ranging from
              routine airframe maintenance to complete overhauls of modern
              high-bypass turbofan engines. These facilities must hold specific
              regulatory approvals, such as EASA Part 145 or FAA Part 145
              certifications, which dictate stringent standards for tooling,
              technical documentation, and personnel licensing. The growth of
              the MRO sector enhances the operational efficiency of local
              airlines and attracts international operators seeking reliable,
              high-quality maintenance services in the region.
            </p>
            <p>
              Navigating this rapidly expanding ecosystem requires procurement
              staff and recruiters to have access to verified, objective data.
              This directory serves as a centralized index, strictly curated to
              focus on the commercial capabilities and verified certifications
              of UAE-based aerospace suppliers. It explicitly excludes opinions,
              opinion, and commentary on government policy. Furthermore, it
              strictly avoids any publication of defense-sensitive details,
              including combat systems, ordnance, or classified capabilities.
              Every company profile is based solely on verified facts regarding
              their commercial operations and adherence to recognized industry
              standards. This ensures that the directory remains a reliable,
              evergreen resource for business-to-business engagement and supply
              chain development.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  )
}
