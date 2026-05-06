import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'How Much Does a REALTOR® Cost in Calgary? | Commission Guide 2024',
  description:
    'Calgary REALTOR® commission explained: standard rates, what you actually pay on a $587K home, how buyer vs. seller costs work, and how to get matched for free. No obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/how-much-does-a-realtor-cost-calgary' },
  openGraph: {
    title: 'How Much Does a REALTOR® Cost in Calgary? | Calgary Realtor Finder',
    description: 'The complete guide to Calgary REALTOR® commission — what you pay, who pays it, and what you actually get for that fee.',
    url: 'https://calgaryrealtorfinder.ca/how-much-does-a-realtor-cost-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a REALTOR® Cost in Calgary?',
    description: 'Complete guide to Calgary real estate agent commission rates, who pays, and how commissions are structured.',
    url: 'https://calgaryrealtorfinder.ca/how-much-does-a-realtor-cost-calgary',
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
        name: 'What is the standard REALTOR® commission in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Calgary's standard commission structure is 7% on the first $100,000 of the sale price, plus 3% on the remaining balance. This is then typically split 50/50 between the listing agent's brokerage and the buyer's agent's brokerage. On a $587,000 home (Calgary's benchmark detached price), total commission would be approximately $21,610 before GST. The seller pays this commission from their sale proceeds — buyers do not pay agent commissions directly in most transactions.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do buyers pay REALTOR® fees in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "In most Calgary real estate transactions, buyers do not pay their REALTOR® directly. The buyer's agent is typically compensated from the commission paid by the seller, which is split between the listing brokerage and the buyer's brokerage. However, some buyer's agents now charge a buyer representation agreement fee, and commission structures are evolving following recent industry changes. Clarify commission arrangements with any agent you work with before signing a representation agreement.",
        },
      },
    ],
  },
])

export default function RealtorCostCalgaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY REAL ESTATE · COMMISSION GUIDE</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              How Much Does a REALTOR® Cost in Calgary?
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/resources" className="hover:text-white/80 transition-colors">Resources</Link>
                {' › '}
                <span className="text-white/70">REALTOR® Commission Guide</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              The complete guide to Calgary real estate agent fees — what the standard commission is,
              what you pay on a $587K home, who actually pays it, and whether it&apos;s negotiable.
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
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">The standard commission formula</h2>
                <p>
                  Calgary&apos;s standard REALTOR® commission structure is <strong className="text-charcoal">7% on the first $100,000</strong> of the
                  sale price, plus <strong className="text-charcoal">3% on the remaining balance</strong>. This total is
                  typically split between the listing brokerage (representing the seller) and the
                  buyer&apos;s brokerage — often 50/50, though the split can vary by transaction.
                </p>
                <div className="mt-6 bg-primary/5 border border-primary/10 rounded-sm p-6">
                  <p className="font-playfair text-lg text-primary font-semibold mb-3">
                    Commission on Calgary&apos;s benchmark detached price: $587,000
                  </p>
                  <div className="space-y-2 font-inter text-charcoal text-sm">
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>7% on first $100,000</span>
                      <span className="font-semibold">$7,000</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>3% on remaining $487,000</span>
                      <span className="font-semibold">$14,610</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>Total commission (before GST)</span>
                      <span className="font-semibold">$21,610</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5% on commission)</span>
                      <span className="font-semibold">$1,080</span>
                    </div>
                    <div className="flex justify-between pt-2 text-base font-bold text-primary border-t border-primary/20">
                      <span>Total cost to seller</span>
                      <span>$22,690</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Who actually pays the commission?</h2>
                <p>
                  In most Calgary real estate transactions, the <strong className="text-charcoal">seller pays the commission</strong>
                  {' '}from their sale proceeds. The commission is factored into the listing price and
                  settled at closing. This means buyers do not typically write a cheque to their
                  REALTOR® — their agent is compensated from the commission the seller has agreed to pay.
                </p>
                <p className="mt-4">
                  However, commission structures in Canada are evolving following industry changes.
                  Some agents now require buyers to sign a Buyer Representation Agreement that
                  specifies a fee — which may or may not be offset by the cooperating commission
                  offered by the seller&apos;s listing. Always ask any agent you&apos;re considering how
                  they are compensated before signing any agreement.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Is commission negotiable in Calgary?</h2>
                <p>
                  Yes — commission is always negotiable. The 7% + 3% structure is an industry
                  convention, not a legal requirement. Flat-fee listing services exist for sellers
                  who want to do more of the work themselves. Full-service agents may offer
                  reduced commission for higher-value properties where the dollar amounts are
                  substantial. Discount brokerages operate in Calgary but vary significantly in
                  service level.
                </p>
                <p className="mt-4">
                  The relevant question is not whether you can negotiate commission, but what
                  you&apos;re getting for it. A REALTOR® who negotiates aggressively on your behalf,
                  has deep neighbourhood knowledge, and manages the transaction effectively can
                  more than pay for their commission in price achieved or price saved — while a
                  discount agent who can&apos;t negotiate or lacks local knowledge may cost you more
                  than their lower fee saves.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Other closing costs to budget for</h2>
                <p>
                  REALTOR® commission is the largest closing cost for sellers, but not the only one:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-charcoal/70">
                  <li><strong className="text-charcoal">Legal fees:</strong> $1,000–$2,000 for a standard transaction</li>
                  <li><strong className="text-charcoal">Title insurance:</strong> $200–$400 (usually required by lenders)</li>
                  <li><strong className="text-charcoal">Mortgage discharge fee:</strong> $200–$500 if breaking a term early</li>
                  <li><strong className="text-charcoal">Property tax adjustment:</strong> Varies — prorated to closing date</li>
                  <li><strong className="text-charcoal">Condo document fee:</strong> $200–$500 if selling a condo</li>
                </ul>
                <p className="mt-4">
                  For buyers, closing costs typically include legal fees, title insurance, home
                  inspection ($400–$600), and potentially CMHC mortgage insurance premiums if
                  your down payment is under 20%.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Calgary REALTOR® costs
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the standard REALTOR® commission in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      7% on the first $100,000 + 3% on the balance, split between listing and
                      buyer&apos;s brokerages. On a $587,000 Calgary benchmark home: approximately
                      $21,610 before GST. The seller pays from proceeds; buyers don&apos;t typically
                      pay their agent directly, though this is evolving.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Do buyers pay REALTOR® fees in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      In most transactions, no — buyers&apos; agents are paid from the seller&apos;s
                      commission. However, some agents now charge buyers directly via Buyer
                      Representation Agreements. Always clarify compensation arrangements before
                      signing any representation agreement with an agent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — FREE
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
              More helpful Calgary real estate guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/first-time-home-buyer-calgary-realtor', name: 'First-Time Home Buyer Guide', zone: 'Buyers · Calgary', blurb: 'RRSP Home Buyers Plan, FHSA, CMHC mortgage insurance — what first-time buyers in Calgary need to know.' },
                { href: '/selling-your-home-calgary', name: 'Selling Your Home in Calgary', zone: 'Sellers · Strategy', blurb: 'Pricing strategy, staging, and what the listing process actually looks like in the current Calgary market.' },
                { href: '/calgary-realtor-vs-private-sale', name: 'REALTOR® vs. Private Sale', zone: 'Sellers · Decision Guide', blurb: 'The real numbers behind selling privately vs. with a REALTOR® in Calgary. When FSBO makes sense and when it doesn\'t.' },
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
