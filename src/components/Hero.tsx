'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BLUR_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIBAAAgIBBQEBAAAAAAAAAAAAAQIDBAUSITFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAGBEAAgMAAAAAAAAAAAAAAAAAARFBYf/aAAwDAQACEQMRAD8AjVLRWqHtlJpWuvFPxJC7jj1H0JrNiySyREMY0jkdnXpAB5u0TdDfJJJJJP/Z'

const slides = [
  { src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1400&q=85', alt: 'Building exterior' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85', alt: 'Studio interior' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=85', alt: 'Kitchenette' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85', alt: 'Bathroom' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const t = useTranslations('hero')
  const [active, setActive] = useState(0)
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goTo = (i: number) => {
    setActive(i)
    startTimer()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    touchStartX.current = null
    if (Math.abs(diff) < 40) return
    goTo(diff > 0
      ? (active + 1) % slides.length
      : (active - 1 + slides.length) % slides.length
    )
  }

  return (
    <section id="hero" className="pt-16">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[680px]">

        {/* Left — auto-sliding photo with swipe support */}
        <div
          className="relative bg-dark min-h-[440px] md:min-h-[680px] overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
                placeholder="blur"
                blurDataURL={BLUR_URL}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/5 to-transparent pointer-events-none" />

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  i === active ? 'w-5 h-1.5 bg-cream' : 'w-1.5 h-1.5 bg-cream/40'
                }`}
              />
            ))}
          </div>

          {/* Location label */}
          <div className="absolute bottom-12 left-6 flex items-center gap-1.5 text-cream/60 pointer-events-none">
            <MapPin size={11} strokeWidth={1.5} />
            <span className="text-[10px] tracking-[2px] uppercase font-medium">
              K63/1 Chế Lan Viên, Đà Nẵng
            </span>
          </div>
        </div>

        {/* Right — editorial content */}
        <div className="flex flex-col justify-between bg-cream px-8 md:px-12 py-10 md:py-14">

          <div className="flex flex-col gap-4">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[2px] uppercase text-gold font-semibold">
                <span className="w-5 h-px bg-gold inline-block" />
                {t('eyebrow')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-serif font-normal text-[52px] md:text-[62px] lg:text-[72px] leading-[0.95] tracking-tight text-ink"
            >
              {t('headline')}{' '}
              <em className="italic text-gold">{t('headlineAccent')}</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.18 }}
              className="flex items-center gap-3"
            >
              <span className="w-5 h-px bg-ink/20" />
              <span className="font-sans text-[10px] tracking-[3.5px] uppercase text-muted font-medium">
                {t('slogan')}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              className="text-[13px] leading-[1.7] text-muted"
            >
              {t('body')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              className="flex items-center gap-5 pt-5 border-t border-ink/10"
            >
              <div>
                <p className="text-[9px] tracking-[2px] uppercase text-muted mb-1">{t('from_label')}</p>
                <p className="font-serif text-xl font-normal text-ink leading-none">
                  ₫500k<span className="text-muted text-[11px] font-sans ml-0.5">{t('per_night_short')}</span>
                </p>
              </div>
              <span className="w-px h-8 bg-ink/10" />
              <div>
                <p className="text-[9px] tracking-[2px] uppercase text-muted mb-1">{t('studios_label')}</p>
                <p className="font-serif text-xl font-normal text-ink leading-none">14</p>
              </div>
              <span className="w-px h-8 bg-ink/10" />
              <div>
                <p className="text-[9px] tracking-[2px] uppercase text-muted mb-1">{t('beach_label')}</p>
                <p className="font-serif text-xl font-normal text-ink leading-none">1 km</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom: thumbnail strip + CTAs */}
          <div className="flex flex-col gap-4 mt-6">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="flex gap-1.5"
            >
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={slide.alt}
                  className={`relative h-[70px] flex-1 overflow-hidden bg-dark transition-all duration-300 ${
                    i === active
                      ? 'ring-[1.5px] ring-gold ring-offset-2 ring-offset-cream'
                      : 'opacity-45 hover:opacity-75'
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                  />
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.38 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-gold text-cream text-[11px] font-semibold tracking-wide px-7 py-3.5 rounded-lg hover:bg-ink transition-colors duration-300 w-full sm:w-auto"
              >
                {t('cta_rooms')} <ArrowRight size={13} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 border border-ink/20 text-ink text-[11px] font-medium tracking-wide px-7 py-3.5 rounded-lg hover:bg-ink hover:text-cream hover:border-transparent transition-colors duration-300 w-full sm:w-auto"
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
