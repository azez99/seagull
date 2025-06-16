import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getLocationById } from "@/lib/location-data"
import { services } from "@/lib/location-services"
import { generateServiceSlug } from "@/lib/location-utils"

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = getLocationById(params.location)

  if (!location) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={location.name}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Home Automation in {location.name}</h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Premium smart home solutions tailored for {location.name} residents
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Services in {location.name}</h2>
          <p className="text-gray-300 max-w-3xl">
            Seagull Electronics has been providing premium home automation services to {location.name} residents for
            over 20 years. Our team of experts specializes in designing and installing custom smart home solutions that
            enhance your lifestyle and increase your property value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const serviceSlug = generateServiceSlug(service.name, location.name)
            return (
              <Link key={service.id} href={`/locations/${location.id}/${serviceSlug}`} className="group">
                <div className="bg-[#262016] border border-[#ffca77]/20 rounded-lg overflow-hidden hover:border-[#ffca77]/50 transition-all h-full">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <div className="text-[#ffca77] font-medium flex items-center">
                      {service.name} in {location.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-[#262016] border border-[#ffca77]/30 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Ready to Transform Your {location.name} Home?
          </h3>
          <p className="text-gray-300 mb-6 text-center">
            Contact us today to schedule a consultation and discover how our smart home solutions can enhance your
            lifestyle.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-[#ffca77] hover:bg-[#ffca77]/80 text-black text-center px-8 py-3 rounded-md font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export function generateStaticParams() {
  // Import locations directly from location-data to avoid circular dependencies
  const { locations } = require("@/lib/location-data")

  return locations.map((location) => ({
    location: location.id,
  }))
}
