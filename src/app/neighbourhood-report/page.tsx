import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NeighbourhoodReportTool from './NeighbourhoodReportTool'

export const metadata: Metadata = {
  title: 'Calgary Neighbourhood Market Report — Free Instant Analysis',
  description:
    'See what homes are actually selling for in your Calgary neighbourhood. List-to-sale ratio, days on market, and pricing trends — free instant report.',
  alternates: {
    canonical: 'https://calgaryrealtorfinder.ca/neighbourhood-report',
  },
  openGraph: {
    title: 'Calgary Neighbourhood Market Report — Free Instant Analysis',
    description:
      'See what homes are actually selling for in your Calgary neighbourhood. List-to-sale ratio, days on market, and pricing trends — free instant report.',
    url: 'https://calgaryrealtorfinder.ca/neighbourhood-report',
    siteName: 'Calgary Realtor Finder',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Calgary Neighbourhood Market Report — Free Instant Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calgary Neighbourhood Market Report — Free Instant Analysis',
    description:
      'See what homes are actually selling for in your Calgary neighbourhood. List-to-sale ratio, days on market, and pricing trends — free instant report.',
    images: ['/og-default.png'],
  },
}

export default function NeighbourhoodReportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <NeighbourhoodReportTool />
      </main>
      <Footer />
    </>
  )
}
