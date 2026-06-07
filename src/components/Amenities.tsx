'use client'

import { motion } from 'framer-motion'
import {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed,
  WashingMachine, Sun, PlaneLanding, PawPrint, LucideIcon, ArrowRight,
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
    <section id="amenities" className="py-20 border-t border-ink/8">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr]">

          {/* Left — heading + body + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-gold">
              <span className="inline-block h-px w-5 bg-gold" />
              {t('eyebrow')}
            </span>
            <h2 className="mt-3 font-serif text-[36px] md:text-[44px] font-bold leading-tight text-ink">
              {t('title')}{' '}
              <em className="italic text-gold">{t('titleAccent')}</em>
            </h2>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">{t('body')}</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-2 text-gold text-[13px] font-semibold group hover:gap-3 transition-all duration-200"
            >
              {t('cta')}
              <ArrowRight size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Right — amenity list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {items.map((item, i) => {
              const Icon = iconMap[amenityIcons[i]] ?? Wifi
              const isLastRow = i >= items.length - (items.length % 2 === 0 ? 2 : 1)
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, ease, delay: (i % 2) * 0.06 }}
                  className={`flex items-start gap-4 py-5 px-1 ${
                    !isLastRow ? 'border-b border-ink/8' : ''
                  } ${i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:border-l sm:border-ink/8'}`}
                >
                  <div className="shrink-0 mt-0.5">
                    <Icon size={18} className="text-gold" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-ink leading-snug">{item.name}</p>
                    <p className="text-[12px] text-muted mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
