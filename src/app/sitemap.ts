import type { MetadataRoute } from 'next'

const BASE = 'https://3hapartment.vn'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${BASE}/vi`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/en`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ]
}
