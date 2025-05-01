"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Get form values
  const fullName = formData.get("fullName")
  const phone = formData.get("phone")
  const email = formData.get("email")
  const address = formData.get("address")
  const city = formData.get("city")
  const zipCode = formData.get("zipCode")
  const serviceDescription = formData.get("serviceDescription")

  // In a real application, you would:
  // 1. Validate the data
  // 2. Store it in a database
  // 3. Send notification emails
  // 4. etc.

  console.log({
    fullName,
    phone,
    email,
    address: `${address}, ${city}, ${zipCode}`,
    serviceDescription,
  })

  // Return success
  return { success: true }
}
