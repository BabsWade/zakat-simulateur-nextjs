import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"
import "./globals.css"
import Link from "next/link"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Simulateur de Zakat",
  description: "Calculez votre Zakat facilement",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}

          {/* FOOTER */}
          <footer className="bg-gray-950 text-gray-400 text-sm py-12 px-6 text-center dark:text-gray-300">
            <p className="mb-6 text-gray-500">
              © {new Date().getFullYear()} Simulateur de Zakat — Tous droits réservés
            </p>

            <div className="flex justify-center gap-8 flex-wrap">
              <Link
                href="https://babacarwade.dev"
                target="_blank"
                className="hover:text-white transition"
              >
                Développé par Babacar WADE
              </Link>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}