import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">About Seagull Electronics</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional home automation and audio-visual solutions in South Florida for more than three
            decades.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Seagull Electronics has been a trusted name in the South Florida audio, video, and automation industry
                for more than three decades.
              </p>
              <p className="text-gray-300 mb-6">
                As a family-owned and -operated company, we treat every client like part of our family. Many of our
                customers have been with us since we first opened! From mounting televisions to installing comprehensive
                home automation systems, Seagull does it all.
              </p>
              <p className="text-gray-300 mb-6">
                We have the answers to your electronics questions, won't push you into buying systems you don't need,
                and genuinely care about your needs. When you trust our team to handle your electronics design,
                installation, or maintenance needs, we'll treat you like a member of the family.
              </p>
              <p className="text-gray-300 mb-6">
                Let our team at Seagull Electronics show you what it means to work with a highly experienced audio,
                video, and automation system company that you can trust. After all, we wouldn't exist without clients
                like you.
              </p>
              <div className="space-y-3 mt-8">
                <h3 className="text-xl font-semibold text-[#ffe2b6] mb-2">Our Promise</h3>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Be professional and punctual</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Provide honest proposals with fair pricing</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Create individualized solutions, not one-size-fits-all</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Offer expert industry knowledge and service</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Quickly address any customer concerns</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Never go back on our work</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Treat you like family</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/steven-evan-handshake-storefront.jpeg"
                alt="Steven and Evan Siegel in front of Seagull Electronics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Did Seagull Electronics Begin? */}
      <section className="py-16 bg-[#1b1814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How Did Seagull Electronics Begin?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our story began in 1956 when Jacob Siegel opened Central Hardware in Miami Beach, selling televisions and
              other electronics.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-gray-300">
              The Siegel family moved to the Juno Beach area in 1988 and founded both Seagull Hardware and Seagull
              Electronics. Jacob's son Steven continues to bring the same trustworthy values and honest service to the
              Palm Beach area with an expanded range of electronics services through Seagull Electronics.
            </p>

            <p className="text-gray-300">
              Since 1988, our company has grown through old-fashioned word of mouth. We believe that good business
              starts by treating our clients right and forming long-lasting relationships. Our happy customers share
              their positive experiences with their friends and families within the community, who continue to trust us
              with all their electronic needs for years or even decades to come. We stand by our work, providing every
              client with honest recommendations and top-quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Who Are the Siegels? */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Who Are the Siegels?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our company began with one Siegel and has carried on through the family for over 50 years. Today, Steven
              Siegel owns and runs Seagull Electronics and mentors his nephew Evan in the family business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#080808] rounded-lg overflow-hidden border border-[#ffca77]/20">
              <div className="relative h-[400px]">
                <Image
                  src="/images/steven-headshot-full.jpg"
                  alt="Steven Siegel"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Steven Siegel</h3>
                <p className="text-[#ffca77] mb-4">Owner</p>
                <p className="text-gray-300">
                  Seagull Electronics owner Steven Siegel has more than 30 years of industry experience working with
                  architects, builders, interior designers, property managers, and homeowners to create superior
                  electronics systems. Steven believes in doing right by each client, never overcharging, and treating
                  people like people. You can trust Steven to answer your questions, give you trustworthy opinions and
                  recommendations, and take care of your electronics for as long as you have them.
                </p>
                <p className="text-gray-300 mt-4">
                  Steven brings extensive experience with blueprints to the Seagull team, not to mention decades of
                  industry knowledge.
                </p>
              </div>
            </div>

            <div className="bg-[#080808] rounded-lg overflow-hidden border border-[#ffca77]/20">
              <div className="relative h-[400px]">
                <Image
                  src="/images/evan-headshot-professional.jpg"
                  alt="Evan Siegel"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Evan Siegel</h3>
                <p className="text-[#ffca77] mb-4">COO / Vice President</p>
                <p className="text-gray-300">
                  Evan Siegel grew up working for Seagull in the summertime and officially joined us in 2021, bringing
                  his experience in mechanical engineering with Embry Riddle and a bachelor's degree from FSU in
                  marketing and business. Like his uncle, Evan believes in completing every job the right way the first
                  time and showing every customer that they're an essential part of the Seagull family.
                </p>
                <p className="text-gray-300 mt-4">
                  Evan's natural curiosity and hunger for knowledge keep him up-to-date on current industry trends and
                  technologies. As a Control4 Certified technician, he can help with all of your home automation needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does the Future Hold? */}
      <section className="py-16 bg-[#1b1814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Does the Future Hold for Seagull Electronics?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Technology has changed immensely since the first Siegel family store opened its doors almost 70 years ago,
              and we're excited to see what will come from future innovation.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-gray-300">
              As technology evolves, we evolve with it, providing our clients with the most modern audio, video, and
              automation solutions.
            </p>

            <p className="text-gray-300">
              At Seagull Electronics, we look forward to helping our customers embrace modern technology. We proudly
              serve South Florida as a leading electronics company providing design, installation, and maintenance
              services for electronic and automation systems. Whether you want to build a state-of-the-art home theater
              or install automated shade and lighting controls, we can help you bring your technology systems with you
              into the future.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Our Journey</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#ffca77]/30"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 rounded-full bg-[#ffca77] border-4 border-[#080808]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-white mb-2">1956</h3>
                    <p className="text-gray-400">
                      Jacob Siegel opened Central Hardware in Miami Beach, selling televisions and other electronics.
                    </p>
                  </div>
                  <div className="md:pl-12">{/* Empty for layout */}</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 rounded-full bg-[#ffca77] border-4 border-[#080808]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">{/* Empty for layout */}</div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-bold text-white mb-2">1988</h3>
                    <p className="text-gray-400">
                      The Siegel family moved to the Juno Beach area and founded both Seagull Hardware and Seagull
                      Electronics, bringing trustworthy values and honest service to the Palm Beach area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 rounded-full bg-[#ffca77] border-4 border-[#080808]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-white mb-2">2021</h3>
                    <p className="text-gray-400">
                      Evan Siegel officially joined the company, bringing his experience in mechanical engineering and a
                      bachelor's degree in marketing and business.
                    </p>
                  </div>
                  <div className="md:pl-12">{/* Empty for layout */}</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="w-6 h-6 rounded-full bg-[#ffca77] border-4 border-[#080808]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">{/* Empty for layout */}</div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-bold text-white mb-2">Today</h3>
                    <p className="text-gray-400">
                      Continuing to grow and innovate, providing cutting-edge technology solutions to homeowners
                      throughout South Florida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Seagull Electronics? */}
      <section className="py-16 bg-[#1b1814]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Seagull Electronics?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Let Seagull handle your electronics project from design to installation to future maintenance. We'll
              provide an effective, affordable solution customized to your home that gives you the capabilities you want
              in a user-friendly system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#080808] p-8 rounded-lg border border-[#ffca77]/30">
              <div className="w-12 h-12 bg-[#262016] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#ffca77]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
              <p className="text-gray-400">
                We work with dozens of brands to provide high-quality control systems, TVs, audio, video screens,
                lighting, security cameras, and more to find products that suit your needs and budget.
              </p>
            </div>

            <div className="bg-[#080808] p-8 rounded-lg border border-[#ffca77]/30">
              <div className="w-12 h-12 bg-[#262016] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#ffca77]"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Family Service</h3>
              <p className="text-gray-400">
                When you partner with our family-owned and -operated company, you're not just a number. We take the time
                to get to know you and design solutions that work for you for years to come.
              </p>
            </div>

            <div className="bg-[#080808] p-8 rounded-lg border border-[#ffca77]/30">
              <div className="w-12 h-12 bg-[#262016] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#ffca77]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                As technology evolves, we evolve with it, providing our clients with the most modern audio, video, and
                automation solutions to help you embrace modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1b1814] border border-[rgba(255,202,119,0.3)] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to join the Seagull Electronics family?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch today by calling 561-660-9015 or emailing info@seagullelectronics.com to join the Seagull
              Electronics family! We'll begin your service with a house call to determine your goals and how we can help
              you achieve them.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium px-8 py-3 rounded-md transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
