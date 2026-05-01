import { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'
import { nathan } from '@/data/nathan'

export const metadata: Metadata = {
  title: 'Best Calgary Realtors & Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find the best Calgary realtors and real estate agents. Compare RECA-licensed REALTORS® by neighbourhood, get matched for free. No obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-realtors',
  },
  openGraph: {
    title: 'Best Calgary Realtors & Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find the best Calgary realtors and real estate agents. Compare RECA-licensed REALTORS® by neighbourhood, get matched for free. No obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-calgary-realtors.png',
        width: 1200,
        height: 630,
        alt: 'Best Realtors in Calgary, Alberta — Calgary Realtor Finder',
      },
    ],
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

  const quadrants = [
    {
      quadrant: 'Calgary NE',
      slug: 'calgary-ne-realtors',
      description:
        "Calgary's fastest-growing quadrant. Diverse communities, strong new construction, excellent value per square foot. Key areas: Saddle Ridge, Cornerstone, Redstone.",
      priceRange: '$500K–$700K',
    },
    {
      quadrant: 'Calgary NW',
      slug: 'calgary-nw-realtors',
      description:
        'Mountain proximity, top school catchments, established family communities. Key areas: Tuscany, Evanston, Rocky Ridge, Nolan Hill.',
      priceRange: '$600K–$900K+',
    },
    {
      quadrant: 'Calgary SW',
      slug: 'calgary-sw-realtors',
      description:
        "Calgary's prestige quadrant. Highway 1 mountain access, luxury estates, top-tier schools. Key areas: Aspen Woods, West Springs, Signal Hill.",
      priceRange: '$700K–$1.5M+',
    },
    {
      quadrant: 'Calgary SE',
      slug: 'calgary-se-realtors',
      description:
        "Lake communities and family neighbourhoods. Canada's most popular new community (Mahogany). Key areas: Mahogany, Auburn Bay, McKenzie Towne, Cranston.",
      priceRange: '$550K–$1.1M+',
    },
  ]

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
          price range, and transaction type is what we do. Whether you&apos;re buying your first home in
          Mahogany or selling a revenue property in the Beltline, we&apos;ll match you with a local
          expert who knows that market specifically.
        </p>

        <div className="mt-12 space-y-12">
          {/* Lead CTA */}
          <div className="bg-primary rounded-sm p-8 text-white">
            <p className="text-accent text-xs uppercase tracking-widest font-medium">
              Free Matching Service
            </p>
            <h2 className="font-playfair text-3xl font-bold mt-2">
              Find the right Calgary REALTOR® for your neighbourhood.
            </h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              We match buyers and sellers with RECA-licensed Calgary real estate agents who have
              verified transaction history in your specific area. Most matches happen within a few
              hours.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-sm transition"
            >
              Get Matched Free →
            </Link>
          </div>

          {/* Body content */}
          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <h2 className="font-playfair text-2xl font-bold text-primary">
              Calgary&apos;s Real Estate Agent Landscape
            </h2>
            <p>
              Calgary is home to over 7,400 licensed REALTORS® regulated by the Real Estate Council
              of Alberta (RECA). The city&apos;s real estate market spans four distinct quadrants — NE,
              NW, SW, and SE — plus the City Centre, each with its own price dynamics, community
              character, and buyer profile. Finding the right agent means finding one who knows your
              specific quadrant, your target neighbourhood, and your price band specifically.
            </p>
            <p>
              The Calgary real estate market has seen significant activity since 2020, with strong
              price appreciation across most quadrants, increased new construction in the NE and SE,
              and continued demand in established communities like Tuscany (NW), Mahogany (SE), and
              Aspen Woods (SW). As of 2025, the market has stabilized from its peak but remains
              competitive in sought-after neighbourhoods.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary mt-8">
              Calgary Real Estate by Quadrant
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              {quadrants.map((q) => (
                <Link
                  key={q.quadrant}
                  href={`/${q.slug}`}
                  className="block border border-charcoal/10 rounded-sm p-6 hover:border-accent hover:shadow-md transition group"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-playfair text-xl font-bold text-primary group-hover:text-accent transition">
                      {q.quadrant}
                    </p>
                    <span className="text-accent text-xs font-medium bg-accent/10 px-2 py-1 rounded-full">
                      {q.priceRange}
                    </span>
                  </div>
                  <p className="text-charcoal/60 text-sm mt-3 leading-relaxed">{q.description}</p>
                  <p className="text-accent text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition">
                    Find a {q.quadrant} realtor →
                  </p>
                </Link>
              ))}
            </div>

            <h2 className="font-playfair text-2xl font-bold text-primary mt-8">
              How to Choose the Best Calgary Realtor
            </h2>
            <p>
              With over 7,400 licensed agents to choose from, the question isn&apos;t whether you can
              find a Calgary REALTOR® — it&apos;s how to find the right one. Three factors matter most:
              neighbourhood expertise, verified transaction history, and communication style.
            </p>
            <p>
              Neighbourhood expertise means the agent has actively closed deals in your target area
              within the last 12–24 months. This isn&apos;t about general Calgary experience — an agent
              who specializes in Mahogany will know things about the Auburn Bay comparison that a
              generalist won&apos;t. Ask for a list of recent sales in your specific community before
              committing.
            </p>
            <p>
              Verified transaction history is accessible through RECA&apos;s public registry and through
              the agent&apos;s own sales history. Look for consistent volume in your price range, not just
              headline-making luxury sales. An agent who primarily works $2M+ properties may not be
              the best fit for a $650K SE Calgary purchase.
            </p>
            <p>
              Communication style matters more than most buyers and sellers expect. You&apos;ll exchange
              dozens of messages over weeks or months. An agent whose first email takes 24 hours and
              reads like a template is showing you exactly how the relationship will work.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-primary mt-8">
              RECA Licensing — What It Means for Calgary Buyers and Sellers
            </h2>
            <p>
              All practicing REALTORS® in Alberta — including Calgary — must hold a current license
              issued by the Real Estate Council of Alberta (RECA). RECA regulates licensing, sets
              conduct standards, and maintains a public registry where anyone can verify an
              agent&apos;s current status, brokerage affiliation, and disciplinary history in seconds.
            </p>
            <p>
              Every agent we feature on Calgary Realtor Finder has been verified through the RECA
              public registry before any introduction is made. License status, brokerage standing,
              and license type are all confirmed. If you ever want to verify an agent independently,
              visit reca.ca and search by name.
            </p>
          </div>

          {/* Nathan CTA */}
          <div className="border border-accent/20 rounded-sm p-8 bg-accent/5">
            <p className="text-accent text-xs uppercase tracking-widest font-medium">
              Featured Calgary REALTOR®
            </p>
            <p className="font-playfair text-2xl font-bold text-primary mt-2">{nathan.name}</p>
            <p className="text-charcoal/60 text-sm mt-1">
              {nathan.brokerage} · {nathan.yearsExperience}+ years experience
            </p>
            <p className="text-charcoal/70 text-sm mt-4 leading-relaxed max-w-lg">
              Serving Calgary buyers and sellers across all four quadrants and surrounding
              communities. Currently accepting new buyer and seller clients.
            </p>
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
