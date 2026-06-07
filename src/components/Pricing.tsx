'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingTiers } from '@/lib/data'
import { formatVND } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export default function Pricing() {
  const t = useTranslations('pricing')

  const tierTranslations = {
    1: { label: t('tier1_label'), floor: t('tier1_floor'), units: t('tier1_units'), features: t.raw('tier1_features') as string[] },
    2: { label: t('tier2_label'), floor: t('tier2_floor'), units: t('tier2_units'), features: t.raw('tier2_features') as string[] },
    3: { label: t('tier3_label'), floor: t('tier3_floor'), units: t('tier3_units'), features: t.raw('tier3_features') as string[] },
  }

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
          <span className="inline-flex items-center justify-center gap-2.5 text-[10px] tracking-[2px] uppercase text-gold font-semibold">
            <span className="w-5 h-px bg-gold inline-block" />
            {t('eyebrow')}
          </span>
          <h2 className="font-serif text-[40px] md:text-[48px] font-normal text-ink mt-3 leading-tight">
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-[0_2px_24px_rgba(12,31,53,0.08)] border border-ink/10">
          {pricingTiers.map((tier, i) => {
            const { label, floor, units, features } = tierTranslations[tier.id as 1 | 2 | 3]

            return (
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
                  <span className="self-start mb-4 bg-gold text-cream text-[9px] font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                    {t('popular')}
                  </span>
                )}

                <div className="mb-6">
                  <span className="text-[10px] tracking-[2px] uppercase font-semibold text-gold">
                    {label}
                  </span>
                  <p className={`text-[12px] mt-1.5 ${tier.hot ? 'text-cream/60' : 'text-muted'}`}>
                    {floor} · {units}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className={`font-serif text-[44px] font-normal leading-none ${
                      tier.hot ? 'text-cream' : 'text-ink'
                    }`}
                  >
                    {formatVND(tier.priceVND)}
                  </span>
                  <span className={`text-[12px] ml-2 ${tier.hot ? 'text-cream/60' : 'text-muted'}`}>
                    {t('per_night')}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {features.map((f: string) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span
                        className={`text-[12px] leading-relaxed ${
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
                  className={`rounded-lg text-[11px] font-semibold tracking-wide px-6 py-3.5 transition-colors duration-300 ${
                    tier.hot
                      ? 'bg-gold text-cream hover:bg-cream hover:text-ink'
                      : 'border border-ink text-ink hover:bg-ink hover:text-cream'
                  }`}
                >
                  {t('cta')}
                </button>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-[11px] text-muted mt-6">{t('note')}</p>
      </div>
    </section>
  )
}
