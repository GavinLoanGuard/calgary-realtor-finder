'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  ShieldCheck,
  Clock,
  MapPin,
  TrendingUp,
  TrendingDown,
  Minus,
  Thermometer,
  Phone,
  Calendar,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ReportData {
  neighbourhood: string
  report_date: string
  market_temperature: 'Hot' | 'Balanced' | 'Cooling'
  market_temperature_description: string
  avg_sale_price: string
  avg_days_on_market: number
  list_to_sale_ratio: string
  active_listings_trend: 'Rising' | 'Stable' | 'Declining'
  active_listings_description: string
  price_trend_3_month: string
  price_trend_description: string
  seller_insight: string
  buyer_insight: string
  neighbourhood_highlight: string
  best_time_to_act: string
  cta_hook: string
}

// ─── Constants ───────────────────────────────────────────────────────────────

const PRICE_RANGES = [
  'Under $400K',
  '$400K–$500K',
  '$500K–$600K',
  '$600K–$700K',
  '$700K–$800K',
  '$800K+',
]

const TIMELINES = [
  'Within 3 months',
  '3–6 months',
  '6–12 months',
  'Just exploring',
]

const INTENT_OPTIONS = ['Buying', 'Selling', 'Just Curious'] as const
type Intent = (typeof INTENT_OPTIONS)[number]

const LOADING_MESSAGES = (neighbourhood: string) => [
  `Analyzing recent sales in ${neighbourhood}...`,
  'Calculating list-to-sale ratio...',
  'Reviewing days on market trends...',
  'Building your report...',
]

const NEIGHBOURHOODS = [
  'Mahogany', 'Auburn Bay', 'McKenzie Towne', 'Cranston', 'Legacy', 'Walden',
  'Copperfield', 'New Brighton', 'Seton', 'Chaparral', 'Silverado', 'Midnapore',
  'Sundance', 'Lake Bonavista', 'Bridlewood', 'Shawnessy', 'Somerset', 'Evergreen',
  'Signal Hill', 'Aspen Woods', 'West Springs', 'Cougar Ridge', 'Rocky Ridge',
  'Tuscany', 'Hamptons', 'Edgemont', 'Panorama Hills', 'Sage Hill', 'Kincora',
  'Evanston', 'Livingston', 'Carrington', 'Nolan Hill', 'Sherwood', 'Varsity',
  'Montgomery', 'Bowness', 'Capitol Hill', 'Renfrew', 'Inglewood', 'Ramsay',
  'Hillhurst', 'Kensington', 'Beltline', 'Mission', 'Altadore', 'Marda Loop',
]

// ─── Shared styles ───────────────────────────────────────────────────────────

const inputBase =
  'w-full border-[1.5px] border-slate-200 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-accent bg-white placeholder:text-charcoal/40 transition-colors font-inter'
const inputError = 'border-red-400 focus:border-red-400'
const ctaBtn =
  'w-full bg-accent hover:bg-accent-light text-white font-inter font-semibold py-4 rounded-lg tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm'

// ─── Sub-components ───────────────────────────────────────────────────────────

