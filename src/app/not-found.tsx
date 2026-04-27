import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-32 text-center">
        <p className="text-accent text-xs uppercase tracking-widest font-medium">
          404 — Page Not Found
        </p>
        <h1 className="font-playfair text-5xl font-bold text-primary mt-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-charcoal/60 text-lg mt-6 max-w-md mx-auto">
          The page you&apos;re looking for may have moved or doesn&apos;t exist. Let&apos;s get you
          back on track.
        </p>
        <div className="flex gap-4 justify-center mt-10">
          <Link
            href="/"
            className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 rounded-sm transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-sm font-medium transition"
          >
            Find a Realtor
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
