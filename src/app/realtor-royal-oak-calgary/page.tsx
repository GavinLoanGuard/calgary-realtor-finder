import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Royal Oak REALTOR® | Find a Real Estate Agent in Royal Oak Calgary NW',
  description:
    'Find a REALTOR® who specializes in Royal Oak, Calgary NW. Cul-de-sac family streets, Shane Homes YMCA, strong schools — detached homes $530K–$950K. Free matching, no obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-royal-oak-calgary' },
  openGraph: {
    title: 'Royal Oak REALTOR® | Calgary Realtor Finder',
    description: "Get matched with a licensed REALTOR® in Royal Oak — NW Calgary's family-oriented community with the Shane Homes YMCA and strong school options.",
    url: 'https://calgaryrealtorfinder.ca/realtor-royal-oak-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Royal Oak',
    url: 'https://calgaryrealtorfinder.ca/realtor-royal-oak-calgary',
    areaServed: 'Royal Oak, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Royal Oak, NW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-royal-oak-calgary',
    areaServed: 'Royal Oak, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Royal Oak and NW Calgary family communities.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Royal Oak Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Royal Oak detached homes typically range from $530,000 to $950,000. The community has a range of lot sizes and build dates (late 1990s through 2012), so buyers can find value in older, unrenovated homes or pay a move-in-ready premium for updated properties. Townhomes and semi-detached homes start around $280,000–$460,000. Royal Oak pricing is generally comparable to Tuscany, with Rocky Ridge commanding a modest premium for elevated view lots.',
        },
      },
      {
        '@type': 'Question',
        name: 'What schools are in Royal Oak Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Royal Oak has strong in-community school options. William D. Pratt School (public K-6) and St. Elizabeth Seton (Catholic K-9) are both within the community. Holy Trinity Academy (Catholic 10-12) is nearby. For high school, Royal Oak students typically attend Bowness or Robert Thirsk. The nearby University of Calgary, SAIT, and Mount Royal University are accessible via Crowchild Trail — a practical consideration for families with post-secondary students.',
        },
      },
    ],
  },
])

export default function RoyalOakRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY NW · FAMILY COMMUNITY · SHANE HOMES YMCA</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Royal Oak REALTOR® — Calgary NW&apos;s Premier Family Community
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-nw-realtors" className="hover:text-white/80 transition-colors">Calgary NW</Link>
                {' › '}
                <span className="text-white/70">Royal Oak</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Cul-de-sac streets designed for children, the Shane Homes YMCA next door, and a
              school in the community. Royal Oak is NW Calgary built around families.
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
                Royal Oak is a thoroughly family-oriented community in Calgary&apos;s NW quadrant,
                developed from the late 1990s through 2012 in a deliberately residential character
                — curvilinear collector roads leading to quieter cul-de-sac streets where children
                can play without through traffic. The community is bounded by Stoney Trail to the
                north, Rocky Ridge to the west, and the older community of Bearspaw to the east.
                Its elevated position at the edge of the Bow River escarpment means some streets
                offer partial valley and mountain views.
              </p>
              <p>
                The Shane Homes YMCA, located at the Royal Oak/Rocky Ridge boundary, is a
                90,000-square-foot recreation facility featuring an aquatic centre, fitness floor,
                gymnasium, and extensive programming — and it serves as a genuine community anchor.
                The Rocky Ridge Ranch (shared with Rocky Ridge) adds outdoor skating, tennis, and
                seasonal events. William D. Pratt School (public K-6) and St. Elizabeth Seton
                (Catholic K-9) are both within Royal Oak, eliminating the school-bus dependency
                that affects many newer outer-ring communities.
              </p>
              <p>
                Royal Oak appeals to a consistent buyer profile: families with children aged 5–14
                who want a quiet, walkable neighbourhood with school and recreation already built
                in. Stoney Trail gives access to the airport and other quadrants; Crowchild Trail
                connects to the University of Calgary, Children&apos;s Hospital, and Foothills Medical
                Centre — among the largest non-downtown employment clusters in Calgary. Sellers
                in Royal Oak typically market to this same family buyer, and homes with updated
                kitchens and good condition sell well regardless of the broader market environment.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Royal Oak real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Royal Oak Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $530,000 to $950,000. Townhomes and semi-detached
                      start around $280,000–$460,000. Build dates span late-1990s to 2012, giving
                      buyers a range from unrenovated value options to updated move-in-ready homes.
                      Pricing is comparable to Tuscany; Rocky Ridge commands a modest premium for
                      elevated view lots.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What schools are in Royal Oak Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      William D. Pratt School (public K-6) and St. Elizabeth Seton (Catholic K-9)
                      are both within Royal Oak. Holy Trinity Academy (Catholic 10-12) is nearby.
                      The University of Calgary, SAIT, and Mount Royal are accessible via Crowchild
                      Trail — a practical plus for families with post-secondary students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — ROYAL OAK
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
              Also popular with Royal Oak buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-rocky-ridge-calgary', name: 'Rocky Ridge', zone: 'Calgary NW · Elevated Views', blurb: 'Shares the Rocky Ridge Ranch and Shane Homes YMCA with Royal Oak. Elevated streets deliver mountain and valley views.' },
                { href: '/realtor-tuscany-calgary', name: 'Tuscany', zone: 'Calgary NW · End-of-Line LRT', blurb: 'Tuscany CTrain station for car-free commuters, Tuscany Club amenities, and strong school options in an established NW community.' },
                { href: '/realtor-airdrie', name: 'Airdrie', zone: 'North of Calgary · Fast Growing', blurb: 'For buyers stretching their budget — Airdrie is 30 km north with significantly more house per dollar and rapid growth.' },
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
