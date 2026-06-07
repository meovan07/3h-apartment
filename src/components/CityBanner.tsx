'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const ease = [0.22, 1, 0.36, 1] as const

export default function CityBanner() {
  const t = useTranslations('citybanner')

  return (
    <div
      className="relative z-10 -my-16"
      style={{ clipPath: 'polygon(0 64px, 100% 0, 100% calc(100% - 64px), 0 100%)' }}
    >
      <section className="relative overflow-hidden py-[148px] md:py-[168px]">
        <Image
          src="https://images.unsplash.com/photo-1692470909656-260021e020d5?auto=format&fit=crop&w=1800&q=85"
          alt="Đà Nẵng city aerial view"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/65" />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[3px] text-cream/60"
          >
            <span className="inline-block h-px w-8 bg-cream/30" />
            {t('eyebrow')}
            <span className="inline-block h-px w-8 bg-cream/30" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="mb-5 font-serif text-[44px] font-normal leading-tight text-cream md:text-[58px] lg:text-[68px]"
          >
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mx-auto mb-9 max-w-md text-[13px] leading-relaxed text-cream/65"
          >
            {t('body')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease, delay: 0.22 }}
          >
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 text-[11px] font-semibold tracking-wide bg-gold text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
            >
              {t('cta')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
