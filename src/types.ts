export type Destination = {
  slug: string
  name: string
  country: string
  region: string
  eyebrow: string
  description: string
  longDescription: string
  idealFor: string[]
  bestTime: string
  duration: string
  image: string
  gallery: string[]
  credit: { label: string; href: string }
}

export type QuoteData = {
  destination: string
  departureDate: string
  returnDate: string
  adults: number
  children: number
  budget: string
  preferences: string[]
  notes?: string
  name: string
  email: string
  phone: string
  consent: boolean
}
