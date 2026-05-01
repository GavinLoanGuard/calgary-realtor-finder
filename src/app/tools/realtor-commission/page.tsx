import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CommissionCalculator from '@/components/CommissionCalculator'

export const metadata: Metadata = {
  title: "Calgary REALTOR® Commission Calculator | Estimate Your Real Estate Fees in Alberta",
  description:
    "Calculate estimated REALTOR® commission costs for selling your Calgary home. See the breakdown of listing agent fees, buyer agent fees, and GST. Free Alberta commission calculator.",
}

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the standard realtor fee in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Alberta does not have a legislated standard commission — all fees are negotiable. However, a common structure is 7% on the first $100,000 of the sale price and 3% on the remainder, typically split between the listing agent and the buyer's agent. On a $600,000 Calgary home this works out to roughly $22,000 plus GST before the split.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who pays the REALTOR® commission in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Alberta, the seller typically pays the total commission, which is then split between the listing brokerage and the buyer's brokerage. Buyers generally pay nothing out of pocket to use a buyer's agent — the cost is covered by the seller's proceeds.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is REALTOR® commission negotiable in Calgary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Commission rates in Alberta are fully negotiable between the seller and their listing agent. Some brokerages offer flat-fee or reduced-commission models. The trade-off is typically in marketing investment and negotiation support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I pay GST on REALTOR® commission in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. REALTOR® commission is subject to 5% GST in Alberta. This is charged on top of the negotiated commission rate and is paid by the seller.',
      },
    },
  ],
})

const faqs = [
  {
    q: 'What is the standard realtor fee in Alberta?',
    a: "Alberta does not have a legislated standard commission — all fees are negotiable. However, a common structure is 7% on the first $100,000 of the sale price and 3% on the remainder, typically split between the listing agent and the buyer's agent. On a $600,000 Calgary home this works out to roughly $22,000 plus GST before the split.",
  },
  {
    q: 'Who pays the REALTOR® commission in Alberta?',
    a: "In Alberta, the seller typically pays the total commission, which is then split between the listing brokerage and the buyer's brokerage. Buyers generally pay nothing out of pocket to use a buyer's agent — the cost is covered by the seller's proceeds.",
  },
  {
    q: 'Is REALTOR® commission negotiable in Calgary?',
    a: 'Yes. Commission rates in Alberta are fully negotiable between the seller and their listing agent. Some brokerages offer flat-fee or reduced-commission models. The trade-off is typically in marketing investment and negotiation support.',
  },
  {
    q: 'Do I pay GST on REALTOR® commission in Alberta?',
    a: 'Yes. REALTOR® commission is subject to 5% GST in Alberta. This is charged on top of the negotiated commission rate and is paid by the seller.',
  },
]

export default function RealtorCommissionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">FREE TOOL · CALGARY REAL ESTATE</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Calgary REALTOR® Commission Calculator
            </h1>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-2xl leading-relaxed">
              Wondering what it costs to sell your home in Calgary? This calculator estimates the REALTOR®
              commission you can expect to pay based on your home&apos;s sale price, using Alberta&apos;s typical
              commission structure. All figures are estimates — actual commission is negotiable between you
              and your REALTOR®.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 px-8">
          <CommissionCalculator />
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 px-8 border-t border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">FAQ</p>
            <h2 className="font-playfair text-3xl text-primary font-bold mt-2 mb-8">
              Alberta REALTOR® commissions — common questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-charcoal/10 rounded-sm p-6 bg-white">
                  <h3 className="font-playfair text-lg text-primary font-semibold">{faq.q}</h3>
                  <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">{faq.a}</p>
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
