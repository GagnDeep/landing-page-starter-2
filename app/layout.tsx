import { Playfair_Display, Montserrat, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";

const playfair = Playfair_Display({subsets:['latin'],variable:'--font-heading'})
const montserrat = Montserrat({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
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
      className={cn("antialiased", fontMono.variable, "font-sans", playfair.variable, montserrat.variable)}
    >
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col mt-[88px] relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
