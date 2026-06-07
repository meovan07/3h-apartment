import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, checkIn, checkOut, floor, message } = body

    if (!name || !phone || !checkIn || !checkOut) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY

    const emailBody = `
New booking enquiry from 3H Apartment website

Name:       ${name}
Phone/Zalo: ${phone}
Check-in:   ${checkIn}
Check-out:  ${checkOut}
Floor pref: ${floor || 'No preference'}

Message:
${message || '(none)'}
    `.trim()

    if (resendKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: 'booking@3hapartment.vn',
        to: process.env.OWNER_EMAIL ?? 'owner@3hapartment.vn',
        subject: `[3H Apartment] Booking enquiry from ${name}`,
        text: emailBody,
      })
    } else {
      // Dev fallback: log to console
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log(emailBody)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
