import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Selling Your Home in Calgary | Complete Seller Guide 2024',
  description:
    'How to sell your home in Calgary — pricing strategy, staging, listing timelines, and what sellers actually net after commission and closing costs. Expert guidance, free matching.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/selling-your-home-calgary' },
  openGraph: {
    title: 'Selling Your Home in Calgary | Calgary Realtor Finder',
    description: 'The complete guide to selling your home in Calgary — from pricing to closing, what to expect in the current market.',
    url: 'https://calgaryrealtorfinder.ca/selling-your-home-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Selling Your Home in Calgary — Complete Seller Guide',
    description: 'Step-by-step guide for home sellers in Calgary, including pricing strategy, staging, timeline, and net proceeds calculation.',
    url: 'https://calgaryrealtorfinder.ca/selling-your-home-calgary',
    publisher: {
      '@type': 'Organization',
      name: 'Calgary Realtor Finder',
      url: 'https://calgaryrealtorfinder.ca',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best time to sell a home in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Calgary's peak selling seasons are spring (March–May) and early fall (September–October). Spring typically delivers the highest buyer activity and most competitive offer conditions. The summer months (June–August) see reduced buyer pool as families travel, though serious buyers remain active. Winter listings (November–February) have less competition from other sellers, which can offset the reduced buyer pool. Your REALTOR® should advise on the specific timing for your community — neighbourhood factors sometimes override general seasonal patterns.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to sell a home in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Average days on market in Calgary varies by community, price point, and season. In 2023–2024, well-priced detached homes in high-demand communities like Auburn Bay, Mahogany, and McKenzie Towne have averaged 10–25 days on market. Overpriced properties in any community can sit for 60–90+ days. The typical Calgary transaction from accepted offer to closing is 30–45 days (the possession period specified in the contract). Total timeline from listing to possession: 6–10 weeks for a realistically priced home in current market conditions.",
        },
      },
    ],
  },
])

