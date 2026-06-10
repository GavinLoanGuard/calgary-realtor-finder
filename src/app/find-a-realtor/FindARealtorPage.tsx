'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import {
  CheckCircle,
  ChevronRight,
  MapPin,
  Users,
  Zap,
  Plus,
  Minus,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

type Intent = 'buying' | 'selling' | 'both' | null

interface FormData {
  intent: Intent
  // Buying fields
  neighbourhood: string
  priceRange: string
  timeline: string
  // Selling fields
  address: string
  homeValue: string
  sellTimeline: string
  // Contact
  firstName: string
  phone: string
  email: string
  consent: boolean
}

// ─── Constants ───────────────────────────────────────────────────────────────

const CALGARY_NEIGHBOURHOODS = [
  'Auburn Bay', 'Beltline', 'Bridgeland', 'Chinchinook Park', 'Copperfield',
  'Cranston', 'Discovery Ridge', 'Evanston', 'Evergreen', 'Hillhurst',
  'Inglewood', 'Kincora', 'Mahogany', 'McKenzie Towne', 'Mission',
  'Montgomery', 'Nolan Hill', 'Panorama Hills', 'Rocky Ridge', 'Sage Hill',
  'Signal Hill', 'Silverado', 'Springbank Hill', 'Tuscany', 'Varsity',
  'West Springs', 'Willow Park', 'Woodbine', 'Airdrie', 'Cochrane',
  'Okotoks', 'Other / Not sure yet',
]

const PRICE_RANGES = [
  'Under $400K',
  '$400K – $600K',
  '$600K – $800K',
  '$800K – $1M',
  '$1M+',
]

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Just exploring']

const FAQS = [
  {
    q: 'How do you choose the right realtor for me?',
    a: "We match based on the neighbourhood you're targeting, your price range, and whether you're buying or selling. Each realtor in our network has demonstrated transaction history in their area — you're not getting a random referral, you're getting someone who knows your market segment.",
  },
  {
    q: "Is this really free — what's the catch?",
    a: "It's completely free for buyers and sellers. The matched realtor earns their commission through the transaction in the normal way — the same commission structure that would apply whether you found them through us or on your own. We just give you a better starting point than cold-Googling.",
  },
  {
    q: "What if I'm not ready to buy or sell yet?",
    a: 'No problem at all. Select "Just exploring" in the timeline field and your matched realtor will be happy to have a no-pressure conversation about market conditions, pricing, and what to expect when you are ready.',
  },
  {
    q: 'How quickly will a realtor reach out?',
    a: 'In most cases within 1 business day. If you submit during business hours, often within a couple of hours. You\'ll also receive a confirmation email immediately after submitting.',
  },
]

// ─── Style primitives (matches existing LeadForm.tsx) ────────────────────────

const inputBase =
  'w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-accent bg-white placeholder:text-charcoal/40 transition-colors'
const selectBase =
  'w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-accent bg-white transition-colors appearance-none'
const ctaBtn =
  'w-full bg-accent hover:bg-accent-light text-white font-inter font-semibold py-4 rounded-lg tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base'
const backLink =
  'font-inter text-xs text-charcoal/40 hover:text-charcoal/60 hover:underline text-left transition-colors'

// ─── Headline with keyword logic ──────────────────────────────────────────────

function DynamicHeadline() {
  const params = useSearchParams()
  const kw = params.get('kw')
  let headline = 'Find the Right Calgary Realtor for Your Move'
  if (kw === 'best') headline = "Compare Calgary's Best Realtors"
  if (kw === 'top') headline = "Find Calgary's Top-Rated Realtors"
  return (
    <h1 className="font-playfair font-bold text-3xl sm:text-4xl text-primary leading-tight">
      {headline}
    </h1>
  )
}

// ─── Step progress bar ────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  const pct = step === 1 ? '33%' : step === 2 ? '66%' : '100%'
  return (
    <div className="mb-5">
      <p className="font-inter text-xs text-charcoal/40 mb-2">Step {step} of 3</p>
      <div className="h-1.5 rounded-full overflow-hidden bg-slate-100">
        <div className="h-full bg-accent transition-all duration-300" style={{ width: pct }} />
      </div>
    </div>
  )
}

// ─── Step 1 — Intent ──────────────────────────────────────────────────────────

