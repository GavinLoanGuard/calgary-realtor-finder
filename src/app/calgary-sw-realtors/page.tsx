import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Calgary SW Realtors — Real Estate Agents in Southwest Calgary',
  description:
    'Find licensed realtors in Calgary SW. Connect with real estate agents who know Aspen Woods, Signal Hill, Cougar Ridge, and all Southwest Calgary neighbourhoods.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-sw-realtors',
  },
  openGraph: {
    title: 'Calgary SW Realtors — Real Estate Agents in Southwest Calgary',
    description:
      'Find licensed realtors in Calgary SW. Connect with real estate agents who know Aspen Woods, Signal Hill, Cougar Ridge, and all Southwest Calgary neighbourhoods.',
    url: 'https://calgaryrealtorfinder.ca/calgary-sw-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CalgarySWRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Calgary', href: '/calgary-realtors' },
    { label: 'SW Calgary Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary SW', 50.98, -114.18),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary', url: 'https://calgaryrealtorfinder.ca/calgary-realtors' },
      { name: 'SW Calgary Realtors', url: 'https://calgaryrealtorfinder.ca/calgary-sw-realtors' },
    ]),
    faqSchema([
      {
        question: 'What are the best communities in Calgary SW?',
        answer:
          "Aspen Woods is SW Calgary's prestige address — large lots, luxury builds, and proximity to Aspen Landing shopping. West Springs and Cougar Ridge offer excellent family environments at slightly lower price points. Signal Hill provides established options with mature trees and strong community infrastructure. Discovery Ridge appeals to buyers seeking nature access and privacy.",
      },
      {
        question: 'What does a home cost in Calgary SW?',
        answer:
          "Calgary SW has some of the city's highest average prices. Detached homes in Aspen Woods and West Springs regularly trade between $900,000 and $1.5M+. Signal Hill and Cougar Ridge offer more accessible options in the $700,000–$950,000 range. Townhomes in the area start around $450,000.",
      },
      {
        question: 'Why do buyers choose Calgary SW?',
        answer:
          "Quick access to the mountains via Highway 1, top-tier school catchments including some of Calgary's highest-rated public and private schools, and a prestige address factor make SW Calgary consistently competitive. The quadrant also benefits from some of Calgary's best retail and restaurant infrastructure.",
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Calgary SW — Southwest Calgary Real Estate Agents
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Southwest Calgary is home to some of the city's most prestigious addresses — from Aspen
          Woods and West Springs to Signal Hill and Cougar Ridge. The SW quadrant offers a range of
          price points from entry-level townhomes to luxury estates, all with quick access to the
          mountains via Highway 1.
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
