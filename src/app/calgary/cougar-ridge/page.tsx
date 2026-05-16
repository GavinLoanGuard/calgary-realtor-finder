import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Cougar Ridge Houses for Sale Calgary | REALTOR® Match | Calgary Realtor Finder',
  description:
    'Looking for houses for sale in Cougar Ridge Calgary? Get matched with a West Calgary REALTOR® who specializes in Cougar Ridge. Free, no obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary/cougar-ridge',
  },
  openGraph: {
    title: 'Cougar Ridge Houses for Sale Calgary | Calgary Realtor Finder',
    description:
      'Looking for houses for sale in Cougar Ridge Calgary? Get matched with a West Calgary REALTOR® who specializes in Cougar Ridge. Free, no obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary/cougar-ridge',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Cougar Ridge Calgary — Calgary Realtor Finder' }],
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Cougar Ridge',
    url: 'https://calgaryrealtorfinder.ca/calgary/cougar-ridge',
    areaServed: 'Cougar Ridge, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Cougar Ridge, Calgary West.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are homes for sale in Cougar Ridge Calgary typically priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cougar Ridge homes are predominantly detached single-family properties, with prices generally ranging from the high $500,000s to well over $1 million for larger estate homes. The community skews toward move-up and executive buyers, so entry-level inventory is limited. A local REALTOR® can provide current market data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Cougar Ridge Calgary popular with families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cougar Ridge is popular with families because of its combination of good schools, quiet streets, mountain views, and proximity to Canada Olympic Park (COP) and WinSport. The community sits on West Calgary's ridge, giving many homes elevated sightlines toward the Rockies. The Paskapoo Slopes natural area provides direct access to over 20 km of multi-use trails right from the neighbourhood.",
        },
      },
    ],
  },
])

export default function CougarRidgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY WEST · MOUNTAIN VIEWS</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Cougar Ridge, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Cougar Ridge</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a West Calgary REALTOR® who specializes in Cougar Ridge. Free, no obligation.
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
                Cougar Ridge is a West Calgary community perched on the ridge above the Bow River
                valley, offering some of the best mountain and valley views of any suburban neighbourhood
                in the city. Developed through the 2000s and 2010s, the community features almost
                exclusively detached single-family homes on generous lots — it was designed as a
                move-up community from the start, and the housing stock reflects that. Many properties
                are large two-storey or walkout homes with finished basements and triple-car garages.
              </p>
              <p>
                One of Cougar Ridge&apos;s defining features is its direct access to the Paskapoo Slopes
                natural area — over 20 kilometres of multi-use trails for walking, running, and
                mountain biking that weave through the escarpment terrain right at the community&apos;s
                edge. Canada Olympic Park (WinSport) is immediately adjacent, giving residents year-round
                access to skiing, snowboarding, mountain biking, and the Olympic legacy facilities.
                For active families, it&apos;s hard to beat.
              </p>
              <p>
                Cougar Ridge sits within easy reach of Sarcee Trail and the ring road, making downtown
                Calgary and the airport both accessible. West Springs and Discovery Ridge are neighbouring
                communities with similar profiles if inventory is limited. The community has been
                trending upward in search interest — up 60% over the past year — driven by buyers
                seeking West Calgary lifestyle at still-attainable price points relative to the inner
                city. A REALTOR® who works West Calgary daily will know which pockets command premium
                prices and which offer the best value.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Cougar Ridge real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are homes for sale in Cougar Ridge Calgary typically priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Cougar Ridge homes are predominantly detached single-family properties, with
                      prices generally ranging from the high $500,000s to well over $1 million for
                      larger estate homes. The community skews toward move-up and executive buyers, so
                      entry-level inventory is limited. A local REALTOR® can provide current market
                      data.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Why is Cougar Ridge Calgary popular with families?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Cougar Ridge is popular with families because of its combination of good schools,
                      quiet streets, mountain views, and proximity to Canada Olympic Park (COP) and
                      WinSport. The community sits on West Calgary&apos;s ridge, giving many homes elevated
                      sightlines toward the Rockies. The Paskapoo Slopes natural area provides direct
                      access to over 20 km of multi-use trails right from the neighbourhood.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — COUGAR RIDGE
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="cougar-ridge" />

        <Footer />
      </main>
    </>
  )
}
