import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Evergreen REALTOR® | Find a Real Estate Agent in Evergreen Calgary SW',
  description:
    'Connect with a REALTOR® who specializes in Evergreen, Calgary SW. Fish Creek Park boundary, strong schools, and proven family community — detached homes $530K–$900K. Free matching.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-evergreen-calgary' },
  openGraph: {
    title: 'Evergreen REALTOR® | Calgary Realtor Finder',
    description: "Find a licensed REALTOR® in Evergreen — SW Calgary's established family community bordering Fish Creek Provincial Park.",
    url: 'https://calgaryrealtorfinder.ca/realtor-evergreen-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Evergreen',
    url: 'https://calgaryrealtorfinder.ca/realtor-evergreen-calgary',
    areaServed: 'Evergreen, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Evergreen, SW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-evergreen-calgary',
    areaServed: 'Evergreen, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Evergreen and SW Calgary family communities.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Evergreen Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evergreen detached homes typically range from $530,000 to $900,000 depending on size, lot, and condition. Townhomes and semi-detached homes in Evergreen run from $300,000 to $480,000. Homes backing onto Fish Creek Provincial Park or with views of Spruce Meadows command a premium. The community reached build-out around 2010, so all available inventory is resale — buyers should budget for potential updates on older homes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Evergreen a good family community in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Evergreen is consistently rated among Calgary's top family communities. It has multiple elementary schools (both public and Catholic), a community association with skating rinks and tennis courts, and direct access to Fish Creek Provincial Park — one of North America's largest urban parks. The community's southwestern location means good access to Stoney Trail while maintaining a suburban feel well-suited to families with children.",
        },
      },
    ],
  },
])

export default function EvergreenRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · FISH CREEK PARK · FAMILY COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Evergreen, Calgary SW
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-sw-realtors" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Evergreen</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Established streets, Fish Creek Park at your doorstep, and some of SW Calgary&apos;s
              best school options. Evergreen is a proven family community — find your specialist.
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
                Evergreen occupies the southern edge of Calgary&apos;s SW quadrant, with Fish Creek
                Provincial Park forming its northern boundary and Spruce Meadows nearby to the south.
                Developed primarily between 1997 and 2010, the community has matured into one of
                Calgary SW&apos;s most stable and desirable family addresses. The Evergreen Community
                Association operates two outdoor skating rinks, tennis courts, and a spray park —
                and the pathway network that connects through Fish Creek gives residents access to
                one of North America&apos;s largest urban parks without leaving the neighbourhood.
              </p>
              <p>
                The housing stock in Evergreen skews toward detached family homes — two-storey and
                bungalows from the late 1990s through mid-2000s, with lot sizes larger than what
                you&apos;d find in comparable communities closer to downtown. Semi-detached and townhome
                options exist along the community&apos;s collector roads and are popular entry points for
                buyers moving into the SW quadrant. Because Evergreen is fully built out, buyers are
                competing in a pure resale market — which means condition, presentation, and pricing
                accuracy are the main variables. Homes that have been updated (kitchen, bathrooms,
                windows) consistently outperform unrenovated equivalents by 8–12% in the current market.
              </p>
              <p>
                Sellers in Evergreen benefit from steady buyer demand driven by school catchment — the
                community falls within some of Calgary SW&apos;s more sought-after public school zones.
                The nearby Shawnessy LRT station (a short drive) and Stoney Trail access improve
                commutability relative to what the address might suggest. For buyers, Evergreen
                represents meaningful value compared to Discovery Ridge or Aspen Woods to the north
                while delivering comparable park access and community amenities.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Evergreen real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Evergreen Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $530,000 to $900,000 depending on size, lot, and
                      condition. Townhomes and semi-detached run from $300,000 to $480,000.
                      Park-backing and view lots command a premium. All Evergreen inventory is
                      resale, so buyers should budget for potential updates on 20+ year old homes.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Evergreen a good family community in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Evergreen is consistently rated among Calgary SW&apos;s top family neighbourhoods.
                      Multiple schools (public and Catholic), a well-run community association with
                      skating and tennis, and direct Fish Creek Park access make it particularly
                      popular with families. Stoney Trail access keeps the commute manageable despite
                      the southwestern location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — EVERGREEN
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
              Also popular with Evergreen buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-signal-hill-calgary', name: 'Signal Hill', zone: 'Calgary SW · Hilltop Views', blurb: 'Elevated SW community with mountain and city views, LRT access, and mature established streets.' },
                { href: '/realtor-discovery-ridge-calgary', name: 'Discovery Ridge', zone: 'Calgary SW · Nature Adjacent', blurb: 'Griffith Woods Provincial Park at your doorstep. Low-density, large lots, and a quiet community feel.' },
                { href: '/realtor-aspen-woods-calgary', name: 'Aspen Woods', zone: 'Calgary SW · Luxury', blurb: 'Premium SW community with high-end detached homes, private schools nearby, and Westhills shopping access.' },
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
