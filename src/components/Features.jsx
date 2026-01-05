import { BookOpen, ShoppingBag, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learning Hub',
      description: 'Access live and recorded textile workshops.',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Purchase exclusive handmade creations.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with artisans and storytellers.',
    },
  ]

  return (
    <section id="community" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal text-center mb-12">
          The Ecosystem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-cream p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-teal mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

