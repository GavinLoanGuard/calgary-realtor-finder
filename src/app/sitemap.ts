import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calgaryrealtorfinder.ca'
  const lastModified = new Date()

  const routes = [
    '',
    '/calgary-realtors',
    '/edmonton-realtors',
    '/red-deer-realtors',
    '/lethbridge-realtors',
    '/grande-prairie-realtors',
    '/calgary-ne-realtors',
    '/calgary-nw-realtors',
    '/calgary-sw-realtors',
    '/calgary-se-realtors',
    '/how-to-choose-a-realtor-calgary',
    '/top-realtors-calgary',
    '/about',
    '/contact',
    '/alberta-cities',
    '/resources',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : route.includes('calgary-realtors') ? 0.9 : 0.8,
  }))
}
