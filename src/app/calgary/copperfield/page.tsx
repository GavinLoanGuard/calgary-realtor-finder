import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Copperfield Calgary Homes for Sale | REALTOR® Match | Calgary Realtor Finder',
  description:
    'Find homes for sale in Copperfield Calgary SE. Get matched with a licensed REALTOR® who specializes in Copperfield real estate. Free, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Copperfield',
    url: 'https://calgaryrealtorfinder.ca/calgary/copperfield',
    areaServed: 'Copperfield, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Copperfield, Calgary SE.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Copperfield Calgary known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Copperfield is known as one of Calgary SE's most family-friendly and value-oriented communities. Developed in the 2000s, it offers a mix of detached homes, townhomes, and condos at prices that are generally lower than neighbouring Auburn Bay or Mahogany, while still providing easy access to Stoney Trail, Deerfoot Trail, and the amenities of the 130th Avenue corridor.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are homes for sale in Copperfield Calgary typically priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Copperfield is considered a more affordable SE Calgary option. Townhomes typically start in the $350,000–$450,000 range, while detached single-family homes generally list between $450,000 and $650,000. The community offers good value relative to neighbouring lake communities and is popular with first-time buyers and young families.',
        },
      },
    ],
  },
])

export default function CopperfieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · FAMILY COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Copperfield, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Copperfield</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who specializes in Copperfield real estate. Free, no obligation.
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
                Copperfield is a well-established SE Calgary community developed through the 2000s,
                offering one of the more accessible price points among the cluster of communities
                between Deerfoot Trail and Stoney Trail in the southeast. The neighbourhood sits
                directly south of McKenzie Towne and north of Auburn Bay, making it a natural
                consideration for buyers who want proximity to SE Calgary&apos;s amenities without the
                premium attached to lake-access communities. The community is fully built out, with
                mature trees and the settled character of a neighbourhood past its construction phase.
              </p>
              <p>
                Housing in Copperfield spans the typical SE Calgary mix — rear-detached single-family
                homes, front-attached doubles, attached townhomes, and condo buildings at the
                community&apos;s edges. Buyers looking to enter the SE Calgary market find Copperfield
                appealing because the price per square foot is often lower than Auburn Bay or Mahogany
                while the location is comparable. The 130th Avenue commercial corridor along Deerfoot
                Trail provides comprehensive retail, restaurant, and service options within a five-minute
                drive. Copperfield School serves the community, and Joane Cardinal-Schubert High School
                is nearby for secondary students.
              </p>
              <p>
                The community is bookended by strong infrastructure: Stoney Trail provides ring-road
                access to the west, Deerfoot Trail connects north to downtown and south to Okotoks,
                and the Seton Urban District — with its South Health Campus hospital, YMCA, and growing
                retail scene — is just minutes away. For buyers comparing Copperfield with McKenzie Towne
                or Auburn Bay, the core trade-off is value versus amenity: Copperfield typically offers
                more home for the money, while its neighbours offer lake access or a more distinctive
                streetscape. A REALTOR® who knows SE Calgary well can help you model the right balance
                for your budget.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Copperfield real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Copperfield Calgary known for?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Copperfield is known as one of Calgary SE&apos;s most family-friendly and
                      value-oriented communities. Developed in the 2000s, it offers a mix of detached
                      homes, townhomes, and condos at prices that are generally lower than neighbouring
                      Auburn Bay or Mahogany, while still providing easy access to Stoney Trail,
                      Deerfoot Trail, and the amenities of the 130th Avenue corridor.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are homes for sale in Copperfield Calgary typically priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Copperfield is considered a more affordable SE Calgary option. Townhomes
                      typically start in the $350,000–$450,000 range, while detached single-family
                      homes generally list between $450,000 and $650,000. The community offers good
                      value relative to neighbouring lake communities and is popular with first-time
                      buyers and young families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — COPPERFIELD
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="copperfield" />

        <Footer />
      </main>
    </>
  )
}
