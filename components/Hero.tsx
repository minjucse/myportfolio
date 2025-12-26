export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-pink-200 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-purple-200 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-orange-300 rounded-full opacity-60"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-gray-500 mb-3 text-sm tracking-wide">HELLO, I'M</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Isabelle Ryal
          </h1>
          <p className="text-xl text-gray-600 mb-6 font-light">UI/UX Designer</p>
          <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
            Creating beautiful and functional digital experiences that make a difference. 
            Passionate about user-centered design and innovative solutions.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Hire Me
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-96 h-96">
            {/* Background decorative shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-full opacity-40 blur-3xl"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full flex items-end justify-center">
              <div className="w-80 h-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-full flex items-end justify-center overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="text-9xl mb-0">👩‍💼</div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-8 h-8 bg-orange-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-5 w-6 h-6 bg-pink-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
