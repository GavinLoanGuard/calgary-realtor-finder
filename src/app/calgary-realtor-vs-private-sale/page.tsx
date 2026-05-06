import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Calgary REALTOR® vs. Private Sale — FSBO vs. Listing With an Agent',
  description:
    'Should you sell privately or use a REALTOR® in Calgary? The real numbers on commission savings vs. sale price differential, legal risks of FSBO, and when private sale actually makes sense.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/calgary-realtor-vs-private-sale' },
  openGraph: {
    title: 'Calgary REALTOR® vs. Private Sale | Calgary Realtor Finder',
    description: "The honest comparison: FSBO vs. REALTOR® in Calgary. Commission savings vs. what you actually net at closing — the data is more decisive than most people expect.",
    url: 'https://calgaryrealtorfinder.ca/calgary-realtor-vs-private-sale',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calgary REALTOR® vs. Private Sale — FSBO Decision Guide',
    description: 'Comparing the financial outcomes and risks of selling privately versus using a REALTOR® in Calgary.',
    url: 'https://calgaryrealtorfinder.ca/calgary-realtor-vs-private-sale',
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
        name: 'Do private sellers (FSBO) get lower sale prices in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Research from the National Association of Realtors and Canadian studies consistently shows that FSBO properties sell for 5–15% less than agent-assisted sales, on average. In Calgary, where the benchmark detached price is approximately $587,000, a 5% discount represents approximately $29,350 — compared to a full commission of approximately $21,610. This means the typical FSBO seller saves less than nothing after accounting for the price differential. The gap is most pronounced in competitive markets where experienced agents can generate multiple-offer situations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the legal risks of selling privately in Alberta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Selling privately in Alberta exposes you to several legal risks. Alberta real estate law requires specific disclosure obligations — failure to disclose known defects (roof condition, foundation issues, unpermitted work, flooding history) can result in post-closing legal action by the buyer. FSBO sellers are also fully responsible for contract accuracy — errors in an offer to purchase can create binding legal obligations or void a transaction. Without MLS access, FSBO sellers also can't list on Realtor.ca, significantly restricting buyer exposure. Most private sellers end up working with a REALTOR® at some stage of the transaction anyway, often a buyer's agent whose commission comes from the seller's proceeds.",
        },
      },
    ],
  },
])

