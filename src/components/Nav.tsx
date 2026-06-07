'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

export default function Nav() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { key: 'rooms',     label: t('rooms') },
    { key: 'amenities', label: t('amenities') },
    { key: 'pricing',   label: t('pricing') },
    { key: 'location',  label: t('location') },
    { key: 'contact',   label: t('contact') },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,23,42,0.08)]'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        <Logo />

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNav(link.key)}
              className="text-[12px] font-medium text-muted hover:text-ink transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Right: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => handleNav('contact')}
            className="bg-gold text-cream text-[11px] font-semibold tracking-wide px-5 py-2.5 rounded-lg hover:bg-ink transition-colors duration-300"
          >
            {t('book')}
          </button>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            className="text-ink p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNav(link.key)}
              className="text-[13px] font-medium text-muted hover:text-ink text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="bg-gold text-cream text-[11px] font-semibold tracking-wide px-6 py-3.5 w-full mt-2 rounded-lg hover:bg-ink transition-colors duration-300"
          >
            {t('book')}
          </button>
        </div>
      )}
    </header>
  )
}
