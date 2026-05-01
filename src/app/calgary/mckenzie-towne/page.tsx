import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import RelatedCommunities from '@/components/RelatedCommunities'

export const metadata: Metadata = {
  title: 'McKenzie Towne Houses for Sale | Calgary REALTOR® | Calgary Realtor Finder',
  description:
    'Searching for McKenzie Towne houses for sale in Calgary SE? Connect with a licensed REALTOR® who knows McKenzie Towne inside out. Free matching, no obligation.',
}

const pageSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Calgary Realtor Finder — McKenzie Towne',
    url: 'https://calgaryrealtorfinder.ca/calgary/mckenzie-towne',
    areaServed: 'McKenzie Towne, Calgary, AB',
    priceRange: 'Free',
    description: 'Find licensed REALTORS® specializing in McKenzie Towne, Calgary.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are McKenzie Towne homes for sale typically priced at?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'McKenzie Towne offers a broad price range. Starter townhomes and row homes begin in the $350,000–$450,000 range, while detached single-family homes commonly list between $500,000 and $750,000. Larger estate homes and walkout lots can exceed $800,000. The community\'s variety of housing types makes it accessible to a wide range of budgets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is McKenzie Towne Calgary known for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "McKenzie Towne is known for its traditional new-urbanist design — think front porches, rear-lane garages, and a walkable village high street along High Street SE. The community was designed to foster neighbourly connection, and it shows in the architecture and the tight-knit feel of its residents. Schools, parks, and the 130th Avenue commercial corridor are all close by.",
        },
      },
    ],
  },
])

export default function McKenzieTownePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageSchema }} />
      <main className="bg-background">
        <Navbar />

        <section className="bg-primary py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="font-inter text-accent text-xs tracking-widest uppercase">CALGARY SE · NEW URBANISM</p>
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Find a REALTOR® in McKenzie Towne, Calgary
            </h1>
            <nav aria-label="breadcrumb" className="mt-3">
              <span className="font-inter text-white/50 text-sm">
                <Link href="/#neighbourhood-grid" className="hover:text-white/80 transition-colors">Calgary SE</Link>
                {' › '}
                <span className="text-white/70">McKenzie Towne</span>
              </span>
            </nav>
            <p className="font-inter text-white/70 text-lg mt-4 max-w-xl leading-relaxed">
              Connect with a licensed REALTOR® who knows McKenzie Towne inside out. Free matching, no obligation.
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
                McKenzie Towne is a landmark planned community in Calgary&apos;s deep southeast, built on
                new-urbanist principles that prioritize walkability, front porches, and a true
                neighbourhood high street. Developed by Carma in the late 1990s, McKenzie Towne was
                one of Canada&apos;s most celebrated suburban design experiments — and it still stands out
                decades later. Residents walk to the bakery, the café, and the local pharmacy along
                High Street SE in a way that most Calgary suburbs simply can&apos;t replicate.
              </p>
              <p>
                Housing in McKenzie Towne ranges from compact row homes and Victorian-influenced
                semis to larger detached homes on tree-lined streets. Rear-lane designs hide garages
                from the streetscape, keeping the front of homes pedestrian-friendly. The community
                is mature enough that the trees are established and schools are well-rated — including
                McKenzie Towne School and St. Albert the Great — making it popular with families
                making a considered long-term purchase.
              </p>
              <p>
                The 130th Avenue commercial strip borders McKenzie Towne to the north, providing
                access to big-box retail, restaurants, and a Cineplex. Deerfoot Trail and Stoney Trail
                are both accessible within minutes, making commutes across Calgary manageable. For
                buyers seeking character and community feel at SE Calgary prices, McKenzie Towne
                consistently delivers — and the right REALTOR® will know which streets and lot types
                hold their value best.
              </p>

              <div className="mt-10">
                <h2 className="font-playfair text-2xl text-primary font-bold mb-6">
                  Common questions about McKenzie Towne real estate
                </h2>
                <div className="space-y-6">
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What are McKenzie Towne homes for sale typically priced at?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      McKenzie Towne offers a broad price range. Starter townhomes and row homes begin
                      in the $350,000–$450,000 range, while detached single-family homes commonly list
                      between $500,000 and $750,000. Larger estate homes and walkout lots can exceed
                      $800,000. The community&apos;s variety of housing types makes it accessible to a wide
                      range of budgets.
                    </p>
                  </div>
                  <div className="border border-charcoal/10 rounded-sm p-6 bg-white">
                    <h3 className="font-playfair text-lg text-primary font-semibold">
                      What is McKenzie Towne Calgary known for?
                    </h3>
                    <p className="font-inter text-charcoal/70 text-sm mt-3 leading-relaxed">
                      McKenzie Towne is known for its traditional new-urbanist design — think front
                      porches, rear-lane garages, and a walkable village high street along High Street
                      SE. The community was designed to foster neighbourly connection, and it shows in
                      the architecture and the tight-knit feel of its residents. Schools, parks, and
                      the 130th Avenue commercial corridor are all close by.
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

        <RelatedCommunities slug="mckenzie-towne" />

        <Footer />
      </main>
    </>
  )
}
