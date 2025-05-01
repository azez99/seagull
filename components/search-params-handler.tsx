"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function SearchParamsContent() {
  const searchParams = useSearchParams()
  // Use searchParams here
  return null
}

export function SearchParamsHandler() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsContent />
    </Suspense>
  )
}
