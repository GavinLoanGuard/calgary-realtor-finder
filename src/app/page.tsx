import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Trust Bar */}
      <div className="w-full bg-primary/95 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">22,000+ monthly searches served</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">Licensed REALTORS® only</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">Calgary's local realtor resource</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">◆</span>
            <span className="font-inter text-white/80 text-sm">Free — no obligation</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
