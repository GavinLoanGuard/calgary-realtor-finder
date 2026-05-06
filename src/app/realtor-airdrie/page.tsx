import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Airdrie REALTOR® | Find a Real Estate Agent in Airdrie Alberta',
  description:
    "Connect with a REALTOR® who specializes in Airdrie, Alberta. Canada's fastest-growing city — new construction dominant, detached homes $430K–$700K, 30 km north of Calgary. Free matching.",
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-airdrie' },
  openGraph: {
    title: 'Airdrie REALTOR® | Calgary Realtor Finder',
    description: "Find a licensed REALTOR® in Airdrie — Alberta's fastest-growing city with significant value relative to Calgary and dominant new construction inventory.",
    url: 'https://calgaryrealtorfinder.ca/realtor-airdrie',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Airdrie',
    url: 'https://calgaryrealtorfinder.ca/realtor-airdrie',
    areaServed: 'Airdrie, Alberta',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Airdrie, Alberta.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-airdrie',
    areaServed: 'Airdrie, Alberta',
    description: 'Licensed REALTOR® serving Airdrie and the greater Calgary metro area.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Airdrie Alberta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Airdrie detached homes typically range from $430,000 to $700,000. New construction (which dominates Airdrie's inventory) from major builders like Jayman, Homes by Avi, and Morrison runs from $480,000 to $700,000 for standard product. Semi-detached and townhomes start around $240,000–$380,000. Airdrie consistently offers 15–25% more home per dollar than comparable Calgary NW communities, which is the primary driver of its sustained growth.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long is the commute from Airdrie to Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Airdrie is approximately 30 km north of Calgary along QE2 (Deerfoot Trail). The commute to Calgary's north end (Stoney Trail interchange) takes 20–30 minutes in normal conditions. To downtown Calgary, expect 35–50 minutes depending on traffic. Airdrie is served by several Calgary Transit park-and-ride express bus routes during peak hours, which reduces the commute burden for downtown workers. The City of Airdrie has been actively pursuing employment lands to reduce the proportion of residents who must commute to Calgary daily.",
        },
      },
    ],
  },
])

export default function AirdrieRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">NORTH OF CALGARY · FASTEST GROWING CITY · NEW CONSTRUCTION</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Airdrie REALTOR® — More Home Per Dollar, 30 km North of Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/alberta-cities" className="hover:text-white/80 transition-colors">Alberta Communities</Link>
                {' › '}
                <span className="text-white/70">Airdrie</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Airdrie has been Canada&apos;s fastest-growing city — and it&apos;s not slowing down. New
              construction, significant value versus Calgary, and a 30-minute commute north.
              Find a REALTOR® who knows Airdrie&apos;s fast-moving market.
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
                Airdrie sits 30 km north of Calgary along QE2 (Deerfoot Trail), and it has
                consistently ranked among Canada&apos;s fastest-growing cities by percentage for the
                past decade. The population has grown from around 25,000 in 2006 to over 80,000
                today — fuelled almost entirely by Calgary residents and interprovincial migrants
                who find Airdrie delivers significantly more home per dollar than anything within
                Calgary&apos;s city limits. Major builders including Jayman, Homes by Avi, Morrison,
                Shane, and Genesis actively develop Airdrie&apos;s many new communities, and new
                construction options are always available.
              </p>
              <p>
                Airdrie&apos;s housing is dominated by detached single-family homes — the city was
                planned as a bedroom community, and its land supply relative to population means
                detached affordability that Calgary&apos;s density pressures have eliminated. A new
                construction detached home with double-attached garage, three bedrooms, and an
                unspoiled basement can be found in the $500,000–$650,000 range from reputable
                builders — a specification that costs $700,000+ in comparable Calgary communities.
                Semi-detached and townhomes represent a growing but smaller share of inventory,
                starting around $240,000 for entry-level attached product.
              </p>
              <p>
                The Airdrie buyer profile is almost universally Calgary commuters: families where
                the math on a 30-minute commute north clearly beats the math on a Calgary home that
                costs $150,000+ more. The city has invested in QE2 interchanges and park-and-ride
                express bus service to downtown Calgary. A REALTOR® who specializes in both Calgary
                and Airdrie can give you a genuine side-by-side comparison — which communities
                represent true value versus which are simply cheaper — and help you navigate new
                construction builder contracts, which differ substantially from resale MLS purchases.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Airdrie real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Airdrie Alberta?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $430,000 to $700,000, with new construction from
                      major builders running $480,000–$700,000 for standard product. Semi-detached
                      and townhomes start around $240,000–$380,000. Airdrie typically offers 15–25%
                      more home per dollar than comparable Calgary NW communities.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      How long is the commute from Airdrie to Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Approximately 30 km by QE2. Normal conditions: 20–30 minutes to Calgary&apos;s
                      north end, 35–50 minutes to downtown. Calgary Transit runs express park-and-ride
                      bus routes during peak hours, reducing the burden for downtown workers. Airdrie
                      is also actively developing its own employment base to reduce commute dependence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — AIRDRIE
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
              Also considering these communities?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-okotoks', name: 'Okotoks', zone: 'South of Calgary · Small Town', blurb: 'For buyers who prefer south of Calgary — Okotoks delivers similar value to Airdrie with Foothills character and strong schools.' },
                { href: '/realtor-cochrane', name: 'Cochrane', zone: 'West of Calgary · Mountain Views', blurb: 'Foothills town 30 km west with mountain views. Slower growth than Airdrie but strong community character.' },
                { href: '/realtor-tuscany-calgary', name: 'Tuscany', zone: 'Calgary NW · End-of-Line LRT', blurb: 'The closest Calgary NW equivalent to Airdrie pricing — with CTrain access for the commute tradeoff.' },
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
