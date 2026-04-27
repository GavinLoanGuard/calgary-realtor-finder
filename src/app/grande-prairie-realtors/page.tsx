import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Grande Prairie Realtors & Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find licensed Grande Prairie realtors and real estate agents in Peace Country Alberta. Free REALTOR® matching. RECA-verified agents only.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/grande-prairie-realtors',
  },
  openGraph: {
    title: 'Grande Prairie Realtors & Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find licensed Grande Prairie realtors and real estate agents in Peace Country Alberta. Free REALTOR® matching. RECA-verified agents only.',
    url: 'https://calgaryrealtorfinder.ca/grande-prairie-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function GrandePrairieRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Alberta Cities', href: '/alberta-cities' },
    { label: 'Grande Prairie Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Grande Prairie', 55.1707, -118.7884),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Alberta Cities', url: 'https://calgaryrealtorfinder.ca/alberta-cities' },
      {
        name: 'Grande Prairie Realtors',
        url: 'https://calgaryrealtorfinder.ca/grande-prairie-realtors',
      },
    ]),
    faqSchema([
      {
        question: 'How does the energy sector affect Grande Prairie real estate?',
        answer:
          "Grande Prairie's market is more sensitive to oil and gas activity than southern Alberta cities. Strong energy prices typically correlate with increased buyer demand and price appreciation, while downturns can create buying opportunities. An experienced local agent will have navigated multiple cycles.",
      },
      {
        question: 'What are the best neighbourhoods in Grande Prairie?',
        answer:
          'Signature Falls, Whispering Ridge, and Crystal Landing are among the newer developments popular with families. Cobblestone and Patterson Place offer more established options. The right agent will match your budget and lifestyle with the right area.',
      },
      {
        question: 'How many realtors are active in Grande Prairie?',
        answer:
          'Approximately 41 licensed REALTORS® work the Grande Prairie market. Given the smaller pool, neighbourhood and property-type specialization varies — we match you with agents who have direct experience in your specific situation.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Grande Prairie, Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Grande Prairie is the commercial hub of Northwest Alberta and Peace Country — an
          energy-driven economy with strong demand for both residential and investment properties.
          We connect Grande Prairie buyers and sellers with RECA-licensed agents who know the local
          market's unique cycles.
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
