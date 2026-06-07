'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Stats() {
  const t = useTranslations('stats')

  const stats = [
    { value: t('units_value'), label: t('units_label') },
    { value: t('size_value'),  label: t('size_label') },
    { value: t('dist_value'),  label: t('dist_label') },
    { value: t('rating_value'), label: t('rating_label') },
  ]

  return (
    <section className="border-b border-ink/10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className={`px-8 md:px-12 py-12 flex flex-col items-center md:items-start border-ink/10 ${
              i % 2 === 0 && i < stats.length - 1 ? 'border-r' : ''
            } ${i < stats.length - 1 ? 'md:border-r' : ''} ${
              i >= 2 ? 'border-t md:border-t-0' : ''
            }`}
          >
            <span className="font-serif text-4xl font-normal text-ink">{s.value}</span>
            <span className="text-[9px] tracking-widest uppercase text-muted mt-2">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
