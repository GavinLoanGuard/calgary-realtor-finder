import PropertyCard from './PropertyCard'

const areaTags = [
  'Calgary SE', 'Calgary SW', 'Calgary NW', 'Calgary NE',
  'City Centre', 'Airdrie', 'Okotoks',
]

const reviews = [
  {
    quote:
      'Nathan walked us through every step of our first home purchase in Mahogany. Patient, honest, and never once felt pushy.',
    attribution: 'Priya & Daniel · Mahogany',
  },
  {
    quote:
      'Sold our Tuscany house in 9 days, $40k over list. He knows the NW market inside out.',
    attribution: 'The Hallaran Family · Tuscany',
  },
  {
    quote:
      'Relocated from Toronto. Nathan made it feel like we already had a friend in Calgary.',
    attribution: 'M. Okafor · Beltline',
  },
]

const recentlySold = [
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

export default function RealtorProfile() {
  return (
    <section className="bg-background py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
          <div>
            <p className="font-inter text-accent text-xs tracking-widest uppercase">
              FEATURED CALGARY REALTOR®
            </p>
            <h2 className="font-playfair text-4xl text-primary font-bold mt-2">
              Meet your Calgary REALTOR®
            </h2>
            <p className="font-inter text-charcoal/60 text-lg mt-3 max-w-xl leading-relaxed">
              Born and raised in Calgary, with thirteen years of full-time service across the
              city quadrants and surrounding foothills towns.
            </p>
          </div>
          <div className="text-left lg:text-right shrink-0">
            <p className="font-inter text-charcoal/50 text-sm">Featured agents are independently vetted.</p>
            <p className="font-inter text-charcoal/50 text-sm">Verified license status, brokerage standing,</p>
            <p className="font-inter text-accent text-sm">and recent transaction history.</p>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-sm shadow-sm border border-charcoal/10 p-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Photo placeholder */}
          <div>
            <div className="relative overflow-hidden rounded-sm bg-charcoal/10" style={{ aspectRatio: '3/4' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-inter text-charcoal/30 text-sm">[ Nathan Koenigsberg headshot ]</span>
              </div>
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 bg-primary text-white p-4 rounded-sm">
                <p className="font-playfair text-2xl font-bold">13 years</p>
                <p className="font-inter text-white/70 text-xs">serving Calgary buyers &amp;</p>
                <p className="font-inter text-white/70 text-xs">sellers across SE, NW, NE.</p>
                <p className="font-inter italic text-white/50 text-xs mt-2">— Nathan Koenigsberg</p>
              </div>
            </div>
          </div>

          {/* Right — Profile content */}
          <div>
            <h3 className="font-playfair text-4xl font-bold text-primary">Nathan Koenigsberg</h3>

            {/* Badge pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-accent/10 text-accent border-accent/20">
                ◆ RE/MAX FIRST
              </span>
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-primary/10 text-primary border-primary/20">
                ● RECA LICENSED
              </span>
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-accent/10 text-accent border-accent/20">
                ◆ 13+ YEARS EXPERIENCE
              </span>
            </div>

            {/* Area tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {areaTags.map((tag) => (
                <span
                  key={tag}
                  className="font-inter bg-charcoal/5 text-charcoal/70 text-xs px-3 py-1 rounded-full border border-charcoal/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Reviews */}
            <div className="mt-8 border-t border-charcoal/10 pt-6">
              <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest">
                RECENTLY SOLD
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {reviews.map((r) => (
                  <div key={r.attribution} className="rounded-sm p-4 border bg-charcoal/[0.03] border-charcoal/[0.08]">
                    <p className="text-accent text-xs">★★★★★</p>
                    <p className="font-inter text-charcoal/70 text-xs italic mt-2 leading-relaxed">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <p className="font-inter text-charcoal/40 text-xs mt-2">— {r.attribution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recently sold property cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {recentlySold.map((prop) => (
                <PropertyCard key={prop.address} {...prop} />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="font-inter bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-sm transition-colors">
                Connect with Nathan →
              </button>
              <button className="font-inter border border-primary text-primary px-6 py-3 font-medium rounded-sm hover:bg-primary hover:text-white transition-colors">
                View full profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
