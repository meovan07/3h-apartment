'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Stats() {
  const t = useTranslations('stats')

  const stats = [
    { value: t('units_value'),  label: t('units_label') },
    { value: t('size_value'),   label: t('size_label') },
    { value: t('dist_value'),   label: t('dist_label') },
    { value: t('rating_value'), label: t('rating_label') },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Ocean aerial background */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
        alt="Aerial ocean view"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Teal gradient overlay — lets the palette colors breathe through */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(5,63,67,0.82) 0%, rgba(2,171,130,0.65) 100%)',
        }}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
            className={`px-8 md:px-12 py-12 flex flex-col items-center md:items-start border-cream/15 ${
              i % 2 === 0 && i < stats.length - 1 ? 'border-r' : ''
            } ${i < stats.length - 1 ? 'md:border-r' : ''} ${
              i >= 2 ? 'border-t md:border-t-0' : ''
            }`}
          >
            <span className="font-serif text-[42px] md:text-[52px] font-bold text-cream leading-none tabular-nums">
              {s.value}
            </span>
            <span className="text-[10px] tracking-[2px] uppercase text-cream/60 mt-2.5 font-medium">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
