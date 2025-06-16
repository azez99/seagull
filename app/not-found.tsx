"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div
        className={`relative z-10 text-center max-w-2xl mx-auto transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-white/5 blur-sm">404</div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Page Not Found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            Looks like this page got lost in the smart home network. Let's get you back on track.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 h-12 group transition-all duration-300 hover:scale-105"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Go Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white h-12 group transition-all duration-300 hover:scale-105"
          >
            <Link href="/services" className="flex items-center gap-2">
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Our Services
            </Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/about"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1 group"
          >
            <Phone className="w-3 h-3 group-hover:scale-110 transition-transform" />
            Contact
          </Link>
          <Link href="/locations" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            Locations
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 bg-blue-400 rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
    </div>
  )
}
