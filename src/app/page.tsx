import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RealtorProfile from '@/components/RealtorProfile'
import NeighbourhoodTile from '@/components/NeighbourhoodTile'
import CityCard from '@/components/CityCard'
import Footer from '@/components/Footer'
import { calgaryNeighbourhoods } from '@/data/neighbourhoods'
import { albertaCities } from '@/data/cities'

const distanceLabels: Record<string, string> = {
  'city-centre': 'CORE',
  airdrie: 'NORTH · 30 MIN',
  cochrane: 'WEST · 40 MIN',
  okotoks: 'SOUTH · 30 MIN',
}

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Trust Bar */}
      <div className="w-full bg-primary/95 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">22,000+ monthly searches served</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {calgaryNeighbourhoods.map((n) => (
              <NeighbourhoodTile
                key={n.slug}
                name={n.name}
                slug={n.slug}
                quadrant={n.quadrant}
                distanceLabel={distanceLabels[n.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Alberta Cities Strip */}
      <section className="bg-primary py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div>
              <p className="font-inter text-accent text-xs tracking-widest uppercase">ACROSS ALBERTA</p>
              <h2 className="font-playfair text-4xl text-white font-bold mt-2">Beyond Calgary.</h2>
              <p className="font-inter text-white/60 text-lg mt-3 max-w-lg leading-relaxed">
                We connect home buyers and sellers with licensed REALTORS® across every major
                market in Alberta.
              </p>
            </div>
            <p className="font-inter text-white/60 text-sm lg:text-right max-w-xs shrink-0 lg:pt-16">
              Click any city to start your match — same vetted process, same no-fee promise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {albertaCities.map((city) => (
              <CityCard
                key={city.slug}
                name={city.name}
                slug={city.slug}
                region={city.region}
                agentCount={city.agentCount}
                dark
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
