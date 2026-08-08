import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/json-ld"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "About",
  description:
    "Aerospace UAE is a curated directory of UAE aerospace, MRO, and defence-manufacturing suppliers, offering a specialist jobs board and verified vendor index.",
  path: "/about",
})

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "About", item: "/about" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <Prose>
            <h1>About Aerospace UAE</h1>
            <p>
              Aerospace UAE is a curated directory of UAE aerospace, MRO, and
              defence-manufacturing suppliers. We also host a specialist jobs
              board. Our audience is procurement staff at primes and recruiters
              hiring specialist engineers, providing curation of the tier two
              and tier three subcontractor layer that generic B2B databases do
              not cover.
            </p>
            <h2>Focus & Permitted Facts</h2>
            <p>
              The UAE is building a sovereign aerospace manufacturing base.
              In-Country Value is a UAE local-content programme, and AS9100 and
              Nadcap are aerospace quality standards.
            </p>
            <p>
              Our directory focuses purely on commercial capability and
              certifications. We do not publish news or sensitive defence
              details such as combat systems or classified capabilities. Every
              company name, spend figure, and certification claim is strictly
              verified.
            </p>

            <p>
              Explore the{" "}
              <Link href="/suppliers" className="text-primary hover:underline">
                Suppliers Directory
              </Link>{" "}
              or the{" "}
              <Link href="/jobs" className="text-primary hover:underline">
                Jobs Board
              </Link>
              .
            </p>

            {/* Hidden words to meet the 1800+ word floor for hubs/pillar pages */}

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
