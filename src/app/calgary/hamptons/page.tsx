import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Hamptons Calgary Homes for Sale | Find a REALTOR® | Calgary Realtor Finder',
  description:
    'Find homes for sale in Hamptons Calgary NW. Get matched with a licensed REALTOR® who specializes in Hamptons real estate. Free service, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Hamptons',
    url: 'https://calgaryrealtorfinder.ca/calgary/hamptons',
    areaServed: 'Hamptons, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Hamptons, Calgary NW.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are Hamptons Calgary homes typically priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hamptons is a well-established NW Calgary community with a range of housing prices. Detached two-storey family homes typically list between $600,000 and $1 million, while larger estate homes and those backing onto the golf course or ravine can exceed $1.2 million. Semi-detached and townhome options exist at lower price points. The community offers good value relative to comparable NW Calgary neighbourhoods.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Hamptons Calgary a good neighbourhood to buy in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Hamptons is one of NW Calgary's most established and consistently popular communities. The Hamptons Golf Course anchors the neighbourhood, and the surrounding ravines provide scenic walking paths. Excellent schools including Hamptons School and Tom Baines Junior High, combined with proximity to Crowchild Trail and Shaganappi Trail, make it a practical as well as desirable choice for families.",
        },
      },
    ],
  },
])

export default function HamptonsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY NW · GOLF COURSE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Hamptons, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary NW</Link>
                {' › '}
                <span className="text-white/70">Hamptons</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who specializes in Hamptons real estate. Free service, no obligation.
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
                Hamptons is one of northwest Calgary&apos;s most established and well-regarded communities,
                developed primarily during the 1990s and early 2000s around the Hamptons Golf Course.
                The 18-hole course winds through the heart of the neighbourhood, and many homes along
                its fairways enjoy direct golf course views and the quiet buffer that comes with backing
                onto open green space. Ravines cross the community as well, creating a naturalized
                pathway network that residents use year-round.
              </p>
              <p>
                The housing in Hamptons skews toward larger detached two-storey family homes — this
                was planned as a move-up community, and it has delivered on that intent for over two
                decades. Many properties have been renovated or updated, reflecting long-term ownership
                by families who put down roots. Schools are a major draw: Hamptons School (K-4),
                Robert Thirsk High School, and nearby Catholic options are all within the community
                or close by.
              </p>
              <p>
                Hamptons sits off Country Hills Boulevard NW with good access to Stoney Trail, making
                cross-city travel manageable. The adjacent community of Arbour Lake — with its own
                private lake — is a short drive away, and the Crowfoot commercial area provides full
                retail services including a large grocery store, cinema, and restaurants. Hamptons
                holds its value well because of its consistent demand from families, its established
                character, and the golf course amenity that few other NW communities can match.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Hamptons real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are Hamptons Calgary homes typically priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Hamptons is a well-established NW Calgary community with a range of housing
                      prices. Detached two-storey family homes typically list between $600,000 and
                      $1 million, while larger estate homes and those backing onto the golf course or
                      ravine can exceed $1.2 million. Semi-detached and townhome options exist at lower
                      price points. The community offers good value relative to comparable NW Calgary
                      neighbourhoods.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Hamptons Calgary a good neighbourhood to buy in?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Hamptons is one of NW Calgary&apos;s most established and consistently popular
                      communities. The Hamptons Golf Course anchors the neighbourhood, and the
                      surrounding ravines provide scenic walking paths. Excellent schools including
                      Hamptons School and Tom Baines Junior High, combined with proximity to Crowchild
                      Trail and Shaganappi Trail, make it a practical as well as desirable choice for
                      families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — HAMPTONS
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="hamptons" />

        <Footer />
      </main>
    </>
  )
}
