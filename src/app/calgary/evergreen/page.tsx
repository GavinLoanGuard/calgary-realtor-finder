import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Evergreen Calgary Homes for Sale | REALTOR® Match | Calgary Realtor Finder',
  description:
    'Looking for houses for sale in Evergreen Calgary SW? Get matched with a licensed REALTOR® who knows this established Fish Creek community. Free, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Evergreen',
    url: 'https://calgaryrealtorfinder.ca/calgary/evergreen',
    areaServed: 'Evergreen, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Evergreen, Calgary SW.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Evergreen Calgary known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Evergreen is known for its direct access to Fish Creek Provincial Park — one of Canada's largest urban parks — and its established, family-friendly character. The community has mature landscaping, good schools, and is more affordably priced than newer SW Calgary communities.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are homes for sale in Evergreen Calgary priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Detached homes in Evergreen Calgary typically range from the low $500,000s to around $750,000 depending on size and condition. Townhomes and condos offer more affordable entry points starting around $300,000–$400,000.',
        },
      },
    ],
  },
])

export default function EvergreenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · FISH CREEK COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Evergreen, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Evergreen</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who knows this established Fish Creek community. Free, no obligation.
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
                Evergreen is an established SW Calgary community that borders Fish Creek Provincial Park
                along its northern and eastern edges — giving residents direct trail access into one of
                Canada&apos;s largest urban parks without ever getting in a car. The community was developed
                primarily in the late 1990s and 2000s and has the settled, mature character that comes
                with decades of family ownership: established trees, renovated kitchens, and neighbourly
                streets where people know each other.
              </p>
              <p>
                The housing stock in Evergreen spans a useful range. Detached two-storey and bi-level
                homes make up the majority of the community, with a number of townhome and condo complexes
                concentrated near the community&apos;s major roads providing more affordable entry points.
                This variety makes Evergreen accessible to a broader range of buyers than many of its
                nearby SW comparables. Schools are well-established — including Evergreen School,
                Bishop O&apos;Byrne High School, and Dr. E.P. Scarlett High School — and the community
                association is active with sports programs and events.
              </p>
              <p>
                Macleod Trail is Evergreen&apos;s main commercial artery, with a full suite of retail, grocery,
                and dining along Shawville Boulevard and the Shawnessy area to the east. The Shawnessy
                CTrain station on the Red Line provides direct downtown access without a car. For buyers
                weighing Evergreen against Shawnee Slopes or Canyon Meadows, the key difference is
                price: Evergreen generally offers more square footage per dollar while still delivering
                the Fish Creek access that draws buyers to this part of SW Calgary. A REALTOR® who
                knows the Fish Creek corridor will help you understand the trade-offs between these
                adjacent communities.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Evergreen real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Evergreen Calgary known for?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Evergreen is known for its direct access to Fish Creek Provincial Park — one of
                      Canada&apos;s largest urban parks — and its established, family-friendly character.
                      The community has mature landscaping, good schools, and is more affordably priced
                      than newer SW Calgary communities.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are homes for sale in Evergreen Calgary priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes in Evergreen Calgary typically range from the low $500,000s to
                      around $750,000 depending on size and condition. Townhomes and condos offer more
                      affordable entry points starting around $300,000–$400,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — EVERGREEN
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="evergreen" />

        <Footer />
      </main>
    </>
  )
}
