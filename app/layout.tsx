import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Header } from "@/components/global/Header"
import { Footer } from "@/components/global/Footer"

const headingFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
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
      className={cn("antialiased", headingFont.variable, bodyFont.variable)}
    >
      <body className="flex min-h-screen flex-col selection:bg-primary/30">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
