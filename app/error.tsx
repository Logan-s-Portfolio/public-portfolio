'use client'

import { useEffect } from 'react'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50/30 via-white to-terracotta-50/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Heading as="h1" variant="display-2xl" className="text-neutral-900 mb-4">
            Oops!
          </Heading>
          <Heading as="h2" variant="h2" className="text-neutral-700 mb-6">
            Something went wrong
          </Heading>
          <Text variant="body" className="text-neutral-600 mb-8">
            We encountered an unexpected error. Please try again or contact me if the problem persists.
          </Text>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 bg-terracotta-600 text-white shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 active:shadow-sm h-12 px-6 text-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
