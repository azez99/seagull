import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404</h1>
      <h2 className="mt-3 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the page you're looking for.</p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
