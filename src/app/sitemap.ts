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
    '/calgary-city-centre-realtors',
    '/privacy',
    '/terms',
    '/accessibility',
    '/listings',
  ]

  const neighbourhoodRoutes = [
    '/calgary/auburn-bay',
    '/calgary/mckenzie-towne',
    '/calgary/cranston',
    '/calgary/canyon-meadows',
    '/calgary/cougar-ridge',
    '/calgary/west-springs',
    '/calgary/discovery-ridge',
    '/calgary/hamptons',
    '/calgary/shawnee-slopes',
    '/calgary/arbour-lake',
    '/calgary/mahogany',
    '/calgary/evergreen',
    '/calgary/copperfield',
  ]

  const realtorPageRoutes = [
    '/realtor-mahogany-calgary',
    '/realtor-auburn-bay-calgary',
    '/realtor-cranston-calgary',
    '/realtor-seton-calgary',
    '/realtor-mckenzie-towne-calgary',
    '/realtor-evergreen-calgary',
    '/realtor-signal-hill-calgary',
    '/realtor-aspen-woods-calgary',
    '/realtor-discovery-ridge-calgary',
    '/realtor-tuscany-calgary',
    '/realtor-rocky-ridge-calgary',
    '/realtor-royal-oak-calgary',
    '/realtor-okotoks',
    '/realtor-airdrie',
    '/realtor-cochrane',
    '/how-much-does-a-realtor-cost-calgary',
    '/first-time-home-buyer-calgary-realtor',
    '/selling-your-home-calgary',
    '/calgary-realtor-vs-private-sale',
  ]

  const toolRoutes = [
    '/tools/mortgage-affordability',
    '/tools/realtor-commission',
  ]

  const mainRouteEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : route.includes('calgary-realtors') ? 0.9 : 0.8,
  }))

  const neighbourhoodEntries: MetadataRoute.Sitemap = neighbourhoodRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const realtorPageEntries: MetadataRoute.Sitemap = realtorPageRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const toolEntries: MetadataRoute.Sitemap = toolRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...mainRouteEntries, ...neighbourhoodEntries, ...realtorPageEntries, ...toolEntries]
}
