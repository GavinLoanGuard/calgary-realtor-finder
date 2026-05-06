import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Cochrane REALTOR® | Find a Real Estate Agent in Cochrane Alberta',
  description:
    'Find a REALTOR® who specializes in Cochrane, Alberta. Mountain views, foothills character, and a genuine small-town feel — detached homes $480K–$800K, 30 km west of Calgary. Free matching.',
  alternates: { canonical: 'https://calgaryrealtorfinder.ca/realtor-cochrane' },
  openGraph: {
    title: 'Cochrane REALTOR® | Calgary Realtor Finder',
    description: "Get matched with a licensed REALTOR® in Cochrane — Alberta's fastest-growing small town with mountain views and foothills lifestyle 30 km west of Calgary.",
    url: 'https://calgaryrealtorfinder.ca/realtor-cochrane',
  },
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Cochrane',
    url: 'https://calgaryrealtorfinder.ca/realtor-cochrane',
    areaServed: 'Cochrane, Alberta',
    priceRange: 'Free',
    description: 'Free REALTOR® matching for buyers and sellers in Cochrane, Alberta.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nathan Koenigsberg — Calgary Realtor Finder',
    url: 'https://calgaryrealtorfinder.ca/realtor-cochrane',
    areaServed: 'Cochrane, Alberta',
    description: 'Licensed REALTOR® serving Cochrane and the greater Calgary metro area.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are home prices in Cochrane Alberta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cochrane detached homes typically range from $480,000 to $800,000, with newer construction in developing communities (Heartland, Riviera, Sunset Ridge) at the higher end and older town core homes presenting renovation opportunities. Semi-detached and townhomes start around $270,000–$430,000. Cochrane prices are slightly higher than Airdrie on average, reflecting the mountain proximity premium and the town\'s established character that Airdrie\'s new-build suburbs don\'t replicate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Cochrane like compared to Okotoks and Airdrie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cochrane has a distinct character relative to Airdrie and Okotoks. While all three are Calgary commuter towns at comparable distances, Cochrane has the strongest arts and cultural identity — an active arts centre, independent restaurants and retail in a genuine downtown core, and a population that skews toward outdoor recreation enthusiasts (cyclists, hikers, skiers) who value mountain access over urban convenience. Airdrie is newer and more growth-oriented; Okotoks is more family-traditional. Cochrane attracts buyers who want to feel like they've actually left the city.",
        },
      },
    ],
  },
])

export default function CochraneRealtorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">WEST OF CALGARY · FOOTHILLS · MOUNTAIN VIEWS</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Cochrane REALTOR® — Mountain Views and Foothills Character, 30 km From Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
                {' › '}
                <Link href="/alberta-cities" className="hover:text-white/80 transition-colors">Alberta Communities</Link>
                {' › '}
                <span className="text-white/70">Cochrane</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Cochrane has the Rockies on the horizon, a real downtown, and a community that
              feels like it actually moved away from the city. Find a REALTOR® who knows
              Cochrane&apos;s distinct market — old town versus new suburbs versus view lots.
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
                Cochrane sits in the foothills west of Calgary along the Bow River, 30 km from
                the city along Highway 1A or the faster Highway 1 (Trans-Canada). The town has
                grown steadily to approximately 35,000 residents while maintaining something
                that Airdrie has struggled to preserve: a genuine sense of place. The historic
                downtown along Centre Avenue has independent restaurants, a working artist community,
                Cochrane Arts Centre, and a heritage character that new-suburb communities simply
                can&apos;t manufacture. The Rocky Mountains are visible from most of the town, and
                Kananaskis Country is a 30-minute drive.
              </p>
              <p>
                The housing market in Cochrane splits into distinct segments. The older town core
                — Heritage Hills, Cochrane Lakes, and the original Hill neighbourhoods — offers
                character homes from the 1980s and 1990s with larger lots and renovation potential,
                priced from $480,000 to $650,000. Newer developing communities — Heartland, Riviera,
                Sunset Ridge, and Fireside — provide modern construction from $550,000 to $800,000
                for detached homes, with builders including Mattamy, Qualico, and Genesis actively
                building out. View lots overlooking the Bow River valley command premiums of
                $40,000–$80,000 over comparable non-view properties.
              </p>
              <p>
                Cochrane buyers tend to be remote workers or professionals with Calgary downtown
                jobs who have made a lifestyle choice to prioritize environment over commute time.
                The Highway 1A scenic route is slow but beautiful; Highway 1/Stoney Trail is
                faster but adds 5–10 minutes over the scenic alternative. Cochrane is particularly
                popular with cyclists, hikers, and families who ski Kananaskis or Lake Louise
                regularly — the drive to the Kananaskis gate is genuinely half the time from
                Cochrane versus most Calgary neighbourhoods. A REALTOR® who understands Cochrane&apos;s
                community character — not just its price bands — is essential.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Cochrane real estate — common questions
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are home prices in Cochrane Alberta?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Detached homes range from $480,000 to $800,000. Older town core homes present
                      renovation opportunities at the lower end; newer construction in Heartland and
                      Riviera runs $550,000–$800,000. Townhomes start around $270,000–$430,000.
                      View lots commanding the Bow River valley carry $40,000–$80,000 premiums.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Cochrane like compared to Okotoks and Airdrie?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Cochrane has the strongest arts and outdoor recreation identity of the three.
                      An active downtown, independent culture, and mountain access attract buyers
                      who want to actually feel like they&apos;ve left the city. Airdrie is newer and
                      more growth-oriented; Okotoks more family-traditional. Cochrane is for buyers
                      who prioritize lifestyle over square footage per dollar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — COCHRANE
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
                { href: '/realtor-airdrie', name: 'Airdrie', zone: 'North of Calgary · Fast Growing', blurb: "Canada's fastest-growing city — more new construction and lower prices than Cochrane, north of Calgary rather than west." },
                { href: '/realtor-okotoks', name: 'Okotoks', zone: 'South of Calgary · Small Town', blurb: 'Similar small-town feel and Calgary commute distance, south along the foothills rather than west.' },
                { href: '/realtor-discovery-ridge-calgary', name: 'Discovery Ridge', zone: 'Calgary SW · Nature Adjacent', blurb: "For buyers who want nature without leaving Calgary — Discovery Ridge's Griffith Woods access is the city's closest equivalent to Cochrane's lifestyle." },
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
