import { activeAreas, waitlistAreas } from '@/data/areas'

export default function NeighbourhoodGrid() {
  return (
    <section className="bg-primary/5 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl text-primary font-bold">
          Calgary Real Estate Agents by Area
        </h2>
        <p className="font-inter text-charcoal/60 text-lg mt-3 max-w-2xl leading-relaxed">
          Our REALTORS® know Calgary&apos;s communities inside and out. Active coverage areas are
          matched instantly — waitlist areas are coming soon.
        </p>

        {/* Active areas */}
        <div className="mt-10">
          <p className="font-inter text-xs text-charcoal/40 uppercase tracking-widest mb-4">
            Accepting leads now
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {activeAreas.map((area) => (
              <div
                key={area.slug}
                className="border border-green-200 rounded-sm p-5 bg-white text-center relative"
              >
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 inline-block" />
                <span className="font-inter text-primary font-medium text-sm">{area.name}</span>
                <p className="font-inter text-green-600 text-xs mt-1">Accepting leads</p>
              </div>
            ))}
          </div>
        </div>

        {/* Waitlist areas */}
        <div className="mt-8">
          <p className="font-inter text-xs text-charcoal/40 uppercase tracking-widest mb-4">
            Coming soon
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {waitlistAreas.map((area) => (
              <div
                key={area.slug}
                className="border border-charcoal/10 rounded-sm p-5 bg-white/50 text-center opacity-60"
              >
                <span className="font-inter text-charcoal/50 font-medium text-sm">{area.name}</span>
                <p className="font-inter text-charcoal/40 text-xs mt-1">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
