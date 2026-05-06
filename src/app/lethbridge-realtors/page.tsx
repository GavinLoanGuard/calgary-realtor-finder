import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Lethbridge Realtors & Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find licensed Lethbridge realtors and real estate agents in Southern Alberta. Free REALTOR® matching. Verified licensed agents only.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/lethbridge-realtors',
  },
  openGraph: {
    title: 'Lethbridge Realtors & Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find licensed Lethbridge realtors and real estate agents in Southern Alberta. Free REALTOR® matching. Verified licensed agents only.',
    url: 'https://calgaryrealtorfinder.ca/lethbridge-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function LethbridgeRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Alberta Cities', href: '/alberta-cities' },
    { label: 'Lethbridge Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Lethbridge', 49.6956, -112.8451),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Alberta Cities', url: 'https://calgaryrealtorfinder.ca/alberta-cities' },
      { name: 'Lethbridge Realtors', url: 'https://calgaryrealtorfinder.ca/lethbridge-realtors' },
    ]),
    faqSchema([
      {
        question: 'What neighbourhoods are most popular in Lethbridge?',
        answer:
          'West Lethbridge has seen the most new development and is popular with families. North Lethbridge offers more affordable entry points. South Lethbridge includes established neighbourhoods close to the university. Each area has different price dynamics and the right agent will know them specifically.',
      },
      {
        question: 'How is the Lethbridge real estate market performing?',
        answer:
          'Lethbridge has seen steady demand supported by the University of Lethbridge, a diversified economy including agriculture, healthcare, and education sectors, and continued in-migration from rural Southern Alberta. Price appreciation has been moderate compared to Calgary but consistent.',
      },
      {
        question: 'How many realtors are in Lethbridge?',
        answer:
          'Approximately 63 licensed REALTORS® serve the Lethbridge market. We match buyers and sellers with agents who have verified transaction history in your specific neighbourhood and price range.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Lethbridge, Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Lethbridge is Southern Alberta's largest city — a university town with a diverse economy,
          distinct coulée geography, and a real estate market that moves at its own pace. We connect
          Lethbridge buyers and sellers with licensed REALTORS® who understand the local market
          from the north side to the west side developments.
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
