import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Auburn Bay REALTOR® | Find a Real Estate Agent in Auburn Bay Calgary',
  description:
    'Find a REALTOR® who specializes in Auburn Bay, Calgary. Expert advice on the 43-acre private lake community — detached homes $550K–$900K. Free matching, no obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-auburn-bay-calgary' },
  openGraph: {
    title: 'Auburn Bay REALTOR® | Calgary Realtor Finder',
    description: 'Get matched with a licensed REALTOR® specializing in Auburn Bay real estate.',
    url: 'https://calgaryrealtorfinder.ca/realtor-auburn-bay-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Auburn Bay',
    url: 'https://calgaryrealtorfinder.ca/realtor-auburn-bay-calgary',
    areaServed: 'Auburn Bay, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Auburn Bay, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-auburn-bay-calgary',
    areaServed: 'Auburn Bay, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Auburn Bay and SE Calgary lake communities.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are Auburn Bay home prices in 2024?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Detached homes in Auburn Bay range from the low $550,000s to over $900,000 depending on lot size and lake proximity. Townhomes and condos start around $300,000–$450,000. Lake-access lots command a meaningful premium over comparable homes one or two streets back. The Auburn Bay Homeowners Association fee is an additional ownership cost to factor into your budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the Auburn Bay HOA work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "All residents of Auburn Bay pay an annual Homeowners Association fee that covers access to the 43-acre lake, beach club, skating rink, and clubhouse. HOA fees are payable regardless of whether you use the amenities. When purchasing in Auburn Bay, your REALTOR® should confirm the current fee structure and any outstanding levies as part of due diligence. The HOA is one of Calgary's most well-managed and adds directly to long-term property values.",
        },
      },
    ],
  },
])

export default function AuburnBayRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · LAKE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Auburn Bay REALTOR® — Buy or Sell With Confidence
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-se-realtors" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Auburn Bay</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Auburn Bay&apos;s 43-acre private lake makes this one of Calgary&apos;s most competitive markets.
              Get matched with a REALTOR® who tracks every listing — lake access or not.
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
                Auburn Bay is one of SE Calgary&apos;s most established and sought-after communities,
                built around a 43-acre private residents-only lake. The neighbourhood sits east of
                Deerfoot Trail between Mahogany (south) and New Brighton (north), with Auburn Bay
                Boulevard SE as its main artery. Carma (now Brookfield Residential) began development
                around 2006, and the community reached effective build-out by 2016 — giving it the
                settled, tree-lined character that newer suburbs lack.
              </p>
              <p>
                Housing in Auburn Bay spans a wide spectrum. First-time buyers enter through
                condominium apartments and townhome complexes along the community&apos;s southern and
                western edges, typically in the $300,000–$450,000 range. Move-up buyers target
                detached homes, which run from the mid-$500,000s for interior lots to north of
                $900,000 for estate homes on lake-access properties. The Auburn Bay Homeowners
                Association manages the lake, beach club, skating rink, and year-round programming —
                and the annual HOA fee is worth understanding before you buy. Your REALTOR® should
                walk you through the current fee schedule and any capital reserve updates as part of
                standard due diligence.
              </p>
              <p>
                For sellers, Auburn Bay&apos;s strongest windows are traditionally spring (March–May)
                and early fall (September–October), when family buyers are most active. Lake-access
                listings frequently attract multiple offers within days when priced at market. If
                you&apos;re on a non-lake street, presentation — staging, photography, and positioning
                relative to recent comparables — carries extra weight. A REALTOR® who has transacted
                specifically in Auburn Bay will know which sub-streets carry premiums and how to
                frame your home&apos;s value accordingly.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Auburn Bay real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are Auburn Bay home prices?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes in Auburn Bay range from the low $550,000s to over $900,000
                      depending on lot size and lake proximity. Townhomes and condos start around
                      $300,000–$450,000. Lake-access lots command a meaningful premium over
                      comparable homes one or two streets back. The HOA fee is an additional
                      ownership cost to factor into your budget.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      How does the Auburn Bay HOA work?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      All Auburn Bay residents pay an annual HOA fee covering access to the lake,
                      beach club, skating rink, and clubhouse. Fees are payable regardless of
                      amenity use. When buying in Auburn Bay, your REALTOR® should confirm the
                      current fee structure and any outstanding levies as part of due diligence.
                      The HOA is one of Calgary&apos;s best-run, which directly supports long-term
                      property values.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — AUBURN BAY
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
              Also popular with Auburn Bay buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-mahogany-calgary', name: 'Mahogany', zone: 'Calgary SE · Premier Lake', blurb: "Calgary's largest private lake at 63 acres. Estate homes, Westman Village condos, and Seton's urban amenities next door." },
                { href: '/realtor-mckenzie-towne-calgary', name: 'McKenzie Towne', zone: 'Calgary SE · Established', blurb: 'Traditional architecture, High Street commercial district, and mature streetscapes. Strong value in Calgary SE.' },
                { href: '/realtor-cranston-calgary', name: 'Cranston', zone: 'Calgary SE · Escarpment Views', blurb: 'Fish Creek Provincial Park at your doorstep, Bow River escarpment views, and the luxury Riverstone enclave.' },
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
