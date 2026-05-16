import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Cranston Calgary Homes for Sale | Find a REALTOR® | Calgary Realtor Finder',
  description:
    'Find homes for sale in Cranston Calgary SE. Get matched with a licensed Calgary REALTOR® who specializes in Cranston and Cranston Riverstone. Free, no obligation.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/calgary/cranston',
  },
  openGraph: {
    title: 'Cranston Calgary Homes for Sale | Calgary Realtor Finder',
    description:
      'Find homes for sale in Cranston Calgary SE. Get matched with a licensed Calgary REALTOR® who specializes in Cranston and Cranston Riverstone. Free, no obligation.',
    url: 'https://calgaryrealtorfinder.ca/calgary/cranston',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Cranston Calgary — Calgary Realtor Finder' }],
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Cranston',
    url: 'https://calgaryrealtorfinder.ca/calgary/cranston',
    areaServed: 'Cranston, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Cranston and Cranston Riverstone, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Cranston Riverstone in Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cranston Riverstone is a newer upscale section of the broader Cranston community, situated along the Bow River escarpment in Calgary SE. Developed by Brookfield Residential, Riverstone features larger estate lots, executive homes, and dramatic views of the river valley and Fish Creek Provincial Park. It's considered one of Calgary's most scenic residential settings, with many homes backing directly onto ravine pathways.",
        },
      },
      {
        '@type': 'Question',
        name: 'Are there new builds for sale in Cranston Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cranston Riverstone continues to have new construction activity, particularly in the estate sections closest to the river. Brookfield Residential and select custom builders offer new builds in Cranston Riverstone at a range of price points, from around $700,000 into the multi-millions for custom river-view estates. A REALTOR® familiar with the area can connect you with both resale and new-build options.',
        },
      },
    ],
  },
])

export default function CranstonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · BOW RIVER ESCARPMENT</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Cranston, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Cranston</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed Calgary REALTOR® who specializes in Cranston and Cranston Riverstone. Free, no obligation.
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
                Cranston is a large, established community in Calgary&apos;s deep SE, bordered by Deerfoot
                Trail to the west, the Bow River to the south, and Fish Creek Provincial Park to the
                east. It was one of the first communities in the area when it launched in the early
                2000s, and it has matured into a well-rounded neighbourhood with schools, parks, a
                recreation centre (Cranston Residents Association), and a complete range of housing
                types from starter condos to executive detached homes.
              </p>
              <p>
                Cranston Riverstone is the community&apos;s crown jewel — a newer, upscale section
                developed by Brookfield Residential along the Bow River escarpment. Homes here
                command premium prices for good reason: many back onto deep ravines, offer panoramic
                river valley views, and provide direct pathway access into Fish Creek and along the
                Bow. Riverstone attracted a wave of move-up buyers from other SE communities who
                wanted the same area at a higher tier of home.
              </p>
              <p>
                The community is well-served by the 130th Avenue commercial corridor and the newer
                Seton Urban District just to the south, which includes a South Health Campus hospital,
                a YMCA, and a growing retail and dining scene. For buyers weighing Cranston against
                Auburn Bay or Mahogany, the key differentiators are the river proximity, the trail
                system, and Cranston&apos;s slightly more established, quieter character. A specialist
                REALTOR® can walk you through both the resale and new-build options in the Riverstone
                phase.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Cranston real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Cranston Riverstone in Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Cranston Riverstone is a newer upscale section of the broader Cranston community,
                      situated along the Bow River escarpment in Calgary SE. Developed by Brookfield
                      Residential, Riverstone features larger estate lots, executive homes, and dramatic
                      views of the river valley and Fish Creek Provincial Park. It&apos;s considered one of
                      Calgary&apos;s most scenic residential settings, with many homes backing directly onto
                      ravine pathways.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Are there new builds for sale in Cranston Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Yes. Cranston Riverstone continues to have new construction activity, particularly
                      in the estate sections closest to the river. Brookfield Residential and select
                      custom builders offer new builds in Cranston Riverstone at a range of price points,
                      from around $700,000 into the multi-millions for custom river-view estates. A
                      REALTOR® familiar with the area can connect you with both resale and new-build
                      options.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — CRANSTON
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="cranston" />

        <Footer />
      </main>
    </>
  )
}
