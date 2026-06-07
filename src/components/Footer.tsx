'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('nav')
  const tFooter = useTranslations('footer')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-ink/10 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <span className="font-serif text-[15px] tracking-[3px] text-ink">3H APARTMENT</span>

        <nav className="flex items-center gap-6">
          {(['rooms', 'amenities', 'pricing', 'location'] as const).map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[11px] font-medium text-muted hover:text-ink transition-colors duration-200"
            >
              {t(id)}
            </button>
          ))}
        </nav>

        <p className="text-[11px] text-muted text-center md:text-right">
          {tFooter('copyright')}
        </p>
      </div>
    </footer>
  )
}
