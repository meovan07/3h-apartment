'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const ease = [0.22, 1, 0.36, 1] as const

type Review = { quote: string; author: string; country: string; date: string }

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const reviews = t.raw('reviews') as Review[]

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center justify-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-gold">
            <span className="inline-block h-px w-5 bg-gold" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-3 font-serif text-[40px] font-normal leading-tight text-ink md:text-[48px]">
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="flex flex-col gap-5 bg-cream p-8 shadow-[0_2px_16px_rgba(28,25,23,0.06)]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 font-serif text-[15px] font-normal italic leading-relaxed text-ink/80">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-ink/10 pt-4">
                <p className="text-[12px] font-semibold text-ink">{review.author}</p>
                <p className="mt-0.5 text-[11px] text-muted">{review.country} · {review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
