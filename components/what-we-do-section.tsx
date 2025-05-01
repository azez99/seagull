"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getServices } from "@/lib/data"

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState("video")
  const [isMobile, setIsMobile] = useState(false)
  const [servicesData, setServicesData] = useState<any[]>([])

  // Fetch services data
  useEffect(() => {
    async function loadServicesData() {
      const data = await getServices()
      setServicesData(data)
    }
    loadServicesData()
  }, [])

  // Hardcoded services with detailed content
  const services = [
    {
      id: "video",
      name: "Video",
      subtitle: "Crystal-Clear Video, Seamlessly Integrated.",
      description:
        "We design and install high-performance video solutions that bring stunning clarity and seamless functionality to your home. Whether it's a dedicated home theater, multi-room video distribution, or a custom outdoor entertainment setup, we use cutting-edge technology to ensure flawless visuals in every space. From 4K and 8K displays to expertly calibrated projectors, our team delivers an immersive viewing experience tailored to your lifestyle.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "audio",
      name: "Audio",
      subtitle: "Precision-Tuned Sound for Every Space.",
      description:
        "Seagull Electronics brings rich, immersive sound to every corner of your home with expertly designed audio solutions. Whether you're looking for a high-fidelity listening room, whole-home audio, or a powerful surround sound system, we integrate the best technology to deliver crystal-clear performance. Using premium brands and precise calibration, we create soundscapes that enhance every moment—whether it's music, movies, or entertaining guests.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "theater",
      name: "Theater",
      subtitle: "Custom Home Theaters Designed for Ultimate Entertainment.",
      description:
        "We bring the magic of the cinema into your home with custom-designed theaters tailored to your space and style. From stunning 4K projection and immersive surround sound to perfectly calibrated lighting and seamless control, every element is designed to deliver a true cinematic experience. Whether you're watching the latest blockbuster, hosting movie nights, or gaming in luxury, our home theaters combine cutting-edge technology with comfort and elegance.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "outdoor",
      name: "Outdoor",
      subtitle: "Seamless Technology, Elevated Outdoor Living.",
      description:
        "Seagull Electronics extends the luxury of indoor technology to your outdoor spaces. From immersive audio and high-definition video to custom theaters, lighting, networking, motorized shades, and security, we design systems built to perform in any environment. Whether you're hosting, relaxing, or enhancing your home's security, our outdoor solutions bring convenience, entertainment, and peace of mind beyond your walls.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "lighting",
      name: "Lighting",
      subtitle: "Perfect Lighting, Effortless Control.",
      description:
        "We design intelligent lighting solutions that enhance your home's beauty, functionality, and security. Whether it's automated indoor lighting, architectural accents, or outdoor landscape illumination, our systems offer seamless control at your fingertips. With customizable scenes, energy-efficient designs, and integration with top brands, we create lighting experiences that adapt to your lifestyle.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "shades",
      name: "Shades",
      subtitle: "Smart Shades for Comfort, Privacy, and Efficiency.",
      description:
        "We offer custom motorized shades that blend luxury, convenience, and energy efficiency. With the touch of a button or automated scheduling, you can control natural light, enhance privacy, and improve energy savings. Integrated seamlessly with your smart home system, our shading solutions provide comfort and elegance for any space, indoors or out.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "networking",
      name: "Networking",
      subtitle: "Reliable Connectivity for Every Corner of Your Home.",
      description:
        "Our robust home networking solutions ensure fast, secure, and seamless connectivity throughout your entire property. From high-speed Wi-Fi to advanced wired networks, we create systems that support streaming, smart automation, security, and more—without interruption. Whether indoors or outdoors, our expertly installed networks keep you and your home connected with top-tier performance and reliability.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "security",
      name: "Security",
      subtitle: "Smart Security, Total Peace of Mind.",
      description:
        "We provide advanced security solutions to protect your home and family with cutting-edge technology. From surveillance cameras and smart locks to integrated alarm systems and remote monitoring, we design systems that offer seamless protection and control. Whether at home or away, you'll have the confidence of knowing your property is secure at all times.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const activeService = services.find((service) => service.id === activeTab)

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Set initial state
      setIsMobile(window.innerWidth < 768)

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      window.addEventListener("resize", handleResize)

      // Check for hash in URL and set active tab accordingly
      const hash = window.location.hash.replace("#", "")
      if (hash && services.some((service) => service.id === hash)) {
        setActiveTab(hash)
      }

      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [services])

  // Listen for hash changes and check URL hash on component mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && services.some((service) => service.id === hash)) {
        setActiveTab(hash)

        // Scroll to the services section with a slight delay to ensure the tab has changed
        setTimeout(() => {
          const servicesSection = document.getElementById("services")
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }

    // Check hash on mount
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash && services.some((service) => service.id === hash)) {
        setActiveTab(hash)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [services])

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">What We Do</h2>

        {/* Single Card with 8 Tabs */}
        <div className="bg-[#1b1814] border border-[#ffca77] rounded-lg overflow-hidden">
          {/* Tabs - Responsive Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 border-b border-[#ffca77]/30">
            {services.map((service, index) => (
              <button
                key={service.id}
                id={`tab-${service.id}`}
                aria-controls={service.id}
                aria-selected={activeTab === service.id}
                onClick={() => {
                  setActiveTab(service.id)
                  // Update URL hash without scrolling
                  window.history.pushState(null, "", `#${service.id}`)
                }}
                className={cn(
                  "py-3 px-2 text-sm font-medium transition-colors relative",
                  // Add right border to all except the last in each row on mobile, or the last tab on desktop
                  index % 4 !== 3 || (index < 7 && !isMobile) ? "border-r border-[#ffca77]/20" : "",
                  // Add bottom border to all tabs on mobile except the last row
                  index < 4 && isMobile ? "border-b border-[#ffca77]/20" : "",
                  // Add top border to all tabs in the second row on mobile
                  index >= 4 && isMobile ? "border-t border-[#ffca77]/20" : "",
                  activeTab === service.id
                    ? "bg-[#ffca77] text-black"
                    : "text-white hover:text-[#ffe2b6] hover:bg-[#ffca77]/10",
                )}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <Image
                  src={
                    servicesData.find((service) => service.slug === activeTab)?.image_url ||
                    activeService?.image ||
                    "/placeholder.svg"
                  }
                  alt={activeService?.name || "Service"}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-[250px] md:h-[400px]"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-2">{activeService?.name}</h3>
                <p className="text-[#ffca77] mb-4">{activeService?.subtitle}</p>
                <p className="text-gray-400 mb-6 min-h-[100px] md:min-h-[150px]">{activeService?.description}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="bg-[#ffca77] hover:bg-[#ffca77]/80 text-black px-6 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    CONTACT
                  </Link>
                  <Link
                    href={`/services/${activeService?.id}`}
                    className="border border-[#ffca77] text-[#ffca77] hover:bg-[#ffca77] hover:text-black px-6 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
