'use client'

import { useState, useEffect } from 'react'
import { Calendar, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

function dateStr(daysFromNow: number): string {
  const d = new Date()
  d.setDate(d.getDate() + daysFromNow)
  return d.toISOString().split('T')[0]
}

export default function BookingBar() {
  const t = useTranslations('booking')

  const [checkin, setCheckin]   = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests]     = useState(2)

  useEffect(() => {
    setCheckin(dateStr(1))
    setCheckout(dateStr(3))
  }, [])

  const handleCheckin = (val: string) => {
    setCheckin(val)
    const minOut = new Date(val)
    minOut.setDate(minOut.getDate() + 1)
    const minOutStr = minOut.toISOString().split('T')[0]
    if (checkout <= minOutStr) setCheckout(minOutStr)
  }

  const checkoutMin = (() => {
    if (!checkin) return dateStr(2)
    const d = new Date(checkin)
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  })()

  return (
    <div className="bg-ink border-b border-cream/5">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
        <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-0">

          {/* Check-in */}
          <div className="flex-1 md:border-r md:border-cream/10 md:pr-8">
            <label className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[2px] text-cream/45">
              <Calendar size={9} strokeWidth={2} />
              {t('checkin')}
            </label>
            <input
              type="date"
              value={checkin}
              min={dateStr(1)}
              onChange={e => handleCheckin(e.target.value)}
              className="w-full bg-transparent text-[13px] font-medium text-cream outline-none [color-scheme:dark]"
            />
          </div>

          {/* Check-out */}
          <div className="flex-1 md:border-r md:border-cream/10 md:px-8">
            <label className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[2px] text-cream/45">
              <Calendar size={9} strokeWidth={2} />
              {t('checkout')}
            </label>
            <input
              type="date"
              value={checkout}
              min={checkoutMin}
              onChange={e => setCheckout(e.target.value)}
              className="w-full bg-transparent text-[13px] font-medium text-cream outline-none [color-scheme:dark]"
            />
          </div>

          {/* Guests */}
          <div className="flex-1 md:border-r md:border-cream/10 md:px-8">
            <label className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[2px] text-cream/45">
              <Users size={9} strokeWidth={2} />
              {t('guests')}
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGuests(g => Math.max(1, g - 1))}
                className="flex h-7 w-7 items-center justify-center border border-cream/20 text-cream transition-colors hover:bg-cream/10"
              >
                <span className="text-sm leading-none">−</span>
              </button>
              <span className="min-w-[20px] text-center text-[13px] font-medium text-cream">
                {guests}
              </span>
              <button
                onClick={() => setGuests(g => Math.min(4, g + 1))}
                className="flex h-7 w-7 items-center justify-center border border-cream/20 text-cream transition-colors hover:bg-cream/10"
              >
                <span className="text-sm leading-none">+</span>
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="md:pl-8">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-gold px-8 py-3.5 text-[11px] font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-cream hover:text-ink md:w-auto"
            >
              {t('cta')}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
