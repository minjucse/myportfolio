export default function Achievements() {
  const achievements = [
    { 
      title: 'Outstanding', 
      subtitle: 'Recognized for exceptional design work and creativity in multiple projects',
      icon: '🏆'
    },
    { 
      title: 'Dedication', 
      subtitle: 'Committed to delivering high-quality results and exceeding client expectations',
      icon: '⭐'
    },
    { 
      title: 'Best Designer Award 2023', 
      subtitle: 'Awarded for innovative design solutions and outstanding portfolio work',
      icon: '🎨'
    },
    { 
      title: 'Client Satisfaction', 
      subtitle: 'Consistently rated 5 stars by clients for professionalism and quality',
      icon: '💼'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-primary">ACHIEVEMENTS</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Celebrating milestones and recognitions throughout my design journey
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
