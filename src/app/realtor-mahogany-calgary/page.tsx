import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Mahogany REALTOR® | Find a Real Estate Agent in Mahogany Calgary',
  description:
    'Connect with a REALTOR® who specializes in Mahogany, Calgary. Expert guidance on Calgary\'s largest private lake community — detached homes $620K–$1.4M. Free matching, no obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-mahogany-calgary' },
  openGraph: {
    title: 'Mahogany REALTOR® | Calgary Realtor Finder',
    description: 'Find a licensed REALTOR® specializing in Mahogany real estate. Calgary\'s premier lake community.',
    url: 'https://calgaryrealtorfinder.ca/realtor-mahogany-calgary',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Mahogany',
    url: 'https://calgaryrealtorfinder.ca/realtor-mahogany-calgary',
    areaServed: 'Mahogany, Calgary, AB',
    priceRange: 'Free',
    description: 'Free REALTOR® matching service for buyers and sellers in Mahogany, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-mahogany-calgary',
    areaServed: 'Mahogany, Calgary, AB',
    description: 'Licensed REALTOR® specializing in Mahogany and SE Calgary real estate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the average home price in Mahogany Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mahogany detached homes typically range from $620,000 to over $1.4 million, with lake-access lots and estate-tier builds at the higher end. Townhomes and condos start around $350,000–$550,000. Mahogany Village Market and Westman Village (the 17-storey mixed-use tower) have added premium condominium inventory. Prices have risen steadily given the limited supply of Calgary lake-community properties.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Mahogany a good investment in Calgary real estate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mahogany is one of Calgary's strongest-performing communities by resale value. The 63-acre lake — Calgary's largest private lake — is a finite amenity that drives perpetual demand. The community has won multiple BILD Calgary awards as Community of the Year. Proximity to Seton's South Health Campus (hospital) and YMCA further anchors long-term desirability.",
        },
      },
    ],
  },
])

export default function MahoganyRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · PREMIER LAKE COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Mahogany, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/calgary-se-realtors" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">Mahogany</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Mahogany is Calgary&apos;s largest private lake community. Work with a REALTOR® who knows this market inside out — lake lots, Westman Village condos, and everything between.
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
                Mahogany is the jewel of Calgary&apos;s SE quadrant — a master-planned community built
                around a 63-acre private lake, the largest of its kind in Calgary. Developed by Hopewell
                Residential starting in 2007, the community spans over 1,000 acres east of 52nd Street SE
                and south of 130th Avenue. The beach club, 22 km of pathways, and four seasons of lake
                recreation (paddleboarding in summer, skating in winter) make Mahogany a lifestyle
                community as much as a residential one.
              </p>
              <p>
                The housing mix is deliberately varied. Estate-tier detached homes on lake-access lots
                sit alongside street-front townhomes and the high-rise condominium towers of Westman
                Village, which includes concierge services, an indoor pool, and commercial retail at
                street level. Mahogany Village Market provides everyday amenities, and the adjacent
                community of Seton (immediately west) adds South Health Campus, the world&apos;s largest
                YMCA, and a full urban district with cinema and dining. Buyers here range from young
                families priced out of inner-city lake communities to executives seeking larger lot sizes
                than anything the inner ring offers.
              </p>
              <p>
                Sellers in Mahogany benefit from persistent demand and limited inventory — particularly
                for lake-access lots, which represent a finite supply. Homes typically receive multiple
                offers when priced correctly in spring and fall market windows. A REALTOR® who tracks
                Mahogany&apos;s micro-market — understanding which streets carry a lake premium and when to
                hold versus when to move — is essential to maximizing your outcome. The benchmark detached
                price in Mahogany consistently runs 10–18% above the Calgary SE average.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Mahogany real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is the average home price in Mahogany Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Mahogany detached homes typically range from $620,000 to over $1.4 million, with
                      lake-access lots and estate-tier builds at the higher end. Townhomes and condos
                      start around $350,000–$550,000. Prices have risen steadily given the limited
                      supply of Calgary lake-community properties and the continued draw of Seton&apos;s
                      urban amenities next door.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Is Mahogany a good investment in Calgary real estate?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Mahogany has won BILD Calgary&apos;s Community of the Year award multiple times and
                      consistently outperforms the city&apos;s average in resale price growth. The 63-acre
                      lake is a permanently finite amenity — no other community can replicate it.
                      South Health Campus and the Seton YMCA anchor long-term population growth in the
                      surrounding area, which sustains buyer demand for the foreseeable future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — MAHOGANY
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
              Also popular with buyers near Mahogany
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-auburn-bay-calgary', name: 'Auburn Bay', zone: 'Calgary SE · Lake Community', blurb: 'A 43-acre private lake and established amenities at Auburn Station. Strong resale demand and a range of housing types.' },
                { href: '/realtor-seton-calgary', name: 'Seton', zone: 'Calgary SE · Urban District', blurb: "Calgary's newest urban district with South Health Campus, the world's largest YMCA, and a full commercial centre." },
                { href: '/realtor-cranston-calgary', name: 'Cranston', zone: 'Calgary SE · Escarpment Views', blurb: 'Bow River escarpment views, Fish Creek Park access, and the luxury Riverstone phase for move-up buyers.' },
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
