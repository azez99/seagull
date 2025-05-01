import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Seagull Electronics",
  description:
    "Learn about Seagull Electronics, our team, our history, and our commitment to providing exceptional home automation solutions in Palm Beach County.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
