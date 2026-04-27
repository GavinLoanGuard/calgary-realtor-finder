import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Calgary SE Realtors — Real Estate Agents in Southeast Calgary',
  description:
    'Find licensed realtors in Calgary SE. Connect with real estate agents who know Mahogany, Auburn Bay, McKenzie Towne, and all Southeast Calgary neighbourhoods.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-se-realtors',
  },
  openGraph: {
    title: 'Calgary SE Realtors — Real Estate Agents in Southeast Calgary',
    description:
      'Find licensed realtors in Calgary SE. Connect with real estate agents who know Mahogany, Auburn Bay, McKenzie Towne, and all Southeast Calgary neighbourhoods.',
    url: 'https://calgaryrealtorfinder.ca/calgary-se-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CalgarySERealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Calgary', href: '/calgary-realtors' },
    { label: 'SE Calgary Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary SE', 50.92, -113.95),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary', url: 'https://calgaryrealtorfinder.ca/calgary-realtors' },
      { name: 'SE Calgary Realtors', url: 'https://calgaryrealtorfinder.ca/calgary-se-realtors' },
    ]),
    faqSchema([
      {
        question: "What are Calgary SE's most popular neighbourhoods?",
        answer:
          "Mahogany is consistently one of Calgary's top-selling communities — a lake community with resort-style amenities that commands a premium. Auburn Bay offers similar lake access at slightly lower price points. McKenzie Towne is an established new-urbanist community with walkable main street character. Cranston and Seton are newer developments with strong amenities including the South Health Campus hospital.",
      },
      {
        question: 'What is the average home price in Calgary SE?',
        answer:
          'Mahogany and Auburn Bay detached homes typically range from $700,000 to $1.1M+. McKenzie Towne and Cranston offer more accessible options from $550,000 to $800,000. Seton and newer communities like Rangeview provide entry-level options starting around $500,000.',
      },
      {
        question: 'Are Calgary SE lake communities worth the premium?',
        answer:
          'Mahogany and Auburn Bay consistently command 10–15% premiums over comparable non-lake communities. For buyers who use the lake amenities, the lifestyle value is significant. For investors, lake community properties have historically shown stronger appreciation and faster days on market.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Calgary SE — Southeast Calgary Real Estate Agents
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Southeast Calgary is built around water — Mahogany and Auburn Bay are two of Canada's
          most popular lake communities, while the Bow River corridor defines the eastern edge. The
          SE quadrant mixes established communities like McKenzie Towne and Cranston with newer
          developments in Rangeview and Hotchkiss.
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
