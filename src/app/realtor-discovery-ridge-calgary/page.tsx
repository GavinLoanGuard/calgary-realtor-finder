import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Discovery Ridge REALTOR® | Find a Real Estate Agent in Discovery Ridge Calgary',
  description:
    'Find a REALTOR® who specializes in Discovery Ridge, Calgary SW. Griffith Woods Provincial Park access, large estate lots, and a secluded community feel — homes $650K–$1.3M.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-discovery-ridge-calgary' },
  openGraph: {
    title: 'Discovery Ridge REALTOR® | Calgary Realtor Finder',
    description: 'Get matched with a licensed REALTOR® in Discovery Ridge — SW Calgary\'s most nature-adjacent community with Griffith Woods Provincial Park.',
    url: 'https://calgaryrealtorfinder.ca/realtor-discovery-ridge-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Discovery Ridge',
    url: 'https://calgaryrealtorfinder.ca/realtor-discovery-ridge-calgary',
    areaServed: 'Discovery Ridge, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Discovery Ridge, SW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-discovery-ridge-calgary',
    areaServed: 'Discovery Ridge, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Discovery Ridge and SW Calgary estate properties.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Griffith Woods and why does it matter for Discovery Ridge buyers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Griffith Woods is a 93-hectare provincial park bordering Discovery Ridge's eastern edge — one of the last intact riparian forests in the Calgary area. The park provides direct pathway access from the community to 5 km of forested trails along the Elbow River. Homes backing directly onto Griffith Woods command significant premiums (typically 15–25% above comparable non-park lots), and the park's provincial status means it cannot be developed — a permanent amenity that protects Discovery Ridge's natural edge indefinitely.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is Discovery Ridge far from downtown Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Discovery Ridge is approximately 25–30 minutes from downtown Calgary by car via Sarcee Trail and Glenmore Trail, depending on traffic. The community is more secluded than most SW neighbourhoods, which is part of its appeal for buyers seeking quiet and privacy. There is no direct LRT access, so Discovery Ridge is best suited for buyers who primarily commute by car or work from home. Stoney Trail is accessible for routes to the NW or SE.',
        },
      },
    ],
  },
])

export default function DiscoveryRidgeRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · GRIFFITH WOODS · ESTATE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Discovery Ridge REALTOR® — Calgary&apos;s Most Nature-Connected SW Community
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-sw-realtors" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Discovery Ridge</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Griffith Woods Provincial Park on your doorstep, large estate lots, and a deliberately
              quiet community character. Discovery Ridge is SW Calgary for buyers who want nature, not noise.
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
                Discovery Ridge is one of Calgary SW&apos;s most distinctive communities — deliberately
                low-density, park-adjacent, and designed for buyers who prioritize natural environment
                over urban convenience. Bordering Griffith Woods Provincial Park (93 hectares of
                protected riparian forest along the Elbow River), Discovery Ridge homes have direct
                pathway access to one of the best natural spaces within Calgary city limits. The park&apos;s
                provincial designation means it cannot be developed — a permanently protected buffer
                that defines the community&apos;s eastern edge.
              </p>
              <p>
                Housing in Discovery Ridge skews heavily toward detached single-family homes on
                larger-than-average lots. Townhomes exist in some phases but are not dominant.
                The typical Discovery Ridge detached home ranges from $650,000 to $1.3 million,
                with park-backing properties at the higher end of that range. The community was
                developed through the 2000s and early 2010s, meaning builds are relatively modern
                with some aging toward the point where kitchen and bathroom updates are
                worthwhile. Buyers here include professionals who work from home, executives who
                value privacy, and families seeking a quieter alternative to Aspen Woods.
              </p>
              <p>
                The tradeoff in Discovery Ridge is commutability — 25–30 minutes to downtown by car
                without LRT access. Buyers know this and accept it; in fact, the relative isolation
                is part of the appeal for many. Stoney Trail to the south connects Discovery Ridge
                to the NW and SE without going through downtown. For sellers, Discovery Ridge
                inventory is thin relative to other SW communities, which means well-priced homes
                find buyers quickly — particularly park-adjacent properties, which are perpetually
                sought after.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Discovery Ridge real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Griffith Woods and why does it matter for Discovery Ridge buyers?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Griffith Woods is a 93-hectare provincial park bordering Discovery Ridge&apos;s
                      eastern edge — one of the last intact riparian forests in the Calgary area.
                      Direct pathway access to 5 km of Elbow River trails is available from the
                      community. Park-backing lots command 15–25% premiums over comparable
                      non-park properties, and the provincial status guarantees permanent protection.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Discovery Ridge far from downtown Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Approximately 25–30 minutes by car via Sarcee and Glenmore Trails. There is
                      no direct LRT access, making Discovery Ridge best suited for car commuters or
                      remote workers. The relative seclusion is a feature, not a flaw, for most
                      buyers who choose this community. Stoney Trail gives access to NW and SE Calgary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — DISCOVERY RIDGE
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
              Also popular with Discovery Ridge buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-aspen-woods-calgary', name: 'Aspen Woods', zone: 'Calgary SW · Luxury', blurb: 'Luxury SW community with premium builds and private school proximity — more urban feel than Discovery Ridge.' },
                { href: '/realtor-signal-hill-calgary', name: 'Signal Hill', zone: 'Calgary SW · Views & LRT', blurb: 'Mountain and city views with the convenience of 69th Street LRT access and Westhills retail nearby.' },
                { href: '/realtor-cochrane', name: 'Cochrane', zone: 'West of Calgary · Foothills', blurb: 'For buyers drawn to nature, Cochrane offers a small-town feel with mountain views just 30 km west of Calgary.' },
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
