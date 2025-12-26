export default function News() {
  const articles = [
    { 
      title: 'Design Trends 2025: What\'s Next', 
      date: 'Dec 20, 2024',
      excerpt: 'Exploring the upcoming design trends that will shape the digital landscape in 2025.',
      image: '🎨',
      category: 'Design'
    },
    { 
      title: 'The Power of Minimalist Design', 
      date: 'Dec 15, 2024',
      excerpt: 'How minimalism continues to influence modern web and app design.',
      image: '✨',
      category: 'UI/UX'
    },
    { 
      title: 'Building Better User Experiences', 
      date: 'Dec 10, 2024',
      excerpt: 'Key principles for creating intuitive and engaging user experiences.',
      image: '💡',
      category: 'UX Research'
    }
  ]

  return (
    <section id="news" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Latest <span className="text-primary">NEWS</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Insights, articles, and updates from the world of design
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-56 flex items-center justify-center text-7xl">
                {article.image}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-purple-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <a href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                  Read More 
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
