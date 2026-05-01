import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Auburn Bay Homes for Sale | Find a Calgary REALTOR® | Calgary Realtor Finder',
  description:
    'Looking for homes for sale in Auburn Bay, Calgary? Get matched with a licensed REALTOR® who specializes in Auburn Bay real estate. Free, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Auburn Bay',
    url: 'https://calgaryrealtorfinder.ca/calgary/auburn-bay',
    areaServed: 'Auburn Bay, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Auburn Bay, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the average home price in Auburn Bay Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auburn Bay home prices vary by type. Detached single-family homes in Auburn Bay typically range from the high $500,000s to over $900,000, while townhomes and condos can start in the $300,000–$450,000 range. Lake access and proximity to the clubhouse influence pricing significantly. A local REALTOR® can provide a current comparative market analysis.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Auburn Bay a good place to buy in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Auburn Bay is consistently one of Calgary's most sought-after lake communities. Residents enjoy year-round access to the private 43-acre lake — swimming and paddleboarding in summer, skating in winter. The community has strong schools, walkable amenities at Auburn Station, and easy access to Stoney Trail. Demand remains high, which supports long-term property values.",
        },
      },
    ],
  },
])

export default function AuburnBayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · LAKE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Auburn Bay, Calgary
            </h1>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Connect with a licensed REALTOR® who specializes in Auburn Bay real estate. Free matching, no obligation.
            </p>
            <Link href="/" className="font-inter text-accent text-sm mt-6 inline-block hover:underline">
              ← Back to Calgary Realtor Finder
            </Link>
          </div>
        </section>

        <section className="bg-background py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 font-inter text-charcoal/70 text-base leading-relaxed">
              <p>
                Auburn Bay is one of Calgary&apos;s premier SE lake communities, built around a 43-acre
                private lake that gives residents year-round recreational access. The community sits
                southeast of Deerfoot Trail off Auburn Bay Boulevard SE, with Mahogany to the south and
                New Brighton to the north. Families are drawn by the lake lifestyle, strong schools
                including Auburn Bay School and Christ the King, and the walkable Auburn Station
                shopping area anchored by a Sobeys and a range of restaurants.
              </p>
              <p>
                The housing stock in Auburn Bay spans the full spectrum — from condo towers and
                townhomes suited to first-time buyers, to large detached estates with lake access lots.
                The community&apos;s Homeowners Association manages the lake, beach, and clubhouse, and
                annual HOA fees are factored into ownership costs. Properties closest to the lake
                typically command a premium, and they tend to sell quickly. Working with an agent who
                follows Auburn Bay&apos;s micro-market closely is essential when competing for lake-access
                listings.
              </p>
              <p>
                Auburn Bay was developed by Carma (now Brookfield Residential) and reached build-out
                around 2016, giving the community a consistent, established feel without the patchwork
                of different builders&apos; styles. Stoney Trail access makes commuting across Calgary
                straightforward. Whether you&apos;re buying your first townhome or upgrading to an
                estate-sized lake lot, a REALTOR® who knows Auburn Bay&apos;s streets, HOA rules, and
                current inventory is your best asset.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Auburn Bay real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the average home price in Auburn Bay Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Auburn Bay home prices vary by type. Detached single-family homes typically range
                      from the high $500,000s to over $900,000, while townhomes and condos can start
                      in the $300,000–$450,000 range. Lake access and proximity to the clubhouse
                      influence pricing significantly. A local REALTOR® can provide a current
                      comparative market analysis.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Auburn Bay a good place to buy in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Auburn Bay is consistently one of Calgary&apos;s most sought-after lake communities.
                      Residents enjoy year-round access to the private 43-acre lake — swimming and
                      paddleboarding in summer, skating in winter. The community has strong schools,
                      walkable amenities at Auburn Station, and easy access to Stoney Trail. Demand
                      remains high, which supports long-term property values.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — AUBURN BAY
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
