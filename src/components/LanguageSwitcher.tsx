'use client'

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
      className="inline-flex items-center justify-center min-w-[42px] h-8 text-[11px] font-semibold tracking-wide text-muted hover:text-ink border border-ink/20 hover:border-ink/40 px-3 rounded-lg transition-colors duration-200"
      title={locale === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
    >
      {locale === 'vi' ? 'EN' : 'VI'}
    </button>
  )
}
