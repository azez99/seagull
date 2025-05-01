import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-white">Ready to</span> <span className="text-[#ffe2b6]">Elevate Your Home</span>
          <span className="text-white">?</span>
        </h2>
        <p className="text-gray-400 mb-6">Contact us today!</p>
        <Link
          href="/contact"
          className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}
