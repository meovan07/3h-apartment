'use client'

import { useState, useTransition } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { submitContactForm } from '@/app/actions/contact'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const t = useTranslations('form')
  const [status, setStatus] = useState<Status>('idle')
  const [isPending, startTransition] = useTransition()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    floor: '',
    message: '',
  })

  const floorOptions = [t('floor_none'), t('floor_1'), t('floor_2'), t('floor_3')]

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    startTransition(async () => {
      const result = await submitContactForm(form)
      if (result.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', checkIn: '', checkOut: '', floor: '', message: '' })
      } else {
        setStatus('error')
      }
    })
  }

  const inputClass =
    'w-full bg-transparent border-b border-ink/20 py-2.5 text-[12px] text-ink placeholder:text-muted/50 outline-none focus:border-gold transition-colors duration-200'
  const labelClass = 'block text-[8px] tracking-[3px] uppercase text-gold mb-1.5'
  const isLoading = status === 'loading' || isPending

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            {t('name')} {t('required')}
          </label>
          <input
            required
            value={form.name}
            onChange={set('name')}
            placeholder={t('name_placeholder')}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            {t('phone')} {t('required')}
          </label>
          <input
            required
            value={form.phone}
            onChange={set('phone')}
            placeholder={t('phone_placeholder')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            {t('checkin')} {t('required')}
          </label>
          <input
            required
            type="date"
            value={form.checkIn}
            onChange={set('checkIn')}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            {t('checkout')} {t('required')}
          </label>
          <input
            required
            type="date"
            value={form.checkOut}
            onChange={set('checkOut')}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t('floor')}</label>
        <select value={form.floor} onChange={set('floor')} className={inputClass}>
          {floorOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>{t('message')}</label>
        <textarea
          value={form.message}
          onChange={set('message')}
          placeholder={t('message_placeholder')}
          rows={4}
          className="w-full bg-transparent border-b border-ink/20 py-2.5 text-[12px] text-ink placeholder:text-muted/50 outline-none focus:border-gold transition-colors duration-200 resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-[11px] text-green-700 bg-green-50 border border-green-200 px-4 py-3">
          <CheckCircle size={14} />
          {t('success')}
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-[11px] text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          <AlertCircle size={14} />
          {t('error')}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 bg-ink text-cream text-[9px] tracking-[3px] uppercase px-6 py-4 hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          t('submitting')
        ) : (
          <>
            {t('submit')}
            <Send size={12} />
          </>
        )}
      </button>
    </form>
  )
}
