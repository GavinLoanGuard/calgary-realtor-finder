import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://calgaryrealtorfinder.ca'),
  title: {
    default: 'Calgary Realtor Finder | Find a Calgary REALTOR®',
    template: '%s | Calgary Realtor Finder',
  },
  description:
    'Connect with top Calgary REALTORS® including Nathan Koenigsberg of RE/MAX First. Browse live MLS listings and get matched with the right agent for your area.',
  icons: {
    icon: [{ url: '/favicon.png', sizes: '500x500', type: 'image/png' }],
    apple: [{ url: '/favicon.png', sizes: '500x500', type: 'image/png' }],
    shortcut: '/favicon.png',
  },
  keywords: [
    'Calgary realtor',
    'Calgary real estate agent',
    'find a realtor Calgary',
    'REALTORS in Calgary Alberta',
    'Alberta real estate',
  ],
  authors: [{ name: 'Calgary Realtor Finder' }],
  creator: 'Calgary Realtor Finder',
  publisher: 'Calgary Realtor Finder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://calgaryrealtorfinder.ca',
    siteName: 'Calgary Realtor Finder',
    title: 'Calgary Realtor Finder | Find a Calgary REALTOR®',
    description:
      'Connect with top Calgary REALTORS® including Nathan Koenigsberg of RE/MAX First. Browse live MLS listings. Free, no obligation.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: "Calgary Realtor Finder — Alberta's Local Realtor Resource",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calgary Realtor Finder | Find a Calgary REALTOR®',
    description:
      'Connect with top Calgary REALTORS® including Nathan Koenigsberg of RE/MAX First. Browse live MLS listings. Free, no obligation.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'hkUQKn9qHRGEx_hqvkuMHEjRNO1IYAdZqBSKQswTEIM',
  },
}

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ''

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body>
        <GoogleTagManagerNoScript gtmId={gtmId} />
        {children}
      </body>
    </html>
  )
}
