import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="bg-cream py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-teal mb-6">
            Where Hands Create, Minds Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Bridging Tradition and the Digital Age
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/workshops"
              className="px-8 py-3 bg-teal text-white rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200 shadow-lg"
            >
              Explore Workshops
            </Link>
            <Link
              to="/marketplace"
              className="px-8 py-3 bg-mustard text-gray-900 rounded-lg font-semibold hover:bg-mustard/90 transition-colors duration-200 shadow-lg"
            >
              Visit Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

