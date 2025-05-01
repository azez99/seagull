import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, Clock, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white pt-12 pb-6 border-t border-[#ffca77] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffe2b6]">Navigation</h3>

            {/* Main Navigation Links */}
            <div className="mb-6">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#ffe2b6] text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-gray-400 hover:text-[#ffe2b6] text-base">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-[#ffe2b6] text-base">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-[#ffe2b6] text-base">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Button */}
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#ffca77] hover:bg-[#ffca77]/80 text-black px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffe2b6]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#ffca77] mr-2 mt-0.5 flex-shrink-0" />
                <address className="not-italic text-gray-400">
                  <p>430 Toney Penna</p>
                  <p>Suite 2</p>
                  <p>Jupiter, FL 33458</p>
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#ffca77] mr-2 flex-shrink-0" />
                <a href="tel:+15615758500" className="text-gray-400 hover:text-[#ffe2b6]">
                  (561) 575-8500
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#ffca77] mr-2 flex-shrink-0" />
                <a href="mailto:info@seagullelectronics.com" className="text-gray-400 hover:text-[#ffe2b6]">
                  info@seagullelectronics.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#ffca77] mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Monday - Friday: 8:30am - 5:00pm</p>
                  <p>Saturday & Sunday: By appointment</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-[#ffca77]">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#262016] hover:bg-[#362e24] p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5 text-[#ffe2b6]" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#262016] hover:bg-[#362e24] p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5 text-[#ffe2b6]" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffe2b6]">Location</h3>
            <div className="h-[250px] relative rounded-lg overflow-hidden border border-[#ffca77]/30">
              {/* Replace with actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0832583006647!2d-80.1059488!3d26.7541511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df28421c7ff4bd%3A0x7f9362b3a3a1ba38!2s430%20Toney%20Penna%20Dr%20%232%2C%20Jupiter%2C%20FL%2033458!5e0!3m2!1sen!2sus!4v1710866925!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seagull Electronics Location"
                className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Seagull Electronics. All rights reserved.
          </p>
          <div>
            <Link href="/">
              <Image
                src="/images/SeagullLogoNew.png"
                alt="Seagull Electronics"
                width={100}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