export default function RealtorVsPrivateSalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SELLERS · FSBO VS. REALTOR® · DECISION GUIDE</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Calgary REALTOR® vs. Private Sale — The Honest Comparison
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/resources" className="hover:text-white/80 transition-colors">Resources</Link>
                {' › '}
                <span className="text-white/70">REALTOR® vs. Private Sale</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              The appeal of saving $20,000 in commission is real. The question is whether the math
              actually works in your favour — and in most Calgary transactions, it doesn&apos;t.
              Here&apos;s why, with the numbers to back it up.
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
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">The FSBO appeal — and the math problem</h2>
                <p>
                  The logic of selling privately is straightforward: Calgary&apos;s standard commission
                  is approximately 7% on the first $100,000 + 3% on the balance. On a $587,000
                  home, that&apos;s roughly $21,610 before GST. If you can sell the home yourself, you
                  keep that $21,610. That&apos;s a real number worth examining carefully.
                </p>
                <p className="mt-4">
                  The problem is that private sellers systematically underperform on sale price
                  relative to agent-assisted sales. Research consistently places FSBO sale prices
                  5–15% below agent-assisted equivalents. In Calgary&apos;s market, even the conservative
                  end of that range — 5% — represents approximately $29,350 on a $587,000 home.
                  If you save $21,610 in commission but net $29,350 less on the sale price, you&apos;ve
                  lost approximately $7,740 by selling privately. And that&apos;s before accounting for
                  your time, stress, and legal exposure.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Side-by-side comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full font-inter text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left p-3 font-medium">Factor</th>
                        <th className="text-left p-3 font-medium">REALTOR®</th>
                        <th className="text-left p-3 font-medium">Private Sale (FSBO)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['MLS / Realtor.ca listing', '✓ Full access', '✗ No access'],
                        ['Professional photography', '✓ Included', '$ Paid separately'],
                        ['Buyer agent compensation', '✓ Structured', 'Varies / may deter agents'],
                        ['Offer negotiation', '✓ Experienced advocate', '✗ DIY (at a disadvantage)'],
                        ['Average sale price (vs. market)', '~100%', '~90–95%'],
                        ['Legal / disclosure guidance', '✓ Included', '✗ Your lawyer only'],
                        ['Commission cost', '$21,610 (on $587K)', '$0'],
                        ['Typical net advantage', 'Commission offset by price', 'Price loss > commission saved'],
                      ].map(([factor, realtor, fsbo], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary/5'}>
                          <td className="p-3 border border-charcoal/10 font-medium text-charcoal">{factor}</td>
                          <td className="p-3 border border-charcoal/10 text-charcoal/70">{realtor}</td>
                          <td className="p-3 border border-charcoal/10 text-charcoal/70">{fsbo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Why FSBO sellers get lower prices</h2>
                <p>
                  The sale price gap isn&apos;t random — it has structural causes:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="border-l-4 border-accent pl-4">
                    <strong className="text-charcoal">MLS access.</strong> Realtor.ca is where 92% of buyers look first. FSBO
                    sellers are invisible to most of the buyer pool, which means fewer competing
                    offers and less pricing pressure in their favour.
                  </li>
                  <li className="border-l-4 border-accent pl-4">
                    <strong className="text-charcoal">Buyer agent avoidance.</strong> Buyer&apos;s agents are reluctant to show
                    FSBO properties where their compensation is uncertain. If buyers&apos; agents
                    avoid your listing, you lose access to a large share of qualified buyers.
                  </li>
                  <li className="border-l-4 border-accent pl-4">
                    <strong className="text-charcoal">Negotiation disadvantage.</strong> Selling your own home is emotionally
                    charged. Professional agents negotiate without ego — focusing on price and terms,
                    not personal attachment. Buyers know FSBO sellers are emotionally invested and
                    negotiate accordingly.
                  </li>
                  <li className="border-l-4 border-accent pl-4">
                    <strong className="text-charcoal">Pricing accuracy.</strong> Without access to current comparable sales data
                    at a street level, FSBO sellers often misprice — usually too high initially,
                    leading to staleness and eventual price cuts below market.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">When private sale might make sense</h2>
                <p>
                  There are scenarios where private sale has a defensible case:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>You have a pre-identified buyer (family member, tenant, neighbour) — the transaction is private by nature</li>
                  <li>You&apos;re selling a rural or unique property with a small buyer pool who already knows the property exists</li>
                  <li>The property is commercial or development land where buyers are professional investors who seek out deals independently</li>
                  <li>You&apos;re willing to accept a lower price as a tradeoff for privacy and simplicity</li>
                </ul>
                <p className="mt-4">
                  For standard residential properties in Calgary communities like McKenzie Towne,
                  Auburn Bay, Tuscany, or Signal Hill — where there is an active buyer pool on
                  Realtor.ca — the private sale case is very weak. The commission saving rarely
                  survives the price comparison.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  FSBO vs. REALTOR® — questions answered
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Do private sellers (FSBO) get lower sale prices in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Research consistently shows FSBO properties sell for 5–15% less than
                      agent-assisted sales. On Calgary&apos;s $587,000 benchmark home, a 5% discount
                      is $29,350 — more than the $21,610 commission you&apos;d save. The typical FSBO
                      seller nets less, not more, than they would with a REALTOR®.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are the legal risks of selling privately in Alberta?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Disclosure obligations, contract accuracy, and post-closing liability for
                      undisclosed defects. Without MLS access, you also can&apos;t list on Realtor.ca.
                      Most private sellers end up interacting with a buyer&apos;s agent anyway, whose
                      compensation typically comes from the seller&apos;s proceeds.
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
                { href: '/how-much-does-a-realtor-cost-calgary', name: 'How Much Does a REALTOR® Cost?', zone: 'Commission Guide', blurb: "The 7% + 3% formula explained — what you actually pay and what you net after commission on a Calgary home sale." },
                { href: '/selling-your-home-calgary', name: 'Selling Your Home in Calgary', zone: 'Sellers · Strategy', blurb: 'Pricing strategy, staging, timeline, and exactly what to expect from listing to closing in the current Calgary market.' },
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
