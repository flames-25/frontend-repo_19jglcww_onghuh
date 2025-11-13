function ProductCard({ image, title, price, tag }) {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/5] bg-gray-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {tag && (
            <span className="text-[10px] uppercase tracking-widest font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{price}</p>
        <button className="mt-3 w-full inline-flex items-center justify-center rounded-md bg-gray-900 text-white text-sm font-medium py-2.5 hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

function FeaturedGrid() {
  const products = [
    { image: 'https://images.unsplash.com/photo-1722926628555-252c1c0258bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwSG9vZGllJTIwLSUyMENoYXJjb2FsfGVufDB8MHx8fDE3NjMwNTc2MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Minimalist Hoodie - Charcoal', price: '$89', tag: 'Best Seller' },
    { image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop', title: 'Structured Tote - Off White', price: '$129', tag: 'New' },
    { image: 'https://images.unsplash.com/photo-1722926628555-252c1c0258bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwSG9vZGllJTIwLSUyMENoYXJjb2FsfGVufDB8MHx8fDE3NjMwNTc2MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Tech Runner - Graphite', price: '$149' },
    { image: 'https://images.unsplash.com/photo-1722926628555-252c1c0258bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwSG9vZGllJTIwLSUyMENoYXJjb2FsfGVufDB8MHx8fDE3NjMwNTc2MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Puffer Jacket - Night', price: '$199', tag: 'Limited' },
    { image: 'https://images.unsplash.com/photo-1722926628555-252c1c0258bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwSG9vZGllJTIwLSUyMENoYXJjb2FsfGVufDB8MHx8fDE3NjMwNTc2MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Merino Beanie - Ash', price: '$39' },
    { image: 'https://images.unsplash.com/photo-1722926628555-252c1c0258bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwSG9vZGllJTIwLSUyMENoYXJjb2FsfGVufDB8MHx8fDE3NjMwNTc2MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Canvas Sneaker - Cloud', price: '$79' },
  ]

  return (
    <section id="shop" className="bg-[#0e0f11] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-white/60 mt-1">Selected pieces curated for the season.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGrid
