import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { neighbourhood, buyingOrSelling, priceRange, timeline } = body

    if (!neighbourhood?.trim()) {
      return NextResponse.json({ error: 'Neighbourhood is required' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not set — add it to your Vercel environment variables or .env.local')
      return NextResponse.json({ error: 'key_missing' }, { status: 503 })
    }

    const now = new Date()
    const reportDate = now.toLocaleString('en-CA', { month: 'long', year: 'numeric', timeZone: 'America/Edmonton' })

    const prompt = `You are a Calgary real estate market analyst. Generate a realistic and helpful neighbourhood market report for a Calgary homeowner or buyer. Use plausible Calgary market data based on your knowledge of the Calgary real estate market as of 2025-2026. Be specific and useful — not generic.

Today's date: ${reportDate}

User inputs:
- Neighbourhood: ${neighbourhood}
- Buying or selling: ${buyingOrSelling}
- Price range: ${priceRange}
- Timeline: ${timeline}

Generate a JSON response only. No preamble, no markdown, no backticks. Return exactly this structure:

{
  "neighbourhood": "string — confirmed neighbourhood name",
  "report_date": "string — use exactly: ${reportDate}",
  "market_temperature": "string — one of: Hot / Balanced / Cooling",
  "market_temperature_description": "string — 1 sentence explaining current conditions in this neighbourhood",
  "avg_sale_price": "string — realistic average sale price formatted as $XXX,XXX",
  "avg_days_on_market": "number — realistic days on market for this neighbourhood",
  "list_to_sale_ratio": "string — formatted as XX.X% — realistic ratio, typically 97-103% depending on market",
  "active_listings_trend": "string — one of: Rising / Stable / Declining",
  "active_listings_description": "string — 1 sentence on inventory levels",
  "price_trend_3_month": "string — e.g. +2.3% or -1.1% — realistic 3-month price movement",
  "price_trend_description": "string — 1 sentence explaining the price trend",
  "seller_insight": "string — 2-3 sentences of honest, specific advice for someone thinking of selling in this neighbourhood right now",
  "buyer_insight": "string — 2-3 sentences of honest, specific advice for someone thinking of buying in this neighbourhood right now",
  "neighbourhood_highlight": "string — 1 sentence on what makes this neighbourhood distinctive from a real estate perspective",
  "best_time_to_act": "string — specific advice on timing given their stated timeline",
  "cta_hook": "string — a single compelling sentence that creates a natural reason to speak with a local expert, without being salesy. Reference the specific neighbourhood."
}`

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
      signal: AbortSignal.timeout(20000),
    })

    if (!anthropicRes.ok) {
      console.error('Anthropic API error:', anthropicRes.status)
      return NextResponse.json({ error: 'Report generation failed' }, { status: 502 })
    }

    const anthropicData = await anthropicRes.json()
    const rawText: string = anthropicData?.content?.[0]?.text ?? ''

    // Parse JSON — strip backticks if present
    let reportData: Record<string, unknown>
    try {
      reportData = JSON.parse(rawText)
    } catch {
      const cleaned = rawText.replace(/^```(?:json)?\n?/i, '').replace(/\n?```$/i, '').trim()
      try {
        reportData = JSON.parse(cleaned)
      } catch {
        return NextResponse.json({ error: 'parse_failed' }, { status: 422 })
      }
    }

    return NextResponse.json({ report: reportData }, { status: 200 })
  } catch (err) {
    console.error('Neighbourhood report error:', err)
    return NextResponse.json({ error: 'Report generation failed' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
