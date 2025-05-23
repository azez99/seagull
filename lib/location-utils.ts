// Helper function to generate a service slug
export function generateServiceSlug(serviceName: string, locationName: string): string {
  const serviceSlug = serviceName.toLowerCase().replace(/\s+/g, "-")
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, "-")

  return `${serviceSlug}-in-${locationSlug}`
}

// Helper function to extract service and location from a slug
export function extractFromSlug(slug: string): { service: string; location: string } | null {
  // This assumes the format is "service-in-location"
  const parts = slug.split("-in-")

  if (parts.length === 2) {
    return {
      service: parts[0].replace(/-/g, " "),
      location: parts[1].replace(/-/g, " "),
    }
  }

  return null
}
