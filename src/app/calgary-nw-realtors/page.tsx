import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Calgary NW Realtors — Real Estate Agents in Northwest Calgary',
  description:
    'Find licensed realtors in Calgary NW. Connect with real estate agents who know Tuscany, Evanston, Nolan Hill, and all Northwest Calgary neighbourhoods.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-nw-realtors',
  },
  openGraph: {
    title: 'Calgary NW Realtors — Real Estate Agents in Northwest Calgary',
    description:
      'Find licensed realtors in Calgary NW. Connect with real estate agents who know Tuscany, Evanston, Nolan Hill, and all Northwest Calgary neighbourhoods.',
    url: 'https://calgaryrealtorfinder.ca/calgary-nw-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CalgaryNWRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Calgary', href: '/calgary-realtors' },
    { label: 'NW Calgary Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary NW', 51.134, -114.17),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary', url: 'https://calgaryrealtorfinder.ca/calgary-realtors' },
      { name: 'NW Calgary Realtors', url: 'https://calgaryrealtorfinder.ca/calgary-nw-realtors' },
    ]),
    faqSchema([
      {
        question: 'What are the most popular neighbourhoods in Calgary NW?',
        answer:
          'Tuscany is consistently one of Calgary\'s most desirable communities for families — established, treed, and close to the mountains. Evanston and Sherwood offer newer construction with strong amenities. Rocky Ridge and Royal Oak provide mid-range options with excellent views. Nolan Hill and Kincora appeal to buyers seeking newer builds at slightly lower price points.',
      },
      {
        question: 'What is the average home price in Calgary NW?',
        answer:
          'Detached homes in Calgary NW typically range from $600,000 to $900,000+ depending on the community. Tuscany and Rocky Ridge trend toward the higher end; Evanston and Sherwood offer more accessible entry points in the $600,000–$750,000 range.',
      },
      {
        question: 'Is Calgary NW good for families?',
        answer:
          "NW Calgary is consistently rated among the city's best areas for families. Strong public and Catholic school catchments, proximity to the mountains and Nose Hill Park, and well-established community associations make it a perennial top choice for buyers with children.",
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Calgary NW — Northwest Calgary Real Estate Agents
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Calgary's Northwest quadrant runs from the established hillside communities of Tuscany
          and Rocky Ridge to the newer developments of Evanston, Nolan Hill, and Sherwood. NW
          Calgary is known for its proximity to the mountains, strong school catchments, and some
          of Calgary's most sought-after family neighbourhoods.
        </p>
        <div className="mt-12 p-8 bg-charcoal/5 rounded-sm border border-charcoal/10">
          <p className="text-charcoal/40 text-sm text-center">
            [ Full content coming in Session 7 ]
          </p>
        </div>
      </PageLayout>
    </>
  )
}
