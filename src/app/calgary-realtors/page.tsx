import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Best Calgary Realtors & Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find the best Calgary realtors and real estate agents. Compare licensed REALTORS® by neighbourhood, read verified reviews, and get matched for free. No obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-realtors',
  },
  openGraph: {
    title: 'Best Calgary Realtors & Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find the best Calgary realtors and real estate agents. Compare licensed REALTORS® by neighbourhood, read verified reviews, and get matched for free. No obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CalgaryRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Calgary Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary', 51.0447, -114.0719),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary Realtors', url: 'https://calgaryrealtorfinder.ca/calgary-realtors' },
    ]),
    faqSchema([
      {
        question: 'Who are the best realtors in Calgary?',
        answer:
          'The best Calgary realtor depends on your specific neighbourhood and transaction type. Rather than a single ranked list, we match buyers and sellers with RECA-licensed agents who have verifiable closed transactions in your specific area. Use our matching form to get introduced to the right agent for your situation.',
      },
      {
        question: 'How do I find a reputable Calgary real estate agent?',
        answer:
          "Start by verifying their RECA license on the Real Estate Council of Alberta's public registry. Then look for neighbourhood-specific transaction history — an agent with 10 closed deals in your target area in the last two years is more valuable than a high-volume agent who works across the entire city.",
      },
      {
        question: 'What areas do Calgary realtors serve?',
        answer:
          "Calgary is divided into four main quadrants — NE, NW, SW, SE — plus City Centre. Most experienced agents specialize in one or two quadrants plus surrounding communities like Airdrie, Cochrane, and Okotoks.",
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Best Realtors in Calgary, Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Calgary has over 7,400 licensed REALTORS® — finding the right one for your neighbourhood,
          price range, and transaction type is what we do. Whether you're buying your first home in
          Mahogany or selling a revenue property in the Beltline, we'll match you with a local
          expert who knows that market specifically.
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
