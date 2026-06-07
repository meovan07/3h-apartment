'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, ExternalLink, Navigation } from 'lucide-react'
import { distances } from '@/lib/data'
import { useTranslations } from 'next-intl'
import ContactForm from './ContactForm'

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7!2d108.1789!3d16.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142185e5a3b7a0d%3A0x0!2zSzYzLzEgQ2jhur8gTGFuIFZpw6puLCBIb8OgIEtow6os!5e0!3m2!1svi!2svn!4v1700000000000'

const distanceTranslationKeys = [
  'beach',
  'restaurants',
  'dragon',
  'marble',
  'airport',
  'hoian',
] as const

export default function Location() {
  const t = useTranslations('location')
  const tDist = useTranslations('distances')

  return (
    <section id="location" className="border-t border-ink/10 py-20">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[2px] uppercase text-gold font-semibold">
            <span className="w-5 h-px bg-gold inline-block" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-3 font-serif text-[40px] md:text-[48px] font-light leading-tight text-ink">
            {t('title')} <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Left — address + distances + map */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-muted">
                {t('address')}
              </p>
            </div>

            {/* Distance list */}
            <div className="flex flex-col">
              {distances.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                  className={`flex items-center justify-between py-3.5 ${
                    i < distances.length - 1 ? 'border-b border-ink/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-[13px] text-ink">
                      {tDist(distanceTranslationKeys[i])}
                    </span>
                  </div>
                  <span className="text-[12px] font-medium text-muted">{d.dist}</span>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-[260px] w-full overflow-hidden border border-ink/10">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="3H Apartment location"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Right — contact info + form */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-surface p-8 md:p-10"
          >
            <div className="mb-8 border-b border-ink/10 pb-8">
              <h3 className="mb-5 font-serif text-2xl font-light text-ink">{t('contact_title')}</h3>
              <div className="flex flex-col gap-3.5">
                <a
                  href={`tel:${t('phone').replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-[13px] text-muted transition-colors hover:text-gold"
                >
                  <Phone size={14} className="shrink-0 text-gold" />
                  <span>{t('phone')}</span>
                </a>
                <a
                  href="https://fb.com/3Hapartment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[13px] text-muted transition-colors hover:text-gold"
                >
                  <ExternalLink size={14} className="shrink-0 text-gold" />
                  <span>{t('facebook')}</span>
                </a>
                <div className="flex items-start gap-3 text-[13px] text-muted">
                  <Navigation size={14} className="mt-0.5 shrink-0 text-gold" />
                  <span>{t('address_short')}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="flex items-center gap-2.5 text-[10px] tracking-[2px] uppercase text-gold font-semibold mb-6">
                {t('form_eyebrow')}
              </span>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
