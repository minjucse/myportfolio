export default function Services() {
  const services = [
    {
      icon: '📊',
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love. Focus on user experience and modern design principles.'
    },
    {
      icon: '👥',
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications using modern technologies and best practices.'
    },
    {
      icon: '🎯',
      title: 'Brand Identity',
      description: 'Developing unique brand identities that stand out and resonate with your target audience.'
    }
  ]

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Hi Evaluators And My <span className="text-primary">Offering</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Specialized services tailored to bring your vision to life
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
