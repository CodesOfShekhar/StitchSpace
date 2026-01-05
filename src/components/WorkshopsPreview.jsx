const WorkshopsPreview = () => {
  const workshops = [
    {
      id: 1,
      title: 'Introduction to Weaving',
      skillLevel: 'Beginner',
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1506629905607-3b1b0b0b0b0b?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      id: 2,
      title: 'Advanced Embroidery Techniques',
      skillLevel: 'Intermediate',
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      id: 3,
      title: 'Traditional Knitting Patterns',
      skillLevel: 'Beginner',
      duration: '2.5 hours',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80',
    },
  ]

  return (
    <section id="workshops" className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal text-center mb-12">
          Workshops Preview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal mb-4">
                  {workshop.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium">
                    {workshop.skillLevel}
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                    {workshop.duration}
                  </span>
                </div>
                <button className="w-full bg-teal text-white py-2 rounded-lg font-semibold hover:bg-teal/90 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopsPreview

