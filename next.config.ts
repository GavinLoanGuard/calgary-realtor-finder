import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nathankoenigsberg.ca',
      },
      {
        protocol: 'https',
        hostname: 'calgaryrealtorfinder.ca',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/calgary',
        destination: '/calgary-realtors',
        permanent: true,
      },
      {
        source: '/edmonton',
        destination: '/edmonton-realtors',
        permanent: true,
      },
      {
        source: '/red-deer',
        destination: '/red-deer-realtors',
        permanent: true,
      },
      {
        source: '/lethbridge',
        destination: '/lethbridge-realtors',
        permanent: true,
      },
      {
        source: '/grande-prairie',
        destination: '/grande-prairie-realtors',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
