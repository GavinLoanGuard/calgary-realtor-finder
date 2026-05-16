import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Arbour Lake Houses for Sale Calgary | REALTOR® Match | Calgary Realtor Finder',
  description:
    'Find Arbour Lake houses for sale in Calgary NW. Get matched with a licensed REALTOR® who specializes in Arbour Lake real estate. Free, no obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary/arbour-lake',
  },
  openGraph: {
    title: 'Arbour Lake Houses for Sale Calgary | Calgary Realtor Finder',
    description:
      'Find Arbour Lake houses for sale in Calgary NW. Get matched with a licensed REALTOR® who specializes in Arbour Lake real estate. Free, no obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary/arbour-lake',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Arbour Lake Calgary — Calgary Realtor Finder' }],
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Arbour Lake',
    url: 'https://calgaryrealtorfinder.ca/calgary/arbour-lake',
    areaServed: 'Arbour Lake, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Arbour Lake, Calgary NW.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Arbour Lake Calgary unique?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Arbour Lake is the only lake community in Calgary's northwest quadrant, giving it a competitive advantage that no other NW neighbourhood can replicate. The private 12-acre lake offers residents swimming, paddleboarding, fishing, and skating, managed by the Arbour Lake Residents Association. The combination of lake access, mountain views, and established NW amenities makes Arbour Lake consistently one of the most desirable communities in the quadrant.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are homes for sale in Arbour Lake Calgary typically priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arbour Lake home prices range significantly by housing type and proximity to the lake. Townhomes and smaller detached homes can start in the $450,000–$600,000 range, while larger two-storey family homes typically list between $650,000 and $950,000. Lake-access lots and homes with direct lake views command meaningful premiums. A local REALTOR® can identify which properties offer the best value for your specific priorities.',
        },
      },
    ],
  },
])

export default function ArbourLakePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY NW · ONLY NW LAKE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Arbour Lake, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary NW</Link>
                {' › '}
                <span className="text-white/70">Arbour Lake</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who specializes in Arbour Lake real estate. Free, no obligation.
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
                Arbour Lake holds a singular position in Calgary&apos;s northwest: it is the only lake
                community in the quadrant. While SE Calgary has Auburn Bay, Mahogany, and Chaparral,
                NW buyers who want a private lake lifestyle have exactly one option — and it&apos;s Arbour
                Lake. Developed in the 1990s, the community is built around a 12-acre private lake
                managed by the Arbour Lake Residents Association. Members have year-round access to
                the beach, swimming, paddleboarding, fishing, and winter skating.
              </p>
              <p>
                The community sits on a slight ridge in the northwest, giving many streets elevated
                views toward the Rocky Mountains. Stoney Trail (the ring road) borders the community
                to the north, providing fast access across the city, and the Crowfoot C-Train station
                on the Red Line is just minutes away for downtown commuters. The Crowfoot Crossing
                commercial area — one of Calgary&apos;s largest suburban retail centres — is immediately
                adjacent with grocery stores, restaurants, cinemas, and services.
              </p>
              <p>
                The housing stock in Arbour Lake ranges from townhomes and semi-detached options for
                entry-level buyers to large two-storey detached homes and, at the top end, estate-
                sized properties on the lake access lots. The community has a mature, established
                character with large trees and well-maintained streetscapes. Neighbouring Hamptons
                offers a comparable NW lifestyle with its golf course; together, they form the premium
                end of the northwest market. Demand for Arbour Lake remains steady because of the
                lake&apos;s scarcity — properties rarely sit for long.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Arbour Lake real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What makes Arbour Lake Calgary unique?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Arbour Lake is the only lake community in Calgary&apos;s northwest quadrant, giving it
                      a competitive advantage that no other NW neighbourhood can replicate. The private
                      12-acre lake offers residents swimming, paddleboarding, fishing, and skating,
                      managed by the Arbour Lake Residents Association. The combination of lake access,
                      mountain views, and established NW amenities makes Arbour Lake consistently one
                      of the most desirable communities in the quadrant.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are homes for sale in Arbour Lake Calgary typically priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Arbour Lake home prices range significantly by housing type and proximity to
                      the lake. Townhomes and smaller detached homes can start in the $450,000–$600,000
                      range, while larger two-storey family homes typically list between $650,000 and
                      $950,000. Lake-access lots and homes with direct lake views command meaningful
                      premiums. A local REALTOR® can identify which properties offer the best value
                      for your specific priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — ARBOUR LAKE
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="arbour-lake" />

        <Footer />
      </main>
    </>
  )
}
