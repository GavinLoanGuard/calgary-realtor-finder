import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

interface PageLayoutProps {
  children: React.ReactNode
  sidebar?: boolean
}

export default function PageLayout({ children, sidebar = true }: PageLayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className={sidebar ? 'grid grid-cols-1 lg:grid-cols-3 gap-12' : 'max-w-3xl mx-auto'}>
          <div className={sidebar ? 'lg:col-span-2' : ''}>
            {children}
          </div>
          {sidebar && (
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-charcoal/10 rounded-sm p-6 shadow-sm">
                  <p className="text-accent text-xs uppercase tracking-widest font-medium mb-4">
                    Find Your Realtor
                  </p>
                  <LeadForm variant="sidebar" />
                </div>
                <div className="mt-6 bg-primary rounded-sm p-6">
                  <p className="text-white font-semibold text-sm">Featured REALTOR®</p>
                  <p className="text-accent font-bold text-lg mt-1 font-playfair">Nathan Koenigsberg</p>
                  <p className="text-white/60 text-xs mt-1">RE/MAX First · Licensed</p>
                  <p className="text-white/50 text-xs mt-3 leading-relaxed">
                    Serving Calgary buyers and sellers across SE, SW, NW, NE, City Centre, Airdrie and Okotoks.
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 block text-center bg-accent hover:bg-accent-light text-white text-sm font-semibold py-2 rounded-sm transition"
                  >
                    Connect with Nathan →
                  </a>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
