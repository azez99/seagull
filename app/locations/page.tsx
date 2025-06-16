import Link from "next/link"
import Image from "next/image"
import { locations } from "@/lib/location-data"

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/palm-beach-aerial.png"
          alt="Palm Beach County"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Service Locations</h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Providing premium home automation solutions throughout Palm Beach County and beyond
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Serving South Florida's Premier Communities</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Seagull Electronics provides expert home automation services to luxury homes and businesses throughout Palm
            Beach County and the Treasure Coast. Select your location to learn more about our services in your area.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link key={location.id} href={`/locations/${location.id}`} className="group">
              <div className="bg-[#262016] border border-[#ffca77]/20 rounded-lg overflow-hidden hover:border-[#ffca77]/50 transition-all">
                <div className="relative h-48">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-3">
                    Discover our premium home automation services in {location.name}. From smart lighting to home
                    theaters, we provide customized solutions for your property.
                  </p>
                  <div className="text-[#ffca77] font-medium flex items-center">
                    View services in {location.name}
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
          ))}
        </div>
      </div>
    </>
  )
}
