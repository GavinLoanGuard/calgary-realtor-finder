import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Signal Hill REALTOR® | Find a Real Estate Agent in Signal Hill Calgary SW',
  description:
    'Find a REALTOR® who specializes in Signal Hill, Calgary SW. Mountain and city views, 69 Street LRT access, and established streets — detached homes $540K–$1M. Free matching.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-signal-hill-calgary' },
  openGraph: {
    title: 'Signal Hill REALTOR® | Calgary Realtor Finder',
    description: 'Get matched with a licensed REALTOR® in Signal Hill — SW Calgary\'s hilltop community with panoramic views and LRT access.',
    url: 'https://calgaryrealtorfinder.ca/realtor-signal-hill-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Signal Hill',
    url: 'https://calgaryrealtorfinder.ca/realtor-signal-hill-calgary',
    areaServed: 'Signal Hill, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Signal Hill, SW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-signal-hill-calgary',
    areaServed: 'Signal Hill, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Signal Hill and SW Calgary real estate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Signal Hill Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signal Hill detached homes range from $540,000 to $1,000,000 depending on lot elevation, views, and renovation status. Attached homes and condominiums in Signal Hill start around $290,000–$500,000, with the higher end for larger townhomes with mountain views. Homes at the top of the ridge with unobstructed mountain and downtown views consistently command 10–15% premiums over comparable properties lower in the community.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Signal Hill have good transit access?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Signal Hill is one of SW Calgary's best-positioned communities for transit. The 69th Street CTrain station is located at the community's eastern edge, providing direct LRT access to downtown Calgary in approximately 35 minutes. Signal Hill Centre (a major retail complex at 69th Street and Sarcee Trail) also provides full-service shopping immediately adjacent to the station. This LRT access is a meaningful advantage for buyers who prioritize car-free or car-light commuting.",
        },
      },
    ],
  },
])

export default function SignalHillRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · HILLTOP VIEWS · LRT ACCESS</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Signal Hill REALTOR® — Views, LRT Access, and Established SW Prestige
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-sw-realtors" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Signal Hill</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Mountain views to the west, downtown Calgary to the east, and a CTrain station at
              your doorstep. Signal Hill is SW Calgary at its most connected.
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
                Signal Hill sits on one of the highest points in Calgary&apos;s SW quadrant, which
                is precisely the source of its enduring appeal. The community stretches along the
                ridge west of 69th Street SW, offering elevated lots with panoramic views of the
                Rocky Mountains to the west and the downtown skyline to the east. Developed through
                the 1990s and into the early 2000s, Signal Hill has the mature tree canopy and
                established infrastructure that newer communities are still waiting on.
              </p>
              <p>
                The 69th Street CTrain station, positioned at the community&apos;s eastern edge, is one
                of Signal Hill&apos;s strongest selling points — a 35-minute ride to downtown Calgary
                without a car. Signal Hill Centre, a large-format retail complex immediately adjacent
                to the station, provides full grocery, banking, and dining options. Westhills Towne
                Centre nearby adds more retail depth. For buyers who want to reduce car dependency
                while staying in the suburbs, Signal Hill&apos;s combination of LRT and walkable retail
                is virtually unmatched in Calgary SW.
              </p>
              <p>
                The housing stock spans a wide range — from condominium apartments near the LRT
                station starting around $290,000, to estate-tier detached homes on ridge-top lots
                approaching $1,000,000. Homes at the top of Signal Hill Drive with unobstructed
                mountain views consistently attract buyers willing to pay a 10–15% premium over
                comparable square footage lower in the community. A REALTOR® who has bought and
                sold on Signal Hill&apos;s premium ridge streets will know exactly where that view
                premium begins and ends — and how to position your home accordingly.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Signal Hill real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Signal Hill Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $540,000 to $1,000,000 depending on elevation, views,
                      and renovation status. Condominiums and townhomes start around $290,000–$500,000.
                      Ridge-top homes with unobstructed mountain and downtown views command 10–15%
                      premiums over comparable lower-elevation properties.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Does Signal Hill have good transit access?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Yes — the 69th Street CTrain station is at Signal Hill&apos;s eastern edge, providing
                      direct LRT access to downtown in approximately 35 minutes. This makes Signal Hill
                      one of SW Calgary&apos;s best-connected communities for transit-oriented buyers.
                      Signal Hill Centre at the station provides full retail amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — SIGNAL HILL
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">NEARBY COMMUNITIES</p>
            <h2 className="font-playfair text-3xl text-primary font-bold mt-2">
              Also popular with Signal Hill buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-evergreen-calgary', name: 'Evergreen', zone: 'Calgary SW · Fish Creek Access', blurb: 'Fish Creek Provincial Park boundary, strong schools, and established family community south of Signal Hill.' },
                { href: '/realtor-aspen-woods-calgary', name: 'Aspen Woods', zone: 'Calgary SW · Luxury', blurb: 'Premium SW community with newer luxury builds, private schools nearby, and a quieter residential feel.' },
                { href: '/realtor-discovery-ridge-calgary', name: 'Discovery Ridge', zone: 'Calgary SW · Nature Adjacent', blurb: 'Griffith Woods Provincial Park access, large lots, and a secluded community feel west of Signal Hill.' },
              ].map((c) => (
                <div key={c.href} className="border border-charcoal/10 rounded-sm p-6 bg-white hover:border-accent hover:shadow-sm transition-all">
                  <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest">{c.zone}</p>
                  <h3 className="font-playfair text-xl text-primary font-semibold mt-2">
                    <Link href={c.href} className="hover:text-accent transition-colors">{c.name}</Link>
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm mt-3 leading-relaxed">{c.blurb}</p>
                  <Link href={c.href} className="font-inter text-accent text-sm font-medium mt-4 inline-block hover:underline">
                    View community →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
