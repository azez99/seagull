"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)

  // Hardcoded services
  const services = [
    { id: "video", name: "Video" },
    { id: "audio", name: "Audio" },
    { id: "theater", name: "Theater" },
    { id: "outdoor", name: "Outdoor" },
    { id: "lighting", name: "Lighting" },
    { id: "shades", name: "Shades" },
    { id: "networking", name: "Networking" },
    { id: "security", name: "Security" },
  ]

  // Hardcoded locations
  const locations = [
    { id: "palm-beach", name: "Palm Beach" },
    { id: "palm-beach-gardens", name: "Palm Beach Gardens" },
    { id: "jupiter", name: "Jupiter" },
    { id: "tequesta", name: "Tequesta" },
    { id: "west-palm-beach", name: "West Palm Beach" },
    { id: "stuart", name: "Stuart" },
    { id: "hobe-sound", name: "Hobe Sound" },
    { id: "north-palm-beach", name: "North Palm Beach" },
    { id: "boca-raton", name: "Boca Raton" },
    { id: "delray-beach", name: "Delray Beach" },
    { id: "boston", name: "Boston" },
    { id: "new-york-city", name: "New York City" },
  ]

  // Create location items for the navbar - UPDATED to use /locations/ instead of /location/
  const locationItems = locations.map((location) => ({
    name: location.name,
    href: `/locations/${location.id}`,
  }))

  // Create service items for the navbar - UPDATED to use /services/ routes instead of anchor links
  const serviceItems = services.map((service) => ({
    name: service.name,
    href: `/services/${service.id}`,
  }))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a")
      if (!target) return

      // Check if this is an anchor link
      if (
        target.href &&
        target.href.includes("#") &&
        !target.href.startsWith("mailto:") &&
        !target.href.startsWith("tel:")
      ) {
        const hrefParts = target.href.split("#")
        if (hrefParts.length < 2) return

        const hash = hrefParts[1]

        // Handle gallery and ratings links (remove service link handling)
        if (hash === "gallery") {
          e.preventDefault()

          // Close mobile menu if open
          if (isOpen) setIsOpen(false)

          // Check if we're already on the home page
          if (window.location.pathname !== "/") {
            // If not on home page, navigate to home with the hash
            window.location.href = `/#${hash}`
            return
          }

          // Update URL with hash
          window.location.hash = hash

          // Scroll to gallery section
          const gallerySection = document.getElementById("gallery")
          if (gallerySection) {
            gallerySection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        } else if (hash === "ratings") {
          e.preventDefault()

          // Close mobile menu if open
          if (isOpen) setIsOpen(false)

          // Check if we're already on the home page
          if (window.location.pathname !== "/") {
            // If not on home page, navigate to home with the hash
            window.location.href = `/#${hash}`
            return
          }

          // Update URL with hash
          window.location.hash = hash

          // Scroll to ratings section
          const ratingsSection = document.getElementById("ratings")
          if (ratingsSection) {
            ratingsSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [isOpen])

  // Check for hash in URL on page load and scroll to that section
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setTimeout(() => {
          // For other anchors (gallery, ratings), scroll to the specific element
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }, 500) // Delay to ensure page is fully loaded
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleMobileServices = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileServicesOpen(!mobileServicesOpen)
  }

  const toggleMobileLocations = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileLocationsOpen(!mobileLocationsOpen)
  }

  return (
    <nav className="w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-auto">
                <Image src="/images/SeagullLogoNew.png" alt="Seagull Electronics" width={160} height={50} priority />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="relative group">
              <button
                className="text-white hover:text-[#ffe2b6] px-3 py-2 text-base font-medium flex items-center gap-1 group"
                aria-expanded="false"
              >
                Services
                <ChevronDown className="h-5 w-5 transition-transform group-hover:rotate-180" />
              </button>

              {/* Services Dropdown with animation */}
              <div
                className="absolute left-0 mt-0 w-80 bg-[#1b1814] border border-[#ffca77] rounded-md shadow-lg z-50 transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left"
                style={{ top: "calc(100% - 1px)" }} // Reduce gap between button and dropdown
              >
                <div className="grid grid-cols-2 gap-2 p-4">
                  {serviceItems.slice(0, 4).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#ffca77] block px-3 py-2 text-base"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {serviceItems.slice(4).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#ffca77] block px-3 py-2 text-base"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="text-white hover:text-[#ffe2b6] px-3 py-2 text-base font-medium flex items-center gap-1 group"
                aria-expanded="false"
              >
                Locations
                <ChevronDown className="h-5 w-5 transition-transform group-hover:rotate-180" />
              </button>

              {/* Locations Dropdown with animation */}
              <div
                className="absolute left-0 mt-0 w-80 bg-[#1b1814] border border-[#ffca77] rounded-md shadow-lg z-50 transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left"
                style={{ top: "calc(100% - 1px)" }}
              >
                <div className="grid grid-cols-2 gap-2 p-4">
                  {locationItems.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#ffca77] block px-3 py-2 text-base"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {locationItems.slice(5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#ffca77] block px-3 py-2 text-base"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/#ratings" className="text-white hover:text-[#ffe2b6] px-3 py-2 text-base font-medium">
              Reviews
            </Link>
            <Link href="/about" className="text-white hover:text-[#ffe2b6] px-3 py-2 text-base font-medium">
              About Us
            </Link>
            <Link href="/#gallery" className="text-white hover:text-[#ffe2b6] px-3 py-2 text-base font-medium">
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-black border border-[#ffca77] bg-[#ffca77] hover:bg-[#ffca77]/80 px-7 py-2.5 rounded-md text-base font-medium transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full bg-[#ffca77] text-black hover:bg-[#ffca77]/80 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1b1814] border-t border-[#ffca77]">
          <button
            onClick={toggleMobileServices}
            className="text-white hover:text-[#ffca77] block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
          >
            <span>Services</span>
            {mobileServicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {/* Mobile Services Dropdown */}
          <div className={`pl-6 space-y-1 mt-1 ${mobileServicesOpen ? "block" : "hidden"}`}>
            {serviceItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#ffca77] block px-3 py-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMobileLocations}
            className="text-white hover:text-[#ffca77] block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
          >
            <span>Locations</span>
            {mobileLocationsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {/* Mobile Locations Dropdown */}
          <div className={`pl-6 space-y-1 mt-1 ${mobileLocationsOpen ? "block" : "hidden"}`}>
            {locationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#ffca77] block px-3 py-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/#ratings"
            className="text-white hover:text-[#ffca77] block px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-[#ffca77] block px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/#gallery"
            className="text-white hover:text-[#ffca77] block px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-black hover:bg-[#ffca77]/80 bg-[#ffca77] block px-3 py-2 text-base font-medium border border-[#ffca77] rounded-md text-center mt-4 mx-3"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  )
}
