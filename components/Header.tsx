'use client'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 tracking-tight">Bento</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
          <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
          <li><a href="#news" className="hover:text-primary transition-colors">News</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
        
        <button className="hidden md:block bg-primary text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Contact Me
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium">
            <li><a href="#home" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#portfolio" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#news" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>News</a></li>
            <li><a href="#contact" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li>
              <button className="w-full bg-primary text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
