'use client'

import { useState, type ReactNode, type FormEvent, type ChangeEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import {
  CheckCircle,
  ChevronRight,
  ChevronDown,
  MapPin,
  Users,
  Shield,
  Home,
  Tag,
  ArrowLeftRight,
  ClipboardList,
  Key,
  Search,
  Star,
  Heart,
  Phone,
  Lock,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

type Intent = 'buying' | 'selling' | 'both' | null

interface FormData {
  intent: Intent
  neighbourhood: string
  priceRange: string
  timeline: string
  address: string
  homeValue: string
  sellTimeline: string
  firstName: string
  phone: string
  email: string
  consent: boolean
}

// ─── Constants ───────────────────────────────────────────────────────────────

const CALGARY_NEIGHBOURHOODS = [
  'Auburn Bay', 'Beltline', 'Bridgeland', 'Copperfield', 'Cranston',
  'Discovery Ridge', 'Evanston', 'Evergreen', 'Hillhurst', 'Inglewood',
  'Kincora', 'Mahogany', 'McKenzie Towne', 'Mission', 'Montgomery',
  'Nolan Hill', 'Panorama Hills', 'Rocky Ridge', 'Sage Hill', 'Signal Hill',
  'Silverado', 'Springbank Hill', 'Tuscany', 'Varsity', 'West Springs',
  'Willow Park', 'Woodbine', 'Airdrie', 'Cochrane', 'Okotoks',
  'Other / Not sure yet',
]

const PRICE_RANGES = ['Under $400K', '$400K – $600K', '$600K – $800K', '$800K – $1M', '$1M+']
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
    a: "In most cases within 1 business day. If you submit during business hours, often within a couple of hours. You'll also receive a confirmation email immediately after submitting.",
  },
]

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputBase =
  'w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-primary bg-white placeholder:text-charcoal/40 transition-colors'
const selectBase =
  'w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-primary bg-white transition-colors appearance-none'
const ctaBtn =
  'w-full bg-primary hover:bg-primary-light text-white font-inter font-semibold py-3.5 rounded-lg tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm'
const backLink =
  'font-inter text-xs text-charcoal/40 hover:text-charcoal/60 hover:underline text-left transition-colors'

// ─── Section heading with underline accent ────────────────────────────────────

