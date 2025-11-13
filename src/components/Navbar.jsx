import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-orange-500" />
            <span className="text-xl font-semibold tracking-wide text-gray-900">Urban Threads</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="text-gray-700 hover:text-gray-900 transition-colors">Shop</a>
            <a href="#new" className="text-gray-700 hover:text-gray-900 transition-colors">New Arrivals</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a href="#shop" className="text-gray-700 hover:text-gray-900 transition-colors">Shop</a>
              <a href="#new" className="text-gray-700 hover:text-gray-900 transition-colors">New Arrivals</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
