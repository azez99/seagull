"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function BrandsSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  // Hardcoded brand categories
  const brandCategories = [
    {
      name: "CONTROL SYSTEMS",
      brands: ["Control4", "Savant", "Crestron"],
    },
    {
      name: "VIDEO",
      brands: ["LG", "Sony", "Samsung", "Seura", "SunBrite"],
    },
    {
      name: "AUDIO",
      brands: [
        "Paradigm",
        "Anthem",
        "Origin Acoustics",
        "Focal",
        "Bowers & Wilkins",
        "Coastal Source",
        "Yamaha",
        "Marantz",
        "Leon",
        "James Loudspeaker",
        "Klipsch",
      ],
    },
    {
      name: "LIGHTING",
      brands: ["Lutron", "Control4", "Savant", "Crestron", "DMF"],
    },
    {
      name: "OUTDOOR",
      brands: ["WAC", "Coastal Source", "FX"],
    },
    {
      name: "SHADES",
      brands: ["Lutron", "Hunter Douglas", "SI", "Savant"],
    },
    {
      name: "NETWORKING",
      brands: ["Araknis", "Ruckus", "Cisco Meraki", "Eero"],
    },
    {
      name: "CAMERAS",
      brands: ["IC Realtime", "Avigilon", "Luma", "Verkada"],
    },
    {
      name: "ALARM SYSTEMS",
      brands: ["DSC Neo", "Qolsys"],
    },
    {
      name: "PERFORMANCE FURNITURE",
      brands: ["Salamander", "BDI"],
    },
  ]

  const toggleCategory = (categoryName: string) => {
    if (openCategory === categoryName) {
      setOpenCategory(null)
    } else {
      setOpenCategory(categoryName)
    }
  }

  // Function to convert brand name to kebab case for URL
  const getBrandUrl = (brandName: string) => {
    // Special case for SI
    if (brandName === "SI") {
      return "/brands/screen-innovations"
    }

    // Replace "&" with "and" and other special handling
    const normalizedName = brandName.replace(/&/g, "and").replace(/\s+/g, "-").toLowerCase()

    return `/brands/${normalizedName}`
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Our Brands</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
          {brandCategories.map((category) => (
            <div
              key={category.name}
              className="overflow-hidden border border-[rgba(255,202,119,0.5)] rounded-md md:self-start"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between px-8 py-3 bg-[#262016] text-[#ffe2b6] hover:bg-[#362e24] transition-colors font-medium"
              >
                <span>{category.name}</span>
                {openCategory === category.name ? (
                  <ChevronUp className="h-5 w-5 text-[#ffca77]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#ffca77]" />
                )}
              </button>

              {/* Brands list - shown when accordion is open */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCategory === category.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#1b1814] p-4 border-t border-[rgba(255,202,119,0.3)]">
                  <ul className={`grid ${category.brands.length > 6 ? "grid-cols-3" : "grid-cols-2"} gap-2`}>
                    {category.brands.map((brand) => (
                      <li key={brand} className="text-gray-300">
                        <Link href={getBrandUrl(brand)} className="hover:text-[#ffca77] transition-colors">
                          {brand}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
