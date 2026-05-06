import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Rocky Ridge REALTOR® | Find a Real Estate Agent in Rocky Ridge Calgary NW',
  description:
    'Connect with a REALTOR® who specializes in Rocky Ridge, Calgary NW. Mountain and city views, Shane Homes YMCA, and elevated community character — detached homes $500K–$950K.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-rocky-ridge-calgary' },
  openGraph: {
    title: 'Rocky Ridge REALTOR® | Calgary Realtor Finder',
    description: "Find a licensed REALTOR® in Rocky Ridge — NW Calgary's elevated community with panoramic mountain views and the Shane Homes YMCA.",
    url: 'https://calgaryrealtorfinder.ca/realtor-rocky-ridge-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Rocky Ridge',
    url: 'https://calgaryrealtorfinder.ca/realtor-rocky-ridge-calgary',
    areaServed: 'Rocky Ridge, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Rocky Ridge, NW Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-rocky-ridge-calgary',
    areaServed: 'Rocky Ridge, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Rocky Ridge and NW Calgary real estate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Rocky Ridge Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rocky Ridge detached homes typically range from $500,000 to $950,000, with elevated lots offering mountain views commanding premiums at the higher end. Townhomes and semi-detached homes in Rocky Ridge start around $320,000–$500,000. The community offers a mix of build dates from the early 2000s through 2015, giving buyers a range of renovation opportunities and move-in-ready options.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Rocky Ridge Ranch community centre?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Rocky Ridge Ranch is the community association facility serving Rocky Ridge and Royal Oak, featuring an outdoor skating rink, tennis courts, spray park, and event space. Annual HOA fees for Rocky Ridge/Royal Oak residents fund the Ranch. The nearby Shane Homes YMCA (one of Calgary\'s largest recreation centres, shared with Royal Oak) provides aquatics, fitness, and programming on a membership basis and is a significant draw for families considering the NW quadrant.',
        },
      },
    ],
  },
])

export default function RockyRidgeRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY NW · MOUNTAIN VIEWS · YMCA ACCESS</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Rocky Ridge REALTOR® — Elevated Living in Calgary NW
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-nw-realtors" className="hover:text-white/80 transition-colors">Calgary NW</Link>
                {' › '}
                <span className="text-white/70">Rocky Ridge</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Rocky Ridge sits elevated above the Bow River valley, delivering mountain views that
              most Calgary communities can&apos;t match. Find a REALTOR® who knows exactly which
              streets deliver the views — and what they&apos;re worth.
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
                Rocky Ridge occupies high ground in Calgary&apos;s NW quadrant, with its elevated
                position delivering panoramic views of the Rocky Mountains to the west and the
                Bow River valley below. The community runs along the ridge between Stoney Trail
                and the older communities of Tuscany and Arbour Lake, with its highest streets
                offering some of the best private mountain views within Calgary&apos;s city limits.
                Development began in the early 2000s and the community reached effective build-out
                around 2015, giving it a coherent feel without the long wait of still-developing areas.
              </p>
              <p>
                Rocky Ridge shares the Rocky Ridge Ranch community association and the Shane Homes
                YMCA with adjacent Royal Oak — a significant advantage for families. The YMCA is
                one of Calgary&apos;s largest recreation centres, featuring an aquatic centre, fitness
                facilities, gymnasium, and year-round programming. Stoney Trail to the south connects
                Rocky Ridge efficiently to both the airport and other quadrants without requiring
                a downtown detour, and Crowchild Trail provides direct access northward for those
                commuting toward the University of Calgary, Children&apos;s Hospital, and Foothills
                Medical Centre — Calgary&apos;s largest employment cluster outside the downtown core.
              </p>
              <p>
                The Rocky Ridge buyer profile spans a wide range: young families drawn by the YMCA
                and schools, professionals who work at the NW hospital cluster, and retirees and
                empty-nesters who prioritize views and quality of life over proximity to downtown.
                Sellers at the top of the ridge — with demonstrable mountain views — typically see
                strong interest regardless of the broader market cycle. A REALTOR® who knows which
                Rocky Ridge streets deliver true mountain views (versus partial or seasonal views)
                is essential for pricing accuracy.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Rocky Ridge real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Rocky Ridge Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $500,000 to $950,000, with elevated view lots at the
                      higher end. Townhomes and semi-detached start around $320,000–$500,000. The mix
                      of early-2000s through 2015 build dates gives buyers renovation opportunities
                      alongside move-in-ready options.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the Rocky Ridge Ranch community centre?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      The Rocky Ridge Ranch serves Rocky Ridge and Royal Oak with an outdoor skating
                      rink, tennis courts, and spray park. The nearby Shane Homes YMCA (shared with
                      Royal Oak) is one of Calgary&apos;s largest recreation facilities — aquatics, fitness,
                      and programming. Annual HOA fees fund the Ranch; YMCA access is membership-based.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — ROCKY RIDGE
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
              Also popular with Rocky Ridge buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-tuscany-calgary', name: 'Tuscany', zone: 'Calgary NW · End-of-Line LRT', blurb: 'Large established NW community with Tuscany CTrain station, Tuscany Club amenities, and accessible price points.' },
                { href: '/realtor-royal-oak-calgary', name: 'Royal Oak', zone: 'Calgary NW · Family Community', blurb: 'Shares the Rocky Ridge Ranch and Shane Homes YMCA — slightly newer builds and cul-de-sac character streets.' },
                { href: '/realtor-cochrane', name: 'Cochrane', zone: 'West of Calgary · Mountain Views', blurb: 'Rocky Ridge buyers who want more mountain and less city often consider Cochrane — 30 km west with foothills character.' },
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
