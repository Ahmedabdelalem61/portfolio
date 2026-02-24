import { useState, useEffect } from 'react'
import { Menu, X, Mail, Linkedin, Github, ArrowUp, Heart, Send } from 'lucide-react'
import HeroSection from './components/HeroSection'
import OdooSkillsSection from './components/OdooSkillsSection'
import GeneralSkillsSection from './components/GeneralSkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'odoo-skills', label: 'Odoo Skills' },
  { id: 'general-skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">A</span>
              <span className="text-white">.Abdelaleem</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-800/50 mt-2 pt-4">
              <div className="space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="odoo-skills" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="relative">
            <OdooSkillsSection />
          </div>
        </section>

        <section id="general-skills" className="py-24 relative">
          <GeneralSkillsSection />
        </section>

        <section id="projects" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="relative">
            <ProjectsSection />
          </div>
        </section>

        <section id="experience" className="py-24 relative">
          <ExperienceSection />
        </section>

        <section id="education" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="relative">
            <EducationSection />
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* CTA Section */}
            <div className="text-center mb-16">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Let's Build Something
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Great Together
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                Looking for a skilled Odoo developer or software engineer to bring your enterprise vision to life? I'd love to hear about your project.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
              <a
                href="mailto:ahmed.abdelalem61@gmail.com"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <Mail size={22} className="text-cyan-400" />
                </div>
                <span className="text-sm font-semibold text-white">Email Me</span>
                <span className="text-xs text-slate-500">ahmed.abdelalem61</span>
              </a>
              <a
                href="https://linkedin.com/in/numerician/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-colors">
                  <Linkedin size={22} className="text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-white">LinkedIn</span>
                <span className="text-xs text-slate-500">numerician</span>
              </a>
              <a
                href="https://github.com/ahmedabdelalem61"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-500/30 hover:bg-slate-800/50 transition-all duration-300 hover-lift"
              >
                <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  <Github size={22} className="text-slate-300" />
                </div>
                <span className="text-sm font-semibold text-white">GitHub</span>
                <span className="text-xs text-slate-500">ahmedabdelalem61</span>
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex justify-center gap-8 sm:gap-16 mb-16">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Delivered' },
                { value: '95%', label: 'On-time Delivery' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800/50 gap-4">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Ahmed Abdelaleem. All rights reserved.
              </p>
              <p className="text-slate-600 text-xs flex items-center gap-1">
                Crafted with <Heart size={12} className="text-red-500" /> and lots of code
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 z-40 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  )
}

export default App
