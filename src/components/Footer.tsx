import Link from 'next/link'
import { nathan } from '@/data/nathan'

const quickLinks = [
  { label: 'Find a Realtor', href: '/' },
  { label: 'How to choose a realtor', href: '/how-to-choose-a-realtor-calgary' },
  { label: 'Top Calgary agents', href: '/top-realtors-calgary' },
  { label: 'Alberta cities', href: '/alberta-cities' },
  { label: 'About us', href: '/about' },
  { label: 'Resources & FAQ', href: '/resources' },
]

const neighbourhoodLinks = [
  { label: 'Calgary NE', href: '/calgary-ne-realtors' },
  { label: 'Calgary NW', href: '/calgary-nw-realtors' },
  { label: 'Calgary SW', href: '/calgary-sw-realtors' },
  { label: 'Calgary SE', href: '/calgary-se-realtors' },
  { label: 'City Centre', href: '/calgary-city-centre-realtors' },
  { label: 'Airdrie · Cochrane · Okotoks', href: '/alberta-cities' },
]

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-8 py-16">
        {/* Four column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 bg-accent rounded-sm shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-playfair font-semibold text-white text-xl leading-none">
                  Calgary Realtor Finder
                </span>
                <span className="font-inter text-accent text-xs tracking-widest mt-0.5">
                  Alberta · Established 2026
                </span>
              </div>
            </Link>
            <p className="mt-4 font-inter italic text-accent text-sm">
              Alberta&apos;s local realtor resource.
            </p>
            <p className="mt-4 font-inter text-white/60 text-sm leading-relaxed">
              An independent directory connecting Alberta home buyers and sellers with licensed,
              vetted REALTORS®. Free to use. No pressure. No data resale.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-white/60 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Calgary Neighbourhoods */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm tracking-widest uppercase mb-4">
              Calgary Neighbourhoods
            </h3>
            <div className="flex flex-col gap-2">
              {neighbourhoodLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-white/60 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Get In Touch */}
          <div>
            <h3 className="font-inter font-semibold text-white text-sm tracking-widest uppercase mb-4">
              Get In Touch
            </h3>
            <p className="font-inter font-semibold text-white text-lg">(403) 555-0188</p>
            <p className="font-inter text-accent text-sm mt-1">hello@calgaryrealtorfinder.ca</p>
            <p className="font-inter text-white/60 text-sm mt-1">Mon–Sat · 8am–8pm MT</p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="font-inter text-white/40 text-xs uppercase tracking-widest">
                Featured partner
              </p>
              <p className="font-inter font-semibold text-white text-sm mt-2">
                {nathan.name}
              </p>
              <p className="font-inter text-white/60 text-sm">{nathan.title}</p>
              <p className="font-inter text-accent text-xs mt-1">
                {nathan.brokerage} · RECA #{nathan.licenseNumber}
              </p>
              <Link
                href="/contact"
                className="font-inter text-accent text-sm hover:text-accent-light transition-colors mt-3 inline-block"
              >
                Send a message →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <Link href="/privacy" className="font-inter text-white/40 text-xs hover:text-white/60 transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms" className="font-inter text-white/40 text-xs hover:text-white/60 transition-colors">
              Terms of service
            </Link>
            <Link href="/accessibility" className="font-inter text-white/40 text-xs hover:text-white/60 transition-colors">
              Accessibility
            </Link>
          </div>
          <p className="font-inter text-white/40 text-xs sm:text-right">
            © 2026 Calgary Realtor Finder · Operated in partnership with {nathan.name},{' '}
            {nathan.title}
          </p>
        </div>
      </div>
    </footer>
  )
}
