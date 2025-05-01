import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getBrandBySlug, getRelatedServices, getOtherBrands } from "@/lib/data"

export default async function BrandPage({ params }: { params: { slug: string } }) {
  // Get brand data
  const brand = await getBrandBySlug(params.slug)

  if (!brand) {
    notFound()
  }

  // Get related services
  const relatedServices = await getRelatedServices(brand)

  // Get other brands for the "Other Brands" section
  const otherBrands = await getOtherBrands(brand.id)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 pt-8 mb-4">
        <Link href="/brands" className="inline-flex items-center text-[#ffe2b6] hover:text-[#ffca77] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Brands
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1814] to-[#080808]"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block mb-6">
                <Image
                  src={brand.logo_url || "/placeholder.svg"}
                  alt={brand.name}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{brand.name}</h1>
              <p className="text-xl text-[#ffe2b6] max-w-2xl">{brand.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Article content from database */}
            <article
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: brand.article }}
            />

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors mt-8"
            >
              INQUIRE ABOUT {brand.name.toUpperCase()}
            </Link>
          </div>

          <div>
            <div className="bg-[#1b1814] border border-[rgba(255,202,119,0.3)] rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Related Services</h3>
              {relatedServices.length > 0 ? (
                <ul className="space-y-3">
                  {relatedServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-gray-300 hover:text-[#ffe2b6] flex items-center"
                      >
                        <span className="text-[#ffca77] mr-2">→</span>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No related services found.</p>
              )}

              <div className="mt-8 pt-6 border-t border-[rgba(255,202,119,0.2)]">
                <h4 className="text-lg font-medium text-white mb-3">Need Help?</h4>
                <p className="text-gray-400 mb-4">
                  Our team is ready to answer your questions about {brand.name} products and solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center border border-[#ffca77] text-[#ffe2b6] hover:bg-[#ffca77] hover:text-black px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Other Brands We Carry</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherBrands.map((otherBrand) => (
            <Link key={otherBrand.id} href={`/brands/${otherBrand.slug}`} className="group block">
              <div className="bg-[#1b1814] border border-[#ffca77]/20 hover:border-[#ffca77] transition-colors p-4 rounded-lg h-[100px] flex items-center justify-center">
                <Image
                  src={otherBrand.logo_url || "/placeholder.svg"}
                  alt={otherBrand.name}
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
