// Define types
export type Brand = {
  id: number
  name: string
  slug: string
  logo_url: string
  subtitle: string
  article: string
  service_ids: number[]
  meta_title?: string
  meta_description?: string
  keywords?: string
}

export type Service = {
  id: number
  name: string
  slug: string
  subtitle: string
}

// Fallback services data
const fallbackServices: Service[] = [
  {
    id: 1,
    name: "Video",
    slug: "video",
    subtitle: "Crystal-Clear Video Solutions for Home Theaters, Living Spaces, and Outdoor Entertainment.",
  },
  {
    id: 2,
    name: "Audio",
    slug: "audio",
    subtitle: "High-Fidelity Sound, Perfectly Tuned for Every Room.",
  },
  {
    id: 3,
    name: "Theater",
    slug: "theater",
    subtitle: "Cinematic Entertainment, Custom-Designed for Your Home.",
  },
  {
    id: 4,
    name: "Outdoor",
    slug: "outdoor",
    subtitle: "Seamless Outdoor Entertainment, Lighting, and Security for Luxury Living.",
  },
  {
    id: 5,
    name: "Lighting",
    slug: "lighting",
    subtitle: "Precision Lighting Control for Comfort, Ambiance, and Efficiency.",
  },
  {
    id: 6,
    name: "Shades",
    slug: "shades",
    subtitle: "Effortless Light Control and Privacy with Smart Motorized Shades.",
  },
  {
    id: 7,
    name: "Networking",
    slug: "networking",
    subtitle: "Seamless, High-Performance Networking for Every Corner of Your Home.",
  },
  {
    id: 8,
    name: "Security",
    slug: "security",
    subtitle: "Always have eyes on your home, even when you aren't Home.",
  },
  {
    id: 9,
    name: "Control Systems",
    slug: "control-systems",
    subtitle: "Seamless Smart Home Control for Effortless Living.",
  },
]

// Fallback brands data (simplified version)
const fallbackBrands: Brand[] = [
  {
    id: 1,
    name: "Sony",
    slug: "sony",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Premium televisions and projectors engineered for immersive cinematic experiences.",
    article:
      "<p><strong>Sony</strong> is a renowned innovator in video and home theater technology, delivering some of the most advanced televisions and projectors on the market.</p>",
    service_ids: [1, 3],
  },
  {
    id: 2,
    name: "Samsung",
    slug: "samsung",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Cutting-edge televisions that blend style, performance, and smart innovation.",
    article:
      "<p><strong>Samsung</strong> is a global leader in television technology, offering a wide range of high-end displays known for their stunning picture quality, sleek design, and smart features.</p>",
    service_ids: [1],
  },
  {
    id: 3,
    name: "LG",
    slug: "lg",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Stunning OLED televisions delivering unmatched picture quality and elegance.",
    article:
      "<p><strong>LG</strong> is a pioneer in display technology, best known for its award-winning OLED televisions that offer perfect black levels, infinite contrast, and vibrant color accuracy.</p>",
    service_ids: [1],
  },
  {
    id: 4,
    name: "Bowers & Wilkins",
    slug: "bowers-and-wilkins",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Iconic high-fidelity speakers engineered for pure, immersive sound.",
    article:
      "<p><strong>Bowers & Wilkins</strong> has been a benchmark in premium audio for decades, crafting speakers that combine advanced acoustic engineering with timeless design.</p>",
    service_ids: [2],
  },
  {
    id: 5,
    name: "Control4",
    slug: "control4",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Whole-home automation that puts control of every system at your fingertips.",
    article:
      "<p><strong>Control4</strong> offers a powerful and intuitive home automation platform that lets you control lighting, audio, video, climate, security, and more — all from a single interface.</p>",
    service_ids: [5, 9],
  },
  {
    id: 6,
    name: "Savant",
    slug: "savant",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Luxury home automation and control systems tailored for modern living.",
    article:
      "<p><strong>Savant</strong> is a leading name in home automation, delivering elegant and intuitive control systems for lighting, shades, entertainment, climate, and more.</p>",
    service_ids: [5, 6, 9],
  },
  {
    id: 7,
    name: "Lutron",
    slug: "lutron",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Luxury lighting control and motorized shade systems designed for elegance and precision.",
    article:
      "<p><strong>Lutron</strong> is a global leader in intelligent lighting control and automated shading systems.</p>",
    service_ids: [5, 6],
  },
  {
    id: 8,
    name: "Eero",
    slug: "eero",
    logo_url: "/placeholder.svg?height=80&width=200",
    subtitle: "Reliable mesh Wi-Fi systems that eliminate dead zones and boost coverage.",
    article:
      "<p><strong>Eero</strong> brings fast, secure, and whole-home Wi-Fi with its sleek mesh networking systems.</p>",
    service_ids: [7],
  },
]

// Function to get all services
export function getServices(): Service[] {
  return fallbackServices
}

// Function to get all brands
export function getBrands(): Brand[] {
  return fallbackBrands
}

// Function to get a brand by slug
export function getBrandBySlug(slug: string): Brand | null {
  return fallbackBrands.find((brand) => brand.slug === slug) || null
}

// Function to get related services for a brand
export function getRelatedServices(brand: Brand): Service[] {
  if (!brand || !brand.service_ids || !Array.isArray(brand.service_ids)) {
    return []
  }

  const services = getServices()
  return brand.service_ids.map((id) => services.find((service) => service.id === id)).filter(Boolean) as Service[]
}

// Function to get other brands (for "Other Brands" section)
export function getOtherBrands(currentBrandId: number, limit = 4): Brand[] {
  return fallbackBrands
    .filter((brand) => brand.id !== currentBrandId)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, limit)
}

// Function to group brands by category
export function groupBrandsByCategory(): Record<string, Brand[]> {
  const brands = getBrands()
  const categories: Record<string, Brand[]> = {
    "Control Systems": [],
    "Audio & Video": [],
    "Lighting & Shades": [],
    Networking: [],
    Security: [],
    Outdoor: [],
    Theater: [],
  }

  brands.forEach((brand) => {
    if (!brand.service_ids || !Array.isArray(brand.service_ids)) return

    if (brand.service_ids.includes(9) || brand.service_ids.includes(5)) {
      categories["Control Systems"].push(brand)
    } else if (brand.service_ids.includes(1) || brand.service_ids.includes(2)) {
      categories["Audio & Video"].push(brand)
    } else if (brand.service_ids.includes(6) || brand.service_ids.includes(5)) {
      categories["Lighting & Shades"].push(brand)
    } else if (brand.service_ids.includes(7)) {
      categories["Networking"].push(brand)
    } else if (brand.service_ids.includes(8)) {
      categories["Security"].push(brand)
    } else if (brand.service_ids.includes(4)) {
      categories["Outdoor"].push(brand)
    } else if (brand.service_ids.includes(3)) {
      categories["Theater"].push(brand)
    }
  })

  // Remove empty categories
  return Object.fromEntries(Object.entries(categories).filter(([_, brandList]) => brandList.length > 0))
}
