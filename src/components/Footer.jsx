const Footer = () => {
  return (
    <footer className="bg-teal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StitchSpace</h3>
            <p className="text-teal-100">
              Empowering Artisans & Preserving Crafts.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-teal-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#workshops" className="text-teal-100 hover:text-white transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#marketplace" className="text-teal-100 hover:text-white transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#community" className="text-teal-100 hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sustainability</h4>
            <p className="text-teal-100">
              Empowering Artisans & Preserving Crafts.
            </p>
          </div>
        </div>
        <div className="border-t border-teal-400 pt-8 text-center text-teal-100">
          <p>&copy; 2024 StitchSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

