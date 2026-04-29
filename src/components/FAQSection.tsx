const faqs = [
  {
    question: 'How do I find a good REALTOR® in Calgary?',
    answer:
      'The best way to find a Calgary REALTOR® is to match based on the neighbourhood you’re buying or selling in, your price range, and your timeline. Calgary Realtor Finder connects you with licensed REALTORS® who specialize in your area — free and with no obligation.',
  },
  {
    question: 'What is the difference between a REALTOR® and a real estate agent in Calgary?',
    answer:
      'In Canada, all REALTORS® are real estate agents, but not all agents are REALTORS®. A REALTOR® is a licensed agent who is also a member of the Canadian Real Estate Association (CREA) and must follow its Code of Ethics. In Calgary, most active agents are REALTORS® registered with CREA and the Alberta Real Estate Association.',
  },
  {
    question: 'How much does a REALTOR® cost in Calgary?',
    answer:
      'In Calgary, REALTOR® commissions are typically paid by the seller, not the buyer. Commission is negotiable but generally ranges from 3–4% on the first $100,000 and 1.5–2% on the remainder. Buyers typically pay nothing out of pocket to use a buyer’s agent.',
  },
  {
    question: 'Do I need a REALTOR® to buy a house in Calgary?',
    answer:
      'You are not legally required to use a REALTOR® in Alberta, but most buyers work with one because the service is free to buyers and a licensed agent provides market expertise, negotiation support, and legal protection throughout the transaction.',
  },
  {
    question: 'What areas does Calgary Realtor Finder serve?',
    answer:
      'We match buyers and sellers across all Calgary quadrants — NW, NE, SW, and SE — as well as surrounding communities including Airdrie, Cochrane, Okotoks, and Chestermere.',
  },
]

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export default function FAQSection() {
  return (
    <section className="bg-background py-20 px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-accent text-xs tracking-widest uppercase">FAQ</p>
        <h2 className="font-playfair text-4xl text-primary font-bold mt-2">
          Common questions about Calgary REALTORS®
        </h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.question} className="border border-charcoal/10 rounded-sm p-6 bg-white">
              <h3 className="font-playfair text-lg text-primary font-semibold">{faq.question}</h3>
              <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
