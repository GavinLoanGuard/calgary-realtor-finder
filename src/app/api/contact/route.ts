import { NextRequest, NextResponse } from 'next/server'

const WEB3FORMS_ACCESS_KEY = '0289f3a5-95d1-4863-9ccf-ef3924d6c7c5'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      intent,
      neighbourhood,
      timeline,
      priceRange,
    } = body

    // Validation
    if (!firstName || !lastName || !email || !neighbourhood) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Realtor Match — ${firstName} ${lastName} · ${neighbourhood} · ${intent || 'Buyer/Seller'}`,
        from_name: `${firstName} ${lastName}`,
        email,
        phone: phone || 'Not provided',
        intent: intent || 'Not specified',
        neighbourhood,
        timeline: timeline || 'Not specified',
        priceRange: priceRange || 'Not specified',
      }),
    })

    const data = await res.json()

    if (!data.success) {
      return NextResponse.json(
        { error: 'Failed to send. Please try again or call us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Match request received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to send. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

// Reject non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
