import { NextResponse } from "next/server"
import servicesData from "@/lib/services.json"

export async function GET() {
  try {
    // Return the services data
    return NextResponse.json(servicesData)
  } catch (error) {
    console.error("Error fetching services:", error)
    return NextResponse.json({ error: "Failed to fetch services data" }, { status: 500 })
  }
}
