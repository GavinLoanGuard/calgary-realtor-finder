import Link from 'next/link'

interface CityCardProps {
  name: string
  slug: string
  region: string
  agentCount: number
  dark?: boolean
}

export default function CityCard({ name, slug, region, agentCount, dark = false }: CityCardProps) {
  return (
    <Link
      href={`/${slug}-realtors`}
      className={`block rounded-sm p-6 border transition-all cursor-pointer group ${
        dark
          ? 'bg-primary/50 border-white/10 hover:border-accent hover:shadow-md'
          : 'bg-white border-primary/10 hover:border-accent hover:shadow-md'
      }`}
    >
      <div className="flex justify-between items-start">
        <span
          className={`font-playfair font-semibold text-xl transition-colors ${
            dark ? 'text-white group-hover:text-accent' : 'text-primary group-hover:text-accent'
          }`}
        >
          {name}
        </span>
        <span className={`font-inter text-sm ${dark ? 'text-white/30' : 'text-charcoal/40'}`}>
          {agentCount.toLocaleString()} agents
        </span>
      </div>
      <p className={`font-inter text-xs uppercase tracking-widest mt-1 ${dark ? 'text-white/40' : 'text-charcoal/50'}`}>
        {region}
      </p>
      <p className="font-inter text-accent text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        Find a realtor →
      </p>
    </Link>
  )
}
