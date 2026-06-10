import type { Metadata } from 'next'
import { Suspense } from 'react'
import FindARealtorPage from './FindARealtorPage'

export const metadata: Metadata = {
  title: 'Find the Best Calgary Realtor | Calgary Realtor Finder',
  description:
    'Free realtor matching service for Calgary buyers and sellers. Get matched with a top-rated local agent in minutes. No obligation, no cost.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/find-a-realtor',
  },
  openGraph: {
    title: 'Find the Best Calgary Realtor | Calgary Realtor Finder',
    description:
      'Free realtor matching service for Calgary buyers and sellers. Get matched with a top-rated local agent in minutes. No obligation, no cost.',
    url: 'https://calgaryrealtorfinder.ca/find-a-realtor',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Calgary Realtor Finder',
  description:
    'Free realtor matching service for Calgary buyers and sellers. Independent, neutral platform matching you with pre-vetted local Calgary realtors.',
  url: 'https://calgaryrealtorfinder.ca',
  logo: 'https://calgaryrealtorfinder.ca/logo.png',
  image: 'https://calgaryrealtorfinder.ca/og-default.png',
  telephone: '+1-403-XXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: {
    '@type': 'City',
    name: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  serviceType: 'Real Estate Agent Matching',
  priceRange: 'Free',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <FindARealtorPage />
      </Suspense>
    </>
  )
}
