"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import constants from "@/lib/constants.json"

export default function TestimonialsSection() {
  const { video_testimonials } = constants

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">What our customers say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {video_testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      {/* Vertical Video Component - Reduced height */}
      <div className="relative mb-4 w-full h-[180px] md:h-[200px] bg-black rounded-lg overflow-hidden">
        {/* Video Placeholder - Will be replaced with actual video */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
        />

        {/* Video Element - Hidden until source is provided */}
        <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover hidden" playsInline muted loop>
          {testimonial.video_url && <source src={testimonial.video_url} type="video/mp4" />}
        </video>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-3 right-3 bg-[#ffca77] rounded-full p-2 text-black hover:bg-[#ffca77]/80 transition-colors"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>

      {/* Testimonial Text - Shortened */}
      <p className="text-gray-400 mb-4 text-sm line-clamp-3">"{testimonial.quote}"</p>

      {/* Person Info */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
        <div>
          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
          <p className="text-gray-500 text-xs">Client reference</p>
        </div>
      </div>
    </div>
  )
}
