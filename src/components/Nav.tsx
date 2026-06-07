'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

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
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-cream/80 backdrop-blur-sm'
      } border-b border-ink/10`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="font-serif text-base tracking-widest text-ink font-medium">
            3H APARTMENT
          </span>
          <span className="text-[8px] tracking-widest uppercase text-gold mt-0.5">
            Đà Nẵng · Vietnam
          </span>
        </div>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNav(link.key)}
              className="text-[10px] tracking-[3px] uppercase text-muted hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => handleNav('contact')}
            className="bg-ink text-cream text-[9px] tracking-[3px] uppercase px-6 py-2.5 hover:bg-gold transition-colors duration-300"
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
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNav(link.key)}
              className="text-[11px] tracking-[3px] uppercase text-muted hover:text-ink text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="bg-ink text-cream text-[9px] tracking-[3px] uppercase px-6 py-3 w-full mt-2"
          >
            {t('book')}
          </button>
        </div>
      )}
    </header>
  )
}
