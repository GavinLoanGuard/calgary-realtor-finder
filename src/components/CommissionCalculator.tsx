'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const fieldClass =
  'w-full border border-charcoal/20 rounded-sm px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-accent bg-white'

function formatCurrency(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-CA')
}

export default function CommissionCalculator() {
  const [salePrice, setSalePrice] = useState(600000)
  const [commissionType, setCommissionType] = useState<'standard' | 'flat'>('standard')
  const [splitBuyer, setSplitBuyer] = useState(true)

  const results = useMemo(() => {
    let gross: number
    if (commissionType === 'standard') {
      if (salePrice <= 100000) {
        gross = salePrice * 0.07
      } else {
        gross = 100000 * 0.07 + (salePrice - 100000) * 0.03
      }
    } else {
      gross = salePrice * 0.015
    }

    const listingAgent = splitBuyer ? gross / 2 : gross
    const buyerAgent = splitBuyer ? gross / 2 : 0
    const gst = gross * 0.05
    const totalCost = gross + gst

    return { gross, listingAgent, buyerAgent, gst, totalCost }
  }, [salePrice, commissionType, splitBuyer])

  function handleSalePrice(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseFloat(e.target.value.replace(/[^0-9.]/g, ''))
    setSalePrice(isNaN(val) ? 0 : val)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="bg-white border border-charcoal/10 rounded-sm p-8">
          <p className="font-inter text-accent text-xs tracking-widest uppercase mb-6">YOUR SALE</p>

          <div className="space-y-6">
            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-1.5">
                Expected sale price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">$</span>
                <input
                  type="number"
                  className={fieldClass + ' pl-6'}
                  value={salePrice || ''}
                  onChange={handleSalePrice}
                  min={0}
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-3">
                Commission structure
              </label>
              <div className="space-y-2">
                {[
                  { value: 'standard', label: 'Standard Alberta (7% on first $100K, 3% on balance)' },
                  { value: 'flat', label: 'Flat rate example (1.5% total)' },
                ] as const).map((opt) => (
                  <label key={opt.value} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="commissionType"
                      value={opt.value}
                      checked={commissionType === opt.value}
                      onChange={() => setCommissionType(opt.value)}
                      className="mt-0.5 accent-accent"
                    />
                    <span className="font-inter text-charcoal/70 text-sm leading-snug">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-3">
                Include buyer&apos;s agent co-op fee?
              </label>
              <div className="flex gap-0 border border-charcoal/20 rounded-sm overflow-hidden">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    type="button"
                    onClick={() => setSplitBuyer(val)}
                    className={`flex-1 py-2 text-sm font-inter font-medium transition-colors ${
                      splitBuyer === val
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary/60 hover:text-primary'
                    }`}
                  >
                    {val ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="font-inter text-charcoal/40 text-xs mt-6 leading-relaxed">
            Commission is fully negotiable in Alberta. This calculator uses a common but not universal structure.
          </p>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-primary rounded-sm p-8">
            <p className="font-inter text-accent text-xs tracking-widest uppercase mb-6">ESTIMATED COSTS</p>
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Total gross commission</p>
                <p className="font-playfair text-4xl font-bold text-white mt-1">
                  {formatCurrency(results.gross)}
                </p>
              </div>
              <div className="border-b border-white/10 pb-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Listing agent side</p>
                  <p className="font-playfair text-xl font-bold text-accent mt-1">
                    {formatCurrency(results.listingAgent)}
                  </p>
                </div>
                <div>
                  <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Buyer&apos;s agent co-op</p>
                  <p className="font-playfair text-xl font-bold text-white mt-1">
                    {formatCurrency(results.buyerAgent)}
                  </p>
                </div>
              </div>
              <div className="border-b border-white/10 pb-4">
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">GST (5%)</p>
                <p className="font-playfair text-xl font-bold text-white mt-1">
                  {formatCurrency(results.gst)}
                </p>
              </div>
              <div>
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Total estimated cost to seller</p>
                <p className="font-playfair text-3xl font-bold text-white mt-1">
                  {formatCurrency(results.totalCost)}
                </p>
              </div>
            </div>
          </div>

          <p className="font-inter text-charcoal/40 text-xs leading-relaxed">
            Commission is fully negotiable in Alberta. This calculator uses a common but not universal structure.
          </p>
        </div>
      </div>

      {/* Lead capture CTA */}
      <div className="mt-12 bg-accent/10 border border-accent/20 rounded-sm p-8">
        <h2 className="font-playfair text-2xl text-primary font-bold">
          Thinking about selling in Calgary?
        </h2>
        <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
          Get matched with a Calgary REALTOR® who will walk you through actual commission options — no pressure, no obligation.
        </p>
        <Link
          href="/#lead-form"
          className="mt-5 inline-block bg-accent hover:bg-accent-light text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors"
        >
          Talk to a Calgary REALTOR® →
        </Link>
      </div>
    </div>
  )
}
