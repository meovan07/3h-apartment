'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function SearchBar() {
  const t = useTranslations('search')
  const [floor, setFloor] = useState(t('floor_none'))

  const floorOptions = [
    t('floor_none'),
    t('floor_1'),
    t('floor_2'),
    t('floor_3'),
  ]

  const fields = [
    { id: 'checkin',  label: t('checkin'),  placeholder: '2025-01-01', type: 'date' },
    { id: 'checkout', label: t('checkout'), placeholder: '2025-01-07', type: 'date' },
    { id: 'guests',   label: t('guests'),   placeholder: '2',          type: 'number' },
  ]

  return (
    <section className="bg-surface border-b border-ink/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-5">
        <div className="border border-ink/10 flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {fields.map((f) => (
            <div key={f.id} className="flex-1 px-5 py-4">
              <label
                htmlFor={f.id}
                className="block text-[10px] tracking-[2px] uppercase text-gold font-semibold mb-1.5"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                placeholder={f.placeholder}
                min={f.id === 'guests' ? 1 : undefined}
                max={f.id === 'guests' ? 4 : undefined}
                className="w-full text-[13px] text-ink bg-transparent outline-none placeholder:text-muted/60"
              />
            </div>
          ))}

          <div className="flex-1 px-5 py-4">
            <label className="block text-[10px] tracking-[2px] uppercase text-gold font-semibold mb-1.5">
              {t('floor')}
            </label>
            <select
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full text-[13px] text-ink bg-transparent outline-none cursor-pointer"
            >
              {floorOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center px-3 py-3">
            <button
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-gold text-cream text-[11px] font-semibold tracking-wide px-9 py-4 hover:bg-ink transition-colors duration-300 whitespace-nowrap w-full md:w-auto justify-center"
            >
              <Search size={13} />
              {t('button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
