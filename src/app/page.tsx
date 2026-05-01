import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RealtorProfile from '@/components/RealtorProfile'
import NeighbourhoodTile from '@/components/NeighbourhoodTile'
import PropertyCard from '@/components/PropertyCard'
import ListingsIntentBridge from '@/components/ListingsIntentBridge'
import FAQAccordion from '@/components/FAQAccordion'
import FAQSection from '@/components/FAQSection'
import ToolsTeaser from '@/components/ToolsTeaser'
import NeighbourhoodGrid from '@/components/NeighbourhoodGrid'
import Footer from '@/components/Footer'
import { calgaryNeighbourhoods } from '@/data/neighbourhoods'
import { organizationSchema, nathanSchema, localBusinessSchema, faqSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Find a Calgary REALTOR® | Free Matching Service | Calgary Realtor Finder',
  description:
    'Looking for a Calgary REALTOR®? Our free matching service connects buyers and sellers with licensed Calgary real estate agents who know your neighbourhood. Takes 60 seconds.',
}

const placeholderProperties = [
  {
    badge: 'NEW · 2 DAYS',
    neighbourhood: 'Mahogany',
    price: '$729,000',
    address: '142 Masters Heights SE',
    suburb: 'Mahogany, Calgary SE · T3M 2N7',
    beds: 4,
    baths: 3.5,
    sqft: 2184,
    status: 'NEW' as const,
  },
  {
    badge: 'OPEN SAT 1-3',
    neighbourhood: 'Beltline',
    price: '$439,000',
    address: '#1402, 215 13 Ave SW',
    suburb: 'Beltline, City Centre · T2R 0V1',
    beds: 2,
    baths: 2,
    sqft: 1012,
    status: 'OPEN' as const,
  },
  {
    badge: 'PRICE DROP',
    neighbourhood: 'Tuscany',
    price: '$865,000',
    address: '88 Tuscany Estates Cres NW',
    suburb: 'Tuscany, Calgary NW · T3L 0B5',
    beds: 5,
    baths: 4,
    sqft: 2940,
    status: 'PRICE DROP' as const,
  },
]

const distanceLabels: Record<string, string> = {
  'city-centre': 'CORE',
  airdrie: 'NORTH · 30 MIN',
  cochrane: 'WEST · 40 MIN',
  okotoks: 'SOUTH · 30 MIN',
}

