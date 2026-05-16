import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'West Springs Calgary Homes for Sale | REALTOR® Match | Calgary Realtor Finder',
  description:
    'Find West Springs Calgary homes for sale. Get matched with a licensed West Calgary REALTOR® who knows West Springs and the surrounding communities. Free, no obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary/west-springs',
  },
  openGraph: {
    title: 'West Springs Calgary Homes for Sale | Calgary Realtor Finder',
    description:
      'Find West Springs Calgary homes for sale. Get matched with a licensed West Calgary REALTOR® who knows West Springs and the surrounding communities. Free, no obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary/west-springs',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'West Springs Calgary — Calgary Realtor Finder' }],
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — West Springs',
    url: 'https://calgaryrealtorfinder.ca/calgary/west-springs',
    areaServed: 'West Springs, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in West Springs, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is West Springs Calgary known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "West Springs is known for its family-friendly streets, mountain views, and the vibrant West Springs Village commercial area along 85th Street SW. The community offers walkable access to restaurants, cafés, boutique shops, and everyday retail — a rarity in Calgary's suburban west end. It's also close to excellent schools and has a strong community association.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are homes for sale in West Springs Calgary priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'West Springs homes span a wide range. Smaller detached homes and newer infill townhomes can start in the $500,000s, while larger two-storey family homes typically list between $700,000 and $1.1 million. Executive and custom-built homes on premium lots can exceed $1.5 million. The community has a variety of housing types that accommodate different budgets within the West Calgary corridor.',
        },
      },
    ],
  },
])

export default function WestSpringsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY WEST · VILLAGE LIFESTYLE</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in West Springs, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">West Springs</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed West Calgary REALTOR® who knows West Springs. Free, no obligation.
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
                West Springs is one of West Calgary&apos;s most established and sought-after communities,
                located between Old Banff Coach Road and the ring road on the west side of the city.
                Developed primarily in the late 1990s and 2000s, the neighbourhood blends suburban
                family living with a genuine commercial village at its heart — West Springs Village
                along 85th Street SW has restaurants, a coffee shop, a pharmacy, a wine store, and
                specialty retail that residents actually walk to.
              </p>
              <p>
                The housing stock in West Springs is a mix of detached two-storey family homes, estate
                properties, and some semi-detached and townhome options, particularly on the community&apos;s
                perimeter. Many homes have mountain views to the west, and the ridge topography means
                certain streets offer panoramic sightlines. Schools in the area are well-regarded,
                including West Springs School, St. Joan of Arc, and Ernest Manning High School. The
                community has a very active residents&apos; association that runs seasonal events and
                maintains the parks.
              </p>
              <p>
                West Springs borders Cougar Ridge to the north and Discovery Ridge to the south, making
                it part of a premium West Calgary corridor that buyers increasingly compare side-by-side.
                The ring road provides fast access to Cochrane and Banff to the west, and to the airport
                and north Calgary to the north. For buyers who want walkable amenities, strong schools,
                and a tight-knit community feel in West Calgary, West Springs is consistently a top
                contender.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about West Springs real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is West Springs Calgary known for?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      West Springs is known for its family-friendly streets, mountain views, and the
                      vibrant West Springs Village commercial area along 85th Street SW. The community
                      offers walkable access to restaurants, cafés, boutique shops, and everyday retail
                      — a rarity in Calgary&apos;s suburban west end. It&apos;s also close to excellent schools
                      and has a strong community association.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are homes for sale in West Springs Calgary priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      West Springs homes span a wide range. Smaller detached homes and newer infill
                      townhomes can start in the $500,000s, while larger two-storey family homes
                      typically list between $700,000 and $1.1 million. Executive and custom-built homes
                      on premium lots can exceed $1.5 million. The community has a variety of housing
                      types that accommodate different budgets within the West Calgary corridor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — WEST SPRINGS
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="west-springs" />

        <Footer />
      </main>
    </>
  )
}
