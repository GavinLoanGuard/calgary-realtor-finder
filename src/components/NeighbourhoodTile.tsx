import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface NeighbourhoodTileProps {
  name: string
  slug: string
  quadrant: string | null
  distanceLabel?: string
  imageSrc?: string
  imageAlt?: string
}

export default function NeighbourhoodTile({
  name,
  slug,
  quadrant,
  distanceLabel,
  imageSrc,
  imageAlt,
}: NeighbourhoodTileProps) {
  const href = slug === 'city-centre' ? '/calgary-city-centre-realtors' : `/${slug}-realtors`
  const topLabel = quadrant ? `QUADRANT · ${quadrant}` : distanceLabel

  return (
    <Link
      href={href}
      className="block aspect-square relative overflow-hidden rounded-sm cursor-pointer group bg-primary"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || `${name} Calgary`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      ) : null}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Top-left label */}
      {topLabel && (
        <p className="absolute top-0 left-0 p-4 font-inter text-white/60 text-xs tracking-widest uppercase z-10">
          {topLabel}
        </p>
      )}

      {/* Bottom row */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end z-10">
        <span className="font-playfair font-semibold text-white text-lg">{name}</span>
        <div className="rounded-full border border-white/40 w-8 h-8 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors shrink-0">
          <ArrowRight size={14} className="text-white" />
        </div>
      </div>
    </Link>
  )
}
