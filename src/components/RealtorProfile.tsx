import Image from 'next/image'
import Link from 'next/link'
import { nathan } from '@/data/nathan'
import { nathanSchema } from '@/data/schema'

export default function RealtorProfile() {
  const jsonLd = JSON.stringify(nathanSchema)

  return (
    <section className="bg-background py-20 px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
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
              Born and raised in Calgary, with {nathan.yearsExperience} years of full-time service
              across the city quadrants and surrounding foothills towns.
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
          {/* Left — Photo */}
          <div>
            <div className="relative overflow-hidden rounded-sm bg-charcoal/10" style={{ aspectRatio: '3/4' }}>
              {nathan.photo ? (
                <Image
                  src={nathan.photo}
                  alt={nathan.photoAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="font-inter text-charcoal/30 text-sm">[ Nathan Koenigsberg headshot ]</span>
                  <span className="font-inter text-charcoal/20 text-xs">Add /public/nathan-koenigsberg.jpg</span>
                </div>
              )}
            </div>
          </div>

          {/* Right — Profile content */}
          <div>
            <h3 className="font-playfair text-4xl font-bold text-primary">{nathan.name}</h3>

            {/* RE/MAX First brokerage logo */}
            <div className="remax-branding mt-2" style={{ position: 'relative', width: '120px', height: '40px' }}>
              <Image
                src="/images/2025-REMAXFIRST_CMYK_BLUE-01-1.png"
                alt="RE/MAX First"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                sizes="150px"
              />
            </div>

            {/* Credentials bar */}
            <div className="mt-4 space-y-1.5">
              <p className="font-inter text-charcoal/70 text-sm">✓ RE/MAX First — Calgary's top-producing RE/MAX office</p>
              <p className="font-inter text-charcoal/70 text-sm">✓ CREB Member — Calgary Real Estate Board licensed</p>
              <p className="font-inter text-charcoal/70 text-sm">✓ Serving Calgary buyers &amp; sellers across City Centre, SW, SE &amp; Okotoks</p>
            </div>

            {/* Award badge */}
            <div className="mt-3">
              <span className="font-inter text-xs font-bold tracking-widest uppercase text-accent border border-accent/30 bg-accent/10 px-3 py-1 rounded-sm">
                ★ Top 100 Western Canada REALTOR®
              </span>
            </div>

            {/* Badge pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-accent/10 text-accent border-accent/20">
                ◆ {nathan.brokerage.toUpperCase()}
              </span>
              <span className="font-inter rounded-full border text-xs px-3 py-1 font-medium bg-accent/10 text-accent border-accent/20">
                ◆ {nathan.yearsExperience}+ YEARS EXPERIENCE
              </span>
            </div>

            {/* Area tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {nathan.areasServed.map((area) => (
                <span
                  key={area}
                  className="font-inter bg-charcoal/5 text-charcoal/70 text-xs px-3 py-1 rounded-full border border-charcoal/10"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Reviews */}
            <div className="mt-8 border-t border-charcoal/10 pt-6">
              <p className="font-inter text-charcoal/40 text-xs uppercase tracking-widest">
                CLIENT REVIEWS
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {nathan.reviews.map((review, i) => (
                  <div key={i} className="rounded-sm p-4 border bg-charcoal/[0.03] border-charcoal/[0.08]">
                    <p className="text-accent text-xs">{'★'.repeat(review.rating)}</p>
                    <p className="font-inter text-charcoal/70 text-xs italic mt-2 leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <p className="font-inter text-charcoal/40 text-xs mt-2">
                      — {review.author} · {review.neighbourhood}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/#lead-form"
                className="font-inter bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-sm transition-colors"
              >
                Connect with {nathan.name.split(' ')[0]} →
              </a>
              <Link
                href="/contact"
                className="font-inter border border-primary text-primary px-6 py-3 font-medium rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                View full profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
