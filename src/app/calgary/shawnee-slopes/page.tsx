import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'Shawnee Slopes Homes for Sale Calgary | REALTOR® | Calgary Realtor Finder',
  description:
    'Looking for homes for sale in Shawnee Slopes Calgary SW? Get matched with a licensed REALTOR® who knows this Fish Creek community. Free, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — Shawnee Slopes',
    url: 'https://calgaryrealtorfinder.ca/calgary/shawnee-slopes',
    areaServed: 'Shawnee Slopes, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in Shawnee Slopes, Calgary SW.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Shawnee Slopes Calgary known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Shawnee Slopes is known for its direct access to Fish Creek Provincial Park and the Shawnee Slopes Golf Course, its quiet, established streets, and its premium location in Calgary's deep south. The community is small and exclusive by Calgary standards, with larger estate homes on generous lots. Many properties back onto the park or the golf course, offering privacy and green space access that are hard to find elsewhere in the city.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are Shawnee Slopes homes for sale priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shawnee Slopes is one of south Calgary\'s most premium communities. Homes typically list from $900,000 to well over $2 million for estate properties backing onto Fish Creek or the golf course. The community attracts executive buyers, move-up families, and buyers downsizing from larger acreages who still want a prestige address with park access.',
        },
      },
    ],
  },
])

export default function ShawneeSlopesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SW · FISH CREEK COMMUNITY</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in Shawnee Slopes, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SW</Link>
                {' › '}
                <span className="text-white/70">Shawnee Slopes</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Get matched with a licensed REALTOR® who knows this Fish Creek community. Free, no obligation.
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
                Shawnee Slopes is a small, prestigious community tucked into Calgary&apos;s deep south,
                bordered by Fish Creek Provincial Park to the north and the Shawnee Slopes Golf Course
                along its southern and western edges. The community was developed in the 1980s and
                early 1990s as an estate neighbourhood, and that character has been carefully
                maintained. The lots are large, the homes are substantial, and the streets are quiet
                — it&apos;s the kind of neighbourhood where people tend to stay for decades.
              </p>
              <p>
                Many of the most coveted properties in Shawnee Slopes back directly onto Fish Creek
                Provincial Park — meaning your backyard opens onto kilometres of forested ravine,
                pathways, and river habitat. Others back onto the golf course. These premium backing
                lots are what drive Shawnee Slopes&apos; reputation as one of south Calgary&apos;s most
                desirable addresses. The Shawnee Slopes Golf Course is a respected public course and
                a genuine community amenity.
              </p>
              <p>
                The community sits off Macleod Trail south of Anderson Road, with convenient access
                to the South CTrain terminus at Shawnessy and the extensive retail along Shawville
                Boulevard. Canyon Meadows and Evergreen are neighbouring communities for buyers who
                want the Fish Creek area at a different price point. Shawnee Slopes is genuinely
                exclusive — inventory is limited, and properties backing onto the park are rare. A
                REALTOR® who specializes in south Calgary&apos;s estate market will help you move quickly
                when the right property surfaces.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about Shawnee Slopes real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is Shawnee Slopes Calgary known for?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Shawnee Slopes is known for its direct access to Fish Creek Provincial Park and
                      the Shawnee Slopes Golf Course, its quiet, established streets, and its premium
                      location in Calgary&apos;s deep south. The community is small and exclusive by
                      Calgary standards, with larger estate homes on generous lots. Many properties
                      back onto the park or the golf course, offering privacy and green space access
                      that are hard to find elsewhere in the city.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are Shawnee Slopes homes for sale priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      Shawnee Slopes is one of south Calgary&apos;s most premium communities. Homes
                      typically list from $900,000 to well over $2 million for estate properties
                      backing onto Fish Creek or the golf course. The community attracts executive
                      buyers, move-up families, and buyers downsizing from larger acreages who still
                      want a prestige address with park access.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <div className="sticky top-24">
                <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest mb-4">
                  GET MATCHED — SHAWNEE SLOPES
                </p>
                <LeadForm variant="sidebar" />
              </div>
            </div>
          </div>
        </section>

        <RelatedCommunities slug="shawnee-slopes" />

        <Footer />
      </main>
    </>
  )
}
