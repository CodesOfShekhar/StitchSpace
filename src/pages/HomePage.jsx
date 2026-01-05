import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Features from '../components/Features'
import MarketplacePreview from '../components/MarketplacePreview'
import Navbar from '../components/Navbar'
import WorkshopsPreview from '../components/WorkshopsPreview'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WorkshopsPreview />
      <MarketplacePreview />
      <Footer />
    </div>
  )
}

export default HomePage