function Step1({
  onSelect,
}: {
  onSelect: (intent: 'buying' | 'selling' | 'both') => void
}) {
  const options: { value: 'buying' | 'selling' | 'both'; label: string }[] = [
    { value: 'buying', label: "I'm buying" },
    { value: 'selling', label: "I'm selling" },
    { value: 'both', label: 'Both' },
  ]

  return (
    <div>
      <ProgressBar step={1} />
      <p className="font-inter font-semibold text-charcoal text-base mb-4">
        What are you looking to do?
      </p>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="flex items-center justify-between w-full border-[1.5px] border-slate-200 rounded-lg px-5 py-4 text-sm font-inter font-medium text-charcoal bg-white hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer"
          >
            {opt.label}
            <ChevronRight size={16} className="text-charcoal/30" />
          </button>
        ))}
      </div>
      <p className="font-inter text-xs text-charcoal/40 text-center mt-4">
        Free · No obligation · Takes 2 minutes
      </p>
    </div>
  )
}

// ─── Step 2 — Details ─────────────────────────────────────────────────────────

function Step2({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
  onNext: () => void
  onBack: () => void
}) {
  const isSelling = data.intent === 'selling'

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onNext()
      }}
    >
      <ProgressBar step={2} />
      <div className="flex flex-col gap-5">
        {isSelling ? (
          <>
            <div>
              <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                Property address or neighbourhood
              </label>
              <input
                type="text"
                placeholder="e.g. 123 Maple St or Evergreen"
                className={inputBase}
                value={data.address}
                onChange={(e) => onChange('address', e.target.value)}
              />
            </div>
            <div>
              <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                Rough home value estimate
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.homeValue}
                  onChange={(e) => onChange('homeValue', e.target.value)}
                >
                  <option value="">Select a range...</option>
                  {PRICE_RANGES.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <ChevronRight
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none"
                />
              </div>
            </div>
            <div>
              <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                Timeline
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.sellTimeline}
                  onChange={(e) => onChange('sellTimeline', e.target.value)}
                >
                  <option value="">Select a timeline...</option>
                  {TIMELINES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <ChevronRight
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                Neighbourhood preference
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.neighbourhood}
                  onChange={(e) => onChange('neighbourhood', e.target.value)}
                >
                  <option value="">Select a neighbourhood...</option>
                  {CALGARY_NEIGHBOURHOODS.map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
                <ChevronRight
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none"
                />
              </div>
            </div>
            <div>
              <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                Price range
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.priceRange}
                  onChange={(e) => onChange('priceRange', e.target.value)}
                >
                  <option value="">Select a price range...</option>
                  {PRICE_RANGES.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <ChevronRight
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none"
                />
              </div>
            </div>
            <div>
              <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                Timeline
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.timeline}
                  onChange={(e) => onChange('timeline', e.target.value)}
                >
                  <option value="">Select a timeline...</option>
                  {TIMELINES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <ChevronRight
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none"
                />
              </div>
            </div>
          </>
        )}

        <button type="submit" className={ctaBtn}>
          Next Step →
        </button>
        <button type="button" onClick={onBack} className={backLink}>
          ← Back
        </button>
        <p className="font-inter text-xs text-charcoal/40 text-center">
          Free · No obligation
        </p>
      </div>
    </form>
  )
}

// ─── Step 3 — Contact ─────────────────────────────────────────────────────────

