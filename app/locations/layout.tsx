import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#1b1814]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
