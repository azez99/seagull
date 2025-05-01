// This file will handle all data fetching to isolate any JSON parsing issues

// Define types
export type Brand = {
  id: number
  name: string
  slug: string
  logo_url: string
  subtitle: string
  article: string
  service_ids: number[]
  meta_title: string
  meta_description: string
  keywords: string
}

export type Service = {
  id: number
  name: string
  slug: string
  subtitle: string
  image_url?: string
  article?: string
  brand_ids?: number[]
  meta_description?: string
}

// Hardcoded fallback services data - Complete data to ensure we have all services
const fallbackServices: Service[] = [
  {
    id: 1,
    name: "Video",
    slug: "video",
    subtitle: "Crystal-Clear Video Solutions for Home Theaters, Living Spaces, and Outdoor Entertainment.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Audio",
    slug: "audio",
    subtitle: "High-Fidelity Sound, Perfectly Tuned for Every Room.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "Theater",
    slug: "theater",
    subtitle: "Cinematic Entertainment, Custom-Designed for Your Home.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    name: "Outdoor",
    slug: "outdoor",
    subtitle: "Seamless Outdoor Entertainment, Lighting, and Security for Luxury Living.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    name: "Lighting",
    slug: "lighting",
    subtitle: "Precision Lighting Control for Comfort, Ambiance, and Efficiency.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    name: "Shades",
    slug: "shades",
    subtitle: "Effortless Light Control and Privacy with Smart Motorized Shades.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    name: "Networking",
    slug: "networking",
    subtitle: "Seamless, High-Performance Networking for Every Corner of Your Home.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 8,
    name: "Security",
    slug: "security",
    subtitle: "Always have eyes on your home, even when you aren't Home.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    name: "Control Systems",
    slug: "control-systems",
    subtitle: "Seamless Smart Home Control for Effortless Living.",
    image_url: "/placeholder.svg?height=600&width=800",
  },
]

// Function to clean text content from escape characters
function cleanTextContent(text: string): string {
  if (!text) return ""
  return text.replace(/\\n/g, "").replace(/\\/g, "").replace(/\\"/g, '"')
}

// Function to clean service data
function cleanServiceData(service: Service): Service {
  if (!service) return service

  return {
    ...service,
    subtitle: service.subtitle ? cleanTextContent(service.subtitle) : service.subtitle,
    article: service.article ? cleanTextContent(service.article) : service.article,
    meta_description: service.meta_description ? cleanTextContent(service.meta_description) : service.meta_description,
  }
}

// Function to safely get brands data
export async function getBrands(): Promise<Brand[]> {
  try {
    // Use dynamic import with the correct path to lib/brands.json
    const data = await import("../lib/brands.json")
    return data.default || []
  } catch (error) {
    console.error("Error loading brands data:", error)
    return []
  }
}

// Function to safely get services data
export async function getServices(): Promise<Service[]> {
  try {
    // First try to get the data from the lib/services.json file
    const data = await import("../lib/services.json")
    // Clean the data before returning it
    return (data.default || fallbackServices).map(cleanServiceData)
  } catch (error) {
    // If that fails, log the error and return the fallback data
    console.error("Error loading services data, using fallback data:", error)
    return fallbackServices
  }
}

// Function to get a brand by slug
export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  try {
    const brands = await getBrands()
    return brands.find((brand) => brand.slug === slug) || null
  } catch (error) {
    console.error(`Error finding brand with slug ${slug}:`, error)
    return null
  }
}

// Function to get a service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    // First try to find the service in the services data
    const services = await getServices()
    const service = services.find((service) => service.slug === slug)
    if (service) return cleanServiceData(service)

    // If not found, check the fallback data
    const fallbackService = fallbackServices.find((service) => service.slug === slug)
    return fallbackService || null
  } catch (error) {
    console.error(`Error finding service with slug ${slug}:`, error)
    // Return from fallback data if there's an error
    return fallbackServices.find((service) => service.slug === slug) || null
  }
}

// Function to get related services for a brand
export async function getRelatedServices(brand: Brand): Promise<Service[]> {
  try {
    if (!brand || !brand.service_ids || !Array.isArray(brand.service_ids)) {
      return []
    }

    const services = await getServices()
    return brand.service_ids.map((id) => services.find((service) => service.id === id)).filter(Boolean) as Service[]
  } catch (error) {
    console.error("Error getting related services:", error)
    return []
  }
}

// Function to get related brands for a service
export async function getRelatedBrands(service: Service): Promise<Brand[]> {
  try {
    if (!service || !service.brand_ids || !Array.isArray(service.brand_ids)) {
      return []
    }

    const brands = await getBrands()
    return service.brand_ids.map((id) => brands.find((brand) => brand.id === id)).filter(Boolean) as Brand[]
  } catch (error) {
    console.error("Error getting related brands:", error)
    return []
  }
}

// Function to get other brands (for "Other Brands" section)
export async function getOtherBrands(currentBrandId: number, limit = 4): Promise<Brand[]> {
  try {
    const brands = await getBrands()
    return brands
      .filter((brand) => brand.id !== currentBrandId)
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, limit)
  } catch (error) {
    console.error("Error getting other brands:", error)
    return []
  }
}

// Function to get other services (for "Other Services" section)
export async function getOtherServices(currentServiceId: number, limit = 3): Promise<Service[]> {
  try {
    const services = await getServices()
    return services
      .filter((service) => service.id !== currentServiceId)
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, limit)
      .map(cleanServiceData)
  } catch (error) {
    console.error("Error getting other services:", error)
    // Use fallback data if there's an error
    return fallbackServices
      .filter((service) => service.id !== currentServiceId)
      .sort(() => 0.5 - Math.random())
      .slice(0, limit)
  }
}

// Function to group brands by category based on their first service_id
export async function groupBrandsByCategory(): Promise<Record<string, Brand[]>> {
  try {
    const brands = await getBrands()
    const services = await getServices()
    const categories: Record<string, Brand[]> = {}

    // Initialize categories with service names
    services.forEach((service) => {
      categories[service.name] = []
    })

    // Group brands by their first service_id
    brands.forEach((brand) => {
      if (!brand.service_ids || !Array.isArray(brand.service_ids) || brand.service_ids.length === 0) {
        // If no service_ids, put in "Other" category
        if (!categories["Other"]) {
          categories["Other"] = []
        }
        categories["Other"].push(brand)
        return
      }

      // Get the first service_id
      const primaryServiceId = brand.service_ids[0]
      const primaryService = services.find((service) => service.id === primaryServiceId)

      if (primaryService) {
        // Add brand to the category of its primary service
        categories[primaryService.name].push(brand)
      } else {
        // If service not found, put in "Other" category
        if (!categories["Other"]) {
          categories["Other"] = []
        }
        categories["Other"].push(brand)
      }
    })

    // Remove empty categories
    return Object.fromEntries(Object.entries(categories).filter(([_, brandList]) => brandList.length > 0))
  } catch (error) {
    console.error("Error grouping brands by category:", error)
    return {}
  }
}
