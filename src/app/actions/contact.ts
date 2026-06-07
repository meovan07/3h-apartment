'use server'

export interface ContactFormData {
  name: string
  phone: string
  checkIn: string
  checkOut: string
  floor: string
  message: string
}

export interface ContactResult {
  ok: boolean
  error?: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  if (!data.name || !data.phone || !data.checkIn || !data.checkOut) {
    return { ok: false, error: 'Missing required fields' }
  }

  const emailBody = `
New booking enquiry from 3H Apartment website

Name:       ${data.name}
Phone/Zalo: ${data.phone}
Check-in:   ${data.checkIn}
Check-out:  ${data.checkOut}
Floor pref: ${data.floor || 'No preference'}

Message:
${data.message || '(none)'}
  `.trim()

  const resendKey = process.env.RESEND_API_KEY

  try {
    if (resendKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'booking@3hapartment.vn',
        to: process.env.OWNER_EMAIL ?? 'hung.do181199@gmail.com',
        subject: `[3H Apartment] Booking enquiry from ${data.name}`,
        text: emailBody,
      })
    } else {
      console.log('=== CONTACT FORM SUBMISSION (dev) ===')
      console.log(emailBody)
    }
    return { ok: true }
  } catch (err) {
    console.error('Contact form error:', err)
    return { ok: false, error: 'Failed to send message' }
  }
}
