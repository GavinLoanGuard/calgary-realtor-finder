import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Aspen Woods REALTOR® | Find a Luxury Real Estate Agent in Aspen Woods Calgary',
  description:
    'Get matched with a REALTOR® who specializes in Aspen Woods, Calgary SW. Luxury detached homes $700K–$1.5M, private schools nearby, and premium community feel. Free, no obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-aspen-woods-calgary' },
  openGraph: {
    title: 'Aspen Woods REALTOR® | Calgary Realtor Finder',
    description: "Find a licensed REALTOR® in Aspen Woods — SW Calgary's premium community with luxury homes and private school proximity.",
    url: 'https://calgaryrealtorfinder.ca/realtor-aspen-woods-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Aspen Woods',
    url: 'https://calgaryrealtorfinder.ca/realtor-aspen-woods-calgary',
    areaServed: 'Aspen Woods, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Aspen Woods, SW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-aspen-woods-calgary',
    areaServed: 'Aspen Woods, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Aspen Woods and luxury SW Calgary real estate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Aspen Woods Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Aspen Woods is one of Calgary SW's premium communities. Detached homes typically range from $700,000 to $1.5 million, with custom-built estate homes on larger lots at the higher end. Townhome and attached product in Aspen Woods runs from $400,000 to $650,000. The community's newer build dates (2000s–2015), larger lot sizes, and proximity to private schools (Calgary Academy, Webber Academy, Rundle College) support strong pricing relative to comparable SW communities.",
        },
      },
      {
        '@type': 'Question',
        name: 'What private schools are near Aspen Woods Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aspen Woods is the closest established residential community to a cluster of Calgary\'s most prominent private schools. Calgary Academy (learning disabilities focus), Webber Academy (university prep, SK–12), and Rundle College (learning differences) are all within a 5–10 minute drive. This proximity is a meaningful draw for families whose children attend these schools, and it sustains demand for Aspen Woods property regardless of broader market conditions.',
        },
      },
    ],
  },
])

export default function AspenWoodsRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · LUXURY · PRIVATE SCHOOLS</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Aspen Woods REALTOR® — Calgary SW&apos;s Premium Family Community
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-sw-realtors" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Aspen Woods</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Luxury detached homes, Calgary Academy and Webber Academy nearby, and one of SW
              Calgary&apos;s highest concentrations of premium builds. Work with a specialist here.
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
                Aspen Woods is the prestige address of Calgary&apos;s SW quadrant — a community that
                attracts buyers who want newer construction, larger lot sizes, and a quieter
                residential feel than inner-city communities can offer. Developed primarily through
                the 2000s and into 2015, Aspen Woods has a consistent architectural character:
                front-attached garages, substantial square footage, and finished basements are the
                norm rather than the exception. The community sits west of 85th Street SW, with
                Stoney Trail forming its western boundary and quick access to downtown via Bow
                Trail or Glenmore Trail.
              </p>
              <p>
                What makes Aspen Woods particularly distinctive is its proximity to private
                education. Calgary Academy, Webber Academy, and Rundle College are all within a
                5–10 minute drive — an advantage that sustains demand from families whose children
                attend these schools regardless of broader market conditions. Aspen Landing
                shopping centre, anchored by a Sobeys and a range of professional services, provides
                walkable retail directly within the community. The nearby Westside Recreation Centre
                adds aquatics and fitness without the drive across the city.
              </p>
              <p>
                Buyers in Aspen Woods tend to be executive families, dual-income professionals, and
                move-up purchasers from inner-city communities who want more space without sacrificing
                quality of build. Sellers benefit from the community&apos;s clear prestige positioning —
                buyers come here specifically for what Aspen Woods offers. That said, pricing requires
                precision: the market is relatively thin at the top end, so overpricing by even
                5–8% can mean months on market. A REALTOR® who regularly transacts in Calgary&apos;s
                luxury SW segment is essential to setting the right opening price.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Aspen Woods real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Aspen Woods Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $700,000 to $1.5 million; custom estate homes on
                      larger lots reach higher. Attached product and townhomes run $400,000–$650,000.
                      Newer build dates, larger lots, and private school proximity support premium
                      pricing relative to comparable SW communities.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What private schools are near Aspen Woods?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Calgary Academy (learning disabilities), Webber Academy (university prep,
                      SK–12), and Rundle College (learning differences) are all within a 5–10 minute
                      drive. This cluster of private schools is a major factor in Aspen Woods demand
                      and sustains buyers regardless of broader market conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — ASPEN WOODS
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
              Also popular with Aspen Woods buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-discovery-ridge-calgary', name: 'Discovery Ridge', zone: 'Calgary SW · Nature Adjacent', blurb: 'Griffith Woods Provincial Park on the doorstep. Low-density, large estate lots, and one of SW Calgary\'s quietest communities.' },
                { href: '/realtor-signal-hill-calgary', name: 'Signal Hill', zone: 'Calgary SW · Views & LRT', blurb: 'Mountain and downtown views, 69th Street LRT access, and an established community with broad price range.' },
                { href: '/realtor-evergreen-calgary', name: 'Evergreen', zone: 'Calgary SW · Fish Creek Access', blurb: 'More affordable SW option with Fish Creek Park access, strong schools, and consistent family demand.' },
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
