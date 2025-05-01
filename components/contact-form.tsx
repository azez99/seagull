"use client"

import { useState, useEffect } from "react"
import { submitContactForm } from "@/app/actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" })
  const [captchaError, setCaptchaError] = useState("")

  // Generate a new CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptcha({ num1, num2, answer: "" })
    setCaptchaError("")
  }

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha()
  }, [])

  async function handleSubmit(formData: FormData) {
    // Validate CAPTCHA first
    const userAnswer = Number.parseInt(captcha.answer)
    const correctAnswer = captcha.num1 + captcha.num2

    if (isNaN(userAnswer) || userAnswer !== correctAnswer) {
      setCaptchaError("Please solve the math problem correctly")
      return
    }

    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const result = await submitContactForm(formData)
      setFormStatus({
        success: true,
        message: "Thank you for your message. We'll be in touch soon!",
      })
      // Reset form and generate new CAPTCHA
      const form = document.getElementById("contactForm") as HTMLFormElement
      form.reset()
      generateCaptcha()
    } catch (error) {
      setFormStatus({
        success: false,
        message: "There was an error submitting your form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#1b1814] border border-[#ffca77]/30 rounded-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

      {formStatus && (
        <div
          className={`mb-6 p-4 rounded-md ${formStatus.success ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"}`}
        >
          {formStatus.message}
        </div>
      )}

      <form id="contactForm" action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-[#ffe2b6] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#ffe2b6] mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[#ffe2b6] mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-[#ffe2b6] mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
            placeholder="Street Address"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
              placeholder="City"
            />
          </div>
          <div>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
              placeholder="ZIP Code"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceDescription" className="block text-[#ffe2b6] mb-1">
            Service Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="serviceDescription"
            name="serviceDescription"
            required
            rows={5}
            className="w-full px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77] resize-none"
            placeholder="Tell us about your project or what services you're interested in..."
          ></textarea>
        </div>

        {/* CAPTCHA Section */}
        <div>
          <label htmlFor="captcha" className="block text-[#ffe2b6] mb-1">
            Verification <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <div className="bg-[#262016] border border-[#ffca77]/30 rounded-md px-4 py-2 text-white">
              {captcha.num1} + {captcha.num2} = ?
            </div>
            <input
              type="number"
              id="captcha"
              name="captcha"
              value={captcha.answer}
              onChange={(e) => {
                setCaptcha({ ...captcha, answer: e.target.value })
                setCaptchaError("")
              }}
              required
              className="w-20 px-4 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-white focus:outline-none focus:border-[#ffca77]"
            />
            <button
              type="button"
              onClick={generateCaptcha}
              className="px-3 py-2 bg-[#262016] border border-[#ffca77]/30 rounded-md text-[#ffe2b6] hover:bg-[#362e24]"
            >
              Refresh
            </button>
          </div>
          {captchaError && <p className="text-red-500 text-sm mt-1">{captchaError}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ffca77] hover:bg-[#ffca77]/80 text-black font-medium py-3 rounded-md transition-colors disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  )
}
