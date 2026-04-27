import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Top Realtors in Calgary 2026 | Calgary Realtor Finder',
  description:
    'Find top-rated Calgary realtors with verified reviews and transaction history. Our featured agents are RECA-licensed and independently vetted. Free matching service.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/top-realtors-calgary',
  },
  openGraph: {
    title: 'Top Realtors in Calgary 2026 | Calgary Realtor Finder',
    description:
      'Find top-rated Calgary realtors with verified reviews and transaction history. Our featured agents are RECA-licensed and independently vetted. Free matching service.',
    url: 'https://calgaryrealtorfinder.ca/top-realtors-calgary',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function TopRealtorsCalgaryPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Top Calgary Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary', 51.0447, -114.0719),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      {
        name: 'Top Calgary Realtors',
        url: 'https://calgaryrealtorfinder.ca/top-realtors-calgary',
      },
    ]),
    faqSchema([
      {
        question: 'Who are the top realtors in Calgary in 2026?',
        answer:
          'Rather than a single ranked list — which can reflect marketing spend rather than actual performance — we match buyers and sellers with agents who have verifiable closed transactions in their specific neighbourhood. The top realtor for a Mahogany lake home purchase is a different agent than the top realtor for a Beltline condo sale.',
      },
      {
        question: 'How are Calgary realtors ranked?',
        answer:
          "No independent body officially ranks Calgary realtors. Awards and rankings from brokerages reflect internal metrics. The most reliable indicators of realtor quality are RECA license standing, neighbourhood-specific transaction volume, verified client reviews, and days on market relative to list price.",
      },
      {
        question: 'What makes a top Calgary realtor?',
        answer:
          'Consistent neighbourhood expertise, strong negotiation outcomes (sale price vs. list price ratio), fast response times, transparent communication, and a track record of repeat and referral clients. We look for all of these before featuring any agent on our platform.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Top Realtors in Calgary, Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Calgary has over 7,400 licensed REALTORS® — finding the ones who are genuinely
          exceptional in your specific neighbourhood and price range requires more than a Google
          search. Our featured agents are independently vetted for RECA license status, brokerage
          standing, neighbourhood transaction history, and client satisfaction.
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
