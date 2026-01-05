import { BadgeCheck } from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MarketplacePage = () => {
  const products = [
    {
      id: 1,
      name: 'Indigo Block Print Scarf',
      price: '₹1,200',
      artisan: 'Riya S.',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 2,
      name: 'Hand-Knitted Woolen Throw',
      price: '₹3,500',
      artisan: 'Himachal Weavers Co-op',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 3,
      name: 'Sustainable Tote Bag',
      price: '₹850',
      artisan: 'EcoCrafts',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 4,
      name: 'Kalamkari Table Runner',
      price: '₹1,800',
      artisan: 'Andhra Artisans',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 5,
      name: 'Handwoven Cushion Cover',
      price: '₹950',
      artisan: 'Weave & Co.',
      image: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 6,
      name: 'Embroidered Shawl',
      price: '₹2,200',
      artisan: 'Kashmir Crafts',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    },
  ]

  const handleBuyNow = (productName) => {
    alert('Item added to cart! Proceeding to checkout.')
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-teal text-center mb-4">
            Marketplace
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Discover exclusive handmade creations from verified artisans
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600/FDFBF7/2D6A4F?text=${encodeURIComponent(product.name)}`
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-600">
                      {product.artisan}
                    </span>
                    <BadgeCheck className="w-4 h-4 text-teal" />
                    <span className="text-xs text-teal font-medium">
                      Verified Artisan
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-teal">
                      {product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full bg-mustard text-gray-900 py-3 rounded-lg font-semibold hover:bg-mustard/90 transition-colors duration-200"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MarketplacePage

