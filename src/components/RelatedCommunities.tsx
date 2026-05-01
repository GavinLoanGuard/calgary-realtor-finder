import Link from 'next/link'
import { relatedCommunities } from '@/data/related-communities'

const slugToName: Record<string, string> = {
  'auburn-bay': 'Auburn Bay',
  'mckenzie-towne': 'McKenzie Towne',
  'cranston': 'Cranston',
  'canyon-meadows': 'Canyon Meadows',
  'cougar-ridge': 'Cougar Ridge',
  'west-springs': 'West Springs',
  'discovery-ridge': 'Discovery Ridge',
  'hamptons': 'Hamptons',
  'shawnee-slopes': 'Shawnee Slopes',
  'arbour-lake': 'Arbour Lake',
}

interface RelatedCommunitiesProps {
  slug: string
}

export default function RelatedCommunities({ slug }: RelatedCommunitiesProps) {
  const communities = relatedCommunities[slug]
  if (!communities || communities.length === 0) return null

  const communityName = slugToName[slug] ?? slug

  return (
    <section className="bg-primary/5 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-accent text-xs tracking-widest uppercase">NEARBY COMMUNITIES</p>
        <h2 className="font-playfair text-3xl text-primary font-bold mt-2">
          Also popular with buyers in {communityName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {communities.map((community) => (
            <div
              key={community.slug}
              className="border border-charcoal/10 rounded-sm p-6 bg-white hover:border-accent hover:shadow-sm transition-all"
            >
              <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest">
                {community.zone}
              </p>
              <h3 className="font-playfair text-xl text-primary font-semibold mt-2">
                <Link
                  href={`/calgary/${community.slug}`}
                  className="hover:text-accent transition-colors"
                >
                  {community.name}
                </Link>
              </h3>
              <p className="font-inter text-charcoal/60 text-sm mt-3 leading-relaxed">
                {community.blurb}
              </p>
              <Link
                href={`/calgary/${community.slug}`}
                className="font-inter text-accent text-sm font-medium mt-4 inline-block hover:underline"
              >
                View community →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
