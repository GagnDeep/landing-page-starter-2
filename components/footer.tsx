import Link from "next/link"

export function Footer() {
  return (
    <footer className="section-padding mt-auto border-t border-border bg-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
        <div className="space-y-4">
          <span className="block font-heading text-lg font-bold">
            Institute of DNA
          </span>
          <p className="text-small">
            We assess policy, not science. Comparing consumer DNA test privacy
            policies and chain of custody.
          </p>
        </div>
        <div className="space-y-4">
          <span className="text-small block font-bold tracking-wider uppercase">
            Hubs
          </span>
          <ul className="space-y-2">
            <li>
              <Link href="/compare" className="text-small hover:text-primary">
                Compare
              </Link>
            </li>
            <li>
              <Link href="/matrix" className="text-small hover:text-primary">
                Custody Matrix
              </Link>
            </li>
            <li>
              <Link
                href="/bankruptcy"
                className="text-small hover:text-primary"
              >
                Bankruptcy Risk
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <span className="text-small block font-bold tracking-wider uppercase">
            Spokes
          </span>
          <ul className="space-y-2">
            <li>
              <Link href="/deletion" className="text-small hover:text-primary">
                Deletion Policy
              </Link>
            </li>
            <li>
              <Link
                href="/police-access"
                className="text-small hover:text-primary"
              >
                Police Access
              </Link>
            </li>
            <li>
              <Link href="/if-sold" className="text-small hover:text-primary">
                If Sold
              </Link>
            </li>
            <li>
              <Link href="/raw-data" className="text-small hover:text-primary">
                Raw Data Export
              </Link>
            </li>
            <li>
              <Link
                href="/providers/23andme"
                className="text-small hover:text-primary"
              >
                23andMe Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <span className="text-small block font-bold tracking-wider uppercase">
            Legal
          </span>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-small hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-picks"
                className="text-small font-bold text-primary hover:text-primary"
              >
                Privacy Picks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
