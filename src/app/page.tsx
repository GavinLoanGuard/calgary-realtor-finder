import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-background flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <LeadForm variant="hero" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
