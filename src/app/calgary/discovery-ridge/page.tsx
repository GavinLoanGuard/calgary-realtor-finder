import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Discovery Ridge Homes for Sale Calgary | REALTOR® | Calgary Realtor Finder',
  description:
    'Searching for Discovery Ridge real estate in Calgary? Get matched with a licensed REALTOR® who specializes in this sought-after SW community. Free, no obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary/discovery-ridge',
  },
  openGraph: {
    title: 'Discovery Ridge Homes for Sale Calgary | Calgary Realtor Finder',
    description:
      'Searching for Discovery Ridge real estate in Calgary? Get matched with a licensed REALTOR® who specializes in this sought-after SW community. Free, no obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary/discovery-ridge',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Discovery Ridge Calgary — Calgary Realtor Finder' }],
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Discovery Ridge',
    url: 'https://calgaryrealtorfinder.ca/calgary/discovery-ridge',
    areaServed: 'Discovery Ridge, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Discovery Ridge, Calgary SW.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Discovery Ridge Calgary unique?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Discovery Ridge is one of Calgary's most distinctive communities because it backs directly onto Griffith Woods Park — a protected 94-hectare natural area along the Elbow River. Many homes are surrounded by mature aspen and cottonwood forest, giving the neighbourhood a secluded, nature-immersed character. Deer, foxes, and eagles are regular sights. The community feels miles from the city while being just 20 minutes from downtown.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are Discovery Ridge Calgary homes for sale typically listed at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Discovery Ridge is a premium SW Calgary community, and home prices reflect that. Detached single-family homes typically list between $800,000 and $1.5 million, with backing-park estate properties occasionally exceeding $2 million. It's one of Calgary's smaller, more exclusive communities, so inventory is limited and well-priced properties tend to move quickly.",
        },
      },
    ],
  },
])

export default function DiscoveryRidgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · ELBOW RIVER VALLEY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Discovery Ridge, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Discovery Ridge</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who specializes in this sought-after SW community. Free, no obligation.
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
                Discovery Ridge occupies a unique position in Calgary&apos;s residential landscape — a
                small, intentionally low-density community developed in the early 2000s that backs
                directly onto Griffith Woods Park, a protected 94-hectare natural area along the Elbow
                River. The result is a neighbourhood where many homes are surrounded by mature forest,
                where wildlife walks through back gardens, and where the pace of life feels genuinely
                removed from the city. Yet downtown Calgary is only about 20 minutes away via the ring
                road or Sarcee Trail.
              </p>
              <p>
                The housing stock in Discovery Ridge is predominantly large detached single-family homes
                — the community was built for the move-up and executive market. You won&apos;t find many
                townhomes or condos here. Many properties have walkout basements backing onto the park
                or the naturalized pathways that wind through the community. Landscaping is carefully
                managed to preserve the forest character, and the community association is active in
                maintaining the natural environment.
              </p>
              <p>
                Discovery Ridge is one of Calgary&apos;s smaller prestige communities, which means inventory
                is often tight. When a property backs onto Griffith Woods becomes available, it rarely
                lasts long. West Springs and Cougar Ridge are nearby alternatives for buyers who want
                the West Calgary lifestyle at different price points. For Discovery Ridge specifically,
                working with a REALTOR® who monitors the community&apos;s limited inventory closely is
                essential — being ready to move quickly is often the difference between securing a
                home and watching it sell to someone else.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Discovery Ridge real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What makes Discovery Ridge Calgary unique?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Discovery Ridge is one of Calgary&apos;s most distinctive communities because it backs
                      directly onto Griffith Woods Park — a protected 94-hectare natural area along the
                      Elbow River. Many homes are surrounded by mature aspen and cottonwood forest,
                      giving the neighbourhood a secluded, nature-immersed character. Deer, foxes, and
                      eagles are regular sights. The community feels miles from the city while being
                      just 20 minutes from downtown.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are Discovery Ridge Calgary homes for sale typically listed at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Discovery Ridge is a premium SW Calgary community, and home prices reflect that.
                      Detached single-family homes typically list between $800,000 and $1.5 million,
                      with backing-park estate properties occasionally exceeding $2 million. It&apos;s one
                      of Calgary&apos;s smaller, more exclusive communities, so inventory is limited and
                      well-priced properties tend to move quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — DISCOVERY RIDGE
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="discovery-ridge" />

        <Footer />
      </main>
    </>
  )
}
