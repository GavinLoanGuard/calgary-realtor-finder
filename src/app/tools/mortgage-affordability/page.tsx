import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MortgageCalculator from '@/components/MortgageCalculator'

export const metadata: Metadata = {
  title: 'Calgary Mortgage Affordability Calculator | What Can You Afford in Calgary?',
  description:
    'Find out what house price you can afford in Calgary. Enter your income and down payment to calculate your maximum mortgage, monthly payment, and stress test result. Free tool.',
}

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What salary do you need to buy a house in Calgary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For a median-priced Calgary home around $575,000 with 20% down ($115,000), you typically need a gross household income of approximately $110,000–$130,000 to pass Canada's mortgage stress test. Lower-priced homes in communities like Canyon Meadows or McKenzie Towne may be accessible at lower income levels.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the mortgage stress test in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The federal mortgage stress test requires you to qualify at either 5.25% or your contract rate plus 2%, whichever is higher. This means even if you're offered a 5% mortgage rate, you must prove you can afford payments at 7%+. It applies to all federally regulated lenders in Canada.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum down payment for a house in Calgary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Canada, the minimum down payment is 5% for homes under $500,000, 5% on the first $500,000 plus 10% on the remainder for homes between $500,000 and $999,999, and 20% for homes $1,000,000 and over. Homes under $1,000,000 with less than 20% down require CMHC mortgage insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much income do I need for a $500,000 mortgage in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To qualify for a $500,000 mortgage under the stress test, you generally need a gross household income of approximately $120,000–$140,000 depending on your amortization period, existing debts, and property taxes. Use the calculator above to model your specific situation.',
      },
    },
  ],
})

const faqs = [
  {
    q: 'What salary do you need to buy a house in Calgary?',
    a: "For a median-priced Calgary home around $575,000 with 20% down ($115,000), you typically need a gross household income of approximately $110,000–$130,000 to pass Canada's mortgage stress test. Lower-priced homes in communities like Canyon Meadows or McKenzie Towne may be accessible at lower income levels.",
  },
  {
    q: 'What is the mortgage stress test in Canada?',
    a: "The federal mortgage stress test requires you to qualify at either 5.25% or your contract rate plus 2%, whichever is higher. This means even if you're offered a 5% mortgage rate, you must prove you can afford payments at 7%+. It applies to all federally regulated lenders in Canada.",
  },
  {
    q: 'What is the minimum down payment for a house in Calgary?',
    a: 'In Canada, the minimum down payment is 5% for homes under $500,000, 5% on the first $500,000 plus 10% on the remainder for homes between $500,000 and $999,999, and 20% for homes $1,000,000 and over. Homes under $1,000,000 with less than 20% down require CMHC mortgage insurance.',
  },
  {
    q: 'How much income do I need for a $500,000 mortgage in Canada?',
    a: 'To qualify for a $500,000 mortgage under the stress test, you generally need a gross household income of approximately $120,000–$140,000 depending on your amortization period, existing debts, and property taxes. Use the calculator above to model your specific situation.',
  },
]

export default function MortgageAffordabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">FREE TOOL · CALGARY REAL ESTATE</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Calgary Mortgage Affordability Calculator
            </h1>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-2xl leading-relaxed">
              Use this free calculator to find out what home price you can realistically afford in Calgary,
              Alberta. Enter your gross household income, down payment, and preferred amortization period to
              see your maximum purchase price, estimated monthly payment, and whether you pass the federal
              mortgage stress test.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 px-8">
          <MortgageCalculator />
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 px-8 border-t border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">FAQ</p>
            <h2 className="font-playfair text-3xl text-primary font-bold mt-2 mb-8">
              Calgary mortgage affordability — common questions
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
