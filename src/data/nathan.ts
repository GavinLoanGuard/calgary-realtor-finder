export const nathan = {
  name: 'Nathan Koenigsberg',
  title: 'Licensed Calgary REALTOR®',
  brokerage: 'RE/MAX First',
  brokerageAddress: '115, 8820 Blackfoot Trail SE, Calgary, T2J 3J1',
  licenseNumber: '[NATHAN_LICENSE_NUMBER]', // TODO: Replace with real licence number
  phone: '[NATHAN_PHONE]', // TODO: Replace with real number
  email: 'nathan@nathankoenigsberg.ca',
  website: 'https://nathankoenigsberg.ca',
  photo: '/images/nathan-main.jpg',
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
      quote: 'His uncanny ability to negotiate saved me over $25,000 on the listing price. From start to finish, working with Nathan was an absolute pleasure.',
      author: 'Rick Seibel',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'Despite the market being slow, we received multiple offers and our property sold faster than expected. We couldn\'t be happier with the results.',
      author: 'Jeremy Dailo',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'Nathan is professional, punctual and thinks about things for the client that we didn\'t even consider. Do yourself a favour and give him a call!',
      author: 'Sam Burchill',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'As a healthcare professional I value efficiency and Nathan delivered. Many things we didn\'t know throughout the process and he helped bridge the gaps.',
      author: 'Kenton Gryckiewicz',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'Nathan made a process that can be stressful and frustrating as smooth as we could have ever imagined. I would highly recommend Nathan to anybody.',
      author: 'Stuart Rintoul',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'We have nothing but good things to say about Nathan! Professional, knowledgeable and personable — made the home buying experience enjoyable from start to finish.',
      author: 'Hannah Prins',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'Even in the current depressed market we were able to sell our home within 2 weeks for our full asking price. Best Realtor I have worked with.',
      author: 'Thomas Henderson',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'Being a single mom of 2 kids, working with Nathan has been a breath of fresh air. Transparent, honest, and truly has our best interest at heart.',
      author: 'Mellissa Bodea',
      neighbourhood: 'Calgary',
      rating: 5,
    },
    {
      quote: 'Nathan urged us to be patient and make sure we would be happy for the long term. We are still thrilled about our purchase even months after we moved in!',
      author: 'Emily Raburn',
      neighbourhood: 'Calgary',
      rating: 5,
    },
  ],
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
