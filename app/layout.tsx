import { Playfair_Display, Lato } from "next/font/google"
import { globalContent } from "@/content/global"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/global/SiteHeader"
import { SiteFooter } from "@/components/global/SiteFooter"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400"],
})

export const metadata = {
  title: {
    template: "%s | YAVA DESIGNS",
    default: "YAVA DESIGNS | Bespoke Ethnic Wear",
  },
  description: globalContent.footer.brandMantra,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", playfair.variable, lato.variable, "font-sans")}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
