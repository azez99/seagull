import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, getServiceByName } from "@/lib/location-services"
import { extractFromSlug, generateServiceSlug } from "@/lib/location-utils"
import { locations, getLocationById } from "@/lib/location-data"

export default function LocationServicePage({
  params,
}: {
  params: { location: string; serviceSlug: string }
}) {
  const location = getLocationById(params.location)
  if (!location) {
    notFound()
  }

  // Extract service name from the slug
  const slugInfo = extractFromSlug(params.serviceSlug)
  if (!slugInfo) {
    notFound()
  }

  // Find the service by name using the helper function
  const service = getServiceByName(slugInfo.service)

  if (!service) {
    notFound()
  }

  // Get related services (excluding current service)
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={`${service.name} in ${location.name}`}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.name} in {location.name}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Premium {service.name.toLowerCase()} solutions for {location.name} homes and businesses
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#262016] border-b border-[#ffca77]/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ffca77]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-[#ffca77]">
              Locations
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/locations/${location.id}`} className="hover:text-[#ffca77]">
              {location.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#ffca77]">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">
              {service.name} Services in {location.name}
            </h2>

            <p className="text-gray-300 mb-6">
              At Seagull Electronics, we specialize in designing and installing premium {service.name.toLowerCase()}{" "}
              systems for {location.name} homes and businesses. Our expert team works closely with you to create a
              customized solution that meets your specific needs and enhances your property.
            </p>

            <p className="text-gray-300 mb-6">
              Our {service.name.toLowerCase()} solutions are designed with the unique characteristics of {location.name}{" "}
              properties in mind. We understand the local architecture, climate, and lifestyle preferences, allowing us
              to deliver systems that perfectly complement your space.
            </p>

            <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
              <Image
                src={`/abstract-geometric-shapes.png?height=800&width=1200&query=${service.name} installation in luxury home`}
                alt={`${service.name} installation`}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mt-10 mb-4">
              Why Choose Our {service.name} Services in {location.name}
            </h3>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-[#ffca77] mr-2">•</span>
                <span>Customized solutions tailored to your {location.name} property</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffca77] mr-2">•</span>
                <span>Expert installation by certified technicians</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffca77] mr-2">•</span>
                <span>Premium products from industry-leading manufacturers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffca77] mr-2">•</span>
                <span>Comprehensive service and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffca77] mr-2">•</span>
                <span>Integration with your existing home automation systems</span>
              </li>
            </ul>

            <div className="bg-[#262016] border border-[#ffca77]/20 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-3">Client Testimonial</h4>
              <blockquote className="text-gray-300 italic">
                "Seagull Electronics transformed our {location.name} home with their exceptional{" "}
                {service.name.toLowerCase()} system. The team was professional, knowledgeable, and delivered beyond our
                expectations. We couldn't be happier with the results!"
              </blockquote>
              <p className="text-[#ffca77] mt-3">- {location.name} Homeowner</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#262016] border border-[#ffca77]/30 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-6">
                Ready to enhance your {location.name} property with our {service.name.toLowerCase()} solutions? Contact
                us today for a consultation.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-[#ffca77] hover:bg-[#ffca77]/80 text-black text-center px-6 py-3 rounded-md font-medium transition-colors"
              >
                Schedule a Consultation
              </Link>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-3">Our Location</h4>
                <p className="text-gray-300">
                  430 Toney Penna
                  <br />
                  Suite 2<br />
                  Jupiter, FL 33458
                </p>

                <h4 className="text-lg font-semibold text-white mt-6 mb-3">Contact Information</h4>
                <p className="text-gray-300">
                  Phone: (561) 575-8500
                  <br />
                  Email: info@seagullelectronics.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">Other Services in {location.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => {
              const relatedServiceSlug = generateServiceSlug(relatedService.name, location.name)
              return (
                <Link
                  key={relatedService.id}
                  href={`/locations/${location.id}/${relatedServiceSlug}`}
                  className="group"
                >
                  <div className="bg-[#262016] border border-[#ffca77]/20 rounded-lg overflow-hidden hover:border-[#ffca77]/50 transition-all h-full">
                    <div className="relative h-40">
                      <Image
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-bold text-white">{relatedService.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300 text-sm mb-3">{relatedService.description}</p>
                      <div className="text-[#ffca77] text-sm font-medium flex items-center">
                        Learn more
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
        </div>
      </div>
    </>
  )
}

export function generateStaticParams() {
  // Generate all possible combinations of locations and services
  const params = []

  for (const location of locations) {
    for (const service of services) {
      params.push({
        location: location.id,
        serviceSlug: generateServiceSlug(service.name, location.name),
      })
    }
  }

  return params
}