function Step3({
  data,
  onChange,
  onBack,
  onSubmit,
  submitting,
  submitError,
}: {
  data: FormData
  onChange: (field: keyof FormData, value: string | boolean) => void
  onBack: () => void
  onSubmit: (e: React.FormEvent) => void
  submitting: boolean
  submitError: string
}) {
  const [errors, setErrors] = useState<{ firstName?: string; phone?: string; email?: string; consent?: string }>({})

  function validate(e: React.FormEvent) {
    e.preventDefault()
    const errs: typeof errors = {}
    if (!data.firstName.trim()) errs.firstName = 'First name is required'
    if (!data.phone.trim()) errs.phone = 'Phone number is required'
    if (!data.email.trim()) errs.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = 'Enter a valid email address'
    if (!data.consent) errs.consent = 'Please accept to continue'
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    onSubmit(e)
  }

  return (
    <form onSubmit={validate}>
      <ProgressBar step={3} />
      <p className="font-inter font-semibold text-charcoal text-base mb-4">
        Where should we send your match?
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="First name"
            className={`${inputBase} ${errors.firstName ? 'border-red-400' : ''}`}
            value={data.firstName}
            onChange={(e) => {
              onChange('firstName', e.target.value)
              setErrors((prev) => ({ ...prev, firstName: undefined }))
            }}
          />
          {errors.firstName && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            inputMode="tel"
            placeholder="(403) 555-0123"
            className={`${inputBase} ${errors.phone ? 'border-red-400' : ''}`}
            value={data.phone}
            onChange={(e) => {
              onChange('phone', e.target.value)
              setErrors((prev) => ({ ...prev, phone: undefined }))
            }}
          />
          {errors.phone && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email address"
            className={`${inputBase} ${errors.email ? 'border-red-400' : ''}`}
            value={data.email}
            onChange={(e) => {
              onChange('email', e.target.value)
              setErrors((prev) => ({ ...prev, email: undefined }))
            }}
          />
          {errors.email && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => {
                onChange('consent', e.target.checked)
                setErrors((prev) => ({ ...prev, consent: undefined }))
              }}
              className="mt-0.5 w-4 h-4 shrink-0 accent-accent"
            />
            <span className="font-inter text-xs text-charcoal/60 leading-relaxed">
              I agree to be contacted by Calgary Realtor Finder and a matched local realtor.
              No spam, ever.
            </span>
          </label>
          {errors.consent && (
            <p className="font-inter text-xs text-red-500 mt-1">{errors.consent}</p>
          )}
        </div>

        <button type="submit" disabled={submitting} className={ctaBtn}>
          {submitting ? 'Matching you...' : 'Match Me With a Realtor →'}
        </button>

        {submitError && (
          <p className="font-inter text-xs text-red-500 text-center">{submitError}</p>
        )}

        <button type="button" onClick={onBack} className={backLink}>
          ← Back
        </button>
      </div>
    </form>
  )
}

// ─── Thank-you state ──────────────────────────────────────────────────────────

function ThankYou({ intent }: { intent: Intent }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center py-4">
      <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
        <CheckCircle className="text-green-500" size={32} />
      </div>
      <h2 className="font-playfair font-bold text-xl text-primary">You&apos;re matched!</h2>
      <p className="font-inter text-sm text-charcoal/70 leading-relaxed max-w-xs">
        A local Calgary realtor will be in touch within 1 business day. Check your inbox for
        a confirmation email.
      </p>
      <p className="font-inter text-xs text-charcoal/40">
        {intent === 'buying'
          ? 'Your matched agent specialises in your target neighbourhood and price range.'
          : intent === 'selling'
          ? 'Your matched agent has local market knowledge to price and position your home.'
          : 'Your matched agent handles both sides of the transaction.'}
      </p>
    </div>
  )
}

// ─── Main form container ──────────────────────────────────────────────────────

function MatchForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const [data, setData] = useState<FormData>({
    intent: null,
    neighbourhood: '',
    priceRange: '',
    timeline: '',
    address: '',
    homeValue: '',
    sellTimeline: '',
    firstName: '',
    phone: '',
    email: '',
    consent: false,
  })

  function updateField(field: keyof FormData, value: string | boolean) {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  function handleIntentSelect(intent: 'buying' | 'selling' | 'both') {
    updateField('intent', intent)
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).dataLayer = (window as any).dataLayer || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).dataLayer.push({ event: 'lead_form_start' })
    }
    setStep(2)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')

    const searchParams = new URLSearchParams(
      typeof window !== 'undefined' ? window.location.search : ''
    )

    const area =
      data.intent === 'selling'
        ? data.address || 'Calgary'
        : data.neighbourhood || 'Calgary'

    const priceRange =
      data.intent === 'selling' ? data.homeValue : data.priceRange

    const timeline =
      data.intent === 'selling' ? data.sellTimeline : data.timeline

    const intentLabel =
      data.intent === 'buying'
        ? 'Buying a home'
        : data.intent === 'selling'
        ? 'Selling a home'
        : 'Buying & Selling'

    const res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        email: data.email,
        phone: data.phone,
        intent: intentLabel,
        area,
        priceRange,
        timeline,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        utmSource: searchParams.get('utm_source') ?? undefined,
        utmMedium: searchParams.get('utm_medium') ?? undefined,
        utmCampaign: searchParams.get('utm_campaign') ?? undefined,
      }),
    })

    setSubmitting(false)

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      setSubmitError(body.error ?? 'Something went wrong. Please try again.')
      return
    }

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).dataLayer = (window as any).dataLayer || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).dataLayer.push({
        event: 'lead_form_complete',
        intent: data.intent,
      })
    }

    setSubmitted(true)
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md mx-auto">
      {submitted ? (
        <ThankYou intent={data.intent} />
      ) : step === 1 ? (
        <Step1 onSelect={handleIntentSelect} />
      ) : step === 2 ? (
        <Step2
          data={data}
          onChange={updateField}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      ) : (
        <Step3
          data={data}
          onChange={updateField}
          onBack={() => setStep(2)}
          onSubmit={handleSubmit}
          submitting={submitting}
          submitError={submitError}
        />
      )}
    </div>
  )
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {FAQS.map((faq, i) => (
        <div key={i} className="border-b border-charcoal/10 py-5">
          <button
            className="w-full flex justify-between items-center cursor-pointer text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-inter font-medium text-base text-accent hover:text-accent-light transition-colors pr-4">
              {faq.q}
            </span>
            {open === i ? (
              <Minus size={18} className="text-charcoal/40 shrink-0" />
            ) : (
              <Plus size={18} className="text-charcoal/40 shrink-0" />
            )}
          </button>
          {open === i && (
            <p className="font-inter text-charcoal/60 text-sm leading-relaxed mt-3">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FindARealtorPage() {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* ── Minimal header ─────────────────────────────────────────────────── */}
      <header className="border-b border-charcoal/10 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="/" aria-label="Calgary Realtor Finder home">
            <Image
              src="/logo.png"
              alt="Calgary Realtor Finder"
              width={160}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </a>
          <a
            href="tel:+14031234567"
            className="font-inter text-sm text-charcoal/70 hover:text-primary transition-colors"
          >
            Questions?{' '}
            <span className="font-semibold text-primary">403-XXX-XXXX</span>
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-primary px-5 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left copy */}
          <div className="text-white">
            <DynamicHeadline />
            <p className="font-inter text-white/70 text-base sm:text-lg mt-4 leading-relaxed">
              Free matching service · No obligation · Takes 2 minutes
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: <MapPin size={14} />, label: 'Calgary-based' },
                { icon: <Users size={14} />, label: 'Matched to your situation' },
                { icon: <Zap size={14} />, label: 'Free · No obligation' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 font-inter text-xs px-3 py-1.5 rounded-full"
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-full">
            <MatchForm />
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-primary text-center mb-10">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Tell us what you need',
                body: 'Answer three quick questions about your situation — buying, selling, price range, neighbourhood, and timeline.',
              },
              {
                step: '2',
                title: 'We find your best-fit local expert',
                body: "We match you with a pre-vetted Calgary realtor based on your neighbourhood and transaction type — not a random referral.",
              },
              {
                step: '3',
                title: 'Get moving, stress-free',
                body: 'Your matched realtor reaches out within 1 business day for a no-pressure conversation. Free to you, always.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <span className="font-playfair font-bold text-white text-base">{step}</span>
                </div>
                <h3 className="font-playfair font-semibold text-lg text-primary">{title}</h3>
                <p className="font-inter text-sm text-charcoal/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why matched beats googled ───────────────────────────────────────── */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-primary text-center mb-10">
            Why matched beats googled
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Google col */}
            <div className="border border-charcoal/10 rounded-xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-5">
                <ThumbsDown size={18} className="text-charcoal/30" />
                <h3 className="font-inter font-semibold text-base text-charcoal/50">
                  Searching on Google
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Overwhelming number of options',
                  'Hard to compare without inside knowledge',
                  "No way to know who to trust",
                  'Ads favour whoever paid most, not whoever fits best',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-inter text-sm text-charcoal/60">
                    <span className="mt-0.5 text-red-400 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Matched col */}
            <div className="border-2 border-accent rounded-xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-5">
                <ThumbsUp size={18} className="text-accent" />
                <h3 className="font-inter font-semibold text-base text-primary">
                  Matched by Calgary Realtor Finder
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Pre-vetted for your neighbourhood and price range',
                  'Matched to your specific transaction type',
                  'Free and unbiased — we have no allegiance to any brokerage',
                  'One conversation with someone who already knows your situation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-inter text-sm text-charcoal/70">
                    <span className="mt-0.5 text-green-500 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How matching works ─────────────────────────────────────────────── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-primary mb-6">
            How the matching works
          </h2>
          <p className="font-inter text-charcoal/60 text-base leading-relaxed">
            Calgary Realtor Finder is an independent, neutral matching platform — we&apos;re not a
            brokerage and we don&apos;t represent any single agent. When you submit the form above,
            we match you based on neighbourhood expertise and your transaction type (buying, selling,
            or both). There&apos;s no cost to you as a buyer or seller. The matched realtor earns
            their commission through the transaction in the normal way — you&apos;re simply getting
            a better starting point than cold-searching Google for someone local and trustworthy.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-primary mb-8">
            Common questions
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-5 bg-primary text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-white mb-3">
            Ready to find your match?
          </h2>
          <p className="font-inter text-white/60 text-sm mb-6">
            Free · No obligation · Takes 2 minutes
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-block bg-accent hover:bg-accent-light text-white font-inter font-semibold px-8 py-4 rounded-lg transition-colors text-base"
          >
            Match Me With a Realtor →
          </a>
        </div>
      </section>

      {/* ── Minimal footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-charcoal/10 bg-white">
        <div className="max-w-5xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-charcoal/40">
            © {new Date().getFullYear()} Calgary Realtor Finder. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-inter text-xs text-charcoal/40">
            <a href="/privacy" className="hover:text-charcoal/60 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-charcoal/60 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
