export const nathan = {
  name: 'Nathan Koenigsberg',
  title: 'Licensed Calgary REALTOR®',
  brokerage: 'RE/MAX First',
  brokerageAddress: '115, 8820 Blackfoot Trail SE, Calgary, T2J 3J1',
  licenseNumber: '[NATHAN_LICENSE_NUMBER]', // TODO: Replace with real RECA number
  phone: '[NATHAN_PHONE]', // TODO: Replace with real number
  email: 'nathan@nathankoenigsberg.ca',
  website: 'https://nathankoenigsberg.ca',
  photo: '/nathan-koenigsberg.webp',
  photoAlt: 'Nathan Koenigsberg — Licensed Calgary REALTOR® with RE/MAX First',
  yearsExperience: 13,
  areasServed: [
    'City Centre',
    'Calgary SE',
    'Calgary SW',
    'Calgary West',
    'Calgary South',
    'Okotoks',
  ],
  bio: "Born and raised in Calgary, Nathan Koenigsberg has spent thirteen years helping buyers and sellers navigate one of Canada's most dynamic real estate markets. A licensed REALTOR® with RE/MAX First, Nathan specializes in Calgary's inner city, Southeast, Southwest, West, and South communities, as well as Okotoks. His client-first approach and deep neighbourhood knowledge have made him a trusted resource for first-time buyers, move-up families, and investors alike.",
  reviews: [
    {
      quote: 'Nathan walked us through every step of our first home purchase in Mahogany. Patient, honest, and never once felt pushy.',
      author: 'Priya & Daniel',
      neighbourhood: 'Mahogany',
      rating: 5,
    },
    {
      quote: 'Sold our Tuscany house in 9 days, $40k over list. He knows the NW market inside out.',
      author: 'The Hallaran Family',
      neighbourhood: 'Tuscany',
      rating: 5,
    },
    {
      quote: 'Relocated from Toronto. Nathan made it feel like we already had a friend in Calgary.',
      author: 'M. Okafor',
      neighbourhood: 'Beltline',
      rating: 5,
    },
  ], // TODO: Replace with real verified reviews from Nathan
  recentSales: [
    {
      address: '87 Prestwick Close SE',
      neighbourhood: 'McKenzie Towne',
      suburb: 'Calgary SE',
      price: '$599,900',
      beds: 3,
      baths: 4,
      sqft: 1707,
      status: 'SOLD' as const,
      photo: null, // TODO: Add real photo path
    },
    {
      address: '115 Canterbury Drive SW',
      neighbourhood: 'Canyon Meadows',
      suburb: 'Calgary SW',
      price: '$1,089,000',
      beds: 4,
      baths: 4,
      sqft: 2410,
      status: 'SOLD' as const,
      photo: null,
    },
    {
      address: '5 Banded Peak View',
      neighbourhood: 'Mountainview',
      suburb: 'Okotoks',
      price: '$1,299,000',
      beds: 3,
      baths: 3,
      sqft: 1744,
      status: 'SOLD' as const,
      photo: null,
    },
  ], // TODO: Replace with real recent sales from Nathan
}

export type Review = (typeof nathan.reviews)[0]
export type Sale = (typeof nathan.recentSales)[0]
