export const services = [
  {
    id: "home-theater",
    name: "Home Theater",
    description: "Immersive cinema experiences with premium audio and video technology",
    image: "/home-theater-system.png",
    features: ["4K/8K Video", "Dolby Atmos Audio", "Custom Seating", "Automated Controls"],
  },
  {
    id: "whole-home-audio",
    name: "Whole Home Audio",
    description: "Multi-room audio systems for seamless music throughout your home",
    image: "/whole-home-audio.png",
    features: ["Multi-Zone Control", "Streaming Integration", "In-Ceiling Speakers", "Outdoor Audio"],
  },
  {
    id: "lighting-control",
    name: "Lighting Control",
    description: "Smart lighting solutions for ambiance, security, and energy efficiency",
    image: "/placeholder.svg?height=400&width=600&query=smart lighting control system",
    features: ["Automated Scenes", "Daylight Harvesting", "Security Integration", "Energy Savings"],
  },
  {
    id: "motorized-shades",
    name: "Motorized Shades",
    description: "Automated window treatments for privacy, comfort, and energy efficiency",
    image: "/placeholder.svg?height=400&width=600&query=motorized window shades",
    features: ["Solar Integration", "Privacy Control", "Energy Efficiency", "Smart Scheduling"],
  },
  {
    id: "security-systems",
    name: "Security Systems",
    description: "Comprehensive security solutions with cameras, alarms, and access control",
    image: "/placeholder.svg?height=400&width=600&query=home security camera system",
    features: ["HD Cameras", "Smart Alerts", "Access Control", "Remote Monitoring"],
  },
  {
    id: "networking",
    name: "Networking",
    description: "Robust network infrastructure for reliable connectivity throughout your property",
    image: "/placeholder.svg?height=400&width=600&query=home network infrastructure",
    features: ["Wi-Fi 6E", "Fiber Optic", "Network Security", "Enterprise Grade"],
  },
  {
    id: "outdoor-entertainment",
    name: "Outdoor Entertainment",
    description: "Weather-resistant audio and video systems for outdoor living spaces",
    image: "/placeholder.svg?height=400&width=600&query=outdoor entertainment system",
    features: ["Weather Resistant", "Landscape Integration", "Pool Audio", "Outdoor TV"],
  },
  {
    id: "climate-control",
    name: "Climate Control",
    description: "Smart HVAC integration for optimal comfort and energy efficiency",
    image: "/placeholder.svg?height=400&width=600&query=smart thermostat climate control",
    features: ["Zone Control", "Energy Optimization", "Remote Access", "Smart Scheduling"],
  },
]

export function getServiceByName(name: string) {
  return services.find(
    (service) =>
      service.name.toLowerCase() === name.toLowerCase() || service.id === name.toLowerCase().replace(/\s+/g, "-"),
  )
}

export function getAllServices() {
  return services
}
