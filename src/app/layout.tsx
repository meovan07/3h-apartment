import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

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
    <html lang="vi" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-cream font-sans antialiased">{children}</body>
    </html>
  )
}
