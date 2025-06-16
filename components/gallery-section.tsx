"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Define types for our data
type Project = {
  id: number
  title: string
  image: string
  image_url: string
  name: string
  service_ids: number[]
  brand_ids: number[]
}

type Service = {
  id: number
  name: string
  slug: string
  subtitle: string
}

type Brand = {
  id: number
  name: string
  slug: string
  logo_url: string
  subtitle: string
}

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sliderRef = useRef(null)
  const imageRef = useRef(null)

  // State for our data
  const [projects, setProjects] = useState<Project[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)

        // Fetch projects
        const projectsModule = await import("@/lib/projects.json")
        const projectsData = projectsModule.default || []

        // Fetch services
        const servicesModule = await import("@/lib/services.json")
        const servicesData = servicesModule.default || []

        // Fetch brands
        const brandsModule = await import("@/lib/brands.json")
        const brandsData = brandsModule.default || []

        setProjects(projectsData.filter((_, index) => index !== 1))
        setServices(servicesData)
        setBrands(brandsData)
      } catch (err) {
        console.error("Error loading gallery data:", err)
        setError("Failed to load gallery data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Check if mobile on mount and window resize
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

  // useEffect to handle closing the tooltip on desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile) return // Do nothing on mobile

      if (sliderRef.current && showTooltip) {
        const isClickInsideTooltip = event.target.closest(".tooltip-content")
        if (!isClickInsideTooltip && !event.target.closest('button[aria-label="Show details"]')) {
          setShowTooltip(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobile, showTooltip])

  // If loading, show loading state
  if (isLoading) {
    return (
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Gallery</h2>
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-[#ffca77] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  // If error, show error state
  if (error || !projects.length) {
    return (
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Gallery</h2>
          <p className="text-center text-white">{error || "No projects available to display."}</p>
        </div>
      </section>
    )
  }

  const currentProject = projects[currentIndex]

  // Get service names and brand names for the current project
  const projectServices = currentProject.service_ids
    .map((id) => services.find((service) => service.id === id)?.name || "")
    .filter(Boolean)

  const projectBrands = currentProject.brand_ids
    .map((id) => brands.find((brand) => brand.id === id)?.name || "")
    .filter(Boolean)

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      goToNext()
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      goToPrev()
    }
  }

  // Close tooltip when clicking outside on desktop

  return (
    <section id="gallery" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Gallery</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Slider container */}
        <div
          ref={sliderRef}
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image */}
          <div
            ref={imageRef}
            className="relative h-[250px] md:h-[500px] flex justify-center border border-[#ffca77]/30 rounded-lg"
          >
            <Image
              src={currentProject.image_url || "/placeholder.svg?height=500&width=800"}
              alt={currentProject.name || "Project image"}
              width={800}
              height={500}
              className="object-contain max-w-full h-full rounded-t-lg md:rounded-lg"
              priority
            />

            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-lg">{currentProject.name}</p>
            </div>

            {/* Info button (desktop only) */}
            {!isMobile && (
              <button
                onClick={() => setShowTooltip(true)}
                className="absolute top-4 right-4 bg-[#ffca77] rounded-full p-2 hover:bg-[#ffca77]/80 transition-colors z-10"
                aria-label="Show details"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </button>
            )}
          </div>

          {/* Desktop tooltip */}
          {!isMobile && showTooltip && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 rounded-lg z-20">
              <div className="bg-[#1b1814] border border-[#ffca77]/30 rounded-lg p-6 max-w-lg w-full relative tooltip-content">
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="text-white text-xl mb-4">{currentProject.name}</h3>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="text-[#ffca77] mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projectServices.map((service) => (
                      <Link
                        key={service}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                        className="bg-[#262016] text-[#ffe2b6] px-3 py-1 rounded-full text-sm hover:bg-[#362e24] transition-colors"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="text-[#ffca77] mb-2">Brands:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projectBrands.map((brand) => (
                      <Link
                        key={brand}
                        href={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                        className="border border-[#ffca77]/50 text-[#ffe2b6] px-3 py-1 rounded-full text-sm hover:bg-[#ffca77]/10 transition-colors"
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile tooltip (always visible) */}
          {isMobile && (
            <div className="bg-[#1b1814] border border-[#ffca77]/30 border-t-0 rounded-b-lg p-4">
              {/* Services */}
              <div className="mb-4">
                <h4 className="text-[#ffca77] text-sm mb-2">Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {projectServices.map((service) => (
                    <Link
                      key={service}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-[#262016] text-[#ffe2b6] px-2 py-1 rounded-full text-xs hover:bg-[#362e24] transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="text-[#ffca77] text-sm mb-2">Brands:</h4>
                <div className="flex flex-wrap gap-2">
                  {projectBrands.map((brand) => (
                    <Link
                      key={brand}
                      href={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                      className="border border-[#ffca77]/50 text-[#ffe2b6] px-2 py-1 rounded-full text-xs hover:bg-[#ffca77]/10 transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-[125px] md:top-1/2 -translate-y-1/2 bg-[#ffca77] rounded-full p-2 hover:bg-[#ffca77]/80 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-[125px] md:top-1/2 -translate-y-1/2 bg-[#ffca77] rounded-full p-2 hover:bg-[#ffca77]/80 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full mx-1 transition-all ${
                index === currentIndex ? "w-6 bg-[#ffca77]" : "w-2 bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
