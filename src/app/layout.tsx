import type { Metadata } from 'next'
import { Lora, DM_Sans } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://3hapartment.vn'),
  title: '3H Apartment — Studio rentals near My Khe Beach, Đà Nẵng',
  description:
    '14 private studio apartments in Mỹ An ward, Ngũ Hành Sơn. 1 km from My Khe Beach. Fully equipped, elevator access, family-run. Book direct.',
  openGraph: {
    title: '3H Apartment Đà Nẵng',
    description: 'Cozy studios near the beach. From 500,000 VND/night.',
    url: 'https://3hapartment.vn',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="bg-cream font-sans antialiased">{children}</body>
    </html>
  )
}
