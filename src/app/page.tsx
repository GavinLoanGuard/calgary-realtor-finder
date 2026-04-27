import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">
          Calgary Realtor Finder — Session 1 Complete
        </h1>
      </div>
      <Footer />
    </main>
  )
}
