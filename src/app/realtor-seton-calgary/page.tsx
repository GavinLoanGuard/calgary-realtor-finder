import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Seton REALTOR® | Find a Real Estate Agent in Seton Calgary',
  description:
    "Connect with a REALTOR® who specializes in Seton, Calgary's newest urban district. Condos from $280K, detached homes $450K–$800K, South Health Campus nearby. Free matching.",
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-seton-calgary' },
  openGraph: {
    title: 'Seton REALTOR® | Calgary Realtor Finder',
    description: "Find a licensed REALTOR® in Seton — Calgary's newest SE urban district with South Health Campus and the world's largest YMCA.",
    url: 'https://calgaryrealtorfinder.ca/realtor-seton-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Seton',
    url: 'https://calgaryrealtorfinder.ca/realtor-seton-calgary',
    areaServed: 'Seton, Calgary, AB',
    priceRange: 'Free',
    description: "Free REALTOR® matching for buyers and sellers in Seton, Calgary's SE urban district.",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-seton-calgary',
    areaServed: 'Seton, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Seton and SE Calgary new construction.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Seton a good place to buy in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Seton is one of Calgary's fastest-developing communities and a strong choice for buyers who want urban amenities without inner-city prices. The South Health Campus (Calgary's third acute-care hospital), the world's largest YMCA at 225,000 sq ft, a Cineplex VIP cinema, and dozens of restaurants and retailers are all built or under construction within the Seton Urban District. It's particularly popular with healthcare workers, young professionals, and buyers seeking walkable lifestyle without a downtown commute.",
        },
      },
      {
        '@type': 'Question',
        name: 'What types of homes are available in Seton Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seton offers the broadest product mix in SE Calgary. Condominium apartments start around $280,000–$350,000 for one-bedroom units. Townhomes (with and without attached garages) range from $380,000 to $550,000. Detached laned and front-drive homes run from $450,000 to $800,000. Many Seton homes are still being built by major builders including Brookfield, Cedarglen, and Homes by Avi, so new construction options are available alongside resale inventory.',
        },
      },
    ],
  },
])

export default function SetonRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · URBAN DISTRICT · NEW BUILD</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Seton Calgary REALTOR® — New Construction &amp; Resale Specialists
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-se-realtors" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Seton</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              South Health Campus, the world&apos;s largest YMCA, and a full urban commercial district —
              Seton is SE Calgary&apos;s fastest-growing neighbourhood. Find the right agent here.
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
                Seton is Calgary&apos;s most ambitious new community — an urban district concept that
                puts major employment, healthcare, recreation, and retail at the centre of a
                residential neighbourhood rather than the periphery. Located immediately west of
                Mahogany along 210th Avenue SE, Seton is anchored by the South Health Campus
                (Calgary&apos;s third full-service hospital), the Brookfield Residential YMCA at Seton
                (225,000 sq ft — the world&apos;s largest YMCA), a Cineplex VIP Cinema, and a growing
                retail and restaurant core that continues to expand.
              </p>
              <p>
                For buyers, Seton offers one of the broadest product mixes in SE Calgary. Condominium
                apartments start around $280,000 and are particularly popular with healthcare workers
                employed at South Health Campus who want to walk to work. Townhome complexes — many
                still being built — range from $380,000 to $550,000. Detached homes run from
                $450,000 to $800,000. Because large portions of Seton are still under active
                development, buyers have the option of purchasing from a builder directly or buying
                resale inventory from original owners. Each approach has distinct advantages — a
                REALTOR® experienced in Seton can help you navigate builder contracts, which are
                meaningfully different from standard MLS purchases.
              </p>
              <p>
                Seton is particularly attractive to first-time buyers who want to maximize their
                purchasing power without sacrificing amenities, and to investors drawn by the
                rental demand generated by South Health Campus. Stoney Trail access makes the
                commute to other parts of Calgary reasonable, and the planned future BRT (bus rapid
                transit) connection will further improve transit access. Sellers in Seton&apos;s earlier
                phases are beginning to see strong appreciation as the community reaches maturity —
                particularly in phases closest to the YMCA and health campus.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Seton real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Seton a good place to buy in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Seton is one of Calgary&apos;s fastest-developing communities with built-in amenity
                      anchors that drive long-term population. South Health Campus, the world&apos;s largest
                      YMCA, and a full commercial district make it attractive to healthcare workers,
                      young professionals, and buyers seeking walkable lifestyle without downtown
                      prices. Investor demand for rental units near the hospital is also strong.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What types of homes are available in Seton?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Seton has Calgary SE&apos;s broadest product mix: condos from $280,000–$350,000,
                      townhomes $380,000–$550,000, and detached homes $450,000–$800,000. Major builders
                      including Brookfield, Cedarglen, and Homes by Avi are still active, so new
                      construction and resale options both exist. Builder contracts differ meaningfully
                      from MLS purchases — a REALTOR® familiar with Seton builder agreements is
                      particularly valuable here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — SETON
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
              Also popular with Seton buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-mahogany-calgary', name: 'Mahogany', zone: "Calgary SE · Premier Lake", blurb: "Immediately east of Seton — Calgary's largest private lake, estate homes, and Westman Village condos." },
                { href: '/realtor-cranston-calgary', name: 'Cranston', zone: 'Calgary SE · Fish Creek Access', blurb: 'Fish Creek Provincial Park access, Riverstone luxury estates, and Century Hall community amenities directly adjacent to Seton.' },
                { href: '/realtor-auburn-bay-calgary', name: 'Auburn Bay', zone: 'Calgary SE · Lake Community', blurb: 'Established lake community with a 43-acre private lake, Auburn Station shopping, and strong resale demand.' },
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
