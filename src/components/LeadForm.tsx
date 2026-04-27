'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface LeadFormProps {
  variant: 'hero' | 'sidebar'
}

const fieldClass =
  'w-full border border-charcoal/20 rounded-sm px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-accent bg-white'

export default function LeadForm({ variant }: LeadFormProps) {
  const [intent, setIntent] = useState<'Buying a home' | 'Selling a home'>('Buying a home')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [neighbourhood, setNeighbourhood] = useState('')
  const [timeline, setTimeline] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent,
        firstName,
        lastName,
        email,
        phone,
        neighbourhood,
        timeline,
        priceRange,
      }),
    })
    setSubmitting(false)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'realtor_match_request',
        transaction_type: intent,
        neighbourhood,
        timeline,
        price_range: priceRange,
      })
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle className="text-green-500" size={48} />
        <h2 className="font-playfair font-semibold text-xl text-primary">You're matched!</h2>
        <p className="font-inter text-sm text-charcoal/70">
          Nathan will be in touch within a few hours. Check your email for confirmation.
        </p>
      </div>
    )
  }

  const form = (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Buying / Selling toggle */}
      <div className="grid grid-cols-2 gap-0">
        {(['Buying a home', 'Selling a home'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setIntent(option)}
            className={`py-2 text-sm font-inter font-medium transition-colors ${
              intent === option
                ? 'bg-primary text-white'
                : 'bg-white border border-primary/20 text-primary/60'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* First + Last name */}
      <div className="grid grid-cols-2 gap-3">
        <input
          className={fieldClass}
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className={fieldClass}
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <input
        className={fieldClass}
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Phone */}
      <input
        className={fieldClass}
        type="tel"
        placeholder="(403) 555-0123"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Neighbourhood */}
      <select
        className={fieldClass}
        value={neighbourhood}
        onChange={(e) => setNeighbourhood(e.target.value)}
      >
        <option value="">Choose an area...</option>
        <option>Calgary NE</option>
        <option>Calgary NW</option>
        <option>Calgary SW</option>
        <option>Calgary SE</option>
        <option>City Centre</option>
        <option>Airdrie</option>
        <option>Cochrane</option>
        <option>Okotoks</option>
        <option>Edmonton</option>
        <option>Red Deer</option>
        <option>Lethbridge</option>
        <option>Grande Prairie</option>
        <option>Other Alberta</option>
      </select>

      {/* Timeline */}
      <select
        className={fieldClass}
        value={timeline}
        onChange={(e) => setTimeline(e.target.value)}
      >
        <option value="">When are you looking to move?</option>
        <option>ASAP (within 30 days)</option>
        <option>1–3 months</option>
        <option>3–6 months</option>
        <option>6–12 months</option>
        <option>Just exploring</option>
      </select>

      {/* Price Range */}
      <select
        className={fieldClass}
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="">What's your budget?</option>
        <option>Under $400K</option>
        <option>$400K–$600K</option>
        <option>$600K–$800K</option>
        <option>$800K–$1M</option>
        <option>Over $1M</option>
      </select>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-accent hover:bg-accent-light text-white font-inter font-semibold py-3 rounded-sm tracking-wide transition-colors disabled:opacity-70"
      >
        {submitting ? 'Matching you...' : 'MATCH ME WITH A REALTOR →'}
      </button>

      <p className="font-inter text-xs text-charcoal/50 text-center">
        Free service. No obligation. We'll never share your info with more than one agent.
      </p>
    </form>
  )

  if (variant === 'sidebar') {
    return form
  }

  return (
    <div className="bg-white rounded-sm shadow-lg p-6">
      <h2 className="font-playfair font-semibold text-xl text-primary">
        Get matched in under 60 seconds
      </h2>
      <p className="font-inter text-sm text-charcoal/70 mt-1 mb-4">
        Tell us about your move. We'll introduce you to a Calgary REALTOR® today.
      </p>
      {form}
    </div>
  )
}
