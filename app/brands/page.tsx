import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { groupBrandsByCategory } from "@/lib/data"

export default async function BrandsPage() {
  // Get brands grouped by category
  const brandsByCategory = await groupBrandsByCategory()

  return (
    <main className="min-h-screen pb-16">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1814] to-[#080808]"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Brands</h1>
              <p className="text-xl text-[#ffe2b6] max-w-2xl">
                We partner with the industry's leading brands to bring you the best in home automation and audio-visual
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands by Category */}
      <section className="max-w-7xl mx-auto px-4">
        {Object.entries(brandsByCategory).map(([category, categoryBrands]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-[#ffca77]/30 pb-2">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryBrands.map((brand) => (
                <Link key={brand.id} href={`/brands/${brand.slug}`} className="group block">
                  <div className="bg-[#1b1814] border border-[#ffca77]/20 hover:border-[#ffca77] transition-colors p-6 rounded-lg h-[120px] flex items-center justify-center">
                    <Image
                      src={brand.logo_url || "/placeholder.svg"}
                      alt={brand.name}
                      width={180}
                      height={80}
                      className="h-16 w-auto object-contain transition-opacity group-hover:opacity-90"
                    />
                  </div>
                  <p className="text-center text-gray-400 mt-2 group-hover:text-[#ffe2b6] transition-colors">
                    {brand.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 mt-16 text-center">
        <div className="bg-[#1b1814] border border-[rgba(255,202,119,0.3)] rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking for a specific brand?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We work with many more brands than those listed here. Contact us to inquire about specific products or
            brands you're interested in.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
