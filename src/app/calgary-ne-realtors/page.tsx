import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Calgary NE Realtors — Real Estate Agents in Northeast Calgary',
  description:
    'Find licensed realtors in Calgary NE. Connect with real estate agents who know Saddle Ridge, Cornerstone, Redstone, and all Northeast Calgary neighbourhoods.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-ne-realtors',
  },
  openGraph: {
    title: 'Calgary NE Realtors — Real Estate Agents in Northeast Calgary',
    description:
      'Find licensed realtors in Calgary NE. Connect with real estate agents who know Saddle Ridge, Cornerstone, Redstone, and all Northeast Calgary neighbourhoods.',
    url: 'https://calgaryrealtorfinder.ca/calgary-ne-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CalgaryNERealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Calgary', href: '/calgary-realtors' },
    { label: 'NE Calgary Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary NE', 51.1215, -113.94),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary', url: 'https://calgaryrealtorfinder.ca/calgary-realtors' },
      { name: 'NE Calgary Realtors', url: 'https://calgaryrealtorfinder.ca/calgary-ne-realtors' },
    ]),
    faqSchema([
      {
        question: 'What are the best neighbourhoods in Calgary NE?',
        answer:
          'Saddle Ridge and Cornerstone are among the most active for new builds. Redstone, Cityscape, and Skyview Ranch offer slightly more established options. Taradale and Martindale provide more affordable entry points with good transit access. Each has distinct price points and community characteristics.',
      },
      {
        question: 'Is Calgary NE a good area to buy?',
        answer:
          "Calgary NE consistently offers some of the city's best value per square foot. Strong South Asian and Filipino community presence has created vibrant commercial corridors and community infrastructure. Transit access via the Green Line expansion is improving connectivity to downtown significantly.",
      },
      {
        question: 'What is the average home price in Calgary NE?',
        answer:
          'Detached homes in Calgary NE typically range from $500,000 to $700,000 depending on the neighbourhood and age of construction. Newer communities like Cornerstone and Redstone trend toward the higher end while established neighbourhoods like Taradale offer more affordable options.',
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Calgary NE — Northeast Calgary Real Estate Agents
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Calgary's Northeast quadrant is one of the city's fastest-growing areas — diverse,
          family-oriented, and home to some of Calgary's best value in new construction. From
          Saddle Ridge and Cornerstone to Redstone and Skyview Ranch, NE Calgary offers a wide
          range of entry points. We match buyers and sellers with agents who work these streets
          daily.
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
