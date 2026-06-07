'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { rooms } from '@/lib/data'
import { formatVND } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BLUR_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIBAAAgIBBQEBAAAAAAAAAAAAAQIDBAUSITFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAGBEAAgMAAAAAAAAAAAAAAAAAARFBYf/aAAwDAQACEQMRAD8AjVLRWqHtlJpWuvFPxJC7jj1H0JrNiySyREMY0jkdnXpAB5u0TdDfJJJJJP/Z'

function RoomCard({
  room,
  tall,
  delay,
  tRooms,
}: {
  room: (typeof rooms)[0]
  tall?: boolean
  delay: number
  tRooms: ReturnType<typeof useTranslations>
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className="group relative flex flex-col border border-ink/10 overflow-hidden bg-cream hover:border-gold/40 transition-colors duration-300"
    >
      <div className={`relative bg-[#071a2b] overflow-hidden ${tall ? 'h-[400px]' : 'h-[192px]'}`}>
        <Image
          src={room.imgSrc}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[8px] tracking-[2px] uppercase px-2.5 py-1">
          {room.floor}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-serif text-xl font-light text-ink">{room.name}</h3>
          <p className="text-[11px] text-muted mt-1 leading-relaxed">{room.description}</p>
        </div>
        <div className="flex gap-3 text-[10px] text-muted">
          <span>{room.size} m²</span>
          <span className="text-ink/20">·</span>
          <span>{tRooms('units')} {room.units}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {room.tags.map((tag) => (
            <span
              key={tag}
              className="text-[8px] tracking-widest uppercase text-muted border border-ink/10 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-ink/10">
          <div>
            <span className="font-serif text-2xl font-light text-ink">
              {formatVND(room.priceVND)}
            </span>
            <span className="text-[10px] text-muted ml-1">{tRooms('per_night')}</span>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[9px] tracking-[2px] uppercase text-gold hover:text-ink transition-colors duration-200"
          >
            {tRooms('book_now')} <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Rooms() {
  const t = useTranslations('rooms')
  const [ground, mid, upper] = rooms

  return (
    <section id="rooms" className="py-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-[9px] tracking-[3px] uppercase text-gold font-medium">
            {t('eyebrow')}
          </span>
          <h2 className="font-serif text-[40px] font-light text-ink mt-2 leading-tight">
            {t('title')}{' '}
            <em className="italic text-gold">{t('titleAccent')}</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-4">
          <RoomCard room={ground} tall delay={0} tRooms={t} />

          <div className="flex flex-col gap-4">
            <RoomCard room={mid} delay={0.1} tRooms={t} />
            <RoomCard room={upper} delay={0.15} tRooms={t} />
          </div>

          {/* Rooftop card */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="group relative flex flex-col border border-ink/10 overflow-hidden bg-cream hover:border-gold/40 transition-colors duration-300"
          >
            <div className="relative h-[400px] bg-[#071a2b] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80"
                alt="Rooftop terrace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={BLUR_URL}
              />
              <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[8px] tracking-[2px] uppercase px-2.5 py-1">
                Rooftop
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div>
                <h3 className="font-serif text-xl font-light text-ink">{t('rooftop_name')}</h3>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">{t('rooftop_desc')}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(t.raw('rooftop_tags') as string[]).map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] tracking-widest uppercase text-muted border border-ink/10 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-3 border-t border-ink/10">
                <span className="font-serif text-xl font-light text-gold">{t('rooftop_price')}</span>
                <p className="text-[10px] text-muted mt-0.5">{t('rooftop_subtitle')}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
