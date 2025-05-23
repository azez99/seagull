import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1b1814] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">404</h1>
      <h2 className="mt-3 text-2xl font-semibold text-white">Page Not Found</h2>
      <p className="mt-4 text-gray-400">Sorry, we couldn't find the page you're looking for.</p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-[#ffca77] hover:bg-[#ffca77]/80 px-6 py-3 text-sm font-medium text-black shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
