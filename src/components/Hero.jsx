import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400/90 font-semibold">
            Seasonal Event
            <span className="h-[2px] w-8 bg-orange-500/80" />
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Fall/Winter Sale
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Up to 40% off selected pieces. Contemporary essentials in premium fabrics.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">
              Shop the Sale
            </a>
            <a href="#new" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/30 hover:border-white/50 text-white font-semibold backdrop-blur-sm bg-white/10 transition-colors">
              New Arrivals
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
