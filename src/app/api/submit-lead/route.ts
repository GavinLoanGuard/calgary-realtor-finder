import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { resolveAgent } from '@/config/agentRouting'

// Lazy — instantiated inside the handler so the build doesn't evaluate it without env vars
function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

interface LeadPayload {
  firstName: string
  lastName?: string
  email: string
  phone: string
  intent?: string
  area: string
  priceRange?: string
  timeline?: string
  propertyType?: string
  sourceUrl?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

// Stores lead in Vercel KV (Upstash Redis REST) if KV_REST_API_URL + KV_REST_API_TOKEN are set.
// Non-blocking: if storage fails, emails still delivered.
async function storeLead(key: string, data: Record<string, unknown>): Promise<void> {
  const kvUrl = process.env.KV_REST_API_URL
  const kvToken = process.env.KV_REST_API_TOKEN
  if (!kvUrl || !kvToken) return

  await fetch(`${kvUrl}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${kvToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['SET', key, JSON.stringify(data)],
      ['LPUSH', 'leads_index', key],
    ]),
  })
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 12px;background:#f8f9fa;font-weight:600;width:160px;font-family:Arial,sans-serif;font-size:13px;color:#555;border-bottom:1px solid #eee;white-space:nowrap">${label}</td>
    <td style="padding:8px 12px;font-family:Arial,sans-serif;font-size:13px;color:#222;border-bottom:1px solid #eee">${value || '—'}</td>
  </tr>`
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadPayload

    const { firstName, lastName = '', email, phone, intent = '', area } = body

    if (!firstName?.trim() || !email?.trim() || !phone?.trim() || !area?.trim()) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const assignment = resolveAgent(area)
    const agentName = assignment?.agent ?? 'Calgary Realtor Finder'
    const agentEmail = assignment?.email ?? ''
    const agentFirstName = agentName.split(' ')[0]

    const fromAddress = process.env.EMAIL_FROM ?? 'Calgary Realtor Finder <hello@calgaryrealtorfinder.ca>'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://calgaryrealtorfinder.ca'
    const timestamp = new Date().toISOString()
    const leadKey = `lead:${timestamp}:${crypto.randomUUID()}`

    const subject = `New Lead – ${firstName} ${lastName} – ${area} – ${intent || 'Buyer/Seller'}`

    const leadRecord = {
      firstName,
      lastName,
      email,
      phone,
      intent,
      area,
      priceRange: body.priceRange ?? '',
      timeline: body.timeline ?? '',
      propertyType: body.propertyType ?? '',
      sourceUrl: body.sourceUrl ?? '',
      utmSource: body.utmSource ?? null,
      utmMedium: body.utmMedium ?? null,
      utmCampaign: body.utmCampaign ?? null,
      assigned_agent: agentName,
      status: 'new',
      routing_version: 'v1',
      timestamp,
    }

    const agentHtml = `
<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #e5e5e5">
  <div style="background:#1B2B4B;padding:20px 24px">
    <p style="margin:0;color:#C9963E;font-size:11px;letter-spacing:2px;text-transform:uppercase">Calgary Realtor Finder — New Lead</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-family:Georgia,serif">${firstName} ${lastName}</h1>
  </div>
  <table style="border-collapse:collapse;width:100%">
    ${row('Name', `${firstName} ${lastName}`)}
    ${row('Email', `<a href="mailto:${email}" style="color:#1B2B4B">${email}</a>`)}
    ${row('Phone', phone)}
    ${row('Intent', intent)}
    ${row('Area', area)}
    ${row('Price Range', body.priceRange ?? '')}
    ${row('Timeline', body.timeline ?? '')}
    ${row('Property Type', body.propertyType ?? '')}
    ${row('Assigned Agent', agentName)}
    ${row('Timestamp', new Date(timestamp).toLocaleString('en-CA', { timeZone: 'America/Edmonton' }) + ' MT')}
    ${row('Source URL', body.sourceUrl ?? '')}
    ${row('UTM Source', body.utmSource ?? '')}
    ${row('UTM Medium', body.utmMedium ?? '')}
    ${row('UTM Campaign', body.utmCampaign ?? '')}
  </table>
  <div style="padding:12px 24px;background:#f8f9fa;border-top:2px solid #C9963E">
    <p style="margin:0;font-size:11px;color:#999;font-family:Arial,sans-serif">Routing: v1 · Key: ${leadKey}</p>
  </div>
</div>`

    const confirmHtml = `
<div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;color:#2D2D2D">
  <div style="background:#1B2B4B;padding:24px">
    <p style="margin:0;color:#C9963E;font-size:11px;letter-spacing:2px;font-family:Arial,sans-serif;text-transform:uppercase">Calgary Realtor Finder</p>
  </div>
  <div style="padding:32px 24px">
    <h2 style="margin:0 0 16px;color:#1B2B4B;font-size:24px">Hi ${firstName},</h2>
    <p style="font-size:16px;line-height:1.7;margin:0 0 16px">
      Great news — <strong>${agentFirstName}</strong> will be in touch with you shortly.
      Keep your phone nearby; most follow-ups happen within a couple of hours.
    </p>
    <p style="font-size:15px;line-height:1.7;color:#666;margin:0 0 32px">
      If you have any immediate questions, just reply to this email.
    </p>
    <a href="${siteUrl}/tools/mortgage-affordability"
       style="display:inline-block;background:#C9963E;color:#fff;text-decoration:none;padding:12px 24px;font-family:Arial,sans-serif;font-size:14px;font-weight:600">
      Check Your Affordability →
    </a>
  </div>
  <div style="padding:16px 24px;background:#f8f9fa;border-top:1px solid #eee">
    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#999">
      — The Calgary Realtor Finder Team ·
      <a href="${siteUrl}" style="color:#C9963E">${siteUrl.replace('https://', '')}</a>
    </p>
  </div>
</div>`

    // Agent notification — to: agent, cc: Gavin on every lead
    const toList = agentEmail ? [agentEmail] : []
    const ccList = process.env.GAVIN_EMAIL ? [process.env.GAVIN_EMAIL] : []
    const primaryTo = toList.length > 0 ? toList : ccList

    const resend = getResend()

    if (primaryTo.length > 0) {
      await resend.emails.send({
        from: fromAddress,
        to: primaryTo,
        ...(toList.length > 0 && ccList.length > 0 && { cc: ccList }),
        subject,
        html: agentHtml,
      })
    }

    // Lead confirmation
    await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: `You're matched, ${firstName} — here's what happens next`,
      html: confirmHtml,
    })

    // Non-blocking KV storage — emails are the reliable backup
    storeLead(leadKey, leadRecord).catch((err) =>
      console.error('Lead KV storage failed (non-fatal):', err)
    )

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Submission failed. Please call us directly at (403) 465-3937.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
