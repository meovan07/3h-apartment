'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingTiers } from '@/lib/data'
import { formatVND } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export default function Pricing() {
  const t = useTranslations('pricing')

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="text-[9px] tracking-[3px] uppercase text-gold font-medium">
            {t('eyebrow')}
          </span>
          <h2 className="font-serif text-[40px] font-light text-ink mt-2 leading-tight">
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-ink/10">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className={`relative flex flex-col p-8 md:p-10 ${
                i < pricingTiers.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-ink/10'
                  : ''
              } ${tier.hot ? 'bg-ink text-cream' : 'bg-cream text-ink'}`}
            >
              {tier.hot && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-cream text-[8px] tracking-[2px] uppercase px-4 py-1 whitespace-nowrap">
                  {t('popular')}
                </span>
              )}

              <div className="mb-6">
                <span className="text-[8px] tracking-[3px] uppercase font-medium text-gold">
                  {tier.label}
                </span>
                <p className={`text-[11px] mt-1 ${tier.hot ? 'text-cream/60' : 'text-muted'}`}>
                  {tier.floor} · {tier.units}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`font-serif text-[44px] font-light leading-none ${
                    tier.hot ? 'text-cream' : 'text-ink'
                  }`}
                >
                  {formatVND(tier.priceVND)}
                </span>
                <span className={`text-[11px] ml-2 ${tier.hot ? 'text-cream/60' : 'text-muted'}`}>
                  {t('per_night')}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span
                      className={`text-[11px] leading-relaxed ${
                        tier.hot ? 'text-cream/80' : 'text-muted'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`text-[9px] tracking-[3px] uppercase px-6 py-3.5 transition-colors duration-300 ${
                  tier.hot
                    ? 'bg-gold text-cream hover:bg-gold-lt hover:text-ink'
                    : 'border border-ink text-ink hover:bg-ink hover:text-cream'
                }`}
              >
                {t('cta')}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[10px] text-muted mt-6 tracking-wide">{t('note')}</p>
      </div>
    </section>
  )
}
