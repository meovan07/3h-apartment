'use client'

import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const locale = useLocale()

  const toggleLocale = () => {
    const next = locale === 'vi' ? 'en' : 'vi'
    const rest = window.location.pathname.slice(1 + locale.length)
    window.location.href = `/${next}${rest}`
  }

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-ink/20 bg-cream hover:bg-surface hover:border-gold hover:text-gold text-[11px] font-semibold tracking-wide text-muted transition-all duration-200"
      title={locale === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
    >
      <Globe size={12} strokeWidth={1.75} />
      {locale === 'vi' ? 'EN' : 'VI'}
    </button>
  )
}
