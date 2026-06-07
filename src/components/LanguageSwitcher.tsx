'use client'

import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const locale = useLocale()

  const toggleLocale = () => {
    const next = locale === 'vi' ? 'en' : 'vi'
    const rest = window.location.pathname.slice(1 + locale.length) // '' or '/some-page'
    window.location.href = `/${next}${rest}`
  }

  return (
    <button
      onClick={toggleLocale}
      className="text-[9px] tracking-[3px] uppercase text-muted hover:text-ink border border-ink/20 px-3 py-1.5 transition-colors duration-200"
      title={locale === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
    >
      {locale === 'vi' ? 'EN' : 'VI'}
    </button>
  )
}
