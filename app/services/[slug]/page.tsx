import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getServiceBySlug, getRelatedBrands, getOtherServices } from "@/lib/data"

export default async function ServicePage({ params }: { params: { slug: string } }) {
  // Get service data
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  // Get related brands
  const relatedBrands = await getRelatedBrands(service)

  // Get other services for related services section
  const otherServices = await getOtherServices(service.id)

  // Clean article content if it exists
  const cleanArticle = service.article
    ? service.article.replace(/\\n/g, "").replace(/\\/g, "").replace(/\\"/g, '"')
    : null

  return (
    <main className="min-h-screen pb-16">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 pt-8 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center text-[#ffe2b6] hover:text-[#ffca77] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src={service.image_url || "/placeholder.svg?height=500&width=1000"}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{service.name}</h1>
              <p className="text-xl text-[#ffe2b6] max-w-2xl">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Article content from database */}
            {cleanArticle ? (
              <article
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: cleanArticle }}
              />
            ) : (
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  At Seagull Electronics, we specialize in providing high-quality {service.name.toLowerCase()} solutions
                  for your home. Contact us to learn more about our {service.name.toLowerCase()} services and how we can
                  help enhance your living space.
                </p>
              </div>
            )}

            <Link
              href="/contact"
              className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors mt-8"
            >
              REQUEST A CONSULTATION
            </Link>
          </div>

          <div>
            <div className="bg-[#1b1814] border border-[rgba(255,202,119,0.3)] rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Brands We Work With</h3>
              {relatedBrands.length > 0 ? (
                <ul className="space-y-3">
                  {relatedBrands.map((brand) => (
                    <li key={brand.id}>
                      <Link
                        href={`/brands/${brand.slug}`}
                        className="text-gray-300 hover:text-[#ffe2b6] flex items-center"
                      >
                        <span className="text-[#ffca77] mr-2">→</span>
                        {brand.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No related brands found.</p>
              )}

              <div className="mt-8 pt-6 border-t border-[rgba(255,202,119,0.2)]">
                <h4 className="text-lg font-medium text-white mb-3">Need Help?</h4>
                <p className="text-gray-400 mb-4">
                  Our team is ready to answer your questions and help you find the perfect solution.
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

      {/* Related Services */}
      {otherServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((relatedService) => (
              <Link key={relatedService.id} href={`/services/${relatedService.slug}`} className="group block">
                <div className="relative h-[200px] overflow-hidden rounded-lg mb-3">
                  <Image
                    src={relatedService.image_url || "/placeholder.svg?height=200&width=400"}
                    alt={relatedService.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-[#ffe2b6] transition-colors">
                  {relatedService.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
