const areas = [
  'NW Calgary',
  'NE Calgary',
  'SW Calgary',
  'SE Calgary',
  'City Centre',
  'Airdrie',
  'Cochrane',
  'Okotoks',
]

export default function NeighbourhoodGrid() {
  return (
    <section className="bg-primary/5 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl text-primary font-bold">
          Calgary Real Estate Agents by Area
        </h2>
        <p className="font-inter text-charcoal/60 text-lg mt-3 max-w-2xl leading-relaxed">
          Our REALTORS® know Calgary&apos;s communities inside and out — from NW to SE.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {areas.map((area) => (
            <div
              key={area}
              className="border border-charcoal/15 rounded-sm p-5 bg-white text-center"
            >
              <span className="font-inter text-primary font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
