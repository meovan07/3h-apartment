export default function JsonLd({ locale }: { locale: string }) {
  const isVi = locale === 'vi'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: '3H Apartment',
    url: `https://3hapartment.vn/${locale}`,
    description: isVi
      ? '14 phòng studio riêng tư cách biển Mỹ Khê 1 km tại Đà Nẵng. Đầy đủ tiện nghi, thang máy, gia đình quản lý.'
      : '14 private studio apartments 1 km from My Khe Beach, Da Nang. Fully equipped, elevator, family-run.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'K63/1 Chế Lan Viên',
      addressLocality: 'Ngũ Hành Sơn',
      addressRegion: 'Đà Nẵng',
      addressCountry: 'VN',
      postalCode: '550000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.040982,
      longitude: 108.24667,
    },
    priceRange: '500.000 – 600.000 VND',
    currenciesAccepted: 'VND',
    paymentAccepted: 'Cash, Bank Transfer',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Elevator', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kitchenette', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Laundry facilities', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Rooftop terrace', value: true },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      reviewCount: '48',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
