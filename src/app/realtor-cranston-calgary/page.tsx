import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Cranston REALTOR® | Find a Real Estate Agent in Cranston Calgary',
  description:
    'Get matched with a REALTOR® who specializes in Cranston, Calgary. From Century Hall family homes to luxury Riverstone estates — detached $500K–$1.1M. Free, no obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-cranston-calgary' },
  openGraph: {
    title: 'Cranston REALTOR® | Calgary Realtor Finder',
    description: 'Find a licensed REALTOR® specializing in Cranston real estate. Fish Creek Park access, escarpment views, and the Riverstone luxury enclave.',
    url: 'https://calgaryrealtorfinder.ca/realtor-cranston-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Cranston',
    url: 'https://calgaryrealtorfinder.ca/realtor-cranston-calgary',
    areaServed: 'Cranston, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Cranston, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-cranston-calgary',
    areaServed: 'Cranston, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Cranston and SE Calgary real estate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between Cranston and Cranston Riverstone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cranston refers to the broader community developed by Brookfield Residential since the early 2000s. Cranston's Riverstone is a luxury enclave within Cranston, positioned along the Bow River escarpment with larger estate lots, premium builders, and panoramic river valley views. Riverstone homes typically start around $750,000 and can exceed $1.5 million for custom builds on escarpment-edge lots. Standard Cranston homes range from $500,000 to $900,000 for detached properties.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is Cranston close to Fish Creek Park?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes — Cranston's western boundary backs directly onto Fish Creek Provincial Park, one of the largest urban parks in North America at over 13 km². Residents have direct pathway access to the park for cycling, hiking, and cross-country skiing. The park also acts as a natural sound buffer and green space that many Cranston buyers specifically seek out. Homes on park-backing lots command a noticeable premium.",
        },
      },
    ],
  },
])

export default function CranstonRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · FISH CREEK · RIVERSTONE</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Cranston, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-se-realtors" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Cranston</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              From Fish Creek Park pathways to Riverstone escarpment estates — Cranston offers
              one of SE Calgary&apos;s broadest ranges of family homes. Get matched with a specialist.
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
                Cranston occupies the far southeast corner of Calgary, bordered by Fish Creek
                Provincial Park to the west and the Bow River escarpment to the south. Brookfield
                Residential began development in the early 2000s, and the community has grown into
                one of Calgary&apos;s larger SE neighbourhoods — roughly 18,000 residents across a
                diverse range of housing types. Century Hall, the community association centre,
                offers a gym, skating rink, splash park, and year-round programming that gives
                Cranston its strong community-oriented reputation.
              </p>
              <p>
                Within Cranston, there are effectively two markets. Standard Cranston — the bulk
                of the community north of 210th Avenue — offers family-sized detached homes
                ranging from around $500,000 to $900,000, plus a selection of townhomes and
                duplexes for budget-conscious buyers. Then there is Cranston&apos;s Riverstone: a
                luxury enclave positioned along the Bow River escarpment, where estate lots and
                custom builds command $750,000 to well over $1.5 million. Riverstone buyers are
                typically move-up purchasers trading inner-city proximity for size, views, and
                park access that simply doesn&apos;t exist closer to downtown.
              </p>
              <p>
                Buyers are drawn to Cranston for its park access, mature streetscapes, and the
                fact that Deerfoot Trail and Stoney Trail ring roads make the commute to downtown
                Calgary manageable despite the distance. Families appreciate the number of schools
                — both public and Catholic — within walkable distance. Sellers in Cranston benefit
                from consistent demand, particularly from buyers who have been priced out of Auburn
                Bay and Mahogany. A REALTOR® who understands which Cranston streets back onto Fish
                Creek, and what premium that commands versus interior lots, is invaluable in both
                buying and listing scenarios.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Cranston real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the difference between Cranston and Cranston Riverstone?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Cranston is the broader community; Riverstone is a luxury enclave within it,
                      positioned along the Bow River escarpment with larger estate lots and premium
                      builders. Riverstone homes typically start around $750,000 and can exceed
                      $1.5 million for custom escarpment-edge builds. Standard Cranston detached
                      homes range from $500,000 to $900,000.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Cranston close to Fish Creek Park?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Yes — Cranston&apos;s western boundary backs directly onto Fish Creek Provincial
                      Park, one of North America&apos;s largest urban parks at over 13 km². Residents
                      have direct pathway access for cycling, hiking, and skiing. Park-backing lots
                      command a noticeable premium and rarely stay on the market long.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — CRANSTON
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
              Also popular with Cranston buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-auburn-bay-calgary', name: 'Auburn Bay', zone: 'Calgary SE · Lake Community', blurb: "A 43-acre private lake, Auburn Station shopping, and an established community feel that Cranston buyers often compare." },
                { href: '/realtor-seton-calgary', name: 'Seton', zone: 'Calgary SE · Urban District', blurb: "The newest SE urban district — South Health Campus, the world's largest YMCA, and growing commercial amenities immediately adjacent to Cranston." },
                { href: '/realtor-mckenzie-towne-calgary', name: 'McKenzie Towne', zone: 'Calgary SE · Established', blurb: 'Character architecture, High Street commercial, and some of SE Calgary\'s best value in the established detached market.' },
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
