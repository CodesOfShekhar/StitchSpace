import { BadgeCheck } from 'lucide-react'

const MarketplacePreview = () => {
  const products = [
    {
      id: 1,
      name: 'Handwoven Scarf',
      artisan: 'Sarah Chen',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 2,
      name: 'Embroidered Cushion',
      artisan: 'Maria Rodriguez',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 3,
      name: 'Knitted Blanket',
      artisan: 'Emma Thompson',
      price: '$125',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 4,
      name: 'Woven Wall Hanging',
      artisan: 'Priya Sharma',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
  ]

  return (
    <section id="marketplace" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal text-center mb-12">
          Marketplace Preview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/FDFBF7/2D6A4F?text=${encodeURIComponent(product.name)}`
                }}
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-teal mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-600">
                    {product.artisan}
                  </span>
                  <BadgeCheck className="w-4 h-4 text-teal" />
                  <span className="text-xs text-teal font-medium">
                    Verified Artisan
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-mustard text-gray-900 rounded-lg font-semibold hover:bg-mustard/90 transition-colors duration-200 text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketplacePreview

