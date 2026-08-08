import Link from "next/link"

import { Container, Section } from "@/components/section"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Section className="py-12 md:py-16">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="font-bold">AI and Investing</span>
            <p className="text-sm text-muted-foreground">
              Institutional-grade market intelligence.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
