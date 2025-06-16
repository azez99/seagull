import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="min-h-screen bg-[#1b1814]"
      style={{
        backgroundImage: "url('/images/background-pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
