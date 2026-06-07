'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BLUR_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIBAAAgIBBQEBAAAAAAAAAAAAAQIDBAUSITFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAGBEAAgMAAAAAAAAAAAAAAAAAARFBYf/aAAwDAQACEQMRAD8AjVLRWqHtlJpWuvFPxJC7jj1H0JrNiySyREMY0jkdnXpAB5u0TdDfJJJJJP/Z'

const HERO_SRC =
  'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1400&q=85'

const thumbs = [
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80',
    alt: 'Studio interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
    alt: 'Kitchenette',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80',
    alt: 'Bathroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    alt: 'Building view',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const t = useTranslations('hero')
  const [activeThumb, setActiveThumb] = useState(0)

  return (
    <section id="hero" className="pt-16">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[640px]">
        {/* Left — photo */}
        <div className="relative bg-[#071a2b] min-h-[420px] md:min-h-[640px] overflow-hidden">
          <Image
            src={HERO_SRC}
            alt="3H Apartment — My Khe Beach, Đà Nẵng"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a2b]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="flex items-center gap-1.5 text-cream/80">
              <MapPin size={12} />
              <span className="text-[10px] tracking-widest uppercase">K63/1 Chế Lan Viên, Đà Nẵng</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-cream/60">01 / 04</span>
          </div>
        </div>

        {/* Right — content */}
        <div className="flex flex-col bg-cream px-8 md:px-12 py-10 md:py-14">
          {/* Top: text content */}
          <div className="flex flex-col gap-5 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="text-[9px] tracking-[3px] uppercase text-gold font-medium">
                {t('eyebrow')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-serif font-normal text-[46px] md:text-[58px] leading-[1.08] text-ink"
            >
              {t('headline')}
              <br />
              <em className="text-gold italic">{t('headlineAccent')}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-sm text-muted leading-relaxed max-w-xs"
            >
              {t('body')}
            </motion.p>
          </div>

          {/* Bottom: thumbnails + CTAs */}
          <div className="flex flex-col gap-4 mt-8">
            {/* Thumbnail strip */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="flex gap-2"
            >
              {thumbs.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`relative h-[80px] flex-1 overflow-hidden bg-[#071a2b] transition-all duration-300 ${
                    activeThumb === i
                      ? 'ring-[1.5px] ring-gold ring-offset-2 ring-offset-cream'
                      : 'opacity-55 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                  />
                </button>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-ink text-cream text-[10px] tracking-[3px] uppercase px-6 py-3 hover:bg-gold transition-colors duration-300"
              >
                {t('cta_rooms')} <ArrowRight size={12} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 border border-ink text-ink text-[10px] tracking-[3px] uppercase px-6 py-3 hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                {t('cta_contact')}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
