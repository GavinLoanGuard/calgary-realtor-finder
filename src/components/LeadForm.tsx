'use client'

import { useState } from 'react'
import { CheckCircle, Home } from 'lucide-react'
import Link from 'next/link'

interface LeadFormProps {
  variant: 'hero' | 'sidebar'
}

type Intent = 'Buying a home' | 'Selling a home' | ''

const nathanAreas = [
  'City Centre', 'Calgary SW', 'Calgary SE',
  'Calgary South', 'West Calgary', 'Okotoks',
]

const pendingAreas = [
  'North Calgary', 'NE Calgary', 'Airdrie',
  'Cochrane', 'Chestermere',
]

const allAreas = [...nathanAreas, ...pendingAreas]

export default function LeadForm({ variant }: LeadFormProps) {
  const [step, setStep] = useState(1)
  const [intent, setIntent] = useState<Intent>('')
  const [priceRange, setPriceRange] = useState('')
  const [location, setLocation] = useState('')
  const [timeline, setTimeline] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ firstName?: string; email?: string; phone?: string }>({})
  const [submitError, setSubmitError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: { firstName?: string; email?: string; phone?: string } = {}
    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!email.trim()) newErrors.email = 'Email address is required'
    if (!phone.trim()) newErrors.phone = 'Phone number is required'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitting(true)
    setSubmitError('')

    const searchParams = new URLSearchParams(
      typeof window !== 'undefined' ? window.location.search : ''
    )

    const res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        intent,
        area: location,
        priceRange,
        timeline,
        propertyType,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        utmSource: searchParams.get('utm_source') ?? undefined,
        utmMedium: searchParams.get('utm_medium') ?? undefined,
        utmCampaign: searchParams.get('utm_campaign') ?? undefined,
      }),
    })

    setSubmitting(false)

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setSubmitError(data.error ?? 'Something went wrong. Please call (403) 536-9024.')
      return
    }

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: 'realtor_match_request',
        transaction_type: intent,
        neighbourhood: location,
        timeline,
        price_range: priceRange,
      })
    }
    setSubmitted(true)
  }

  if (submitted) {
    const isPending = pendingAreas.includes(location)
    return (
      <div className="bg-white shadow-lg p-8 flex flex-col items-center gap-4 text-center" style={{ borderRadius: 12 }}>
        <CheckCircle className="text-green-500" size={48} />
        {isPending ? (
          <>
            <h2 className="font-playfair font-semibold text-xl text-primary">We&apos;re on it.</h2>
            <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
              We&apos;re actively matching agents for your area. We&apos;ll reach out within 24 hours to introduce
              you to a licensed Calgary REALTOR® who covers your community.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-playfair font-semibold text-xl text-primary">You&apos;re matched.</h2>
            <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
              Nathan Koenigsberg from RE/MAX First will be in touch within 2 hours. Keep your phone nearby.
            </p>
          </>
        )}
        <Link
          href="/tools/mortgage-affordability"
          className="font-inter text-accent text-sm hover:underline mt-1"
        >
          While you wait — check your affordability →
        </Link>
      </div>
    )
  }

  const progress = step === 1 ? '33%' : step === 2 ? '66%' : '100%'

  const header = (
    <div className="mb-6">
      <h2 className="font-playfair font-bold text-xl text-primary">Get Matched in 60 Seconds</h2>
      <p className="font-inter text-xs text-charcoal/50 mt-1">Step {step} of 3</p>
      <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: '#E2E8F0' }}>
        <div className="h-full bg-accent transition-all duration-300" style={{ width: progress }} />
      </div>
    </div>
  )

  // Shared style primitives
  const inputBase =
    'w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-accent bg-white placeholder:text-charcoal/40 transition-colors'
  const inputError = 'border-red-400 focus:border-red-400'
  const toggleBase = 'flex items-center justify-center gap-2 font-inter font-medium rounded-lg transition-colors cursor-pointer'
  const btnSelected = 'bg-primary text-white border-[1.5px] border-primary'
  const btnUnselected = 'bg-white text-charcoal border-[1.5px] border-slate-200 hover:bg-slate-50'
  const ctaBtn =
    'w-full bg-accent hover:bg-accent-light text-white font-inter font-semibold py-4 rounded-lg tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  const backLink =
    'font-inter text-xs text-charcoal/40 hover:text-charcoal/60 hover:underline text-left transition-colors'
  const finePrint = 'font-inter text-xs text-charcoal/40 text-center'

  const renderStep1 = () => (
    <div className="flex flex-col gap-5">
      {/* Q1: Intent */}
      <div>
        <p className="font-inter text-sm font-medium text-charcoal mb-2">Are you buying or selling?</p>
        <div className="grid grid-cols-2 gap-3">
          {(['Buying a home', 'Selling a home'] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setIntent(opt)}
              className={`${toggleBase} px-4 py-3 text-sm ${intent === opt ? btnSelected : btnUnselected}`}
            >
              <Home size={15} />
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Q2: Price range */}
      <div>
        <label className="font-inter text-sm font-medium text-charcoal block mb-2">
          What&apos;s your price range?
        </label>
        <select
          className={inputBase}
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Select a price range...</option>
          <option>Under $400,000</option>
          <option>$400,000 – $600,000</option>
          <option>$600,000 – $800,000</option>
          <option>$800,000 – $1,000,000</option>
          <option>$1,000,000 – $1,500,000</option>
          <option>$1,500,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>

      {/* Q3: Area grid */}
      <div>
        <label className="font-inter text-sm font-medium text-charcoal block mb-2">
          {intent === 'Selling a home'
            ? 'Where is your property located?'
            : 'Where are you looking to buy?'}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {allAreas.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => setLocation(location === area ? '' : area)}
              className={`${toggleBase} px-[14px] py-[10px] text-xs ${location === area ? btnSelected : btnUnselected}`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => { if (intent) setStep(2) }}
        disabled={!intent}
        className={ctaBtn}
      >
        Next Step →
      </button>
      <p className={finePrint}>100% free. No obligation.</p>
    </div>
  )

  const timelineOptions = ['As soon as possible', 'Within 3 months', '3 – 6 months', 'Just exploring']
  const propertyTypes = ['Detached Home', 'Semi-Detached', 'Townhouse', 'Condo / Apartment']

  const renderStep2 = () => (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-inter text-sm font-medium text-charcoal mb-2">
          When are you looking to move?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {timelineOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setTimeline(timeline === opt ? '' : opt)}
              className={`${toggleBase} px-4 py-3 text-sm ${timeline === opt ? btnSelected : btnUnselected}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-inter text-sm font-medium text-charcoal mb-2">What type of property?</p>
        <div className="grid grid-cols-2 gap-3">
          {propertyTypes.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setPropertyType(propertyType === opt ? '' : opt)}
              className={`${toggleBase} px-4 py-3 text-sm ${propertyType === opt ? btnSelected : btnUnselected}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <button type="button" onClick={() => setStep(3)} className={ctaBtn}>
        Next Step →
      </button>
      <button type="button" onClick={() => setStep(1)} className={backLink}>
        ← Back
      </button>
      <p className={finePrint}>100% free. No obligation.</p>
    </div>
  )

  const renderStep3 = () => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="font-inter text-sm font-medium text-charcoal">
        Where should we send your match?
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            placeholder="First name"
            className={`${inputBase} ${errors.firstName ? inputError : ''}`}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
              setErrors((prev) => ({ ...prev, firstName: undefined }))
            }}
          />
          {errors.firstName && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.firstName}</p>
          )}
        </div>
        <input
          type="text"
          placeholder="Last name"
          className={inputBase}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email address"
          className={`${inputBase} ${errors.email ? inputError : ''}`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setErrors((prev) => ({ ...prev, email: undefined }))
          }}
        />
        {errors.email && (
          <p className="font-inter text-xs text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="(403) 555-0123"
          className={`${inputBase} ${errors.phone ? inputError : ''}`}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value)
            setErrors((prev) => ({ ...prev, phone: undefined }))
          }}
        />
        {errors.phone && (
          <p className="font-inter text-xs text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <button type="submit" disabled={submitting} className={ctaBtn}>
        {submitting ? 'Matching you...' : 'MATCH ME WITH A REALTOR® →'}
      </button>

      {submitError && (
        <p className="font-inter text-xs text-red-500 text-center -mt-1">{submitError}</p>
      )}

      <button type="button" onClick={() => setStep(2)} className={backLink}>
        ← Back
      </button>

      <p className={`${finePrint} leading-relaxed`}>
        Free service. No obligation. We&apos;ll never share your info with more than one agent.
      </p>
    </form>
  )

  const stepContent = step === 1 ? renderStep1() : step === 2 ? renderStep2() : renderStep3()

  if (variant === 'sidebar') {
    return (
      <div>
        {header}
        {stepContent}
      </div>
    )
  }

  return (
    <div className="bg-white shadow-lg p-8" style={{ borderRadius: 12, maxWidth: 480 }}>
      {header}
      {stepContent}
    </div>
  )
}
