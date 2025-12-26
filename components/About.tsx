export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 max-w-6xl">
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl h-[500px] flex items-center justify-center overflow-hidden">
              <img 
                src="/api/placeholder/400/500" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Creativity Meets From the pen of <span className="text-primary">Precision</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With years of experience in UI/UX design, I bring creativity and precision to every project. 
            My goal is to create designs that not only look beautiful but also provide exceptional user experiences.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every project is an opportunity to push boundaries and create something truly remarkable. 
            I believe in the power of design to transform businesses and delight users.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h4 className="font-bold text-4xl text-primary mb-2">5+</h4>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h4 className="font-bold text-4xl text-primary mb-2">100+</h4>
              <p className="text-gray-700 font-medium">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
