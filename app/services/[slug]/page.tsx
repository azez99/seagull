import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getServiceBySlug, getRelatedBrands, getOtherServices } from "@/lib/data"

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const relatedBrands = await getRelatedBrands(service)
  const otherServices = await getOtherServices(service.id)

  const cleanArticle = service.article
    ? service.article.replace(/\\n/g, "").replace(/\\/g, "").replace(/\\"/g, '"')
    : null

  // These classes attempt to re-apply essential prose-lg styles.
  // They are applied to all screen sizes by default. If desktop is already
  // correctly styled by prose-lg, these should ideally match and not cause
  // major visual changes on desktop, while fixing mobile.
  const proseStylingClasses = `
    prose prose-lg prose-invert max-w-none
    /* === Headings === */
    /* H1 */
    [&_h1]:text-[2.25em]      [&_h1]:leading-[1.1111111] [&_h1]:font-bold    [&_h1]:text-white          [&_h1]:mt-[1.7777778em] [&_h1]:mb-[0.8888889em]
    /* H2 */
    [&_h2]:text-[1.5em]       [&_h2]:leading-[1.3333333] [&_h2]:font-semibold  [&_h2]:text-gray-100       [&_h2]:mt-[1.3333333em] [&_h2]:mb-[0.6666667em]
    /* H3 */
    [&_h3]:text-[1.25em]      [&_h3]:leading-[1.4]       [&_h3]:font-semibold  [&_h3]:text-gray-200       [&_h3]:mt-[1.6em]       [&_h3]:mb-[0.6em]
    /* H4 */
    [&_h4]:text-[1.125em]     [&_h4]:leading-[1.5555556] [&_h4]:font-semibold  [&_h4]:text-gray-300       [&_h4]:mt-[1.7777778em] [&_h4]:mb-[0.4444444em]

    /* === Paragraphs & Text === */
    [&_p]:text-gray-300       [&_p]:leading-[1.7777778] [&_p]:mt-[1.3333333em] [&_p]:mb-[1.3333333em]
    [&_strong]:text-white     [&_strong]:font-semibold
    [&_em]:text-gray-300      [&_em]:italic
    [&_a]:text-blue-400       hover:[&_a]:text-blue-300 [&_a]:font-medium

    /* === Lists === */
    /* Unordered Lists */
    [&_ul]:list-disc          [&_ul]:pl-[1.5555556em]   /* Default prose-lg padding-left */
    [&_ul]:mt-[1.3333333em]   [&_ul]:mb-[1.3333333em]
    [&_ul_li]:text-gray-300   [&_ul_li]:mt-[0.4444444em] [&_ul_li]:mb-[0.4444444em] [&_ul_li]:pl-[0.4444444em] /* Default prose-lg padding-left for li marker */
    /* Nested UL */
    [&_ul_ul]:mt-[0.6666667em] [&_ul_ul]:mb-[0.6666667em]
    
    /* Ordered Lists */
    [&_ol]:list-decimal       [&_ol]:pl-[1.5555556em]   /* Default prose-lg padding-left */
    [&_ol]:mt-[1.3333333em]   [&_ol]:mb-[1.3333333em]
    [&_ol_li]:text-gray-300   [&_ol_li]:mt-[0.4444444em] [&_ol_li]:mb-[0.4444444em] [&_ol_li]:pl-[0.4444444em] /* Default prose-lg padding-left for li marker */
    /* Nested OL */
    [&_ol_ol]:mt-[0.6666667em] [&_ol_ol]:mb-[0.6666667em]

    /* === Other Elements === */
    [&_hr]:border-gray-700    [&_hr]:mt-[2.6666667em]   [&_hr]:mb-[2.6666667em]
    [&_blockquote]:border-l-4 [&_blockquote]:border-gray-500 [&_blockquote]:pl-[0.8888889em] /* prose-lg pl */
    [&_blockquote]:italic     [&_blockquote]:text-gray-400 [&_blockquote]:mt-[1.3333333em] [&_blockquote]:mb-[1.3333333em] /* prose-lg margins */
    [&_figure_figcaption]:text-gray-400 [&_figure_figcaption]:text-sm [&_figure_figcaption]:mt-[0.6666667em]
    [&_code]:text-pink-400    [&_code]:font-mono         [&_code]:text-sm
    [&_pre]:bg-gray-800       [&_pre]:text-gray-200     [&_pre]:p-4               [&_pre]:rounded-md        [&_pre]:overflow-x-auto
    [&_table]:text-left       [&_table_th]:text-white   [&_table_th]:font-semibold [&_table_td]:text-gray-300
    [&_table_th]:p-2          [&_table_td]:p-2          [&_table_thead]:border-b    [&_table_thead]:border-gray-700
  `

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

      {/* Hero Section (omitted for brevity, assumed unchanged) */}
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
                <a
                  href="tel:+15616240220"
                  className="inline-flex items-center bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-bold px-6 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  CALL NOW
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-[#ffe2b6] text-[#ffe2b6] hover:bg-[#ffe2b6] hover:text-black font-medium px-6 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  REQUEST CONSULTATION
                </Link>
                <div className="text-white sm:ml-4">
                  <div className="text-sm text-[#ffe2b6] mb-1">Call us directly:</div>
                  <a
                    href="tel:+15616240220"
                    className="text-lg font-bold text-white hover:text-[#ffe2b6] transition-colors"
                  >
                    (561) 624-0220
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {cleanArticle ? (
              <article className={proseStylingClasses} dangerouslySetInnerHTML={{ __html: cleanArticle }} />
            ) : (
              <div className={proseStylingClasses}>
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

          {/* Sidebar (omitted for brevity, assumed unchanged) */}
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

      {/* Related Services (omitted for brevity, assumed unchanged) */}
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
