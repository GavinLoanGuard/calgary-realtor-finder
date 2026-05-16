import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Mahogany Homes for Sale Calgary SE | REALTOR® Match | Calgary Realtor Finder',
  description:
    "Find homes for sale in Mahogany Calgary SE. Get matched with a licensed REALTOR® who specializes in Mahogany real estate — Calgary's award-winning lake community. Free, no obligation.",
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary/mahogany',
  },
  openGraph: {
    title: 'Mahogany Homes for Sale Calgary SE | Calgary Realtor Finder',
    description:
      "Find homes for sale in Mahogany Calgary SE. Get matched with a licensed REALTOR® who specializes in Mahogany real estate — Calgary's award-winning lake community. Free, no obligation.",
    url: 'https://calgaryrealtorfinder.ca/calgary/mahogany',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Mahogany Calgary — Calgary Realtor Finder' }],
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Mahogany',
    url: 'https://calgaryrealtorfinder.ca/calgary/mahogany',
    areaServed: 'Mahogany, Calgary, AB',
    priceRange: 'Free',
    description: "Find licensed REALTORS® specializing in Mahogany, Calgary's largest lake community.",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Mahogany Calgary known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mahogany is known for being Calgary's largest private residential lake community, featuring a 63-acre lake, a beach club with year-round activities, and a mix of housing types from condos to estate homes. It has won multiple awards as one of Canada's best new communities.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are homes for sale in Mahogany Calgary priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mahogany offers a wide price range. Condos and townhomes typically start in the mid-$300,000s, while detached homes range from the $600,000s to over $1,000,000 for larger estate properties near the lake. Prices vary significantly by proximity to the lake and home size.',
        },
      },
    ],
  },
])

export default function MahoganyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · AWARD-WINNING LAKE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Mahogany, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Mahogany</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who specializes in Mahogany real estate. Free, no obligation.
            </p>
            <Link href="/" className="font-inter text-accent text-sm mt-6 inline-block hover:underline">
              ← Back to Calgary Realtor Finder
            </Link>
          </div>
        </section>

        <section className="bg-background py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 font-inter text-charcoal/70 text-base leading-relaxed">
              <p>
                Mahogany is Calgary&apos;s largest private residential lake community and one of the most
                consistently awarded new communities in Canada. Located in Calgary&apos;s deep southeast off
                Stoney Trail and 52nd Street SE, Mahogany is built around a 63-acre private lake with
                a beach club that gives residents year-round access — swimming, paddleboarding, and
                kayaking in summer; skating and hockey in winter. The Mahogany Beach Club manages the
                amenities and is the social heart of the community.
              </p>
              <p>
                The housing stock in Mahogany is exceptionally broad. Entry-level condos and stacked
                townhomes along the community&apos;s perimeter provide affordable access to the lake lifestyle,
                while the interior streets step up through front-attached single-family homes, rear-lane
                detached homes, and ultimately to large estate lots directly on the lakeshore. Brookfield
                Residential, Hopewell Residential, and other builders have shaped a community with consistent
                quality and strong architectural standards. Commercial amenities are growing along 52nd Street
                SE with retail, restaurants, and services within walking distance.
              </p>
              <p>
                Mahogany has won the title of Community of the Year from the Canadian Home Builders&apos;
                Association multiple times — recognition that reflects both the planning quality and the
                demand from buyers across Calgary. The southeast location means Stoney Trail and Deerfoot
                are both accessible, keeping commutes manageable. For buyers comparing Mahogany with Auburn
                Bay or Cranston, the key differentiator is scale: Mahogany&apos;s lake is larger, the beach club
                is more developed, and the community is still growing with new phases. A REALTOR® who
                knows the different sections and builders is essential to finding the right home at the
                right price.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Mahogany real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Mahogany Calgary known for?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Mahogany is known for being Calgary&apos;s largest private residential lake community,
                      featuring a 63-acre lake, a beach club with year-round activities, and a mix of
                      housing types from condos to estate homes. It has won multiple awards as one of
                      Canada&apos;s best new communities.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are homes for sale in Mahogany Calgary priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Mahogany offers a wide price range. Condos and townhomes typically start in the
                      mid-$300,000s, while detached homes range from the $600,000s to over $1,000,000
                      for larger estate properties near the lake. Prices vary significantly by proximity
                      to the lake and home size.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — MAHOGANY
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="mahogany" />

        <Footer />
      </main>
    </>
  )
}
