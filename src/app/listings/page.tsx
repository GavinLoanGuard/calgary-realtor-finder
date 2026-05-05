import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { breadcrumbSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: 'Calgary MLS Listings | Calgary Realtor Finder',
  description:
    'Browse real-time Calgary MLS listings. Connect with a local REALTOR® who knows your area.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/listings',
  },
  openGraph: {
    title: 'Calgary MLS Listings | Calgary Realtor Finder',
    description:
      'Browse real-time Calgary MLS listings. Connect with a local REALTOR® who knows your area.',
    url: 'https://calgaryrealtorfinder.ca/listings',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function ListingsPage() {
  const schema = JSON.stringify([
    breadcrumbSchema([
      { name: 'Home', url: 'https://calgaryrealtorfinder.ca' },
      { name: 'Calgary MLS Listings', url: 'https://calgaryrealtorfinder.ca/listings' },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex flex-col">
          {/* Page header */}
          <div className="bg-primary px-8 py-12">
            <div className="max-w-7xl mx-auto">
              <p className="font-inter text-accent text-xs tracking-widest uppercase">LIVE MLS® DATA · PILLAR 9™</p>
              <h1 className="font-playfair text-4xl text-white font-bold mt-2">
                Calgary MLS Listings
              </h1>
              <p className="font-inter text-white/70 text-lg mt-3 max-w-2xl leading-relaxed">
                Browse current Calgary MLS listings. Interested in a property? Contact us and
                we&apos;ll connect you with the right agent.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 bg-accent hover:bg-accent-light text-white font-inter font-semibold px-6 py-3 rounded-sm transition-colors"
              >
                Interested in a listing? Talk to an agent →
              </Link>
            </div>
          </div>

          {/* IDX iframe — full width, min 85vh */}
          <div className="flex-1 w-full overflow-hidden" style={{ minHeight: '85vh' }}>
            <iframe
              src="https://matrix.pillarnine.com/Matrix/public/IDX.aspx?idx=079f41a"
              width="100%"
              title="Calgary MLS Listings — Pillar 9 IDX"
              loading="lazy"
              style={{
                display: 'block',
                minHeight: '85vh',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
