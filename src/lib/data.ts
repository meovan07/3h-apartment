export interface Room {
  id: number
  priceVND: number
  size: number
  maxGuests: number
  imgSrc: string
}

export const rooms: Room[] = [
  {
    id: 1,
    priceVND: 500_000,
    size: 27,
    maxGuests: 2,
    imgSrc: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    priceVND: 550_000,
    size: 27,
    maxGuests: 2,
    imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    priceVND: 600_000,
    size: 27,
    maxGuests: 2,
    imgSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
]

// icon keys only — names/descs live in translations
export const amenityIcons = [
  'Wifi',
  'Wind',
  'ArrowUpDown',
  'Car',
  'UtensilsCrossed',
  'WashingMachine',
  'Tv',
  'Sun',
  'PlaneLanding',
  'PawPrint',
]

export interface PricingTier {
  id: number
  priceVND: number
  hot?: boolean
}

export const pricingTiers: PricingTier[] = [
  { id: 1, priceVND: 500_000 },
  { id: 2, priceVND: 550_000, hot: true },
  { id: 3, priceVND: 600_000 },
]

export interface Distance {
  dist: string
}

export const distances: Distance[] = [
  { dist: '1 km' },
  { dist: '100 m' },
  { dist: '3.5 km' },
  { dist: '4 km' },
  { dist: '6 km' },
  { dist: '22 km' },
]
