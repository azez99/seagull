import Navbar from "@/components/navbar"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-[#080808]">
        <div
          className="absolute inset-0 bg-black/70 z-0"
          style={{
            backgroundImage: "url('/images/SeagullLogoBG.svg')",
            backgroundSize: "60%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlend: "overlay",
            opacity: "0.13",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to transform your home with cutting-edge technology? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
