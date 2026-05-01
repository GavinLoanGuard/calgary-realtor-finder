'use client'

import { useState } from 'react'
import { CheckCircle, Clock } from 'lucide-react'
import { areas, type Area } from '@/data/areas'

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
  const [selectedAreaSlug, setSelectedAreaSlug] = useState('')
  const [timeline, setTimeline] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submittedArea, setSubmittedArea] = useState<Area | null>(null)

  const selectedArea = areas.find(a => a.slug === selectedAreaSlug) ?? null

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
        neighbourhood: selectedArea?.name ?? selectedAreaSlug,
        areaStatus: selectedArea?.status ?? 'active',
        timeline,
        priceRange,
      }),
    })
    setSubmitting(false)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'realtor_match_request',
        transaction_type: intent,
        neighbourhood: selectedArea?.name ?? selectedAreaSlug,
        area_status: selectedArea?.status ?? 'active',
        timeline,
        price_range: priceRange,
      })
    }
    setSubmittedArea(selectedArea)
  }

  if (submittedArea !== null) {
    if (submittedArea.status === 'waitlist') {
      return (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <Clock className="text-accent" size={48} />
          <h2 className="font-playfair font-semibold text-xl text-primary">We'll keep you posted.</h2>
          <p className="font-inter text-sm text-charcoal/70 max-w-sm">
            Thanks! We&apos;re building out coverage for {submittedArea.name} now. We&apos;ll notify you as
            soon as a REALTOR® in your area is confirmed — usually within a few days.
          </p>
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle className="text-green-500" size={48} />
        <h2 className="font-playfair font-semibold text-xl text-primary">You&apos;re matched.</h2>
        <p className="font-inter text-sm text-charcoal/70 max-w-sm">
          Nathan Koenigsberg from RE/MAX First covers {submittedArea.name} and will be in touch
          within 2 hours. Keep your phone nearby.
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

      {/* Area selector */}
      <select
        className={fieldClass}
        value={selectedAreaSlug}
        onChange={(e) => setSelectedAreaSlug(e.target.value)}
      >
        <option value="">Which area of Calgary?</option>
        <optgroup label="Active coverage">
          {areas.filter(a => a.status === 'active').map(a => (
            <option key={a.slug} value={a.slug}>{a.name}</option>
          ))}
        </optgroup>
        <optgroup label="Coming soon">
          {areas.filter(a => a.status === 'waitlist').map(a => (
            <option key={a.slug} value={a.slug}>{a.name}</option>
          ))}
        </optgroup>
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
    <div id="lead-form" className="bg-white rounded-sm shadow-lg p-6">
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
