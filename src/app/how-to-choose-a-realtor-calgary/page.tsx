import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'How to Choose a Realtor in Calgary | Calgary Realtor Finder Guide',
  description:
    'A practical guide to choosing the right Calgary realtor. What to look for, questions to ask, how to verify RECA licensing, and red flags to avoid.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/how-to-choose-a-realtor-calgary',
  },
  openGraph: {
    title: 'How to Choose a Realtor in Calgary | Calgary Realtor Finder Guide',
    description:
      'A practical guide to choosing the right Calgary realtor. What to look for, questions to ask, how to verify RECA licensing, and red flags to avoid.',
    url: 'https://calgaryrealtorfinder.ca/how-to-choose-a-realtor-calgary',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function HowToChooseRealtorPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'How to Choose a Realtor in Calgary' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary', 51.0447, -114.0719),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Resources', url: 'https://calgaryrealtorfinder.ca/resources' },
      {
        name: 'How to Choose a Realtor in Calgary',
        url: 'https://calgaryrealtorfinder.ca/how-to-choose-a-realtor-calgary',
      },
    ]),
    faqSchema([
      {
        question: 'What should I look for in a Calgary realtor?',
        answer:
          'Three things matter most: current RECA licensing (verifiable on the RECA public registry), neighbourhood-specific transaction history in your target area, and communication style. A great agent for McKenzie Towne may not be the right fit for Tuscany — local expertise at the neighbourhood level matters more than total volume.',
      },
      {
        question: 'What questions should I ask a realtor before hiring them?',
        answer:
          "Ask how many transactions they've closed in your specific neighbourhood in the last 12 months. Ask what their average days on market is for listings. Ask how they communicate — phone, text, email — and how quickly they respond. Ask for references from clients in your price range. Ask whether they work alone or with a team, and who you'll actually be dealing with.",
      },
      {
        question: "How do I verify a Calgary realtor's license?",
        answer:
          "Visit the RECA public registry at reca.ca and search by the agent's name. You'll see their current license status, brokerage affiliation, license type, and any disciplinary history. Every agent we feature has been verified through this registry before being introduced.",
      },
      {
        question: 'What are red flags when choosing a Calgary realtor?',
        answer:
          'Be cautious of agents who claim to serve all of Calgary without neighbourhood specialization, agents who pressure you to make quick decisions, agents who suggest listing prices significantly higher than comparable sales support, agents who are slow to respond during the initial introduction phase, and agents who cannot provide references from recent transactions in your area.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          How to Choose a Realtor in Calgary
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Choosing the right Calgary REALTOR® is one of the most important financial decisions
          you'll make. This guide covers what to look for, what to ask, how to verify credentials,
          and what separates a great agent from an average one in the Calgary market specifically.
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
