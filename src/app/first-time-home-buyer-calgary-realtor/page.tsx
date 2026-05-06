import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Calgary REALTOR® | Expert Guidance for FTHB',
  description:
    'Getting matched with a first-time home buyer REALTOR® in Calgary. RRSP Home Buyers Plan, FHSA, CMHC insurance explained — plus the best Calgary communities for FTHBs in 2024.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/first-time-home-buyer-calgary-realtor' },
  openGraph: {
    title: 'First-Time Home Buyer Calgary REALTOR® | Calgary Realtor Finder',
    description: 'Find a REALTOR® experienced with Calgary first-time buyers. FHSA, RRSP HBP, CMHC insurance, and the best communities for FTHBs explained.',
    url: 'https://calgaryrealtorfinder.ca/first-time-home-buyer-calgary-realtor',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'First-Time Home Buyer Guide: Finding a REALTOR® in Calgary',
    description: 'Complete guide for first-time home buyers in Calgary — incentives, programs, communities, and how to find the right REALTOR®.',
    url: 'https://calgaryrealtorfinder.ca/first-time-home-buyer-calgary-realtor',
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
        name: 'What government programs help first-time home buyers in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time buyers in Calgary can access several federal programs: the First Home Savings Account (FHSA) allows up to $8,000 per year (lifetime $40,000) in tax-deductible contributions for a first home purchase. The RRSP Home Buyers Plan lets first-time buyers withdraw up to $35,000 ($70,000 per couple) from RRSP accounts tax-free, to be repaid over 15 years. The First-Time Home Buyer Incentive (shared equity program) has ended, but the First Home Savings Account is the strongest replacement. Alberta has no provincial land transfer tax, which saves Calgary buyers $5,000–$15,000 compared to Ontario or BC.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum down payment for a home in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The minimum down payment in Canada depends on purchase price: 5% on the first $500,000, and 10% on the portion between $500,000 and $999,999. For Calgary's benchmark detached home of $587,000, the minimum down payment is $25,000 (5% of $500K) + $8,700 (10% of $87K) = $33,700. Any purchase with less than 20% down requires CMHC mortgage insurance, which adds 2.8–4% of the mortgage amount to your loan balance. Many first-time buyers in Calgary use a combination of FHSA and RRSP Home Buyers Plan funds to reach the minimum down payment.",
        },
      },
    ],
  },
])

export default function FirstTimeHomeBuyerCalgaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">FIRST-TIME BUYERS · CALGARY · FHSA · RRSP HBP</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              First-Time Home Buyer in Calgary — Find a REALTOR® Who Knows the Programs
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/resources" className="hover:text-white/80 transition-colors">Resources</Link>
                {' › '}
                <span className="text-white/70">First-Time Home Buyer Guide</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              FHSA, RRSP Home Buyers Plan, CMHC insurance, no Alberta land transfer tax — there&apos;s
              real money available to first-time buyers in Calgary. This guide covers it all, plus
              which communities make sense at your price point.
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
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Alberta&apos;s biggest advantage for first-time buyers</h2>
                <p>
                  Calgary first-time buyers have one structural advantage that Ontario and BC buyers
                  would envy: <strong className="text-charcoal">Alberta has no provincial land transfer tax</strong>. In Toronto,
                  buyers pay municipal and provincial land transfer tax totalling $15,000–$25,000 on
                  a $600,000 purchase. In Vancouver, it&apos;s similar. In Calgary, you pay nothing —
                  your closing costs are materially lower, which means more money available for
                  your down payment or mortgage paydown from day one.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">First Home Savings Account (FHSA)</h2>
                <p>
                  The FHSA is the single most powerful first-time buyer tool available since the
                  RRSP Home Buyers Plan. Available since April 2023, it allows first-time buyers
                  to contribute up to <strong className="text-charcoal">$8,000 per year</strong> (lifetime maximum $40,000) to a
                  registered account. Contributions are <strong className="text-charcoal">tax-deductible</strong> (like an RRSP), and
                  withdrawals for a qualifying home purchase are <strong className="text-charcoal">completely tax-free</strong> (like a
                  TFSA). There is no repayment requirement. For a couple, that is $80,000 in
                  combined tax-free savings capacity over five years.
                </p>
                <p className="mt-4">
                  If you haven&apos;t opened an FHSA yet and are planning to buy within the next
                  five years, open one immediately — even a minimal contribution preserves your
                  annual room. A REALTOR® experienced with first-time buyers will typically refer
                  you to a mortgage specialist who can show you how FHSA integrates with your
                  purchase timeline.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">RRSP Home Buyers Plan</h2>
                <p>
                  The RRSP Home Buyers Plan lets first-time buyers withdraw up to
                  <strong className="text-charcoal"> $35,000 per person</strong> ($70,000 per couple) from their RRSP tax-free
                  for a home purchase. The withdrawal must be repaid to your RRSP over 15 years —
                  if you don&apos;t repay in a given year, that year&apos;s share is added to your taxable
                  income. The funds must have been in your RRSP for at least 90 days before
                  withdrawal. The HBP can be combined with the FHSA — using both for the same
                  purchase is permitted.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Down payment and CMHC insurance</h2>
                <div className="bg-primary/5 border border-primary/10 rounded-sm p-6 mt-4">
                  <p className="font-playfair text-lg text-primary font-semibold mb-3">
                    Minimum down payment on a $587,000 Calgary benchmark home
                  </p>
                  <div className="space-y-2 font-inter text-charcoal text-sm">
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>5% on first $500,000</span>
                      <span className="font-semibold">$25,000</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span>10% on remaining $87,000</span>
                      <span className="font-semibold">$8,700</span>
                    </div>
                    <div className="flex justify-between font-bold text-primary pt-1">
                      <span>Minimum down payment</span>
                      <span>$33,700</span>
                    </div>
                  </div>
                  <p className="font-inter text-charcoal/60 text-xs mt-4">
                    Purchases with less than 20% down require CMHC mortgage insurance: 4% of mortgage
                    amount added to the loan balance at 5% down, 3.1% at 10%, 2.8% at 15%.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl text-primary font-bold mb-4">Best Calgary communities for first-time buyers</h2>
                <p>
                  First-time buyers in Calgary have more community options than any other Canadian
                  city at the same income level. At the $450,000–$600,000 range, you can access
                  detached homes in established SE communities:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { href: '/realtor-mckenzie-towne-calgary', name: 'McKenzie Towne', desc: 'Established SE community with character architecture, townhomes from $320K, and detached homes starting in the $440Ks.' },
                    { href: '/realtor-seton-calgary', name: 'Seton', desc: 'Calgary SE\'s newest urban district — condos from $280K, South Health Campus jobs nearby, and new construction options.' },
                    { href: '/realtor-airdrie', name: 'Airdrie', desc: 'For buyers who can commute — 30 km north with new construction detached homes at $430K+ and 15–25% more house per dollar.' },
                    { href: '/realtor-okotoks', name: 'Okotoks', desc: '25 km south, small-town feel, detached homes from $430K with more yard and less density than comparable Calgary options.' },
                  ].map((c) => (
                    <li key={c.href} className="border border-charcoal/10 rounded-sm p-4 bg-white">
                      <Link href={c.href} className="font-playfair text-primary font-semibold hover:text-accent transition-colors">
                        {c.name}
                      </Link>
                      <p className="font-inter text-charcoal/60 text-sm mt-1">{c.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  First-time buyer questions answered
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What government programs help first-time home buyers in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      The First Home Savings Account (FHSA): $8,000/year, lifetime $40,000,
                      tax-deductible contributions, tax-free qualifying withdrawals. The RRSP Home
                      Buyers Plan: up to $35,000 per person ($70K/couple), repaid over 15 years.
                      No Alberta land transfer tax. CMHC mortgage insurance enables purchases with
                      as little as 5% down. These can be combined.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the minimum down payment for a home in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      5% on the first $500,000 + 10% on the portion between $500K and $999,999.
                      On Calgary&apos;s $587,000 benchmark home: minimum down payment is $33,700. Purchases
                      under 20% down require CMHC mortgage insurance added to your loan balance.
                      Many first-time buyers combine FHSA and RRSP HBP funds to meet minimum requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — FIRST-TIME BUYER
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
                { href: '/how-much-does-a-realtor-cost-calgary', name: 'How Much Does a REALTOR® Cost?', zone: 'Commission Guide', blurb: "The 7% + 3% formula explained, who actually pays it, and what you'll spend on Calgary's $587K benchmark home." },
                { href: '/selling-your-home-calgary', name: 'Selling Your Home in Calgary', zone: 'Sellers · Strategy', blurb: 'Pricing strategy, staging, and what the listing process looks like in the current Calgary market.' },
                { href: '/tools/mortgage-affordability', name: 'Mortgage Affordability Calculator', zone: 'Tools', blurb: 'See how much home you can afford based on income, down payment, and current Calgary mortgage rates.' },
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