const homepageSchema = JSON.stringify([
  organizationSchema,
  nathanSchema,
  localBusinessSchema('Calgary', 51.0447, -114.0719),
  faqSchema([
    {
      question: 'How many REALTORS® are in Calgary?',
      answer:
        'As of the most recent CREB® count, there are roughly 7,400 licensed REALTORS® serving the Calgary metropolitan area.',
    },
    {
      question: 'How do I find a realtor in Calgary?',
      answer:
        'Use our free matching service. Fill out our form with your neighbourhood, timeline, and budget and we will introduce you to a RECA-licensed REALTOR® who specializes in your area within a few hours.',
    },
    {
      question: 'What does a Calgary realtor cost?',
      answer:
        'Commissions in Alberta are negotiable. Typical residential transactions see total commission between 5% and 7% split between listing and buyer brokerages. Buyers generally pay nothing out of pocket.',
    },
    {
      question: 'Is Calgary Realtor Finder free to use?',
      answer:
        'Yes. Our matching service is completely free for buyers and sellers. We receive a referral fee from the agent only when a transaction closes. There is no obligation to proceed after being matched.',
    },
    {
      question: 'How do I know if a Calgary realtor is licensed?',
      answer:
        'All Alberta REALTORS® are licensed through RECA — the Real Estate Council of Alberta. Search the RECA public registry at reca.ca by agent name to verify license status, brokerage, and disciplinary history.',
    },
  ]),
])

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: homepageSchema }}
      />
      <main className="bg-background">
        <Navbar />

      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Trust Bar */}
      <div className="w-full bg-primary/95 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">22,000+ monthly Calgary realtor searches</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">Licensed REALTORS® only</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">Calgary's local realtor resource</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">Free — no obligation</span>
          </div>
        </div>
      </div>

      {/* Section 3 — Featured Realtor */}
      <RealtorProfile />

      {/* Section 4 — How It Works */}
      <section className="bg-background py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div>
              <p className="font-inter text-accent text-xs tracking-widest uppercase">HOW IT WORKS</p>
              <h2 className="font-playfair text-4xl text-primary font-bold mt-2 max-w-lg">
                Three steps to the right Calgary agent.
              </h2>
            </div>
            <p className="font-inter text-charcoal/50 text-sm lg:text-right max-w-xs shrink-0">
              Most matches happen within a few hours. There's never a fee or obligation to work with
              the agent we introduce.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                step: '01',
                label: 'TELL US',
                heading: 'Tell us what you need.',
                body: 'Fill out our quick form — buying or selling, neighbourhood, timeline, price range. Takes less than a minute.',
              },
              {
                step: '02',
                label: 'WE MATCH',
                heading: 'We match you.',
                body: 'We hand-pick a licensed Calgary REALTOR® who knows your neighbourhood, your price band, and your kind of home.',
              },
              {
                step: '03',
                label: 'YOU MOVE',
                heading: 'Buy or sell with confidence.',
                body: 'Your matched realtor handles the search, negotiation, paperwork, and inspection — start to keys-in-hand.',
              },
            ].map((card) => (
              <div
                key={card.step}
                className="border border-charcoal/10 rounded-sm p-8 bg-white hover:border-accent hover:shadow-md transition-all"
              >
                <p className="font-inter text-charcoal/40 text-xs tracking-widest uppercase">
                  {card.label}
                </p>
                <p className="font-playfair text-5xl font-bold text-accent/30 mt-1">{card.step}</p>
                <h3 className="font-playfair text-xl text-primary font-semibold mt-4">
                  {card.heading}
                </h3>
                <p className="font-inter text-charcoal/60 text-sm mt-3 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Neighbourhood Grid */}
      <section className="bg-background py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-accent text-xs tracking-widest uppercase">BY NEIGHBOURHOOD</p>
          <h2 className="font-playfair text-4xl text-primary font-bold mt-2">
            Find a realtor by Calgary neighbourhood.
          </h2>
          <p className="font-inter text-charcoal/60 text-lg mt-3 max-w-2xl leading-relaxed">
            Calgary's quadrants each have their own market dynamics. Pick where you're looking —
            we'll match you with an agent who works it daily.
          </p>
          <p className="font-inter text-charcoal/60 text-sm mt-4">
            Explore communities:{' '}
            <a href="/calgary/auburn-bay" className="text-accent hover:underline">Auburn Bay</a>{' · '}
            <a href="/calgary/mckenzie-towne" className="text-accent hover:underline">McKenzie Towne</a>{' · '}
            <a href="/calgary/cranston" className="text-accent hover:underline">Cranston</a>{' · '}
            <a href="/calgary/canyon-meadows" className="text-accent hover:underline">Canyon Meadows</a>{' · '}
            <a href="/calgary/west-springs" className="text-accent hover:underline">West Springs</a>{' · '}
            <a href="/calgary/cougar-ridge" className="text-accent hover:underline">Cougar Ridge</a>{' · '}
            <a href="/calgary/discovery-ridge" className="text-accent hover:underline">Discovery Ridge</a>{' · '}
            <a href="/calgary/hamptons" className="text-accent hover:underline">Hamptons</a>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {calgaryNeighbourhoods.map((n) => (
              <NeighbourhoodTile
                key={n.slug}
                name={n.name}
                slug={n.slug}
                quadrant={n.quadrant}
                distanceLabel={distanceLabels[n.slug]}
                imageSrc={n.imageSrc}
                imageAlt={n.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Editorial + FAQ */}
      <section className="bg-background py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-accent text-xs uppercase tracking-widest">RESOURCES</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
            {/* Left — Article */}
            <div>
              <h2 className="font-playfair text-4xl text-primary">
                How to find the right realtor in Calgary.
              </h2>
              <p className="font-inter text-charcoal/60 text-lg mt-3 leading-relaxed">
                A practical guide to choosing an agent who'll actually advocate for you — written
                for first-time buyers and seasoned sellers alike.
              </p>
              <div className="mt-8 font-inter text-charcoal/70 text-base leading-relaxed space-y-4">
                <p>
                  <span className="font-playfair text-5xl font-bold text-primary float-left leading-none mr-2 mt-1">C</span>
                  hoosing a Calgary REALTOR® is one of the more consequential decisions you'll
                  make in any given decade — and yet most buyers spend more time picking a
                  contractor than picking the agent who'll guide a half-million-dollar transaction.
                  The right agent in Calgary isn't the one with the biggest bus-bench ad or the
                  loudest Instagram presence. It's the one who knows the difference between Tuscany
                  and Tuscany Estates, who can tell you in plain language why a McKenzie Towne
                  walkout sells for less than its Cranston counterpart, and who has actually written
                  offers on streets you're considering.
                </p>
                <p>
                  Look for three things. First, a current RECA licence — every practicing agent in
                  Alberta is required to hold one, and you can verify it in seconds on the Real
                  Estate Council of Alberta's public registry. Second, neighbourhood specificity. An
                  agent who claims to 'serve all of Calgary' is rarely as useful as one who has
                  closed eight deals on your street in the last two years. Third, a communication
                  style that matches yours. You'll be exchanging messages weekly, sometimes daily,
                  for months. If their first email feels rushed or generic, the rest of the
                  relationship will too.
                </p>
                <p>
                  The good news: Calgary's REALTOR® pool is deep, regulated, and accountable. The
                  agents we feature have all been independently vetted for license status, brokerage
                  standing, and recent transaction history. Use the form at the top of this page and
                  we'll introduce you to one — no fee, no commitment, no spam.
                </p>
              </div>
              <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest mt-8 border-t border-charcoal/10 pt-4">
                — THE CALGARY REALTOR FINDER EDITORIAL DESK · UPDATED APRIL 2026
              </p>
            </div>

            {/* Right — FAQ */}
            <div>
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ListingsIntentBridge — captures houses-for-sale keyword cluster */}
      <ListingsIntentBridge />

      {/* Section 8 — MLS Listings Strip */}
      <section className="bg-background py-20 px-8 border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-accent text-xs uppercase tracking-widest">
            LIVE MLS® LISTINGS
          </p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mt-2">
            <h2 className="font-playfair text-4xl text-primary">
              Current Calgary MLS® listings.
            </h2>
            <p className="font-inter text-charcoal/50 text-sm md:text-right max-w-xs">
              A snapshot of active inventory across the city. Connect with a matched REALTOR® to
              see the full picture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {placeholderProperties.map((prop) => (
              <PropertyCard key={prop.address} {...prop} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-3">
            <p className="font-inter text-charcoal/30 text-xs uppercase tracking-widest">
              LISTING DATA PROVIDED VIA ALBERTA MLS® SYSTEM · UPDATED DAILY
            </p>
            <button className="font-inter text-accent text-sm font-medium hover:text-accent-light transition-colors">
              Browse all current listings →
            </button>
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ (AEO) */}
      <FAQSection />

      {/* Section 9b — Tools Teaser */}
      <ToolsTeaser />

      {/* Section 10 — Neighbourhood Grid (SEO) */}
      <NeighbourhoodGrid />

        <Footer />
      </main>
    </>
  )
}
