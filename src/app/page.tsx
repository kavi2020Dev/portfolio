import HeroSection from './(pages)/home/page'
import About from './(pages)/about/page'
import Experience from './(pages)/experience/page'
import Projects from './(pages)/projects/page'
import Skills from './(pages)/skills/page'
import Service from './(pages)/service/page'
import Contact from './(pages)/contact/page'

export default function Home() {
  return (
    <main>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div id="experience" className="scroll-mt-20">
        <Experience />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="skills" className="scroll-mt-20">
        <Skills />
      </div>
      <div id="services" className="scroll-mt-20">
        <Service />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
    </main>
  )
}
