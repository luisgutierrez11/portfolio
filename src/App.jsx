import Navbar from "./components/Navbar"
import AboutSection from "./sections/AboutSection"
import ContactSection from "./sections/ContactSection"
import HeroSection from "./sections/HeroSection"
import ProjectsSection from "./sections/ProjectsSection"
import TechBentoGrid from "./components/TechBentoGrid"
import photo from './assets/perfil-luis1x1.jpg'

const App = () => {

  return (
    <>
      <div className="
        min-w-[400px] w-full overflow-x-hidden min-h-screen bg-neutral-950 
        text-neutral-100 font-sans
      ">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection fotoPerfil={photo} />
        
        {/* Tech Stack Section */}
        <TechBentoGrid />

        {/* Projects Section */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection fotoPerfil={photo} />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="
          border-t border-neutral-800 py-6 text-center text-neutral-600 text-sm
        ">
          © {new Date().getFullYear()} Luis Gutiérrez — Todos los derechos reservados.
        </footer>

      </div>
    </>
  )
}

export default App
