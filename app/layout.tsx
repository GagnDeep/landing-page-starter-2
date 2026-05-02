import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// High-contrast serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

// Clean humanist sans for body
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Sardaar G. Tailors | Premier Bespoke Tailoring in Patiala",
  description: "Experience the art of bespoke craftsmanship. Sardaar G. Tailors specializes in designer sherwanis, Muktsari kurta-pajamas, and precision menswear in Patiala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", playfair.variable, lato.variable)}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <Header />
          {/* Main content area needs to push footer down and start below the fixed header */}
          <main className="flex-1 pt-20 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
