import { Playfair_Display, Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Imran Tailor | Master Tailoring & Bespoke Suits in Patiala',
  description: "Experience 20+ years of precision tailoring and bespoke craftsmanship with Imran Tailor in Patiala. Specializing in luxury men's wear and serving a global NRI clientele.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
