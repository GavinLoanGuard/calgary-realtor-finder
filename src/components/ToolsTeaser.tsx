import Link from 'next/link'
import { Calculator, DollarSign } from 'lucide-react'

const tools = [
  {
    icon: Calculator,
    title: 'Mortgage Affordability Calculator',
    body: 'Find out what home price you can realistically afford in Calgary based on your income and down payment.',
    href: '/tools/mortgage-affordability',
  },
  {
    icon: DollarSign,
    title: 'REALTOR® Commission Calculator',
    body: 'Estimate what it will cost to sell your Calgary home. See the full commission breakdown including GST.',
    href: '/tools/realtor-commission',
  },
]

export default function ToolsTeaser() {
  return (
    <section className="bg-background py-20 px-8 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-accent text-xs tracking-widest uppercase">FREE CALGARY REAL ESTATE TOOLS</p>
        <h2 className="font-playfair text-4xl text-primary font-bold mt-2">
          Know your numbers before you move.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.href}
                className="border border-charcoal/10 rounded-sm p-8 bg-white hover:border-accent hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-playfair text-xl text-primary font-semibold">{tool.title}</h3>
                <p className="font-inter text-charcoal/60 text-sm mt-3 leading-relaxed">{tool.body}</p>
                <Link
                  href={tool.href}
                  className="font-inter text-accent text-sm font-medium mt-5 inline-block hover:underline"
                >
                  Try the calculator →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
