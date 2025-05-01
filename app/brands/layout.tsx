import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brands | Seagull Electronics",
  description: "Discover the premium brands we partner with for home automation and audio-visual solutions.",
}

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
