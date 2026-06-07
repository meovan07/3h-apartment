export interface Room {
  id: number
  name: string
  floor: string
  units: string
  size: number
  maxGuests: number
  priceVND: number
  tags: string[]
  imgSrc: string
  description: string
}

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Ground floor studio',
    floor: 'Floor 1',
    units: '1–2',
    size: 27,
    maxGuests: 2,
    priceVND: 500_000,
    tags: ['Private bathroom', 'Kitchenette', 'Garage access', 'AC & WiFi'],
    imgSrc: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    description: 'Street-level convenience with direct garage access. Ideal for guests travelling by motorbike or car.',
  },
  {
    id: 2,
    name: 'Mid-floor studio',
    floor: 'Floor 2',
    units: '3–6',
    size: 27,
    maxGuests: 2,
    priceVND: 550_000,
    tags: ['Private bathroom', 'Kitchenette', 'Elevator', 'AC & WiFi'],
    imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    description: 'The perfect balance of privacy and access. Quiet rooms away from street noise, served by elevator.',
  },
  {
    id: 3,
    name: 'Upper floor studio',
    floor: 'Floors 3–4',
    units: '7–14',
    size: 27,
    maxGuests: 2,
    priceVND: 600_000,
    tags: ['Private bathroom', 'Kitchenette', 'Best city views', 'AC & WiFi'],
    imgSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    description: 'Elevated perspectives over the Mỹ An neighbourhood with partial views toward the sea on clear days.',
  },
]

export interface Amenity {
  icon: string
  name: string
  desc: string
}

export const amenities: Amenity[] = [
  { icon: 'Wifi',         name: 'WiFi',             desc: 'High-speed fibre in every room' },
  { icon: 'Wind',         name: 'Air conditioning', desc: 'Individual unit per room' },
  { icon: 'ArrowUpDown', name: 'Elevator',          desc: 'Serving all 4 floors' },
  { icon: 'Car',          name: 'Covered parking',  desc: 'Ground floor garage' },
  { icon: 'UtensilsCrossed', name: 'Kitchenette',   desc: 'Fridge, kettle & cooking basics' },
  { icon: 'WashingMachine', name: 'Laundry',         desc: 'Shared washer available' },
  { icon: 'Tv',           name: 'Smart TV',          desc: 'Cable channels included' },
  { icon: 'Sun',          name: 'Rooftop terrace',   desc: 'Sân thượng & drying area' },
]

export interface Distance {
  place: string
  dist: string
}

export const distances: Distance[] = [
  { place: 'My Khe Beach',    dist: '1 km' },
  { place: 'Restaurants',     dist: '100 m' },
  { place: 'Dragon Bridge',   dist: '3.5 km' },
  { place: 'Marble Mountains', dist: '4 km' },
  { place: 'Da Nang Airport', dist: '6 km' },
  { place: 'Hội An',          dist: '22 km' },
]

export interface PricingTier {
  id: number
  label: string
  floor: string
  units: string
  priceVND: number
  features: string[]
  hot?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    id: 1,
    label: 'Ground floor',
    floor: 'Floor 1',
    units: 'Units 1–2',
    priceVND: 500_000,
    features: ['27 m² private studio', 'Private bathroom', 'Kitchenette', 'Garage access'],
  },
  {
    id: 2,
    label: 'Mid-floor',
    floor: 'Floor 2',
    units: 'Units 3–6',
    priceVND: 550_000,
    features: ['27 m² private studio', 'Private bathroom', 'Kitchenette', 'Elevator access'],
    hot: true,
  },
  {
    id: 3,
    label: 'Upper floor',
    floor: 'Floors 3–4',
    units: 'Units 7–14',
    priceVND: 600_000,
    features: ['27 m² private studio', 'Private bathroom', 'Kitchenette', 'Best city views'],
  },
]
