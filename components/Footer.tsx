export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Bento</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating beautiful digital experiences that make a difference. 
              Let's work together to bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span>in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span>𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span>🎨</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#services" className="hover:text-primary transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>hello@bento.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Isabelle Ryal. All rights reserved. Designed with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
