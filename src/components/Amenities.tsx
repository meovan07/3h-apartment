'use client'

import { motion } from 'framer-motion'
import {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed,
  WashingMachine, Tv, Sun, LucideIcon,
} from 'lucide-react'
import { amenityIcons } from '@/lib/data'
import { useTranslations } from 'next-intl'

const iconMap: Record<string, LucideIcon> = {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed, WashingMachine, Tv, Sun,
}

export default function Amenities() {
  const t = useTranslations('amenities')
  const items = t.raw('items') as Array<{ name: string; desc: string }>

  return (
    <section id="amenities" className="bg-ink text-cream py-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[2px] uppercase text-gold font-semibold">
              <span className="w-5 h-px bg-gold inline-block" />
              {t('eyebrow')}
            </span>
            <h2 className="font-serif text-[40px] md:text-[48px] font-light text-cream leading-tight">
              {t('title')}{' '}
              <em className="italic text-gold">{t('titleAccent')}</em>
            </h2>
            <p className="text-[13px] text-cream/60 leading-relaxed max-w-sm">{t('body')}</p>
            <div className="pt-2">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-[11px] font-semibold tracking-wide border border-cream/30 text-cream px-7 py-3.5 hover:bg-cream hover:text-ink transition-colors duration-300"
              >
                {t('cta')}
              </button>
            </div>
          </motion.div>

          {/* Right — 2×4 grid from translations */}
          <div className="grid grid-cols-2 border border-cream/10">
            {items.map((item, i) => {
              const Icon = iconMap[amenityIcons[i]] ?? Wifi
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: (i % 4) * 0.07,
                  }}
                  className={`p-5 flex flex-col gap-2 border-cream/10 ${
                    i % 2 === 0 ? 'border-r' : ''
                  } ${i < 6 ? 'border-b' : ''}`}
                >
                  <Icon size={16} className="text-gold" strokeWidth={1.5} />
                  <p className="text-[12px] font-medium text-cream tracking-wide">{item.name}</p>
                  <p className="text-[11px] text-cream/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