function TemperatureBadge({ temp }: { temp: ReportData['market_temperature'] }) {
  const map = {
    Hot: 'bg-red-100 text-red-700 border border-red-200',
    Balanced: 'bg-green-100 text-green-700 border border-green-200',
    Cooling: 'bg-blue-100 text-blue-700 border border-blue-200',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-semibold ${map[temp]}`}
    >
      <Thermometer size={12} />
      {temp} Market
    </span>
  )
}

function StatBox({
  label,
  value,
  subtext,
  trend,
}: {
  label: string
  value: string | number
  subtext: string
  trend?: 'up' | 'down' | 'neutral'
}) {
  const TrendIcon =
    trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus
  const trendColor =
    trend === 'up'
      ? 'text-green-600'
      : trend === 'down'
      ? 'text-red-500'
      : 'text-charcoal/40'

  return (
    <div className="bg-white border border-charcoal/10 rounded-xl p-5 flex flex-col gap-1 shadow-sm">
      <p className="font-inter text-xs text-charcoal/50 uppercase tracking-widest font-medium">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <p className="font-playfair font-bold text-2xl text-primary">{value}</p>
        {trend && <TrendIcon size={16} className={trendColor} />}
      </div>
      <p className="font-inter text-xs text-charcoal/50">{subtext}</p>
    </div>
  )
}

function InsightPanel({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-charcoal/10 rounded-xl p-6 shadow-sm">
      <h3 className="font-playfair font-semibold text-lg text-primary mb-3">{heading}</h3>
      <div className="flex flex-col gap-2 font-inter text-sm text-charcoal/75 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function TrustItem({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType
  title: string
  body: string
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2 px-4">
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
        <Icon size={18} className="text-accent" />
      </div>
      <p className="font-inter font-semibold text-sm text-primary">{title}</p>
      <p className="font-inter text-xs text-charcoal/60 leading-relaxed">{body}</p>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NeighbourhoodReportTool() {
  // Step 1 state
  const [neighbourhood, setNeighbourhood] = useState('')
  const [intent, setIntent] = useState<Intent | ''>('')
  const [priceRange, setPriceRange] = useState('')
  const [timeline, setTimeline] = useState('')

  // Step 2 state
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Flow state
  const [step, setStep] = useState<1 | 2>(1)
  const [neighbourhoodError, setNeighbourhoodError] = useState('')
  const [step2Errors, setStep2Errors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0)
  const [report, setReport] = useState<ReportData | null>(null)
  const [reportError, setReportError] = useState('')
  const [toolInteracted, setToolInteracted] = useState(false)
  const [longRunning, setLongRunning] = useState(false)
  const [callBooked, setCallBooked] = useState(false)
  const [bookingCall, setBookingCall] = useState(false)

  const reportRef = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const formTopRef = useRef<HTMLDivElement>(null)

  // Rotate loading messages
  useEffect(() => {
    if (!submitting) return
    const msgs = LOADING_MESSAGES(neighbourhood || 'your neighbourhood')
    const id = setInterval(() => {
      setLoadingMsgIdx((i) => (i + 1) % msgs.length)
    }, 2000)
    return () => clearInterval(id)
  }, [submitting, neighbourhood])

  // Long-running timeout
  useEffect(() => {
    if (!submitting) {
      setLongRunning(false)
      return
    }
    const id = setTimeout(() => setLongRunning(true), 15000)
    return () => clearTimeout(id)
  }, [submitting])

  async function handleBookCall() {
    setBookingCall(true)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '0289f3a5-95d1-4863-9ccf-ef3924d6c7c5',
          subject: `Call Request — ${firstName} — ${neighbourhood} Neighbourhood Report`,
          from_name: firstName || 'Neighbourhood Report User',
          email: email || 'not provided',
          phone: phone || 'not provided',
          neighbourhood,
          intent: intent || 'Not specified',
          priceRange: priceRange || 'Not specified',
          timeline: timeline || 'Not specified',
          source: 'neighbourhood-report CTA',
        }),
      })
    } catch {
      // Non-fatal — still show confirmation
    }
    setBookingCall(false)
    setCallBooked(true)
  }

  const scrollToRef = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }, [])

  function handleStep1Submit() {
    if (!neighbourhood.trim()) {
      setNeighbourhoodError('Please enter your neighbourhood')
      return
    }
    setNeighbourhoodError('')
    setToolInteracted(true)
    setStep(2)
    scrollToRef(step2Ref)
  }

  async function handleStep2Submit(e: React.FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!firstName.trim()) errs.firstName = 'First name is required'
    if (!email.trim()) errs.email = 'Email is required'
    if (!phone.trim()) errs.phone = 'Phone is required'
    if (Object.keys(errs).length > 0) {
      setStep2Errors(errs)
      return
    }
    setStep2Errors({})
    setSubmitting(true)
    setReportError('')
    setLoadingMsgIdx(0)

    // Log lead
    console.log(
      [
        'NEW NEIGHBOURHOOD REPORT LEAD',
        `Name: ${firstName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Neighbourhood: ${neighbourhood}`,
        `Buying/Selling: ${intent}`,
        `Price Range: ${priceRange}`,
        `Timeline: ${timeline}`,
        `Generated: ${new Date().toISOString()}`,
      ].join('\n')
    )

    // Submit lead to existing handler (non-blocking)
    const searchParams =
      typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null

    fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        email,
        phone,
        intent: intent || 'Just Curious',
        area: neighbourhood,
        priceRange,
        timeline,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        utmSource: searchParams?.get('utm_source') ?? undefined,
        utmMedium: searchParams?.get('utm_medium') ?? undefined,
        utmCampaign: searchParams?.get('utm_campaign') ?? undefined,
      }),
    }).catch((err) => console.error('Lead submission error (non-fatal):', err))

    // Generate report
    try {
      const res = await fetch('/api/neighbourhood-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ neighbourhood, buyingOrSelling: intent, priceRange, timeline }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        if (data?.error === 'key_missing') {
          setReportError(
            "Report service isn't configured yet — the ANTHROPIC_API_KEY environment variable needs to be set in Vercel. Please call Nathan directly at (403) 465-3937 in the meantime."
          )
        } else if (data?.error === 'parse_failed') {
          setReportError(
            "We had trouble generating your report. Please call Nathan directly at (403) 465-3937."
          )
        } else {
          setReportError(
            "We couldn't generate your report right now. Please call Nathan directly at (403) 465-3937 or try again in a moment."
          )
        }
        setSubmitting(false)
        return
      }

      const data = await res.json()
      setReport(data.report as ReportData)
      setSubmitting(false)
      scrollToRef(reportRef)

      if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
        ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push({
          event: 'neighbourhood_report_generated',
          neighbourhood,
          intent,
          priceRange,
          timeline,
        })
      }
    } catch {
      setReportError(
        "We couldn't generate your report right now. Please call Nathan directly at (403) 465-3937 or try again in a moment."
      )
      setSubmitting(false)
    }
  }

  const priceTrendUp = report?.price_trend_3_month?.startsWith('+')
  const priceTrendDown = report?.price_trend_3_month?.startsWith('-')
  const priceTrend = priceTrendUp ? 'up' : priceTrendDown ? 'down' : 'neutral'

  return (
    <div className="font-inter">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="bg-primary py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            What Are Homes Actually Selling For in Your Neighbourhood?
          </h1>
          <p className="font-inter text-white/80 text-base md:text-lg leading-relaxed mb-3">
            Enter your neighbourhood below and get a real market snapshot — average sale price,
            days on market, list-to-sale ratio, and current market conditions. Free. Instant. No
            obligation.
          </p>
          <p className="font-inter text-white/50 text-xs">
            Used by Calgary homeowners to understand their market before making any decisions.
          </p>
        </div>
      </section>

      {/* ── Tool wrapper ───────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-4 py-10" ref={formTopRef}>

        {/* ── Step 1 ───────────────────────────────────────────────────── */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-md border border-charcoal/10 p-8">
            <p className="font-inter text-xs font-semibold text-accent uppercase tracking-widest mb-1">
              Step 1 of 2
            </p>
            <h2 className="font-playfair font-bold text-xl text-primary mb-6">
              Tell us about your area
            </h2>

            <div className="flex flex-col gap-5">
              {/* Neighbourhood */}
              <div>
                <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                  Neighbourhood
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mahogany, Auburn Bay, McKenzie Towne"
                  className={`${inputBase} ${neighbourhoodError ? inputError : ''}`}
                  value={neighbourhood}
                  onChange={(e) => {
                    setNeighbourhood(e.target.value)
                    if (e.target.value.trim()) setNeighbourhoodError('')
                  }}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleStep1Submit() }}
                />
                {neighbourhoodError && (
                  <p className="font-inter text-xs text-red-500 mt-1">{neighbourhoodError}</p>
                )}
              </div>

              {/* Intent */}
              <div>
                <p className="font-inter text-sm font-medium text-charcoal mb-2">
                  Are you thinking about buying or selling?
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {INTENT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setIntent(opt)}
                      className={`py-3 px-3 rounded-lg border-[1.5px] text-sm font-inter font-medium transition-colors ${
                        intent === opt
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-charcoal border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                  Approximate home value (or target purchase price)
                </label>
                <select
                  className={inputBase}
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Select a range...</option>
                  {PRICE_RANGES.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="font-inter text-sm font-medium text-charcoal block mb-2">
                  How soon are you thinking of making a move?
                </label>
                <select
                  className={inputBase}
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                >
                  <option value="">Select a timeline...</option>
                  {TIMELINES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button type="button" onClick={handleStep1Submit} className={ctaBtn}>
                Generate My Neighbourhood Report →
              </button>
              <p className="font-inter text-xs text-charcoal/40 text-center">
                Free. No obligation. Takes under 30 seconds.
              </p>
            </div>
          </div>
        )}

        {/* ── Step 2 ───────────────────────────────────────────────────── */}
        {step === 2 && (
          <div ref={step2Ref} className="bg-white rounded-2xl shadow-md border border-charcoal/10 p-8">
            <p className="font-inter text-xs font-semibold text-accent uppercase tracking-widest mb-1">
              Step 2 of 2
            </p>
            <h2 className="font-playfair font-bold text-xl text-primary mb-1">
              Where should we send your report?
            </h2>
            <p className="font-inter text-sm text-charcoal/60 mb-6 leading-relaxed">
              Your report generates instantly below. We&apos;ll also email you a copy and Nathan may
              follow up with additional neighbourhood insights.
            </p>

            <form onSubmit={handleStep2Submit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className={`${inputBase} ${step2Errors.firstName ? inputError : ''}`}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                    setStep2Errors((p) => ({ ...p, firstName: '' }))
                  }}
                />
                {step2Errors.firstName && (
                  <p className="font-inter text-xs text-red-500 mt-1">{step2Errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`${inputBase} ${step2Errors.email ? inputError : ''}`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setStep2Errors((p) => ({ ...p, email: '' }))
                  }}
                />
                {step2Errors.email && (
                  <p className="font-inter text-xs text-red-500 mt-1">{step2Errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`${inputBase} ${step2Errors.phone ? inputError : ''}`}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setStep2Errors((p) => ({ ...p, phone: '' }))
                  }}
                />
                {step2Errors.phone && (
                  <p className="font-inter text-xs text-red-500 mt-1">{step2Errors.phone}</p>
                )}
              </div>

              {/* Loading / error state */}
              {submitting && (
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-7 h-7 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                  </div>
                  <p className="font-inter text-sm text-primary font-medium transition-all duration-500">
                    {longRunning
                      ? 'Still working on your report...'
                      : LOADING_MESSAGES(neighbourhood)[loadingMsgIdx]}
                  </p>
                </div>
              )}

              {reportError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="font-inter text-sm text-red-700">{reportError}</p>
                </div>
              )}

              {!submitting && (
                <button type="submit" className={ctaBtn}>
                  Get My Free Report →
                </button>
              )}

              <p className="font-inter text-xs text-charcoal/40 text-center">
                Free service. No obligation. We&apos;ll never share your info.
              </p>
            </form>
          </div>
        )}

        {/* ── Report output ─────────────────────────────────────────────── */}
        {report && (
          <div ref={reportRef} className="mt-10 flex flex-col gap-6">
            {/* Report header */}
            <div className="bg-white rounded-2xl shadow-md border border-charcoal/10 p-8">
              <p className="font-inter text-xs text-charcoal/40 uppercase tracking-widest mb-1">
                Market Report
              </p>
              <h2 className="font-playfair font-bold text-2xl text-primary mb-1">
                {report.neighbourhood} Market Report
              </h2>
              <p className="font-inter text-sm text-charcoal/50 mb-4">
                Generated {report.report_date} · Calgary, Alberta
              </p>
              <TemperatureBadge temp={report.market_temperature} />
              <p className="font-inter text-sm text-charcoal/70 mt-3 leading-relaxed">
                {report.market_temperature_description}
              </p>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatBox
                label="Avg. Sale Price"
                value={report.avg_sale_price}
                subtext={`Recent sales in ${report.neighbourhood}`}
              />
              <StatBox
                label="Days on Market"
                value={`${report.avg_days_on_market} days`}
                subtext="Average time to sell"
              />
              <StatBox
                label="List-to-Sale Ratio"
                value={report.list_to_sale_ratio}
                subtext="Over asking = seller's market"
              />
              <StatBox
                label="3-Month Price Trend"
                value={report.price_trend_3_month}
                subtext={`${report.active_listings_trend} inventory`}
                trend={priceTrend}
              />
            </div>

            {/* Neighbourhood overview */}
            <InsightPanel heading={`About ${report.neighbourhood}`}>
              <p>{report.neighbourhood_highlight}</p>
              <p>{report.market_temperature_description}</p>
              <p>{report.active_listings_description}</p>
              <p>{report.price_trend_description}</p>
            </InsightPanel>

            {/* Buyer / Seller insight */}
            {(intent === 'Selling' || intent === 'Just Curious') && (
              <InsightPanel heading="Seller Insight">
                <p>{report.seller_insight}</p>
              </InsightPanel>
            )}
            {(intent === 'Buying' || intent === 'Just Curious') && (
              <InsightPanel heading="Buyer Insight">
                <p>{report.buyer_insight}</p>
              </InsightPanel>
            )}

            {/* Timing */}
            <InsightPanel heading={`Your Timeline: ${timeline || 'General'}`}>
              <div className="flex items-start gap-2">
                <Calendar size={15} className="text-accent mt-0.5 shrink-0" />
                <p>{report.best_time_to_act}</p>
              </div>
            </InsightPanel>

            {/* CTA block */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                Want Nathan to Walk You Through This?
              </h3>
              <p className="font-inter text-white/80 text-sm mb-4 leading-relaxed">
                {report.cta_hook}
              </p>
              <p className="font-inter text-white/70 text-sm mb-6 leading-relaxed">
                Nathan Koenigsberg is a RE/MAX First agent who specializes in Calgary
                neighbourhoods. He&apos;ll review your report with you and give you his honest take
                — no pressure, no obligation.
              </p>
              {callBooked ? (
                <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center">
                  <p className="font-inter font-semibold text-white text-sm">
                    ✓ Request received — Nathan will be in touch shortly.
                  </p>
                  <p className="font-inter text-white/60 text-xs mt-1">
                    Or call him directly: (403) 465-3937
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleBookCall}
                    disabled={bookingCall}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light disabled:opacity-60 text-white font-inter font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
                  >
                    {bookingCall ? 'Sending...' : 'Book a Free 15-Minute Call with Nathan →'}
                  </button>
                  <a
                    href="tel:4034653937"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white/40 hover:border-white text-white font-inter font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
                  >
                    <Phone size={15} />
                    Call Nathan: (403) 465-3937
                  </a>
                </div>
              )}
              <p className="font-inter text-white/40 text-xs mt-4">
                RE/MAX First · Calgary, Alberta · No obligation
              </p>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <TrustItem
                icon={ShieldCheck}
                title="No Obligation"
                body="Your report is free. Nathan will only follow up if you want him to."
              />
              <TrustItem
                icon={Clock}
                title="Instant Report"
                body="Generated in seconds based on current Calgary market conditions."
              />
              <TrustItem
                icon={MapPin}
                title="Calgary Specialist"
                body="Focused exclusively on Calgary neighbourhoods — not a national platform."
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Sample neighbourhoods (hide after interaction) ─────────────── */}
      {!toolInteracted && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="text-center mb-6">
            <h2 className="font-playfair font-semibold text-xl text-primary mb-1">
              Popular Calgary Neighbourhoods
            </h2>
            <p className="font-inter text-sm text-charcoal/55">
              Click any neighbourhood to pre-fill the tool
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {NEIGHBOURHOODS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setNeighbourhood(n)
                  setNeighbourhoodError('')
                  formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-3 py-1.5 rounded-full border border-charcoal/15 bg-white hover:bg-accent hover:text-white hover:border-accent text-charcoal/70 font-inter text-xs transition-colors"
              >
                {n}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
