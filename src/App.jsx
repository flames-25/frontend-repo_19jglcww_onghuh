import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c0e]">
      <Navbar />
      <Hero />
      <section id="new" className="bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">New Arrivals</h2>
              <p className="text-white/60 mt-1">Fresh drops in a restrained palette – charcoal, off-white, and signature orange accents.</p>
            </div>
            <a href="#shop" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
              Shop now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0e0f11] to-[#0b0c0e]">
                <div className="aspect-[16/10] bg-gray-900/50" />
                <div className="p-5">
                  <h3 className="text-white font-semibold">Monochrome Set {i}</h3>
                  <p className="text-white/60 text-sm mt-1">Limited run. Premium materials. Built for the city.</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-orange-400 text-sm font-semibold">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedGrid />
      <Footer />
    </div>
  )
}

export default App
