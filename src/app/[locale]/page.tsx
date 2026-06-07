import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Hero from '@/components/Hero'
import BookingBar from '@/components/BookingBar'
import Stats from '@/components/Stats'
import Rooms from '@/components/Rooms'
import Amenities from '@/components/Amenities'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CityBanner from '@/components/CityBanner'
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
      <BookingBar />
      <Stats />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Pricing />
      <CityBanner />
      <Location />
      <Footer />
    </main>
  )
}
