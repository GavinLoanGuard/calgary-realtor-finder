import { areas } from '@/data/areas'

export default function NeighbourhoodGrid() {
  return (
    <section className="bg-primary/5 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl text-primary font-bold">
          Calgary Real Estate Agents by Area
        </h2>
        <p className="font-inter text-charcoal/60 text-lg mt-3 max-w-2xl leading-relaxed">
          Our REALTORS® know Calgary&apos;s communities inside and out. Fill out the form and we&apos;ll
          match you with the right agent for your area.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {areas.map((area) => (
            <div
              key={area.slug}
              className="border border-charcoal/10 rounded-sm p-5 bg-white text-center"
            >
              <span className="font-inter text-primary font-medium text-sm">{area.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
