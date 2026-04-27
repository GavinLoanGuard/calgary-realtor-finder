import { ArrowRight } from 'lucide-react'

interface PropertyCardProps {
  badge?: string
  neighbourhood?: string
  price: string
  address: string
  suburb: string
  beds: number
  baths: number
  sqft: number
  status?: 'SOLD' | 'NEW' | 'OPEN' | 'PRICE DROP'
}

export default function PropertyCard({
  badge,
  neighbourhood,
  price,
  address,
  suburb,
  beds,
  baths,
  sqft,
  status,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-sm overflow-hidden border border-charcoal/10 hover:shadow-md transition-shadow">
      {/* Photo area */}
      <div className="aspect-video bg-charcoal/10 relative flex items-center justify-center">
        <span className="font-inter text-charcoal/30 text-xs">[ listing photo ]</span>
        {status && (
          <span className="absolute top-3 left-3 font-inter bg-accent text-white text-xs px-2 py-1 rounded-sm">
            {status}
          </span>
        )}
        {badge && (
          <span className="absolute top-3 right-3 font-inter bg-primary text-white text-xs px-2 py-1 rounded-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {neighbourhood && (
          <p className="font-inter text-charcoal/50 text-xs uppercase tracking-widest">
            {neighbourhood}
          </p>
        )}
        <p className="font-playfair text-2xl font-bold text-primary mt-1">{price}</p>
        <p className="font-inter text-charcoal text-sm mt-1">{address}</p>
        <p className="font-inter text-charcoal/60 text-xs">{suburb}</p>
        <p className="font-inter text-charcoal/60 text-xs mt-3">
          {beds} bd · {baths} ba · {sqft.toLocaleString()} sqft
        </p>
        <button className="mt-4 font-inter text-accent text-sm font-medium hover:text-accent-light transition-colors flex items-center gap-1">
          View listing <ArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}
