import { Playfair_Display, Montserrat, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { GlobalNavigation } from "@/components/layout/GlobalNavigation"
import { GlobalFooter } from "@/components/layout/GlobalFooter"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, montserrat.variable, playfairDisplay.variable, "font-sans")}
    >
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <GlobalNavigation />
          <main className="flex-grow">
            {children}
          </main>
          <GlobalFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
