import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import RatingsSection from "@/components/ratings-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import BrandsMarquee from "@/components/brands-marquee"
import ServicesCarousel from "@/components/services-carousel"
import TestimonialsSection from "@/components/testimonials-section"
import GallerySection from "@/components/gallery-section"
import BrandsSection from "@/components/brands-section"
import TeamSection from "@/components/team-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RatingsSection />
      <WhatWeDoSection />
      <BrandsMarquee />
      <ServicesCarousel />
      <TestimonialsSection />
      <GallerySection />
      <BrandsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
