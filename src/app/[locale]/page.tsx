import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Rooms from '@/components/Rooms'
import Amenities from '@/components/Amenities'
import Pricing from '@/components/Pricing'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <Stats />
      <Rooms />
      <Amenities />
      <Pricing />
      <Location />
      <Footer />
    </main>
  )
}
