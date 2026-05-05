import Image from 'next/image'
import { nathan } from '@/data/nathan'

export default function FeaturedAgentTeaser() {
  return (
    <section className="bg-background py-20 px-8 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-inter text-accent text-xs tracking-widest uppercase">FEATURED CALGARY REALTOR®</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8 items-start">

          {/* Left — copy */}
          <div>
            <h2 className="font-playfair text-4xl text-primary font-bold leading-tight">
              See who you&apos;d be matched with.
            </h2>
            <p className="font-inter text-charcoal/70 text-base mt-6 leading-relaxed">
              We don&apos;t send your information to a pool of agents and hope for the best. We make one
              introduction — to a vetted, licensed REALTOR® who specializes in your area.
            </p>
            <a
              href="/#lead-form"
              className="mt-8 inline-block bg-accent hover:bg-accent-light text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors"
            >
              Get Matched Now →
            </a>
            <div className="mt-4">
              <a
                href="#neighbourhood-grid"
                className="font-inter text-accent hover:text-accent-light text-sm transition-colors"
              >
                Browse Calgary neighbourhoods →
              </a>
            </div>
          </div>

          {/* Right — Nathan's card */}
          <div className="bg-white border border-charcoal/10 rounded-sm shadow-sm overflow-hidden">
            {/* Photo */}
            <div className="relative h-96 bg-primary/10">
              <Image
                src={nathan.photo}
                alt={nathan.photoAlt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 10%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold text-primary">{nathan.name}</h3>
              <p className="font-inter text-accent text-sm font-semibold mt-1">{nathan.brokerage}</p>

              {/* Coverage tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['City Centre', 'Calgary SW', 'Calgary SE', 'Calgary South', 'Okotoks'].map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-xs text-charcoal/70 bg-charcoal/5 border border-charcoal/10 px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Credentials */}
              <div className="mt-4 space-y-1">
                <p className="font-inter text-charcoal/70 text-sm">✓ RECA Licensed</p>
                <p className="font-inter text-charcoal/70 text-sm">✓ Active CREB Member</p>
              </div>

              {/* Recent sales */}
              <div className="mt-4 border-t border-charcoal/10 pt-4">
                <p className="font-inter text-charcoal/40 text-xs uppercase tracking-wider mb-2">Recent sales</p>
                <p className="font-inter text-charcoal/70 text-sm">
                  McKenzie Towne $599,900 · Canyon Meadows $1,089,000 · Shawnee Slopes $1,340,000
                </p>
              </div>

              {/* CTA */}
              <a
                href="/#lead-form"
                className="mt-6 block text-center bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors text-sm"
              >
                Connect with Nathan →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
