export default function Portfolio() {
  const projects = [
    { id: 1, title: 'E-commerce Platform', category: 'Web Design', image: '🛍️' },
    { id: 2, title: 'Mobile Banking App', category: 'UI/UX Design', image: '💳' },
    { id: 3, title: 'Dashboard Analytics', category: 'Web App', image: '📊' },
    { id: 4, title: 'Social Media App', category: 'Mobile Design', image: '📱' },
    { id: 5, title: 'Portfolio Website', category: 'Web Design', image: '💼' },
    { id: 6, title: 'Fitness Tracker', category: 'Mobile App', image: '⌚' }
  ]

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-primary">PORTFOLIO</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          A showcase of my recent work and creative projects
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 h-80 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.category}</p>
                  <button className="mt-4 text-sm bg-white text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project →
                  </button>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-center text-7xl">
                {project.image}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
