'use client'

import { motion } from 'framer-motion'
import {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed,
  WashingMachine, Tv, Sun, LucideIcon,
} from 'lucide-react'
import { amenities } from '@/lib/data'
import { useTranslations } from 'next-intl'

const iconMap: Record<string, LucideIcon> = {
  Wifi, Wind, ArrowUpDown, Car, UtensilsCrossed, WashingMachine, Tv, Sun,
}

export default function Amenities() {
  const t = useTranslations('amenities')

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
            <span className="text-[9px] tracking-[3px] uppercase text-gold font-medium">
              {t('eyebrow')}
            </span>
            <h2 className="font-serif text-[40px] font-light text-cream leading-tight">
              {t('title')}{' '}
              <em className="italic text-gold">{t('titleAccent')}</em>
            </h2>
            <p className="text-sm text-cream/60 leading-relaxed max-w-sm">{t('body')}</p>
            <div className="pt-4">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-[9px] tracking-[3px] uppercase border border-cream/30 text-cream px-6 py-3 hover:bg-cream hover:text-ink transition-colors duration-300"
              >
                {t('cta')}
              </button>
            </div>
          </motion.div>

          {/* Right — 2×4 grid */}
          <div className="grid grid-cols-2 border border-cream/10">
            {amenities.map((a, i) => {
              const Icon = iconMap[a.icon] ?? Wifi
              return (
                <motion.div
                  key={a.name}
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
                  <p className="text-[11px] font-medium text-cream tracking-wide">{a.name}</p>
                  <p className="text-[10px] text-cream/50 leading-relaxed">{a.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
