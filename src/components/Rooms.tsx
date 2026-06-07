'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { rooms } from '@/lib/data'
import { formatVND } from '@/lib/utils'
import { ArrowRight, Users, Maximize2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BLUR_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIBAAAgIBBQEBAAAAAAAAAAAAAQIDBAUSITFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAGBEAAgMAAAAAAAAAAAAAAAAAARFBYf/aAAwDAQACEQMRAD8AjVLRWqHtlJpWuvFPxJC7jj1H0JrNiySyREMY0jkdnXpAB5u0TdDfJJJJJP/Z'

type RoomTranslations = { name: string; floor: string; desc: string; tags: string[] }

const ease = [0.22, 1, 0.36, 1] as const

function RoomCard({
  room,
  delay,
  translations,
  t,
}: {
  room: (typeof rooms)[0]
  delay: number
  translations: RoomTranslations
  t: ReturnType<typeof useTranslations>
}) {
  const { name, floor, desc, tags } = translations

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease, delay }}
      className="group flex flex-col bg-cream shadow-[0_2px_16px_rgba(28,25,23,0.07)] hover:shadow-[0_6px_28px_rgba(28,25,23,0.12)] transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden bg-dark">
        <Image
          src={room.imgSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <span className="absolute left-3 top-3 bg-ink/70 text-cream text-[9px] tracking-[1.5px] uppercase font-medium px-2.5 py-1 backdrop-blur-sm">
          {floor}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Price — prominent at top */}
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-[28px] font-normal leading-none text-ink">
              {formatVND(room.priceVND)}
            </span>
            <span className="text-[11px] text-muted">{t('per_night')}</span>
          </div>
        </div>

        {/* Name + specs */}
        <div className="border-t border-ink/8 pt-4">
          <h3 className="font-serif text-[20px] font-normal text-ink leading-tight mb-3">{name}</h3>
          <div className="flex gap-4 text-[11px] text-muted mb-3">
            <span className="flex items-center gap-1.5">
              <Maximize2 size={11} className="text-gold" strokeWidth={2} />
              {room.size} m²
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={11} className="text-gold" strokeWidth={2} />
              {t('guests_count', { count: room.maxGuests })}
            </span>
          </div>
          <p className="text-[12px] text-muted leading-relaxed">{desc}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-wide uppercase text-muted border border-ink/10 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-ink text-cream text-[11px] font-semibold tracking-wide px-6 py-3 hover:bg-gold transition-colors duration-300 w-full justify-center"
          >
            {t('book_now')} <ArrowRight size={12} />
          </button>
        </div>

      </div>
    </motion.article>
  )
}

export default function Rooms() {
  const t = useTranslations('rooms')

  const roomTranslations: Record<number, RoomTranslations> = {
    1: { name: t('room1_name'), floor: t('room1_floor'), desc: t('room1_desc'), tags: t.raw('room1_tags') as string[] },
    2: { name: t('room2_name'), floor: t('room2_floor'), desc: t('room2_desc'), tags: t.raw('room2_tags') as string[] },
    3: { name: t('room3_name'), floor: t('room3_floor'), desc: t('room3_desc'), tags: t.raw('room3_tags') as string[] },
  }

  return (
    <section id="rooms" className="py-20">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[2px] text-gold">
            <span className="inline-block h-px w-5 bg-gold" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-3 font-serif text-[40px] font-normal leading-tight text-ink md:text-[48px]">
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
        </motion.div>

        {/* 3-column equal room grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rooms.map((room, i) => (
            <RoomCard
              key={room.id}
              room={room}
              delay={i * 0.1}
              translations={roomTranslations[room.id as 1 | 2 | 3]}
              t={t}
            />
          ))}
        </div>

        {/* Rooftop — full-width horizontal card */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
          className="mt-6 flex flex-col md:flex-row bg-ink text-cream shadow-[0_2px_16px_rgba(28,25,23,0.12)] overflow-hidden group"
        >
          <div className="relative h-[220px] md:h-auto md:w-[380px] shrink-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80"
              alt={t('rooftop_name')}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={BLUR_URL}
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
            <span className="text-[9px] tracking-[2px] uppercase font-semibold text-gold">
              {t('eyebrow')}
            </span>
            <h3 className="font-serif text-[28px] font-normal text-cream leading-tight">
              {t('rooftop_name')}
            </h3>
            <p className="text-[13px] text-cream/60 leading-relaxed max-w-lg">{t('rooftop_desc')}</p>
            <div className="flex flex-wrap gap-1.5">
              {(t.raw('rooftop_tags') as string[]).map((tag) => (
                <span key={tag} className="text-[9px] tracking-wide uppercase text-cream/50 border border-cream/20 px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-2 border-t border-cream/10">
              <span className="font-serif text-2xl font-normal text-gold">{t('rooftop_price')}</span>
              <p className="text-[11px] text-cream/50 mt-0.5">{t('rooftop_subtitle')}</p>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  )
}
