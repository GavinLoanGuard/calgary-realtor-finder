import { nathan } from './nathan'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Calgary Realtor Finder',
  url: 'https://calgaryrealtorfinder.ca',
  logo: 'https://calgaryrealtorfinder.ca/logo.png',
  description:
    "Alberta's independent realtor matching service connecting home buyers and sellers with licensed REALTORS®.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-403-536-9024',
    contactType: 'customer service',
  },
}

export const nathanSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: nathan.name,
  url: nathan.website,
  image: `https://calgaryrealtorfinder.ca${nathan.photo}`,
  worksFor: {
    '@type': 'Organization',
    name: nathan.brokerage,
    address: nathan.brokerageAddress,
  },
  areaServed: nathan.areasServed.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  hasCredential: 'RECA Licensed REALTOR®',
  telephone: nathan.phone,
  email: nathan.email,
  description: nathan.bio,
}

export function localBusinessSchema(city: string, lat: number, lng: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Calgary Realtor Finder — ${city}`,
    url: 'https://calgaryrealtorfinder.ca',
    areaServed: city,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    },
    priceRange: 'Free',
    description: `Find licensed REALTORS® in ${city}, Alberta.`,
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
