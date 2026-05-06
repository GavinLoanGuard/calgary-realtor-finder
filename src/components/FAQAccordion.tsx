'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How many REALTORS® are in Calgary?',
    answer:
      'As of the most recent CREB® count, there are roughly 7,400 licensed REALTORS® serving the Calgary metropolitan area. That number fluctuates with the market — it climbed sharply through 2022–2024 and has stabilized over the past year. Volume isn\'t the issue; finding the right one for your specific neighbourhood and price band is.',
  },
  {
    question: 'What\'s the difference between a buyer\'s agent and a seller\'s agent?',
    answer:
      'A seller\'s agent (or listing agent) represents the homeowner; a buyer\'s agent represents you. In Alberta, both are usually paid out of the seller\'s commission, so engaging your own buyer\'s agent typically costs you nothing while giving you dedicated representation in negotiations.',
  },
  {
    question: 'How much does a REALTOR® cost in Alberta?',
    answer:
      'Commissions in Alberta are negotiable and not set by any board. Typical residential transactions see a total commission between 5% and 7% of the sale price, split between the listing and buyer\'s brokerages. Buyers generally pay nothing out of pocket.',
  },
  {
    question: 'Should I use an independent realtor or a big brokerage?',
    answer:
      'Both work. Larger brokerages bring marketing reach and recognizable signage; smaller independents often deliver more personal service and faster decisions. The individual agent matters more than the badge — focus on track record in your specific neighbourhood.',
  },
  {
    question: 'How do I know if a realtor is licensed in Alberta?',
    answer:
      'The Real Estate Council of Alberta maintains a free, public registry. Search by name or license number and you\'ll see the agent\'s status, brokerage affiliation, and any disciplinary history. Every realtor we feature is verified before being introduced.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-charcoal/10 py-5">
          <button
            className="w-full flex justify-between items-center cursor-pointer text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-inter font-medium text-base text-accent hover:text-accent-light transition-colors pr-4">
              {faq.question}
            </span>
            {openIndex === i ? (
              <Minus size={18} className="text-charcoal/40 shrink-0" />
            ) : (
              <Plus size={18} className="text-charcoal/40 shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <p className="font-inter text-charcoal/60 text-sm leading-relaxed mt-3">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
