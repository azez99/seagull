import Link from "next/link"
import Image from "next/image"
import { getServices } from "@/lib/data"

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-[#ffe2b6] max-w-3xl mx-auto">
              Discover our comprehensive range of home automation and entertainment solutions designed for luxury
              living.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="group block">
              <div className="bg-[#1b1814] rounded-lg overflow-hidden border border-[#ffca77]/20 hover:border-[#ffca77] transition-colors">
                <div className="relative h-[240px]">
                  <Image
                    src={service.image_url || "/placeholder.svg?height=240&width=400"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.subtitle}</p>
                  <div className="flex items-center text-[#ffca77] font-medium">
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
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
      </section>

      {/* CTA Section */}
      <section className="bg-[#1b1814] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-[#ffe2b6] max-w-3xl mx-auto mb-8">
            Contact our team today to discuss your project and discover how we can bring luxury automation and
            entertainment to your home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  )
}
