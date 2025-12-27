import { AboutSection } from '@/components/portfolio/AboutSection'
import Achievements from '@/components/portfolio/Achievements'
import { ContactSection } from '@/components/portfolio/ContactSection'
import { Footer } from '@/components/portfolio/Footer'
import HeroSection from '@/components/portfolio/HeroSection'
import Navbar from '@/components/portfolio/Navbar'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'

const CommonLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
       <AboutSection />
       <Achievements />
      <ProjectsSection />
      {/*<SkillsSection />
      <TestimonialsSection />*/}
      <ContactSection /> 
      <Footer />
    </div>
  )
}

export default CommonLayout