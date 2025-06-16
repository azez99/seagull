"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const containerRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hardcoded locations
  const locations = ["Palm Beach Gardens", "Jupiter", "Hobe Sound", "Tequesta", "Palm Beach"]

  // Carousel images
  const carouselImages = [
    "/images/hero-carousel/home-audio-1.webp",
    "/images/hero-carousel/media-server.webp",
    "/images/hero-carousel/sony-home-theater.webp",
    "/images/hero-carousel/elan-panel.webp",
    "/images/hero-carousel/home-av-services.jpg",
    "/images/hero-carousel/audio-system.webp",
    "/images/hero-carousel/home-automation.jpg",
    "/images/hero-carousel/jupiter-aerial-1.jpg",
    "/images/hero-carousel/jupiter-aerial-2.jpg",
    "/images/hero-carousel/jupiter-lighthouse.jpg",
  ]

  useEffect(() => {
    // Location text animation
    if (!containerRef.current) return

    const container = containerRef.current
    let currentIndex = 0

    container.innerHTML = ""

    const initialLocation = document.createElement("div")
    initialLocation.className = "location-item active"
    initialLocation.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-[#ffe2b6]">${locations[currentIndex]}</h2>`
    container.appendChild(initialLocation)

    const locationInterval = setInterval(() => {
      if (!containerRef.current) {
        clearInterval(locationInterval)
        return
      }

      const nextIndex = (currentIndex + 1) % locations.length

      const oldNext = container.querySelector(".next")
      if (oldNext) container.removeChild(oldNext)

      const nextLocation = document.createElement("div")
      nextLocation.className = "location-item next"
      nextLocation.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-[#ffe2b6]">${locations[nextIndex]}</h2>`
      container.appendChild(nextLocation)

      const current = container.querySelector(".active")
      if (current) {
        current.classList.add("slide-up")
        nextLocation.classList.add("slide-in")

        setTimeout(() => {
          if (!containerRef.current) return

          if (current && current.parentNode === container) {
            container.removeChild(current)
          }

          if (nextLocation && nextLocation.parentNode === container) {
            nextLocation.classList.remove("next", "slide-in")
            nextLocation.classList.add("active")
          }

          currentIndex = nextIndex
        }, 600)
      }
    }, 3000)

    return () => clearInterval(locationInterval)
  }, [])

  // Image carousel effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(imageInterval)
  }, [carouselImages.length])

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 mx-auto">
        {/* Header text with frosted glass background */}
        <div className="relative mb-8">
          {/* Frosted glass background for header text only */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl" />

          <div className="relative p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Luxury Home Automation &<br />
              Audio Visual in
            </h1>

            {/* Location rotator */}
            <div ref={containerRef} className="h-16 md:h-16 mb-4 relative overflow-hidden location-container">
              {/* Content will be added by JS */}
            </div>
          </div>
        </div>

        {/* Subtext and CTA - outside the frosted glass */}
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg drop-shadow-md">
          Transform your living space with cutting-edge technology
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
        >
          CONTACT US
        </Link>
      </div>

      <style jsx>{`
        .location-container .location-item {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
        }
        
        .location-container .location-item.slide-up {
          transform: translateY(-100%);
          opacity: 0;
        }
        
        .location-container .location-item.next {
          transform: translateY(100%);
          opacity: 0;
        }
        
        .location-container .location-item.slide-in {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
