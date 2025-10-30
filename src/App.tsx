import React, { useState } from 'react'
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react'
import HeroSection from './components/HeroSection'
import OdooSkillsSection from './components/OdooSkillsSection'
import GeneralSkillsSection from './components/GeneralSkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ahmed Abdelaleem</div>
            <div className="hidden md:flex space-x-8">
              {['home','odoo-skills','general-skills','projects','experience','education','contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-slate-300 hover:text-cyan-400 text-sm font-medium">{item.replace('-', ' ')}</button>
              ))}
            </div>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home','odoo-skills','general-skills','projects','experience','education','contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left capitalize text-slate-300 hover:text-cyan-400 py-2 px-4">{item.replace('-', ' ')}</button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        <section id="home"><HeroSection /></section>
        <section id="odoo-skills" className="py-20 bg-slate-800/50"><OdooSkillsSection /></section>
        <section id="general-skills" className="py-20"><GeneralSkillsSection /></section>
        <section id="projects" className="py-20 bg-slate-800/50"><ProjectsSection /></section>
        <section id="experience" className="py-20"><ExperienceSection /></section>
        <section id="education" className="py-20 bg-slate-800/50"><EducationSection /></section>
        <footer id="contact" className="py-20 bg-slate-900 border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Looking for a skilled Odoo developer or software engineer? Let's create something amazing together.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 mb-12">
              <a href="mailto:ahmed.abdelalem61@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-lg font-semibold">
                <Mail size={18}/> Email Me
              </a>
              <a href="https://linkedin.com/in/numerician/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold">
                <Linkedin size={18}/> LinkedIn
              </a>
              <a href="https://github.com/ahmedabdelalem61" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-500 text-slate-300 px-8 py-3 rounded-lg font-semibold">
                <Github size={18}/> GitHub
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center mb-8">
              <div><div className="text-3xl font-bold text-cyan-400">2</div><div className="text-slate-400">Years Experience</div></div>
              <div><div className="text-3xl font-bold text-cyan-400">10+</div><div className="text-slate-400">Projects</div></div>
              <div><div className="text-3xl font-bold text-cyan-400">95%</div><div className="text-slate-400">On-time Delivery</div></div>
            </div>

            <div className="text-center text-slate-500 border-t border-slate-700 pt-8">
              <p>© 2025 Ahmed Abdelaleem. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