function SectionHeading({ children, center = true }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-primary">{children}</h2>
      <div className={`mt-3 h-0.5 w-10 bg-primary rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}

// ─── Dynamic headline (uses useSearchParams — must be inside Suspense) ────────

function DynamicHeadline() {
  const params = useSearchParams()
  const kw = params.get('kw')
  let headline = 'Find the Right Calgary Realtor for Your Move'
  if (kw === 'best') headline = "Compare Calgary's Best Realtors"
  if (kw === 'top') headline = "Find Calgary's Top-Rated Realtors"
  return (
    <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-primary leading-tight">
      {headline}
    </h1>
  )
}

// ─── Step dot progress ────────────────────────────────────────────────────────

function StepDots({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-5">
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex items-center">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-inter font-semibold transition-colors ${
              n === current
                ? 'bg-primary text-white'
                : n < current
                ? 'bg-primary/20 text-primary'
                : 'bg-slate-100 text-charcoal/30'
            }`}
          >
            {n}
          </div>
          {n < 3 && (
            <div
              className={`w-12 h-px transition-colors ${n < current ? 'bg-primary/30' : 'bg-slate-200'}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Step 1 — Intent ──────────────────────────────────────────────────────────

function Step1({ onSelect }: { onSelect: (intent: 'buying' | 'selling' | 'both') => void }) {
  const options = [
    { value: 'buying' as const, label: "I'm Buying", icon: <Home size={18} /> },
    { value: 'selling' as const, label: "I'm Selling", icon: <Tag size={18} /> },
    { value: 'both' as const, label: 'Both', icon: <ArrowLeftRight size={18} /> },
  ]
  return (
    <div>
      <StepDots current={1} />
      <p className="font-inter font-semibold text-charcoal text-base mb-0.5">
        What are you looking to do?
      </p>
      <p className="font-inter text-xs text-charcoal/40 mb-4">Choose one or more options.</p>
      <div className="flex flex-col gap-2.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="flex items-center gap-3 w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3.5 font-inter font-medium text-sm text-charcoal bg-white hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
          >
            <span className="text-primary/70">{opt.icon}</span>
            <span className="flex-1 text-left">{opt.label}</span>
            <ChevronRight size={15} className="text-charcoal/25" />
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <Lock size={12} className="text-charcoal/30" />
        <p className="font-inter text-xs text-charcoal/35">Secure &amp; confidential</p>
      </div>
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
    <form onSubmit={(e: FormEvent) => { e.preventDefault(); onNext() }}>
      <StepDots current={2} />
      <p className="font-inter font-semibold text-charcoal text-base mb-4">
        {isSelling ? 'Tell us about your property' : 'Tell us what you’re looking for'}
      </p>
      <div className="flex flex-col gap-4">
        {isSelling ? (
          <>
            <div>
              <label className="font-inter text-xs font-semibold text-charcoal/60 uppercase tracking-wide block mb-1.5">
                Property address or neighbourhood
              </label>
              <input
                type="text"
                placeholder="e.g. 123 Maple St or Evergreen"
                className={inputBase}
                value={data.address}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('address', e.target.value)}
              />
            </div>
            <div>
              <label className="font-inter text-xs font-semibold text-charcoal/60 uppercase tracking-wide block mb-1.5">
                Rough home value estimate
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.homeValue}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('homeValue', e.target.value)}
                >
                  <option value="">Select a range...</option>
                  {PRICE_RANGES.map((r) => <option key={r}>{r}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="font-inter text-xs font-semibold text-charcoal/60 uppercase tracking-wide block mb-1.5">
                Timeline
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.sellTimeline}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('sellTimeline', e.target.value)}
                >
                  <option value="">Select a timeline...</option>
                  {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="font-inter text-xs font-semibold text-charcoal/60 uppercase tracking-wide block mb-1.5">
                Neighbourhood preference
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.neighbourhood}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('neighbourhood', e.target.value)}
                >
                  <option value="">Select a neighbourhood...</option>
                  {CALGARY_NEIGHBOURHOODS.map((n) => <option key={n}>{n}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="font-inter text-xs font-semibold text-charcoal/60 uppercase tracking-wide block mb-1.5">
                Price range
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.priceRange}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('priceRange', e.target.value)}
                >
                  <option value="">Select a price range...</option>
                  {PRICE_RANGES.map((r) => <option key={r}>{r}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="font-inter text-xs font-semibold text-charcoal/60 uppercase tracking-wide block mb-1.5">
                Timeline
              </label>
              <div className="relative">
                <select
                  className={selectBase}
                  value={data.timeline}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('timeline', e.target.value)}
                >
                  <option value="">Select a timeline...</option>
                  {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 pointer-events-none" />
              </div>
            </div>
          </>
        )}

        <button type="submit" className={ctaBtn}>Next Step →</button>
        <button type="button" onClick={onBack} className={backLink}>← Back</button>
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
  onSubmit: (e: FormEvent) => void
  submitting: boolean
  submitError: string
}) {
  const [errors, setErrors] = useState<{
    firstName?: string; phone?: string; email?: string; consent?: string
  }>({})

  function validate(e: FormEvent) {
    e.preventDefault()
    const errs: typeof errors = {}
    if (!data.firstName.trim()) errs.firstName = 'First name is required'
    if (!data.phone.trim()) errs.phone = 'Phone number is required'
    if (!data.email.trim()) errs.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = 'Enter a valid email address'
    if (!data.consent) errs.consent = 'Please accept to continue'
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    onSubmit(e)
  }

  return (
    <form onSubmit={validate}>
      <StepDots current={3} />
      <p className="font-inter font-semibold text-charcoal text-base mb-4">
        Where should we send your match?
      </p>
      <div className="flex flex-col gap-3.5">
        <div>
          <input
            type="text"
            placeholder="First name"
            className={`${inputBase} ${errors.firstName ? 'border-red-400' : ''}`}
            value={data.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { onChange('firstName', e.target.value); setErrors((p: typeof errors) => ({ ...p, firstName: undefined })) }}
          />
          {errors.firstName && <p className="font-inter text-xs text-red-500 mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <input
            type="tel"
            inputMode="tel"
            placeholder="(403) 555-0123"
            className={`${inputBase} ${errors.phone ? 'border-red-400' : ''}`}
            value={data.phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { onChange('phone', e.target.value); setErrors((p: typeof errors) => ({ ...p, phone: undefined })) }}
          />
          {errors.phone && <p className="font-inter text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            className={`${inputBase} ${errors.email ? 'border-red-400' : ''}`}
            value={data.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { onChange('email', e.target.value); setErrors((p: typeof errors) => ({ ...p, email: undefined })) }}
          />
          {errors.email && <p className="font-inter text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e: ChangeEvent<HTMLInputElement>) => { onChange('consent', e.target.checked); setErrors((p: typeof errors) => ({ ...p, consent: undefined })) }}
              className="mt-0.5 w-4 h-4 shrink-0 accent-primary"
            />
            <span className="font-inter text-xs text-charcoal/55 leading-relaxed">
              I agree to be contacted by Calgary Realtor Finder and a matched local realtor. No spam, ever.
            </span>
          </label>
          {errors.consent && <p className="font-inter text-xs text-red-500 mt-1">{errors.consent}</p>}
        </div>
        <button type="submit" disabled={submitting} className={ctaBtn}>
          {submitting ? 'Matching you...' : 'Match Me With a Realtor →'}
        </button>
        {submitError && <p className="font-inter text-xs text-red-500 text-center">{submitError}</p>}
        <button type="button" onClick={onBack} className={backLink}>← Back</button>
      </div>
    </form>
  )
}

// ─── Thank-you state ──────────────────────────────────────────────────────────

function ThankYou({ intent }: { intent: Intent }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center py-6">
      <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
        <CheckCircle className="text-green-500" size={32} />
      </div>
      <h2 className="font-playfair font-bold text-xl text-primary">You&apos;re matched!</h2>
      <p className="font-inter text-sm text-charcoal/70 leading-relaxed max-w-xs">
        A local Calgary realtor will be in touch within 1 business day. Check your inbox for a confirmation email.
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

// ─── Match Form container ─────────────────────────────────────────────────────

function MatchForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [data, setData] = useState<FormData>({
    intent: null, neighbourhood: '', priceRange: '', timeline: '',
    address: '', homeValue: '', sellTimeline: '',
    firstName: '', phone: '', email: '', consent: false,
  })

  function updateField(field: keyof FormData, value: string | boolean) {
    setData((prev: FormData) => ({ ...prev, [field]: value }))
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')
    const sp = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
    const area = data.intent === 'selling' ? data.address || 'Calgary' : data.neighbourhood || 'Calgary'
    const priceRange = data.intent === 'selling' ? data.homeValue : data.priceRange
    const timeline = data.intent === 'selling' ? data.sellTimeline : data.timeline
    const intentLabel = data.intent === 'buying' ? 'Buying a home' : data.intent === 'selling' ? 'Selling a home' : 'Buying & Selling'

    const res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName, email: data.email, phone: data.phone,
        intent: intentLabel, area, priceRange, timeline,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        utmSource: sp.get('utm_source') ?? undefined,
        utmMedium: sp.get('utm_medium') ?? undefined,
        utmCampaign: sp.get('utm_campaign') ?? undefined,
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
      ;(window as any).dataLayer.push({ event: 'lead_form_complete', intent: data.intent })
    }
    setSubmitted(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7 w-full">
      {!submitted && (
        <div className="mb-5 text-center">
          <h2 className="font-playfair font-bold text-lg text-primary">Find Your Perfect Match</h2>
          <p className="font-inter text-xs text-charcoal/40 mt-0.5">Step {step} of 3</p>
        </div>
      )}
      {submitted ? (
        <ThankYou intent={data.intent} />
      ) : step === 1 ? (
        <Step1 onSelect={handleIntentSelect} />
      ) : step === 2 ? (
        <Step2 data={data} onChange={updateField} onNext={() => setStep(3)} onBack={() => setStep(1)} />
      ) : (
        <Step3 data={data} onChange={updateField} onBack={() => setStep(2)} onSubmit={handleSubmit} submitting={submitting} submitError={submitError} />
      )}
    </div>
  )
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="border border-charcoal/10 rounded-xl overflow-hidden">
      {FAQS.map((faq, i) => (
        <div key={i} className={i > 0 ? 'border-t border-charcoal/10' : ''}>
          <button
            className="w-full flex justify-between items-center text-left px-5 py-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-inter font-medium text-sm text-charcoal pr-4">{faq.q}</span>
            <ChevronDown
              size={16}
              className={`text-charcoal/40 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-4">
              <p className="font-inter text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
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

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-charcoal/10 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <a href="/" aria-label="Calgary Realtor Finder home">
            <Image src="/logo.png" alt="Calgary Realtor Finder" width={160} height={36} className="h-8 w-auto" priority />
          </a>
          <a href="tel:+14031234567" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone size={14} className="text-primary" />
            </div>
            <div className="text-right hidden sm:block">
              <p className="font-inter font-semibold text-sm text-primary leading-none">403-XXX-XXXX</p>
              <p className="font-inter text-xs text-charcoal/40 mt-0.5">Talk to a local expert</p>
            </div>
            <p className="font-inter font-semibold text-sm text-primary sm:hidden">403-XXX-XXXX</p>
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

          {/* Left: copy + trust strip */}
          <div>
            <DynamicHeadline />
            <div className="mt-3 h-0.5 w-12 bg-primary rounded-full" />
            <p className="font-inter text-charcoal/55 text-base mt-5 leading-relaxed">
              Free matching service &nbsp;•&nbsp; No obligation &nbsp;•&nbsp; Takes 2 minutes
            </p>

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              {[
                {
                  icon: <MapPin size={20} className="text-primary" />,
                  title: 'Calgary-based',
                  desc: 'Local experts who know our market',
                },
                {
                  icon: <Users size={20} className="text-primary" />,
                  title: 'Matched to your situation',
                  desc: 'We match you with the right fit',
                },
                {
                  icon: <Shield size={20} className="text-primary" />,
                  title: 'Free & unbiased',
                  desc: 'We work for you, not the agents',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/15 flex items-center justify-center bg-primary/5">
                    {icon}
                  </div>
                  <p className="font-inter font-semibold text-xs text-primary leading-tight">{title}</p>
                  <p className="font-inter text-xs text-charcoal/45 leading-tight hidden sm:block">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="w-full">
            <MatchForm />
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading>How it works</SectionHeading>
          </div>

          <div className="grid sm:grid-cols-3 gap-0 relative">
            {/* Dotted connector lines — desktop only */}
            <div className="hidden sm:block absolute top-8 left-[calc(33.333%+1rem)] right-[calc(33.333%+1rem)] h-px border-t-2 border-dashed border-charcoal/15 pointer-events-none" />

            {[
              {
                icon: <ClipboardList size={28} className="text-primary" />,
                step: '1',
                title: 'Tell us what you need',
                body: 'Answer a few quick questions about your move and preferences.',
              },
              {
                icon: <Users size={28} className="text-primary" />,
                step: '2',
                title: 'We match you with a local expert',
                body: 'We hand-pick the best realtor for your unique situation.',
              },
              {
                icon: <Key size={28} className="text-primary" />,
                step: '3',
                title: 'Get moving, stress-free',
                body: 'Connect, plan and move forward with confidence.',
              },
            ].map(({ icon, step, title, body }) => (
              <div key={step} className="flex flex-col items-center text-center px-6 py-4 relative">
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 bg-white flex items-center justify-center mb-4 shadow-sm">
                  {icon}
                </div>
                {/* Step number */}
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="font-inter font-bold text-white text-xs">{step}</span>
                </div>
                <h3 className="font-playfair font-semibold text-base text-primary mb-2">{title}</h3>
                <p className="font-inter text-sm text-charcoal/55 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Matched Beats Googled ───────────────────────────────────────── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionHeading>Why Matched Beats Googled</SectionHeading>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Google — neutral/muted */}
            <div className="border border-charcoal/10 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Search size={16} className="text-charcoal/40" />
                </div>
                <h3 className="font-inter font-semibold text-base text-charcoal/60">
                  Searching on Google
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  { title: 'Overwhelming choices', desc: 'Too many agents, not enough clarity.' },
                  { title: "Hard to know who's right", desc: "Online reviews don't tell the whole story." },
                  { title: 'Wastes your time', desc: 'Endless researching and vetting.' },
                  { title: 'Agents may not be a good fit', desc: "Not every agent has the right experience for your situation." },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-charcoal/40 text-xs font-bold leading-none">✕</span>
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-sm text-charcoal/70">{title}</p>
                      <p className="font-inter text-xs text-charcoal/40 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Matched — highlighted */}
            <div className="border-2 border-primary rounded-2xl p-6 bg-white relative overflow-hidden">
              {/* Star badge */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary flex items-center justify-center rounded-bl-2xl">
                <Star size={16} className="text-white fill-white" />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users size={16} className="text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-base text-primary">
                  Matched by Calgary Realtor Finder
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  { title: 'Curated local experts', desc: 'We know the top-performing agents in Calgary.' },
                  { title: 'Matched to your needs', desc: 'We consider your goals, location and preferences.' },
                  { title: 'Saves you time', desc: 'We do the research for you.' },
                  { title: 'Better fit, better results', desc: 'The right agent makes all the difference in your experience.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold leading-none">✓</span>
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-sm text-charcoal">{title}</p>
                      <p className="font-inter text-xs text-charcoal/50 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How matching works ─────────────────────────────────────────────── */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading>How the matching works</SectionHeading>
          <p className="font-inter text-charcoal/60 text-base leading-relaxed mt-6">
            Calgary Realtor Finder is an independent, neutral matching platform — we&apos;re not a
            brokerage and we don&apos;t represent any single agent. When you submit the form, we match
            you based on neighbourhood expertise and your transaction type. There&apos;s no cost to
            you as a buyer or seller. The matched realtor earns their commission through the
            transaction in the normal way — you&apos;re simply getting a better starting point than
            cold-searching Google.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Bottom strip CTA ───────────────────────────────────────────────── */}
      <section className="py-8 px-5 bg-background border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Heart size={22} className="text-primary shrink-0" />
            <div>
              <p className="font-inter font-semibold text-sm text-primary">
                We&apos;re here to help you find the right fit.
              </p>
              <p className="font-inter text-xs text-charcoal/45">Free · No obligation · Local experts</p>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-inter text-sm font-semibold text-primary hover:text-primary-light transition-colors flex items-center gap-1 shrink-0"
          >
            Get started in under 2 minutes. <ChevronRight size={15} />
          </button>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-charcoal/10 bg-white">
        <div className="max-w-5xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-charcoal/35">
            © {new Date().getFullYear()} Calgary Realtor Finder. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="font-inter text-xs text-charcoal/35 hover:text-charcoal/55 transition-colors">Privacy</a>
            <a href="/terms" className="font-inter text-xs text-charcoal/35 hover:text-charcoal/55 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
