import Link from 'next/link'

const linkedAreas = [
  { label: 'Auburn Bay', href: '/calgary/auburn-bay' },
  { label: 'McKenzie Towne', href: '/calgary/mckenzie-towne' },
  { label: 'Cranston', href: '/calgary/cranston' },
  { label: 'Canyon Meadows', href: '/calgary/canyon-meadows' },
  { label: 'Cougar Ridge', href: '/calgary/cougar-ridge' },
  { label: 'West Springs', href: '/calgary/west-springs' },
  { label: 'Discovery Ridge', href: '/calgary/discovery-ridge' },
  { label: 'Hamptons', href: '/calgary/hamptons' },
  { label: 'Shawnee Slopes', href: '/calgary/shawnee-slopes' },
  { label: 'Arbour Lake', href: '/calgary/arbour-lake' },
]

const comingSoonAreas = [
  'NE Calgary',
  'North Calgary',
  'Airdrie',
  'Cochrane',
  'Chestermere',
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
          {linkedAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="border border-charcoal/15 rounded-sm p-5 bg-white text-center hover:border-accent hover:shadow-sm transition-all"
            >
              <span className="font-inter text-primary font-medium text-sm">{area.label}</span>
            </Link>
          ))}
          {comingSoonAreas.map((area) => (
            <div
              key={area}
              className="border border-charcoal/10 rounded-sm p-5 bg-white text-center relative opacity-70"
            >
              <span className="font-inter text-charcoal/50 font-medium text-sm">{area}</span>
              <span className="absolute top-2 right-2 text-[9px] font-inter font-semibold uppercase tracking-wider bg-charcoal/10 text-charcoal/50 px-1.5 py-0.5 rounded-sm">
                Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
