import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { organizationSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: "About Calgary Realtor Finder | Alberta's Independent Realtor Directory",
  description:
    'Calgary Realtor Finder connects Alberta home buyers and sellers with RECA-licensed REALTORS® at no cost. Learn about our independent matching service.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/about',
  },
  openGraph: {
    title: "About Calgary Realtor Finder | Alberta's Independent Realtor Directory",
    description:
      'Calgary Realtor Finder connects Alberta home buyers and sellers with RECA-licensed REALTORS® at no cost. Learn about our independent matching service.',
    url: 'https://calgaryrealtorfinder.ca/about',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About' },
  ]

  const schema = JSON.stringify([
    organizationSchema,
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'About', url: 'https://calgaryrealtorfinder.ca/about' },
    ]),
    faqSchema([
      {
        question: 'How does Calgary Realtor Finder make money?',
        answer:
          'When a buyer or seller we introduce closes a transaction with a matched agent, we receive a referral fee from the agent — not from you. You pay nothing. There is no fee, no subscription, and no obligation.',
      },
      {
        question: 'Is Calgary Realtor Finder a real estate brokerage?',
        answer:
          'No. Calgary Realtor Finder is an independent directory and referral service. We are not licensed to trade in real estate. Our featured partner realtor, Nathan Koenigsberg, is a licensed REALTOR® with RE/MAX First, regulated by RECA.',
      },
      {
        question: 'How do you vet the realtors you feature?',
        answer:
          'We verify RECA license status, brokerage standing, and recent transaction history for every agent we feature. We also review client feedback and neighbourhood-specific activity before making any introduction.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          About Calgary Realtor Finder
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Calgary Realtor Finder is an independent directory and matching service connecting
          Alberta home buyers and sellers with licensed, vetted REALTORS®. We are not a brokerage.
          We do not sell leads. We introduce you to one carefully matched agent — free of charge,
          with no obligation to proceed.
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
