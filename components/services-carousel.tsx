"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import services from "@/lib/services.json"

export default function ServicesCarousel() {
  const carouselRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      // Scroll one card width to the left
      const cardWidth = carouselRef.current.querySelector(".service-card").offsetWidth
      const gap = 24 // 6 * 4px (gap-6)
      carouselRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      // Scroll one card width to the right
      const cardWidth = carouselRef.current.querySelector(".service-card").offsetWidth
      const gap = 24 // 6 * 4px (gap-6)
      carouselRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Services</h2>

          {/* Navigation Controls */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-[#ffca77] rounded-full p-2 hover:bg-[#ffca77]/80 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#ffca77] rounded-full p-2 hover:bg-[#ffca77]/80 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>

        {/* Unified Carousel for both Mobile and Desktop */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={{
                id: service.slug,
                name: service.name,
                subtitle: service.subtitle,
                description: service.meta_description || "",
                image: service.image_url || "/placeholder.svg?height=600&width=800",
              }}
              width={isMobile ? "w-[80%]" : "w-[calc(33.33%-16px)]"}
              className="service-card"
            />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className="px-8 py-3 border border-[rgba(255,202,119,0.5)] bg-[#262016] text-[#ffe2b6] hover:bg-[#362e24] transition-colors rounded-md font-medium"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}

// Extracted ServiceCard component for reuse
function ServiceCard({ service, width, className = "" }) {
  return (
    <Link href={`/services/${service.id}`} className={`block group flex-shrink-0 ${width} snap-start ${className}`}>
      <div className="relative">
        <h3 className="text-white font-medium mb-2">{service.name}</h3>
        <div className="relative h-[200px] overflow-hidden rounded-lg">
          <div className="absolute top-2 right-2 z-10 bg-[#ffca77] rounded-full p-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4 text-black" />
          </div>
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  )
}
