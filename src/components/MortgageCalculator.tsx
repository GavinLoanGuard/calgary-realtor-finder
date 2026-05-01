'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const fieldClass =
  'w-full border border-charcoal/20 rounded-sm px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-accent bg-white'

function formatCurrency(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-CA')
}

function calcMonthlyPayment(principal: number, annualRatePct: number, amortYears: number): number {
  if (principal <= 0) return 0
  const r = annualRatePct / 100 / 12
  const n = amortYears * 12
  return (principal * r) / (1 - Math.pow(1 + r, -n))
}

function calcMaxMortgage(maxMonthlyPayment: number, annualRatePct: number, amortYears: number): number {
  if (maxMonthlyPayment <= 0) return 0
  const r = annualRatePct / 100 / 12
  const n = amortYears * 12
  return maxMonthlyPayment * (1 - Math.pow(1 + r, -n)) / r
}

export default function MortgageCalculator() {
  const [income, setIncome] = useState(120000)
  const [downPayment, setDownPayment] = useState(60000)
  const [amortization, setAmortization] = useState(25)
  const [propertyTax, setPropertyTax] = useState(4500)
  const [condoFees, setCondoFees] = useState(0)

  const results = useMemo(() => {
    const STRESS_TEST_RATE = 7.25
    const DISPLAY_RATE = 5.5
    const GDS_RATIO = 0.39

    const monthlyIncome = income / 12
    const monthlyTax = propertyTax / 12
    const maxMonthlyForMortgage = monthlyIncome * GDS_RATIO - monthlyTax - condoFees

    const maxMortgage = calcMaxMortgage(maxMonthlyForMortgage, STRESS_TEST_RATE, amortization)
    const maxPurchasePrice = maxMortgage + downPayment
    const actualMonthlyPayment = calcMonthlyPayment(maxMortgage, DISPLAY_RATE, amortization)
    const totalMonthlyHousingCost = actualMonthlyPayment + monthlyTax + condoFees

    return { maxMortgage, maxPurchasePrice, actualMonthlyPayment, totalMonthlyHousingCost }
  }, [income, downPayment, amortization, propertyTax, condoFees])

  function handleNumberInput(setter: (v: number) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value.replace(/[^0-9.]/g, ''))
      setter(isNaN(val) ? 0 : val)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="bg-white border border-charcoal/10 rounded-sm p-8">
          <p className="font-inter text-accent text-xs tracking-widest uppercase mb-6">YOUR DETAILS</p>

          <div className="space-y-5">
            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-1.5">
                Annual household gross income
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">$</span>
                <input
                  type="number"
                  className={fieldClass + ' pl-6'}
                  value={income || ''}
                  onChange={handleNumberInput(setIncome)}
                  min={0}
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-1.5">
                Down payment amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">$</span>
                <input
                  type="number"
                  className={fieldClass + ' pl-6'}
                  value={downPayment || ''}
                  onChange={handleNumberInput(setDownPayment)}
                  min={0}
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-1.5">
                Amortization period
              </label>
              <select
                className={fieldClass}
                value={amortization}
                onChange={(e) => setAmortization(Number(e.target.value))}
              >
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>

            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-1.5">
                Est. annual property tax (Calgary average)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">$</span>
                <input
                  type="number"
                  className={fieldClass + ' pl-6'}
                  value={propertyTax || ''}
                  onChange={handleNumberInput(setPropertyTax)}
                  min={0}
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-charcoal/70 text-sm mb-1.5">
                Monthly condo fees (if applicable)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">$</span>
                <input
                  type="number"
                  className={fieldClass + ' pl-6'}
                  value={condoFees || ''}
                  onChange={handleNumberInput(setCondoFees)}
                  min={0}
                />
              </div>
            </div>
          </div>

          <p className="font-inter text-charcoal/40 text-xs mt-6 leading-relaxed">
            Qualifying rate: 7.25% (federal stress test). Displayed payment uses 5.5% estimated current rate — rates vary, consult a broker.
          </p>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-primary rounded-sm p-8">
            <p className="font-inter text-accent text-xs tracking-widest uppercase mb-6">YOUR RESULTS</p>
            <div className="space-y-5">
              <div className="border-b border-white/10 pb-5">
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Max purchase price</p>
                <p className="font-playfair text-4xl font-bold text-white mt-1">
                  {formatCurrency(results.maxPurchasePrice)}
                </p>
              </div>
              <div className="border-b border-white/10 pb-5">
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Max mortgage amount</p>
                <p className="font-playfair text-2xl font-bold text-accent mt-1">
                  {formatCurrency(results.maxMortgage)}
                </p>
              </div>
              <div className="border-b border-white/10 pb-5">
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Est. monthly mortgage payment</p>
                <p className="font-playfair text-2xl font-bold text-white mt-1">
                  {formatCurrency(results.actualMonthlyPayment)}<span className="text-sm font-inter font-normal text-white/50">/mo</span>
                </p>
              </div>
              <div>
                <p className="font-inter text-white/60 text-xs uppercase tracking-wider">Est. total monthly housing cost</p>
                <p className="font-playfair text-2xl font-bold text-white mt-1">
                  {formatCurrency(results.totalMonthlyHousingCost)}<span className="text-sm font-inter font-normal text-white/50">/mo</span>
                </p>
                <p className="font-inter text-white/40 text-xs mt-1">Includes mortgage + tax + condo fees</p>
              </div>
            </div>
          </div>

          <p className="font-inter text-charcoal/40 text-xs leading-relaxed">
            This is an estimate only. Actual qualification depends on your credit score, debts, and lender policies. Rates change frequently.
          </p>
        </div>
      </div>

      {/* Lead capture CTA */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-accent/10 border border-accent/20 rounded-sm p-8">
          <h2 className="font-playfair text-2xl text-primary font-bold">
            Ready to start looking in your price range?
          </h2>
          <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
            Get matched with a Calgary REALTOR® who focuses on communities in your budget. Free, no obligation.
          </p>
          <Link
            href="/#lead-form"
            className="mt-5 inline-block bg-accent hover:bg-accent-light text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            Find My Calgary REALTOR® →
          </Link>
        </div>

        <div className="bg-white border border-charcoal/10 rounded-sm p-8">
          <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest">FINANCING FIRST?</p>
          <h2 className="font-playfair text-2xl text-primary font-bold mt-2">
            Thinking about financing first?
          </h2>
          <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
            Our mortgage partner can give you a pre-approval in 24 hours.
          </p>
          <Link
            href="/#lead-form"
            className="mt-5 inline-block border border-primary text-primary font-inter font-semibold px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors"
          >
            Get Pre-Approved →
          </Link>
        </div>
      </div>
    </div>
  )
}
