import { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'
import { nathan } from '@/data/nathan'

export const metadata: Metadata = {
  title: 'Top Realtors in Calgary 2026 | Calgary Realtor Finder',
  description:
    'Find top-rated Calgary realtors with verified reviews and transaction history. Featured agents are RECA-licensed and independently vetted. Free matching.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/top-realtors-calgary',
  },
  openGraph: {
    title: 'Top Realtors in Calgary 2026 | Calgary Realtor Finder',
    description:
      'Find top-rated Calgary realtors with verified reviews and transaction history. Featured agents are RECA-licensed and independently vetted. Free matching.',
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

  const verificationSteps = [
    {
      number: '01',
      title: 'RECA License Verification',
      body: 'We confirm active license status, license type, and brokerage affiliation through the RECA public registry. Any disciplinary history is reviewed.',
    },
    {
      number: '02',
      title: 'Neighbourhood Transaction History',
      body: 'We look at closed transactions in specific Calgary communities within the last 24 months — not total career volume, but recent local activity.',
    },
    {
      number: '03',
      title: 'Client Satisfaction',
      body: 'We review verified client feedback from multiple sources. We look for patterns in reviews — consistency of communication, negotiation outcomes, post-close follow-through.',
    },
    {
      number: '04',
      title: 'Market Performance Metrics',
      body: 'We examine sale-to-list price ratios and days on market for recent listings — the most objective indicators of agent performance in any market condition.',
    },
  ]

  const quadrantBreakdown = [
    {
      quadrant: 'Calgary NE',
      href: '/calgary-ne-realtors',
      communities: 'Saddle Ridge, Cornerstone, Redstone, Cityscape, Skyview Ranch',
      note: "Top NE agents specialize in new construction, first-time buyers, and the area's diverse community dynamics.",
    },
    {
      quadrant: 'Calgary NW',
      href: '/calgary-nw-realtors',
      communities: 'Tuscany, Evanston, Rocky Ridge, Nolan Hill, Sherwood',
      note: 'Top NW agents understand the mountain-proximity premium and strong school catchment values that drive this market.',
    },
    {
      quadrant: 'Calgary SW',
      href: '/calgary-sw-realtors',
      communities: 'Aspen Woods, West Springs, Signal Hill, Cougar Ridge, Discovery Ridge',
      note: 'Top SW agents navigate the luxury end of the Calgary market, where presentation and pricing strategy have outsized impact.',
    },
    {
      quadrant: 'Calgary SE',
      href: '/calgary-se-realtors',
      communities: 'Mahogany, Auburn Bay, McKenzie Towne, Cranston, Seton',
      note: 'Top SE agents know the lake community premium inside out and understand why Mahogany commands what it does.',
    },
  ]

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

        <div className="mt-12 space-y-10">
          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <h2 className="font-playfair text-2xl font-bold text-primary">
              What Makes a Top Calgary Realtor in 2026
            </h2>
            <p>
              Calgary&apos;s real estate market in 2026 rewards agents with deep neighbourhood
              expertise, strong negotiation skills, and the kind of local knowledge that only comes
              from years of active trading in specific communities. The top Calgary REALTORS®
              aren&apos;t necessarily the ones with the biggest advertising budgets or the most Google
              reviews — they&apos;re the ones whose clients come back and refer their friends.
            </p>
            <p>
              RECA data shows over 7,400 licensed REALTORS® active in the Calgary metropolitan
              area. Of those, a relatively small percentage account for the majority of transactions
              in any given neighbourhood. Finding those agents — the ones with concentrated
              expertise in your specific area and price range — is exactly what our matching service
              does.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              How We Identify Top Calgary Real Estate Agents
            </h2>
            <p>Our verification process for featured agents covers four areas:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {verificationSteps.map((item) => (
                <div
                  key={item.number}
                  className="border border-charcoal/10 rounded-sm p-6 bg-white"
                >
                  <p className="font-playfair text-3xl font-bold text-accent/30">{item.number}</p>
                  <p className="font-playfair text-lg font-semibold text-primary mt-3">
                    {item.title}
                  </p>
                  <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="font-playfair text-2xl font-bold text-primary">
              Top Realtors by Calgary Neighbourhood
            </h2>
            <p>
              Rather than a single ranked list — which often reflects marketing spend rather than
              actual performance — we match buyers and sellers with the best available agent for
              their specific situation. The top realtor for a first-time buyer in Saddle Ridge is a
              different agent than the top realtor for a luxury seller in Aspen Woods. Here&apos;s a
              breakdown by quadrant:
            </p>

            <div className="space-y-4 not-prose">
              {quadrantBreakdown.map((q) => (
                <Link
                  key={q.quadrant}
                  href={q.href}
                  className="block border border-charcoal/10 rounded-sm p-6 bg-white hover:border-accent hover:shadow-md transition group"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-playfair text-xl font-bold text-primary group-hover:text-accent transition">
                      {q.quadrant}
                    </p>
                    <span className="text-accent text-sm opacity-0 group-hover:opacity-100 transition">
                      Find top {q.quadrant} agents →
                    </span>
                  </div>
                  <p className="text-charcoal/50 text-xs uppercase tracking-widest mt-2">
                    {q.communities}
                  </p>
                  <p className="text-charcoal/60 text-sm mt-3 leading-relaxed">{q.note}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Nathan featured */}
          <div className="border border-accent/20 rounded-sm p-8 bg-accent/5">
            <p className="text-accent text-xs uppercase tracking-widest font-medium">
              Our Featured Top Calgary REALTOR®
            </p>
            <p className="font-playfair text-2xl font-bold text-primary mt-2">{nathan.name}</p>
            <p className="text-charcoal/60 text-sm mt-1">
              {nathan.brokerage} · RECA #{nathan.licenseNumber} · {nathan.yearsExperience} years
              serving Calgary
            </p>
            <p className="text-charcoal/70 text-sm mt-4 leading-relaxed max-w-lg">{nathan.bio}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {nathan.areasServed.map((area) => (
                <span
                  key={area}
                  className="bg-white text-charcoal/60 text-xs px-3 py-1 rounded-full border border-charcoal/10"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-sm transition text-sm"
              >
                Connect with {nathan.name.split(' ')[0]} →
              </Link>
              <a
                href={nathan.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-sm font-medium transition text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
