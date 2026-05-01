import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Canyon Meadows Homes for Sale Calgary | REALTOR® Match | Calgary Realtor Finder',
  description:
    'Browse Canyon Meadows homes for sale in Calgary SW. Get matched with a licensed REALTOR® who knows this established community. Free service, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Canyon Meadows',
    url: 'https://calgaryrealtorfinder.ca/calgary/canyon-meadows',
    areaServed: 'Canyon Meadows, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Canyon Meadows, Calgary SW.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What type of homes are for sale in Canyon Meadows Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Canyon Meadows has a mature housing stock dominated by bungalows, bi-levels, and two-storey detached homes built primarily from the 1960s through the 1980s. Many properties feature large lots with mature trees, and the area is popular with buyers who want to renovate or build out. Infill development has also brought newer custom homes to some streets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Canyon Meadows Calgary a good neighbourhood?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Canyon Meadows is a well-established SW Calgary community with excellent access to Fish Creek Provincial Park and the Canyon Meadows Golf & Country Club. The neighbourhood is quiet, family-friendly, and close to Anderson Road's commercial strip. Its mature trees, large lots, and proximity to natural amenities make it a perennial favourite for buyers seeking established SW Calgary character.",
        },
      },
    ],
  },
])

export default function CanyonMeadowsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · ESTABLISHED COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Canyon Meadows, Calgary
            </h1>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who knows this established SW Calgary community. Free, no obligation.
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
                Canyon Meadows is one of Calgary&apos;s most established SW communities, developed
                primarily during the 1960s through the early 1980s. Situated west of Macleod Trail
                and north of Fish Creek Provincial Park, the neighbourhood is defined by mature
                boulevard trees, generous lot sizes, and the kind of architectural variety that only
                comes with decades of individual ownership. Bungalows, split-levels, and two-storey
                detached homes sit alongside more recent infill builds on oversized lots.
              </p>
              <p>
                The Canyon Meadows Golf &amp; Country Club anchors the community&apos;s southwest corner and
                gives the neighbourhood a peaceful, parklike quality that newer communities on the
                suburban fringe simply can&apos;t replicate. Fish Creek Provincial Park — one of the
                largest urban parks in North America — borders the neighbourhood to the south, offering
                residents immediate access to hundreds of kilometres of pathways, cycling trails, and
                naturalized river habitat. This proximity to green space is a primary draw for buyers.
              </p>
              <p>
                Anderson Road provides everyday commercial access — grocery stores, pharmacies,
                restaurants — and the Canyon Meadows CTrain station on the Red Line connects residents
                to downtown Calgary without needing a car. For buyers seeking a mature, leafy SW
                Calgary neighbourhood with strong transit access and walkable green space, Canyon
                Meadows is a compelling choice. An experienced local REALTOR® will help you identify
                the best streets and lot types within the community.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Canyon Meadows real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What type of homes are for sale in Canyon Meadows Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Canyon Meadows has a mature housing stock dominated by bungalows, bi-levels, and
                      two-storey detached homes built primarily from the 1960s through the 1980s. Many
                      properties feature large lots with mature trees, and the area is popular with
                      buyers who want to renovate or build out. Infill development has also brought
                      newer custom homes to some streets.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Canyon Meadows Calgary a good neighbourhood?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Canyon Meadows is a well-established SW Calgary community with excellent access
                      to Fish Creek Provincial Park and the Canyon Meadows Golf &amp; Country Club. The
                      neighbourhood is quiet, family-friendly, and close to Anderson Road&apos;s commercial
                      strip. Its mature trees, large lots, and proximity to natural amenities make it a
                      perennial favourite for buyers seeking established SW Calgary character.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — CANYON MEADOWS
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
