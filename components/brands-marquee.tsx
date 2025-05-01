"use client"

import Link from "next/link"
import Image from "next/image"
import brands from "@/lib/brands.json"
import { useEffect, useRef, useState } from "react"

export default function BrandsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [animationReady, setAnimationReady] = useState(false)

  // Simple delay to allow images to load before starting animation
  useEffect(() => {
    // Set a timeout to start animation after a delay
    const timer = setTimeout(() => {
      setAnimationReady(true)
    }, 1000) // 1 second delay

    return () => clearTimeout(timer)
  }, [])

  // Set up the slow marquee animation
  useEffect(() => {
    if (!animationReady || !marqueeRef.current) return

    try {
      // Create a style element
      const styleEl = document.createElement("style")

      // Define much slower animation
      styleEl.innerHTML = `
        .brands-marquee-slow {
          animation: marquee-rtl 180s linear infinite !important;
        }
        .brands-marquee-slow:hover {
          animation-play-state: paused !important;
        }
      `

      // Add the style to the document head
      document.head.appendChild(styleEl)

      // Apply the class to the marquee element
      marqueeRef.current.classList.add("brands-marquee-slow")

      // Clean up
      return () => {
        if (styleEl.parentNode) {
          styleEl.parentNode.removeChild(styleEl)
        }
      }
    } catch (error) {
      console.error("Animation setup error:", error)
      // Continue without animation if there's an error
    }
  }, [animationReady])

  return (
    <section className="py-12 overflow-hidden">
      <div
        className="marquee-container relative w-full bg-[#080808]"
        style={{
          boxShadow: "inset 0 0 150px rgba(255, 202, 119, 0.15)",
        }}
      >
        <div
          ref={marqueeRef}
          className="marquee-track-rtl flex gap-8"
          style={{ opacity: animationReady ? 1 : 0.5, transition: "opacity 0.5s ease" }}
        >
          {brands.map((brand, index) => (
            <Link key={brand.id} href={`/brands/${brand.slug}`} className="marquee-item flex-shrink-0">
              <div className="bg-[#1b1814] p-4 rounded-lg border border-[#ffca77]/20 hover:border-[#ffca77] transition-colors">
                <Image
                  src={brand.logo_url || "/placeholder.svg"}
                  alt={brand.name}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority={index < 8} // Prioritize loading for first 8 images
                  loading={index < 8 ? "eager" : "lazy"}
                />
              </div>
            </Link>
          ))}
          {/* Duplicate brands for seamless looping */}
          {brands.map((brand) => (
            <Link key={`dup-${brand.id}`} href={`/brands/${brand.slug}`} className="marquee-item flex-shrink-0">
              <div className="bg-[#1b1814] p-4 rounded-lg border border-[#ffca77]/20 hover:border-[#ffca77] transition-colors">
                <Image
                  src={brand.logo_url || "/placeholder.svg"}
                  alt={brand.name}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
