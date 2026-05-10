import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", montserrat.variable, playfair.variable)}
    >
      <body className="min-h-screen flex flex-col selection:bg-primary/20">
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
