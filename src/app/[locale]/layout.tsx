import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Nav from '@/components/Nav'
import JsonLd from '@/components/JsonLd'
import '../globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const BASE = 'https://3hapartment.vn'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isVi = locale === 'vi'

  return {
    metadataBase: new URL(BASE),
    title: isVi
      ? '3H Apartment — Căn hộ studio gần biển Mỹ Khê, Đà Nẵng'
      : '3H Apartment — Studio Rentals Near My Khe Beach, Da Nang',
    description: isVi
      ? '14 phòng studio riêng tư tại Mỹ An, Ngũ Hành Sơn, Đà Nẵng. Cách biển Mỹ Khê 1 km. Đầy đủ tiện nghi, thang máy, gia đình quản lý. Đặt phòng trực tiếp.'
      : '14 private studio apartments in Mỹ An, Ngũ Hành Sơn, Da Nang. 1 km from My Khe Beach. Fully equipped, elevator, family-run. Book direct for best rates.',
    keywords: isVi
      ? ['căn hộ Đà Nẵng', 'thuê phòng gần biển Mỹ Khê', 'studio Ngũ Hành Sơn', 'nhà trọ Đà Nẵng', '3H Apartment', 'phòng trọ Mỹ An']
      : ['Da Nang apartment', 'My Khe Beach accommodation', 'studio rental Da Nang', 'Ngu Hanh Son apartment', '3H Apartment', 'Da Nang studio'],
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        vi: `${BASE}/vi`,
        en: `${BASE}/en`,
        'x-default': `${BASE}/vi`,
      },
    },
    openGraph: {
      siteName: '3H Apartment',
      type: 'website',
      url: `${BASE}/${locale}`,
      locale: isVi ? 'vi_VN' : 'en_US',
      title: isVi
        ? '3H Apartment Đà Nẵng — Studio ven biển Mỹ Khê'
        : '3H Apartment Da Nang — Studios Near My Khe Beach',
      description: isVi
        ? 'Studio riêng tư từ 500.000 ₫/đêm. Cách biển Mỹ Khê 1 km, tiện nghi đầy đủ, gia đình quản lý.'
        : 'Private studios from 500,000 VND/night. 1 km from My Khe Beach, fully equipped, family-run.',
    },
    twitter: {
      card: 'summary_large_image',
      title: isVi ? '3H Apartment Đà Nẵng' : '3H Apartment Da Nang',
      description: isVi
        ? 'Studio riêng tư từ 500.000 ₫/đêm. Cách biển Mỹ Khê 1 km.'
        : 'Private studios from 500,000 VND/night. 1 km from My Khe Beach.',
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'vi')) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-cream font-sans antialiased">
        <JsonLd locale={locale} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
