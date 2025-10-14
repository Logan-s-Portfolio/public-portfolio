import Link from 'next/link'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50/30 via-white to-terracotta-50/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Heading as="h1" variant="display-2xl" className="text-neutral-900 mb-4">
            404
          </Heading>
          <Heading as="h2" variant="h2" className="text-neutral-700 mb-6">
            Page Not Found
          </Heading>
          <Text variant="body" className="text-neutral-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </Text>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 bg-terracotta-600 text-white shadow-sm hover:bg-terracotta-700 hover:shadow-md active:bg-terracotta-800 active:shadow-sm h-12 px-6 text-lg"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-inter font-medium rounded-md transition-colors transition-shadow duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-600 focus-visible:ring-offset-2 border-2 border-terracotta-600 text-terracotta-600 bg-white shadow-sm hover:bg-terracotta-50 hover:shadow-md active:bg-terracotta-100 active:shadow-sm h-12 px-6 text-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}
