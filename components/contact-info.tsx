import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

        <ul className="space-y-6">
          <li className="flex items-start">
            <MapPin className="h-6 w-6 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
            <address className="not-italic text-gray-300">
              <p>430 Toney Penna Dr</p>
              <p>Suite 1</p>
              <p>Jupiter, FL 33458</p>
            </address>
          </li>

          <li className="flex items-center">
            <Phone className="h-6 w-6 text-[#ffca77] mr-3 flex-shrink-0" />
            <a href="tel:+15616240220" className="text-gray-300 hover:text-[#ffe2b6]">
              (561) 624-0220
            </a>
          </li>

          <li className="flex items-center">
            <Mail className="h-6 w-6 text-[#ffca77] mr-3 flex-shrink-0" />
            <a href="mailto:info@seagullelectronics.com" className="text-gray-300 hover:text-[#ffe2b6]">
              info@seagullelectronics.com
            </a>
          </li>

          <li className="flex items-start">
            <Clock className="h-6 w-6 text-[#ffca77] mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-gray-300">
              <p>Monday - Friday: 8:30am - 5:00pm</p>
              <p>Saturday & Sunday: By appointment</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
        <div className="h-[300px] relative rounded-lg overflow-hidden border border-[#ffca77]/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0832583006647!2d-80.1059488!3d26.7541511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df28421c7ff4bd%3A0x7f9362b3a3a1ba38!2s430%20Toney%20Penna%20Dr%20%231%2C%20Jupiter%2C%20FL%2033458!5e0!3m2!1sen!2sus!4v1710866925!5m2!1sen!2sus"
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
  )
}
