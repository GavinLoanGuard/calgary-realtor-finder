import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Tuscany REALTOR® | Find a Real Estate Agent in Tuscany Calgary NW',
  description:
    'Find a REALTOR® who specializes in Tuscany, Calgary NW. Tuscany Club amenities, end-of-line LRT access, and established family community — detached homes $540K–$950K. Free matching.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-tuscany-calgary' },
  openGraph: {
    title: 'Tuscany REALTOR® | Calgary Realtor Finder',
    description: "Get matched with a licensed REALTOR® in Tuscany — one of Calgary NW's largest and most established communities with direct LRT access.",
    url: 'https://calgaryrealtorfinder.ca/realtor-tuscany-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Tuscany',
    url: 'https://calgaryrealtorfinder.ca/realtor-tuscany-calgary',
    areaServed: 'Tuscany, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Tuscany, NW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-tuscany-calgary',
    areaServed: 'Tuscany, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Tuscany and NW Calgary real estate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Tuscany Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tuscany detached homes typically range from $540,000 to $950,000 depending on size, sub-neighbourhood, and condition. Semi-detached and townhomes start around $280,000–$480,000. The community has a range of vintages — homes built in the mid-1990s through 2010 — so buyers can find more affordable unrenovated options or pay a premium for updated properties. Tuscany is generally priced more accessibly than Rocky Ridge and Royal Oak, making it an attractive entry point for NW Calgary buyers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Tuscany have a CTrain station?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes — Tuscany Station is the western terminus of Calgary's NW CTrain line, which means the platform is rarely crowded (riders board here, not later in the route). The station connects directly to downtown Calgary in approximately 40 minutes. A Park & Ride is available for residents who drive to the station. This LRT access is one of Tuscany's most practical advantages and makes it a strong choice for buyers who commute downtown.",
        },
      },
    ],
  },
])

export default function TuscanyRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY NW · TUSCANY CLUB · END-OF-LINE LRT</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Tuscany REALTOR® — Calgary NW&apos;s Best-Connected Established Community
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-nw-realtors" className="hover:text-white/80 transition-colors">Calgary NW</Link>
                {' › '}
                <span className="text-white/70">Tuscany</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              End-of-line CTrain access, the Tuscany Club community centre, and nearly 4,000 homes
              of established NW community. Find a REALTOR® who knows Tuscany inside out.
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
                Tuscany is one of Calgary NW&apos;s most substantial residential communities —
                approximately 3,800 homes and 12,000 residents across a hillside location that
                offers valley and mountain views from its higher streets. Developed from the
                mid-1990s through 2010, Tuscany has that particular mix of maturity (established
                trees, infrastructure, known school catchments) and relative freshness that makes
                it perennially attractive to family buyers. The community is named after the Italian
                region, and its curvilinear street design and park network reflect the era&apos;s
                planning philosophy for suburban communities.
              </p>
              <p>
                The Tuscany Club is the neighbourhood&apos;s community hub — a well-appointed association
                facility with skating rinks, a spray park, tennis courts, and year-round programming.
                Annual HOA fees fund the club and are modest relative to the amenity value delivered.
                Multiple schools — including Tuscany School (public elementary), St. Basil (Catholic),
                and Eric Harvie (public elementary) — are within the community, reducing the school
                commute burden that affects newer suburban communities with underdeveloped educational
                infrastructure.
              </p>
              <p>
                Tuscany Station at the community&apos;s eastern edge terminates the NW CTrain line,
                giving Tuscany residents end-of-line boarding — consistently less crowded than
                mid-route stops. The 40-minute downtown commute by LRT makes Tuscany one of the
                better-connected NW communities for transit users. For buyers choosing between
                Tuscany, Royal Oak, and Rocky Ridge, Tuscany tends to be the most accessible
                price point while delivering comparable community amenities and LRT proximity.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Tuscany real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Tuscany Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $540,000 to $950,000. Semi-detached and townhomes
                      start around $280,000–$480,000. Tuscany&apos;s range of vintages (mid-1990s through
                      2010) means buyers can find value in unrenovated homes or pay a premium for
                      updated properties. Generally priced more accessibly than Rocky Ridge and
                      Royal Oak — a good NW entry point.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Does Tuscany have CTrain access?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Yes — Tuscany Station is the western terminus of the NW CTrain line. End-of-line
                      boarding means the platform is rarely crowded. Downtown Calgary is approximately
                      40 minutes by LRT, with Park &amp; Ride available. This transit access is one of
                      Tuscany&apos;s most practical advantages for commuter buyers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — TUSCANY
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
              Also popular with Tuscany buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-rocky-ridge-calgary', name: 'Rocky Ridge', zone: 'Calgary NW · Elevated Views', blurb: 'Elevated NW community with mountain and city views, Rocky Ridge Ranch amenity centre, and Shane Homes YMCA access.' },
                { href: '/realtor-royal-oak-calgary', name: 'Royal Oak', zone: 'Calgary NW · Family Community', blurb: 'Curvilinear streets, strong schools, and a family-oriented character similar to Tuscany with slightly newer build dates.' },
                { href: '/realtor-cochrane', name: 'Cochrane', zone: 'West of Calgary · Small Town', blurb: 'For Tuscany buyers ready to go further west — Cochrane offers mountain views, small-town character, and lower prices.' },
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
