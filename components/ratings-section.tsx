"use client"

import { Star } from "lucide-react"
import testimonials from "@/lib/testimonials.json"
import { useEffect, useRef } from "react"

export default function RatingsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Get the marquee element
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    // Slow down the animation by adding a CSS variable
    const style = document.createElement("style")
    style.innerHTML = `
      .marquee-track {
        animation: marquee 60s linear infinite !important;
      }
      .marquee-track:hover {
        animation-play-state: paused !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section id="ratings" className="py-12 overflow-hidden">
      <div
        className="marquee-container relative w-full bg-[#080808]"
        style={{
          boxShadow: "inset 0 0 150px rgba(255, 202, 119, 0.15)",
        }}
      >
        <div ref={marqueeRef} className="marquee-track flex gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="marquee-item w-80 flex-shrink-0 p-4">
              <div className="flex mb-3">
                {/* All testimonials have 5 stars */}
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#ffca77] text-[#ffca77]" />
                ))}
              </div>
              <p className="text-[#ffe2b6] mb-4 text-sm md:text-base">"{testimonial.quote}"</p>
              <p className="text-[#ffca77] font-bold">{testimonial.name}</p>
            </div>
          ))}
          {/* Duplicate testimonials for seamless looping */}
          {testimonials.map((testimonial) => (
            <div key={`dup-${testimonial.id}`} className="marquee-item w-80 flex-shrink-0 p-4">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#ffca77] text-[#ffca77]" />
                ))}
              </div>
              <p className="text-[#ffe2b6] mb-4 text-sm md:text-base">"{testimonial.quote}"</p>
              <p className="text-[#ffca77] font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
