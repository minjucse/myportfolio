'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Portfolio from '@/components/Portfolio'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Achievements />
      <Portfolio />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
