import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'McKenzie Towne REALTOR® | Find a Real Estate Agent in McKenzie Towne Calgary',
  description:
    'Find a REALTOR® who specializes in McKenzie Towne, Calgary. Traditional architecture, High Street commercial, and proven resale value — detached homes $440K–$750K. Free matching.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-mckenzie-towne-calgary' },
  openGraph: {
    title: 'McKenzie Towne REALTOR® | Calgary Realtor Finder',
    description: 'Get matched with a licensed REALTOR® specializing in McKenzie Towne real estate. Traditional SE Calgary community with strong transaction volume.',
    url: 'https://calgaryrealtorfinder.ca/realtor-mckenzie-towne-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — McKenzie Towne',
    url: 'https://calgaryrealtorfinder.ca/realtor-mckenzie-towne-calgary',
    areaServed: 'McKenzie Towne, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in McKenzie Towne, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-mckenzie-towne-calgary',
    areaServed: 'McKenzie Towne, Calgary, AB',
    description: 'Licensed REALTOR® specializing in McKenzie Towne and SE Calgary with recent sold properties in the community.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in McKenzie Towne Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "McKenzie Towne offers some of SE Calgary's best value. Detached single-family homes range from $440,000 to $750,000 depending on size and sub-neighbourhood (High Park, Inverness, Preswick, Elgin). Semi-detached and townhomes start around $320,000. The community's older inventory — built from the mid-1990s through mid-2000s — means some homes have been recently renovated, which can offer good value for buyers who do their due diligence.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is McKenzie Towne High Street?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "McKenzie Towne's High Street is the community's main commercial spine — a pedestrian-friendly strip of independent shops, restaurants, a pharmacy, and services. It's modelled on traditional town centre design with front porches and storefronts at street level. The High Street concept was integral to the community's original new urbanist planning and is one of the features that distinguishes McKenzie Towne from conventional suburban developments of the same era.",
        },
      },
    ],
  },
])

export default function McKenzieTowneRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · NEW URBANISM · HIGH VOLUME</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              McKenzie Towne REALTOR® — SE Calgary&apos;s Highest Transaction Volume Community
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-se-realtors" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">McKenzie Towne</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Front porches, back lanes, and a walkable High Street commercial district.
              McKenzie Towne moves more properties than almost any SE community — work with an agent who knows it.
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
                McKenzie Towne was one of Canada&apos;s first large-scale new urbanist communities
                when Carma began development in the mid-1990s. The design philosophy — narrower
                streets, front porches, back alleys, and a walkable commercial core (High Street) —
                was a deliberate departure from the cul-de-sac suburbs of the era, and it has aged
                remarkably well. Today McKenzie Towne is one of SE Calgary&apos;s most active real
                estate markets by transaction count, with consistent buyer demand across all price
                points from townhomes to detached estates in Inverness.
              </p>
              <p>
                The community is divided into several sub-neighbourhoods: High Park (closest to
                130th Avenue commercial corridor), Inverness (the original and most architecturally
                distinctive village), McKenzie Lake (shared name, separate lake community directly
                east), Preswick, and Elgin. Each sub-neighbourhood has its own character, price
                range, and buyer profile. High Park attracts first-time buyers and investors with
                its attached housing stock. Inverness draws move-up buyers seeking character
                detached homes with the original front-porch streetscape. Preswick and Elgin offer
                larger lots and more recent builds at the higher end of the McKenzie Towne range.
              </p>
              <p>
                Recent sold data — including a $599,000 detached sale in McKenzie Towne — reflects
                strong demand at the mid-range price point. Sellers in McKenzie Towne tend to do
                well when homes are properly staged to highlight original character features and
                updated kitchens/baths. The High Street commercial core adds lifestyle appeal that
                is genuinely difficult to replicate in newer SE communities. A REALTOR® with
                McKenzie Towne transaction history understands the premium buyers will pay for
                Inverness front-porch homes versus similar square footage elsewhere in the community.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  McKenzie Towne real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in McKenzie Towne?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $440,000 to $750,000 depending on sub-neighbourhood
                      and condition. Semi-detached and townhomes start around $320,000. The community&apos;s
                      1990s–2000s vintage means some homes have been renovated, which can offer value
                      for diligent buyers. Recent sold data includes a $599,000 detached in McKenzie
                      Towne reflecting current mid-market demand.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is McKenzie Towne High Street?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      High Street is McKenzie Towne&apos;s pedestrian-friendly commercial spine — shops,
                      restaurants, a pharmacy, and independent services at street level. Designed as
                      a traditional town centre, it was integral to the community&apos;s new urbanist
                      planning and is one of the features that makes McKenzie Towne genuinely
                      different from conventional suburban developments of the same era.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — MCKENZIE TOWNE
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">NEARBY COMMUNITIES</p>
            <h2 className="font-playfair text-3xl text-primary font-bold mt-2">
              Also popular with McKenzie Towne buyers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-auburn-bay-calgary', name: 'Auburn Bay', zone: 'Calgary SE · Lake Community', blurb: 'A 43-acre private lake and Auburn Station amenities — the natural next step for McKenzie Towne buyers moving up.' },
                { href: '/realtor-mahogany-calgary', name: 'Mahogany', zone: "Calgary SE · Premier Lake", blurb: "Calgary's largest private lake. Estate homes, Westman Village, and Seton's urban amenities right next door." },
                { href: '/realtor-cranston-calgary', name: 'Cranston', zone: 'Calgary SE · Fish Creek Access', blurb: 'Fish Creek Provincial Park access, Riverstone luxury estates, and broad product range from townhomes to escarpment estates.' },
              ].map((c) => (
                <div key={c.href} className="border border-charcoal/10 rounded-sm p-6 bg-white hover:border-accent hover:shadow-sm transition-all">
                  <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest">{c.zone}</p>
                  <h3 className="font-playfair text-xl text-primary font-semibold mt-2">
                    <Link href={c.href} className="hover:text-accent transition-colors">{c.name}</Link>
                  </h3>
                  <p className="font-inter text-charcoal/60 text-sm mt-3 leading-relaxed">{c.blurb}</p>
                  <Link href={c.href} className="font-inter text-accent text-sm font-medium mt-4 inline-block hover:underline">
                    View community →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
