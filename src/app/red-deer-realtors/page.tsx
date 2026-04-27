import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Red Deer Realtors & Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find licensed Red Deer realtors and real estate agents in Central Alberta. Free REALTOR® matching service. Verified RECA-licensed agents only.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/red-deer-realtors',
  },
  openGraph: {
    title: 'Red Deer Realtors & Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find licensed Red Deer realtors and real estate agents in Central Alberta. Free REALTOR® matching service. Verified RECA-licensed agents only.',
    url: 'https://calgaryrealtorfinder.ca/red-deer-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RedDeerRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Alberta Cities', href: '/alberta-cities' },
    { label: 'Red Deer Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Red Deer', 52.2681, -113.8112),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Alberta Cities', url: 'https://calgaryrealtorfinder.ca/alberta-cities' },
      { name: 'Red Deer Realtors', url: 'https://calgaryrealtorfinder.ca/red-deer-realtors' },
    ]),
    faqSchema([
      {
        question: 'What is the average home price in Red Deer?',
        answer:
          "Red Deer's average residential sale price typically runs between $350,000 and $450,000 depending on the quarter, making it significantly more affordable than Calgary or Edmonton. Detached homes in established neighbourhoods like Bower, Fairview, and Clearview Ridge represent the bulk of transactions.",
      },
      {
        question: 'How many realtors work in Red Deer?',
        answer:
          "Approximately 67 licensed REALTORS® actively serve the Red Deer market. The smaller pool means neighbourhood specialization is especially important — the right agent will have direct experience with the specific streets and developments you're considering.",
      },
      {
        question: 'Is Red Deer a good place to invest in real estate?',
        answer:
          "Red Deer's central location, growing population, and lower entry prices make it an active market for investors. Proximity to both Calgary and Edmonton employment centres supports steady rental demand, particularly for single-family homes and smaller multi-family properties.",
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Realtors in Red Deer, Alberta
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Red Deer sits at the centre of Alberta's corridor between Calgary and Edmonton, with a
          market that reflects both cities' cycles but at significantly lower price points. We
          connect Red Deer buyers and sellers with RECA-licensed agents who know Central Alberta's
          unique market conditions.
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
