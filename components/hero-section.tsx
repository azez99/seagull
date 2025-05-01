"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const containerRef = useRef(null)
  // Hardcoded locations
  const locations = ["Palm Beach Gardens", "Jupiter", "Hobe Sound", "Tequesta", "Palm Beach"]

  useEffect(() => {
    // Create a simple animation cycle using DOM manipulation
    // This avoids the React state issues we were having
    if (!containerRef.current) return

    const container = containerRef.current
    let currentIndex = 0

    // Clear any existing content
    container.innerHTML = ""

    // Create initial location element
    const initialLocation = document.createElement("div")
    initialLocation.className = "location-item active"
    initialLocation.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-[#ffe2b6]">${locations[currentIndex]}</h2>`
    container.appendChild(initialLocation)

    const interval = setInterval(() => {
      // Safety check to ensure container still exists
      if (!containerRef.current) {
        clearInterval(interval)
        return
      }

      // Get next index
      const nextIndex = (currentIndex + 1) % locations.length

      // Remove any previous "next" element
      const oldNext = container.querySelector(".next")
      if (oldNext) container.removeChild(oldNext)

      // Create next location element
      const nextLocation = document.createElement("div")
      nextLocation.className = "location-item next"
      nextLocation.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-[#ffe2b6]">${locations[nextIndex]}</h2>`
      container.appendChild(nextLocation)

      // Start animation
      const current = container.querySelector(".active")
      if (current) {
        current.classList.add("slide-up")
        nextLocation.classList.add("slide-in")

        // After animation completes
        setTimeout(() => {
          // Safety check to ensure container still exists
          if (!containerRef.current) return

          // Remove old active element if it still exists
          if (current && current.parentNode === container) {
            container.removeChild(current)
          }

          // Make next element the active one if it still exists
          if (nextLocation && nextLocation.parentNode === container) {
            nextLocation.classList.remove("next", "slide-in")
            nextLocation.classList.add("active")
          }

          // Update current index
          currentIndex = nextIndex
        }, 600) // Animation duration
      }
    }, 3000) // Total cycle time

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-black/70 z-0"
        style={{
          backgroundImage: "url('/images/SeagullLogoBG.svg')",
          backgroundSize: "60%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlend: "overlay",
          opacity: "0.13",
        }}
      />

      <div className="relative z-10 max-w-4xl px-4 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Luxury Home Automation &<br />
          Audio Visual in
        </h1>

        {/* Location rotator - DOM-based approach */}
        <div ref={containerRef} className="h-12 md:h-16 mb-8 relative overflow-hidden location-container">
          {/* Content will be added by JS */}
        </div>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Transform your living space with cutting-edge technology</p>
        <Link
          href="/contact"
          className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
