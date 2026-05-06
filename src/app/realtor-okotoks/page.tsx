import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Okotoks REALTOR® | Find a Real Estate Agent in Okotoks Alberta',
  description:
    'Find a REALTOR® who specializes in Okotoks, Alberta. Small-town feel, lower property taxes than Calgary, and strong schools — detached homes $430K–$750K. Free matching, no obligation.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-okotoks' },
  openGraph: {
    title: 'Okotoks REALTOR® | Calgary Realtor Finder',
    description: 'Get matched with a licensed REALTOR® specializing in Okotoks real estate — 25 km south of Calgary with small-town character and lower property taxes.',
    url: 'https://calgaryrealtorfinder.ca/realtor-okotoks',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Okotoks',
    url: 'https://calgaryrealtorfinder.ca/realtor-okotoks',
    areaServed: 'Okotoks, Alberta',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Okotoks, Alberta.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-okotoks',
    areaServed: 'Okotoks, Alberta',
    description: 'Licensed REALTOR® serving Okotoks and the Calgary metro area.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Okotoks Alberta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Okotoks detached homes typically range from $430,000 to $750,000 depending on size, neighbourhood, and age. Semi-detached and townhomes start around $250,000–$400,000. Okotoks generally offers 10–20% more house per dollar than comparable Calgary SE communities like McKenzie Towne or Auburn Bay. The tradeoff is a 25 km highway commute to Calgary — typically 25–35 minutes by car to Calgary\'s south end.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are property taxes lower in Okotoks than Calgary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Okotoks property tax rates have historically been lower than Calgary's on a per-dollar-of-assessment basis, partly because Okotoks is a town rather than a city with the associated overhead. Additionally, Okotoks is in Foothills County rather than the City of Calgary, and provincial school tax applies similarly in both jurisdictions. Buyers moving from Calgary to Okotoks should request a specific comparison from their REALTOR® based on the assessed values of homes they're considering.",
        },
      },
    ],
  },
])

export default function OkotoksRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">SOUTH OF CALGARY · SMALL TOWN · FOOTHILLS COUNTY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Okotoks REALTOR® — Small Town Value, 25 km South of Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/alberta-cities" className="hover:text-white/80 transition-colors">Alberta Communities</Link>
                {' › '}
                <span className="text-white/70">Okotoks</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Okotoks delivers more home per dollar, a genuine small-town community feel,
              and lower property taxes than Calgary — with a commute most Calgary SE residents
              would recognize. Find a REALTOR® who knows this market.
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
                Okotoks sits 25 km south of Calgary along the Sheep River in Foothills County —
                close enough for a daily Calgary commute, distant enough to deliver a genuinely
                different quality of life. The town&apos;s population of approximately 35,000 is large
                enough to support full-service amenities (hospital, recreation centre, Canadian Tire,
                Sobeys, Walmart) while small enough that residents reliably know their neighbours.
                Okotoks has been among Alberta&apos;s fastest-growing municipalities on a percentage basis
                for much of the past two decades, driven by Calgary residents seeking affordability
                and lifestyle without relocating to another city.
              </p>
              <p>
                The housing stock in Okotoks spans everything from mature homes in the original
                downtown-adjacent neighbourhoods (D&apos;Arcy Ranch, Cimarron, Air Ranch) to actively
                developing new communities like Drake Landing, Wedderburn, and Mountainview.
                Detached homes run from $430,000 to $750,000 — typically 10–20% more house per
                dollar than comparable Calgary SE communities like McKenzie Towne or Auburn Bay.
                For buyers who have been shopping in Calgary&apos;s established SE and finding themselves
                priced out of their target specifications, Okotoks often produces the home they
                actually want at a price that works.
              </p>
              <p>
                Okotoks schools are highly regarded — École Okotoks (French immersion), Meadow
                Ridge Elementary, Sheep River Elementary, and multiple faith-based options all
                operate within the community. The Okotoks Recreation Centre provides full aquatics
                and fitness. The Big Rock trail network along the Sheep River gives residents a
                genuine outdoor corridor that city communities can&apos;t replicate. Buyers from Calgary
                who prioritize outdoor lifestyle — cycling, walking, river access — find Okotoks
                delivers it more readily than most urban SE neighbourhoods.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Okotoks real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Okotoks?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $430,000 to $750,000. Semi-detached and townhomes
                      start around $250,000–$400,000. Okotoks typically offers 10–20% more house per
                      dollar than comparable Calgary SE communities. The commute to Calgary&apos;s south
                      end is 25–35 minutes by car — comparable to commuting from Calgary SE to downtown.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      Are property taxes lower in Okotoks than Calgary?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Okotoks tax rates have historically run lower than Calgary&apos;s on a per-dollar-of-
                      assessment basis. Buyers should request a specific comparison from their REALTOR®
                      based on properties under consideration — the difference is real but varies by
                      assessed value and changes annually with each municipality&apos;s budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — OKOTOKS
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
              Also considering these communities?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { href: '/realtor-airdrie', name: 'Airdrie', zone: 'North of Calgary · Fast Growing', blurb: "Canada's fastest-growing city — 30 km north of Calgary with lower prices and new construction dominant." },
                { href: '/realtor-cochrane', name: 'Cochrane', zone: 'West of Calgary · Mountain Views', blurb: 'Foothills character town 30 km west of Calgary. Mountain views, arts community, and growing new suburbs.' },
                { href: '/realtor-mckenzie-towne-calgary', name: 'McKenzie Towne', zone: 'Calgary SE · Established', blurb: "Calgary SE's high-volume community with character architecture — the closest Calgary equivalent to Okotoks pricing." },
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
