'use client'

import { motion } from 'framer-motion'
import {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed,
  WashingMachine, Sun, PlaneLanding, PawPrint, LucideIcon,
} from 'lucide-react'
import { amenityIcons } from '@/lib/data'
import { useTranslations } from 'next-intl'

const iconMap: Record<string, LucideIcon> = {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed, WashingMachine, Sun, PlaneLanding, PawPrint,
}

const ease = [0.22, 1, 0.36, 1] as const

export default function Amenities() {
  const t = useTranslations('amenities')
  const items = t.raw('items') as Array<{ name: string; desc: string }>

  return (
    <section id="amenities" className="bg-surface py-24">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-gold">
            <span className="inline-block h-px w-5 bg-gold" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-3 font-serif text-[40px] font-normal leading-tight text-ink md:text-[48px]">
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
          <p className="mt-4 max-w-md text-[13px] leading-relaxed text-muted">{t('body')}</p>
        </motion.div>

        {/* 3-column amenity grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = iconMap[amenityIcons[i]] ?? Wifi
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease, delay: (i % 3) * 0.08 }}
                className="flex items-start gap-4 bg-cream rounded-2xl p-5 shadow-[0_1px_4px_rgba(15,23,42,0.06)]"
              >
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                  <Icon size={20} className="text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-serif text-[15px] font-semibold text-ink mb-1 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-muted">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="mt-14 border-t border-ink/10 pt-10"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold px-8 py-3.5 rounded-lg text-[11px] font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-ink"
          >
            {t('cta')}
          </button>
        </motion.div>

      </div>
    </section>
  )
}
