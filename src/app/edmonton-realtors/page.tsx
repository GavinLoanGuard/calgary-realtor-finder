import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Best Edmonton Realtors & Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find licensed Edmonton realtors and real estate agents. Get matched with a vetted REALTOR® who knows your Edmonton neighbourhood. Free, no obligation matching service.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/edmonton-realtors',
  },
  openGraph: {
    title: 'Best Edmonton Realtors & Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find licensed Edmonton realtors and real estate agents. Get matched with a vetted REALTOR® who knows your Edmonton neighbourhood. Free, no obligation matching service.',
    url: 'https://calgaryrealtorfinder.ca/edmonton-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function EdmontonRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Edmonton Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Edmonton', 53.5461, -113.4938),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Edmonton Realtors', url: 'https://calgaryrealtorfinder.ca/edmonton-realtors' },
    ]),
    faqSchema([
      {
        question: 'How many realtors are in Edmonton?',
        answer:
          'The Edmonton metropolitan area has approximately 428 licensed REALTORS® actively working the market. As with Calgary, the key is finding one with specific expertise in your neighbourhood and price range rather than simply the highest volume.',
      },
      {
        question: 'Is the Edmonton real estate market different from Calgary?',
        answer:
          "Yes. Edmonton generally has lower price points, a stronger rental and investor market, and different seasonal patterns. The north-south divide in Edmonton neighbourhoods is significant — agents who specialize in the river valley communities often have different profiles than those working the newer south suburbs.",
      },
      {
        question: 'How do I verify a realtor is licensed in Edmonton?',
        answer:
          'All Alberta REALTORS® are licensed through RECA regardless of city. Search the RECA public registry by name to verify current license status, brokerage affiliation, and any disciplinary history.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Best Realtors in Edmonton, Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Edmonton's real estate market operates differently from Calgary's — slower seasonal
          cycles, stronger condo market in the core, and distinct neighbourhood dynamics from
          Glenora to Windermere. We connect Edmonton buyers and sellers with licensed REALTORS®
          who specialize in your specific area.
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
