import { Geist_Mono, Fraunces, DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/global/site-header";
import { SiteFooter } from "@/components/global/site-footer";

const dmSans = DM_Sans({
  subsets:['latin'],
  variable:'--font-sans',
  weight: ["300", "400", "500", "700"]
});

const fraunces = Fraunces({
  subsets:['latin'],
  variable:'--font-heading',
  axes: ["SOFT", "WONK"]
});

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
      className={cn("antialiased", fontMono.variable, dmSans.variable, fraunces.variable, "font-sans")}
    >
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
