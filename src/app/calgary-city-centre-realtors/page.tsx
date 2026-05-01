import { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import Breadcrumb from '@/components/Breadcrumb'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Calgary City Centre Realtors | Inner City Real Estate Agents | Calgary Realtor Finder',
  description:
    'Find licensed realtors in Calgary City Centre. Connect with real estate agents who know the Beltline, Mission, Kensington, Inglewood, and all inner-city Calgary neighbourhoods.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary-city-centre-realtors',
  },
  openGraph: {
    title: 'Calgary City Centre Realtors | Inner City Real Estate Agents | Calgary Realtor Finder',
    description:
      'Find licensed realtors in Calgary City Centre. Connect with real estate agents who know the Beltline, Mission, Kensington, Inglewood, and all inner-city Calgary neighbourhoods.',
    url: 'https://calgaryrealtorfinder.ca/calgary-city-centre-realtors',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CalgaryCityCentreRealtorsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Calgary', href: '/calgary-realtors' },
    { label: 'City Centre Realtors' },
  ]

  const schema = JSON.stringify([
    localBusinessSchema('Calgary City Centre', 51.0447, -114.0719),
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary', url: 'https://calgaryrealtorfinder.ca/calgary-realtors' },
      { name: 'City Centre Realtors', url: 'https://calgaryrealtorfinder.ca/calgary-city-centre-realtors' },
    ]),
    faqSchema([
      {
        question: 'What neighbourhoods are in Calgary City Centre?',
        answer:
          "Calgary's City Centre includes the Beltline, Mission, Kensington, Hillhurst, Sunnyside, Inglewood, Ramsay, Bridgeland, East Village, Eau Claire, and the downtown core itself. These inner-city communities are characterized by walkability, condo and infill housing, and proximity to the CTrain network.",
      },
      {
        question: 'What type of homes are available in Calgary City Centre?',
        answer:
          'City Centre Calgary is dominated by condominium apartments and townhomes, with a growing supply of luxury infill detached homes on established lots. The Beltline and East Village are primarily high-rise and mid-rise condo buildings, while communities like Hillhurst, Sunnyside, and Inglewood have a mix of heritage homes, semi-detached infills, and newer condo developments.',
      },
      {
        question: 'What is the average price for a condo in Calgary City Centre?',
        answer:
          "Calgary City Centre condo prices vary widely by building, floor, and finishes. Entry-level one-bedroom units in older Beltline buildings can start around $250,000–$350,000, while larger units in newer buildings or luxury towers range from $500,000 to well over $1,000,000. A licensed REALTOR® who specializes in inner-city Calgary can help you identify the best building and value for your budget.",
      },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <PageLayout>
        <Breadcrumb items={breadcrumbs} />
        <h1 className="font-playfair text-4xl font-bold text-primary leading-tight">
          Calgary City Centre Realtors
        </h1>
        <p className="text-charcoal/60 text-lg mt-4 leading-relaxed max-w-2xl">
          Find a licensed REALTOR® who specializes in Calgary&apos;s inner city — the Beltline, Mission,
          Kensington, Inglewood, and beyond. Free matching, no obligation.
        </p>

        <div className="mt-10 space-y-6 font-inter text-charcoal/70 text-base leading-relaxed max-w-3xl">
          <p>
            Calgary&apos;s City Centre is the most walkable, transit-connected, and architecturally
            diverse part of the city. Stretching from the downtown core through the Beltline and out
            into established inner-city communities like Kensington, Hillhurst, Sunnyside, and
            Inglewood, the City Centre offers urban living that looks nothing like Calgary&apos;s suburban
            communities. The housing mix leans heavily toward condominiums — from heritage conversions
            and 1970s high-rises to brand-new luxury towers in the East Village — but infill detached
            and semi-detached homes are in significant demand in communities like Ramsay and Bridgeland.
          </p>
          <p>
            The CTrain Blue and Red lines both serve City Centre communities, making it possible to
            commute downtown, to the university, or to the hospitals without a car. The Plus-15 network
            connects downtown towers, and the river pathway system along the Bow and Elbow provides
            year-round access to cycling and running routes that suburban Calgary simply can&apos;t match.
            For buyers weighing urban versus suburban living, City Centre offers lifestyle amenities
            — walkable restaurants, coffee shops, music venues, and independent retail — that justify
            the premium over comparable square footage in the suburbs.
          </p>
          <p>
            Working with a REALTOR® who understands the inner-city condo market is particularly important
            in City Centre. Building quality varies enormously — condo fees, reserve funds, rental ratios,
            and building age all affect long-term ownership costs in ways that don&apos;t apply to detached
            homes. An experienced inner-city agent will review status certificates, flag buildings with
            known issues, and help you evaluate whether a given unit is fairly priced relative to the
            building&apos;s specific conditions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            'Beltline',
            'Mission',
            'Kensington',
            'Hillhurst',
            'Sunnyside',
            'Inglewood',
            'Ramsay',
            'Bridgeland',
            'East Village',
            'Eau Claire',
          ].map((n) => (
            <div key={n} className="border border-charcoal/10 rounded-sm px-4 py-3 bg-white">
              <span className="font-inter text-charcoal/70 text-sm">{n}</span>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  )
}
