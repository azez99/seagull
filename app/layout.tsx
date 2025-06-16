import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seagull Electronics - Home Automation",
  description: "Home Automation company based in Palm Beach County",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#080808]">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
        <Script
          src="//cdn.callrail.com/companies/862278353/24f748beef9422b0c4f0/12/swap.js"
          strategy="afterInteractive"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TDD57D82JP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TDD57D82JP');
        `}
        </Script>
      </body>
    </html>
  )
}
