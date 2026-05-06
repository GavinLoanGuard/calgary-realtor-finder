import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import CityCard from '@/components/CityCard'
import { breadcrumbSchema } from '@/data/schema'
import { albertaCities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Find a Realtor Across Alberta | Calgary Realtor Finder',
  description:
    'Find licensed realtors in every major Alberta city. Calgary, Edmonton, Red Deer, Lethbridge, Grande Prairie and more. Free matching, no obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/alberta-cities',
  },
  openGraph: {
    title: 'Find a Realtor Across Alberta | Calgary Realtor Finder',
    description:
      'Find licensed realtors in every major Alberta city. Calgary, Edmonton, Red Deer, Lethbridge, Grande Prairie and more. Free matching, no obligation.',
    url: 'https://calgaryrealtorfinder.ca/alberta-cities',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function AlbertaCitiesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Alberta Cities' },
  ]

  const schema = JSON.stringify([
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Alberta Cities', url: 'https://calgaryrealtorfinder.ca/alberta-cities' },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Find a Realtor Anywhere in Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          We connect buyers and sellers with licensed REALTORS® across every major Alberta market.
          Select your city below to find verified agents in your area.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {albertaCities.map((city) => (
            <CityCard
              key={city.slug}
              name={city.name}
              slug={city.slug}
              region={city.region}
              agentCount={city.agentCount}
            />
          ))}
        </div>
      </PageLayout>
    </>
  )
}
