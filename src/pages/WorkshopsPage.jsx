import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const WorkshopsPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Mastering Handloom Weaving',
      level: 'Beginner',
      duration: '4 Weeks',
      price: '₹2,499',
      description: 'Learn the basics of setting up a loom and creating your first fabric.',
      image: 'https://images.unsplash.com/photo-1506629905607-3b1b0b0b0b0b?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      id: 2,
      title: 'Natural Dyeing Techniques',
      level: 'Intermediate',
      duration: '2 Weeks',
      price: '₹1,999',
      description: 'Extract vibrant colors from nature using sustainable methods.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      id: 3,
      title: 'Embroidery Essentials',
      level: 'All Levels',
      duration: '1 Week',
      price: '₹999',
      description: 'Stitch intricate patterns with traditional needlework skills.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      id: 4,
      title: 'Advanced Textile Design',
      level: 'Advanced',
      duration: '6 Weeks',
      price: '₹3,999',
      description: 'Master complex patterns and create your own textile designs.',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=600&fit=crop&auto=format&q=80',
    },
  ]

  const handleEnroll = (courseTitle) => {
    alert('Redirecting to payment gateway...')
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-teal text-center mb-4">
            Workshops
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Discover the art of traditional textiles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 bg-mustard/20 text-gray-900 rounded-full text-sm font-medium">
                      {course.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleEnroll(course.title)}
                    className="w-full bg-mustard text-gray-900 py-3 rounded-lg font-semibold hover:bg-mustard/90 transition-colors duration-200"
                  >
                    Enroll Now
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

export default WorkshopsPage

