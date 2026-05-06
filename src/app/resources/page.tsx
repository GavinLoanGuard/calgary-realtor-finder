import { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { breadcrumbSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Alberta Real Estate Resources & Guides | Calgary Realtor Finder',
  description:
    'Free Alberta real estate guides for buyers and sellers. How to choose a realtor, first time buyer tips, Calgary market updates, and more.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/resources',
  },
  openGraph: {
    title: 'Alberta Real Estate Resources & Guides | Calgary Realtor Finder',
    description:
      'Free Alberta real estate guides for buyers and sellers. How to choose a realtor, first time buyer tips, Calgary market updates, and more.',
    url: 'https://calgaryrealtorfinder.ca/resources',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

const resourceCards = [
  {
    title: 'How to Choose a Realtor in Calgary',
    description:
      'What to look for, what to ask, how to verify Alberta real estate licensing, and red flags to avoid when choosing a Calgary agent.',
    href: '/how-to-choose-a-realtor-calgary',
    label: 'Read the guide →',
  },
  {
    title: 'Top Realtors in Calgary 2026',
    description:
      'Our independently vetted featured agents — verified for Alberta real estate licence standing, neighbourhood transaction history, and client satisfaction.',
    href: '/top-realtors-calgary',
    label: 'View top agents →',
  },
  {
    title: 'Get Matched With a REALTOR®',
    description:
      "Fill out our quick form and we'll introduce you to the right Calgary REALTOR® for your neighbourhood and price range. Free, no obligation.",
    href: '/contact',
    label: 'Start matching →',
  },
]

export default function ResourcesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources' },
  ]

  const schema = JSON.stringify([
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Resources', url: 'https://calgaryrealtorfinder.ca/resources' },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Alberta Real Estate Resources
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Guides, market updates, and practical advice for Alberta home buyers and sellers.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8">
          {resourceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block bg-white border border-charcoal/10 rounded-sm p-6 hover:border-accent hover:shadow-md transition-all group"
            >
              <h2 className="font-playfair text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {card.title}
              </h2>
              <p className="font-inter text-charcoal/60 text-sm mt-2 leading-relaxed">
                {card.description}
              </p>
              <p className="font-inter text-accent text-sm font-medium mt-4">{card.label}</p>
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  )
}