export default function SellingYourHomeCalgaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY HOME SELLERS · PRICING · STRATEGY · NET PROCEEDS</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Selling Your Home in Calgary — What to Expect, Start to Close
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/resources" className="hover:text-white/80 transition-colors">Resources</Link>
                {' › '}
                <span className="text-white/70">Selling Your Home in Calgary</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Pricing strategy, staging, timeline, and exactly what you&apos;ll net after commissions
              and closing costs. Calgary seller guidance from an agent with recent sales in the market.
            </p>
            <Link href="/" className="font-inter text-accent text-sm mt-6 inline-block hover:underline">
              ← Back to Calgary Realtor Finder
            </Link>
          </div>
        </section>

        <section className="bg-background py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8 font-inter text-charcoal/70 text-base leading-relaxed">

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">The Calgary seller&apos;s market in 2024–2025</h2>
                <p>
                  Calgary&apos;s real estate market has been among Canada&apos;s strongest performers in
                  recent years, with the detached benchmark price sitting at approximately $587,000
                  — a level that represents both significant appreciation from pandemic-era lows
                  and meaningful affordability relative to Toronto and Vancouver. Inventory
                  constraints have kept seller conditions favourable across most communities,
                  with well-priced homes in SE and NW communities consistently attracting multiple
                  offers in spring windows.
                </p>
                <p className="mt-4">
                  However, &quot;seller&apos;s market&quot; doesn&apos;t mean any price will sell. Calgary buyers
                  are sophisticated and price-sensitive at a granular level — a home priced 5%
                  above comparables will sit while a comparable correctly-priced home sells in
                  under two weeks. The difference between good pricing and aggressive pricing
                  is the difference between 12 days on market and 75 days on market. Getting
                  this right requires neighbourhood-level data, not city-wide averages.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">What drives your sale price</h2>
                <p>
                  Four factors determine what your Calgary home sells for — in roughly this order
                  of importance:
                </p>
                <ol className="mt-4 space-y-4 list-decimal list-inside">
                  <li className="border border-charcoal/10 rounded-sm p-4 bg-white">
                    <strong className="text-charcoal font-playfair">Price relative to comparables.</strong>
                    <span className="block mt-1 text-sm">
                      The most important factor. Your REALTOR® should present a Comparative Market
                      Analysis (CMA) using homes sold within the past 90 days in your specific
                      neighbourhood, not just postal code. Sub-street premiums matter — a cul-de-sac
                      versus a collector road can be $15,000–$30,000 in the same neighbourhood.
                    </span>
                  </li>
                  <li className="border border-charcoal/10 rounded-sm p-4 bg-white">
                    <strong className="text-charcoal font-playfair">Presentation and photography.</strong>
                    <span className="block mt-1 text-sm">
                      92% of Calgary buyers start their search online. Professional photography,
                      virtual tours, and 3D walkthroughs are standard practice for any listing
                      over $400,000. Staging — professionally furnished and styled — adds
                      measurably to sale price for vacant homes or dated interior finishes.
                    </span>
                  </li>
                  <li className="border border-charcoal/10 rounded-sm p-4 bg-white">
                    <strong className="text-charcoal font-playfair">Timing.</strong>
                    <span className="block mt-1 text-sm">
                      Spring (March–May) and early fall (September–October) deliver the highest
                      buyer activity. Listing in the right window — typically Thursday for maximum
                      weekend showings — matters more than most sellers realize.
                    </span>
                  </li>
                  <li className="border border-charcoal/10 rounded-sm p-4 bg-white">
                    <strong className="text-charcoal font-playfair">Condition and updates.</strong>
                    <span className="block mt-1 text-sm">
                      Not all renovations add value equally. In Calgary&apos;s current market, kitchen
                      and bathroom updates, new flooring, and fresh paint consistently return 80–120%
                      of investment in sale price. Major mechanical updates (furnace, roof, windows)
                      prevent price reductions but rarely add over-and-above value.
                    </span>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">What sellers net after costs</h2>
                <div className="bg-primary/5 border border-primary/10 rounded-sm p-6">
                  <p className="font-playfair text-lg text-primary font-semibold mb-3">
                    Estimated net proceeds — $599,000 sale (McKenzie Towne example)
                  </p>
                  <div className="space-y-2 font-inter text-charcoal text-sm">
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>Sale price</span>
                      <span className="font-semibold">$599,000</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>REALTOR® commission (7% + 3%)</span>
                      <span className="font-semibold text-red-600">−$22,970</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>GST on commission (5%)</span>
                      <span className="font-semibold text-red-600">−$1,148</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>Legal fees (estimated)</span>
                      <span className="font-semibold text-red-600">−$1,500</span>
                    </div>
                    <div className="flex justify-between font-bold text-primary pt-1 text-base border-t border-primary/20">
                      <span>Estimated net proceeds (before mortgage payout)</span>
                      <span>$573,382</span>
                    </div>
                  </div>
                  <p className="font-inter text-charcoal/60 text-xs mt-4">
                    Mortgage payout balance, property tax adjustments, and condo fees (if applicable)
                    are deducted from proceeds at closing in addition to the above.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Seller questions answered
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the best time to sell a home in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Spring (March–May) and early fall (September–October) deliver peak buyer
                      activity and most competitive offer conditions. Summer has fewer buyers.
                      Winter has less seller competition. Your REALTOR® should advise based on
                      your specific community — neighbourhood factors sometimes override general
                      seasonal patterns.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      How long does it take to sell a home in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Well-priced homes in high-demand communities average 10–25 days on market.
                      Overpriced properties sit 60–90+ days. Typical possession period post-offer:
                      30–45 days. Total timeline listing to close: 6–10 weeks for correctly-priced
                      homes in the current market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET A FREE HOME VALUATION
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">RELATED GUIDES</p>
            <h2 className="font-playfair text-3xl text-primary font-bold mt-2">
              More helpful Calgary seller guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/how-much-does-a-realtor-cost-calgary', name: 'How Much Does a REALTOR® Cost?', zone: 'Commission Guide', blurb: "The 7% + 3% formula explained — exactly what you pay and what you net on Calgary's benchmark $587K home." },
                { href: '/calgary-realtor-vs-private-sale', name: 'REALTOR® vs. Private Sale', zone: 'Decision Guide', blurb: "The real numbers behind FSBO vs. listing with a REALTOR® in Calgary. When it makes sense and when it doesn't." },
                { href: '/tools/realtor-commission', name: 'Commission Calculator', zone: 'Tools', blurb: 'Calculate your exact commission and estimated net proceeds for any Calgary sale price.' },
              ].map((c) => (
                <div key={c.href} className="border border-charcoal/10 rounded-sm p-6 bg-white hover:border-accent hover:shadow-sm transition-all">
                  <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest">{c.zone}</p>
                  <h3 className="font-playfair text-xl text-primary font-semibold mt-2">
                    <Link href={c.href} className="hover:text-accent transition-colors">{c.name}</Link>
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm mt-3 leading-relaxed">{c.blurb}</p>
                  <Link href={c.href} className="font-inter text-accent text-sm font-medium mt-4 inline-block hover:underline">
                    Read guide →
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
